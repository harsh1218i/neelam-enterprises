let count = 0; // In-memory counter (temporary storage)

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Increase count when the endpoint is hit
    count++;
    res.status(200).json({ count });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
