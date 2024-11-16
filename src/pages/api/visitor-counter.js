import dbConnect from '../../lib/dbConnect';
import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
    },
});

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);

export default async function handler(req, res) {
    try {
        await dbConnect();
        if (req.method === 'GET') {
            let visitorData = await Visitor.findOne();

            if (!visitorData) {
                visitorData = new Visitor({ count: 1 });
            } else {
                visitorData.count += 1;
            }

            await visitorData.save();
            res.status(200).json({ count: visitorData.count });
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

// let count = 0; // In-memory counter (temporary storage)

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//         // Increase count when the endpoint is hit
//         count++;
//         res.status(200).json({ count });
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }