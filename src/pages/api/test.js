import { graphql, fetchQuery } from 'react-relay'
import { initEnvironment } from '../../lib/createEnvironment'

const query = graphql`
  query relayTest_indexQuery {
    allOwner {
      name
      slug
      _id
    }
  }
`

export default async function handler(req, res) {
  
  const { environment, relaySSR } = initEnvironment()

  await fetchQuery(environment, query)

  const relayData = (await relaySSR.getCache())?.[0]

  res.status(200).json({ relayData: !relayData ? null : relayData[1].json })
}
