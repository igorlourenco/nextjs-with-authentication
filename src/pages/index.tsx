import React from 'react'
import { Button, Heading } from '@chakra-ui/react'
import { signIn, signOut, providers, useSession } from 'next-auth/client'

interface AuthProvider {
  callbackUrl?: string
  id?: string
  name?: string
  type?: string
}

const App = ({ authProviders }: any) => {
  const [session, loading] = useSession()
  const googleProvider: AuthProvider = Object.values(authProviders).find((provider: AuthProvider) => provider.id === 'google')

  if (typeof window !== 'undefined' && loading) return null
  return <>
    {!session && googleProvider && <>
      <Heading>Not signed in</Heading>
      <Button onClick={() => signIn(googleProvider.id)}>Sign in</Button>
    </>}
    {session && <>
      <Heading>Signed in as {session.user.email}</Heading>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>}
  </>
}

App.getInitialProps = async () => {
  return {
    authProviders: await providers()
  }
}

export default App
