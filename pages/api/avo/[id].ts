import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../database/db'

type Data = {
    entry: TProduct | null
}

export default async function getAvo(req: NextApiRequest, res: NextApiResponse<Data>) {
    const db = new Database()
    
    const { id } = req.query 
    
    const entry:TProduct = await db.getById( id as string )

    res.status(200).json({ entry })
}