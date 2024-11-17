import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: false, // Optional
    },
}, { timestamps: true });

const FormSubmission = mongoose.models.FormSubmission || mongoose.model('FormSubmission', formSchema);

export default FormSubmission;