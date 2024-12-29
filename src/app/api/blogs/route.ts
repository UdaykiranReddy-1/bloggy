import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongo';
import Blog from '../../../lib/blog-model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const blogs = await Blog.find({});
      res.status(200).json({ success: true, data: blogs });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch blogs' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
