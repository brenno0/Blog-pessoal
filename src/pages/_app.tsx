import { Provider as NextAuthProvider } from 'next-auth/client'


import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <NextAuthProvider session={pageProps.session}>
   <Component { ...pageProps} />
  </NextAuthProvider>
  )
}

export default MyApp
