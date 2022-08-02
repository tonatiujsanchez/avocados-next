import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../database/db'


type Data = {
    entries: TProduct[]
    length: number
}

export default async function allAvos(req: NextApiRequest, res: NextApiResponse<Data>) {

    const db = new Database()

    const entries:TProduct[] = await db.getAll()
    const length = entries.length

    res.status(200).json({ length, entries })
}