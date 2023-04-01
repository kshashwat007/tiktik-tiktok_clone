// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { postDetailQuery,searchPostsQuery } from '../../../utils/queries'
import { client } from '../../../utils/client';
import { uuid } from 'uuidv4'
import { singleUserQuery,userCreatedPostsQuery,userLikedPostsQuery } from '../../../utils/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
  if (req.method === 'GET') {
    const { searchTerm } = req.query
    const videosQuery = searchPostsQuery(searchTerm)
    const videos = await client.fetch(videosQuery)
    res.status(200).json(videos)
  }
}
