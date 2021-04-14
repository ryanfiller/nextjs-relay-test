import { useRouter } from 'next/router'
import { graphql, fetchQuery } from 'react-relay'
import { initEnvironment } from '../../lib/createEnvironment'

import Test from './_test'

const query = graphql`
  query IdQuery($ownerId: ID!) {
    Owner(id: $ownerId) {
      name
    }
  }
`

const Page = (props) => {
  
  const router = useRouter()
  const { id } = router.query
  const relay = props.relayData.data

  return (
    <>
      <h1>data for user {id}</h1>

      <h2>this is a pre-rendered query using <code>getServerSideProps</code></h2>
      <pre>{JSON.stringify(relay, null, 2)}</pre>

      <Test owner={relay.Owner.name}/>
    </>
  )
}

export default Page

export async function getServerSideProps(context) {
  const { params } = context

  const { environment, relaySSR } = initEnvironment()

  await fetchQuery(environment, query, { ownerId: params.id })

  const relayData = (await relaySSR.getCache())?.[0]

  return {
    props: {
      // relayData: !relayData ? null : [[relayData[0], relayData[1].json]],
      relayData: !relayData ? null : relayData[1].json,
    },
  }
}
