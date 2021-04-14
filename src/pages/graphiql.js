import Head from 'next/head'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'

function graphQLFetcher(params) {
  const url = process.env.DEMO_ENDPOINT
  const query = encodeURIComponent(params.query)
  const variables = JSON.stringify(params.variables || {})
  const operationName = params.operationName || ''

  return fetch(`${url}?query=${query}&variables=${variables}&operationName=${operationName}`)
    .then(response => response.json())
}

function GraphiQLPage() {
  return (
    <div id='graphiql' style={{ height: '100vh' }}>
      <Head>
        <link
          key='graphiql-css'
          href='https://unpkg.com/graphiql/graphiql.min.css'
          rel='stylesheet'
        />
      </Head>
      <GraphiQL fetcher={graphQLFetcher} />
    </div>
  )
}

export default GraphiQLPage
