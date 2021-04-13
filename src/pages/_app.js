import { RelayEnvironmentProvider } from 'relay-hooks'
import { createEnvironment } from '../lib/createEnvironment'

import '../styles/index.scss'
import Nav from '../components/nav'

export default function App({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider
      environment={createEnvironment(pageProps.relayData)}
    >
      <>
        <Nav />
        <Component {...pageProps} />
      </>
    </RelayEnvironmentProvider>
  )
}
