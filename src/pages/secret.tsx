import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { Heading } from '@chakra-ui/react'

const Secret = () => {
  const [session, loading] = useSession()
  const [content, setContent] = useState<string>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/secret')
      const { message, error } = await response.json()
      if (message) {
        setContent(message)
      } else {
        setContent(error)
      }
    }

    fetchData()
  }, [session])

  if (typeof window !== 'undefined' && loading) return null
  return (
        <>
            <Heading>
                {content}
            </Heading>
        </>
  )
}

export default Secret
