import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const session = await getSession({ req: request })

  if (session) {
    response.send({ message: 'Here is my secret data' })
  } else {
    response.send({ error: 'You need to sign in' })
  }
}
