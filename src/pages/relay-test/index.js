import { graphql } from 'react-relay'
import Link from 'next/link'

const query = graphql`
  query relayTest_indexQuery {
    allOwner {
      name
      slug
      _id
    }
  }
`

const RelayTest = (staticProps) => {
  const { allOwner } = staticProps.data

  return (
    <>
      <h1>these pages are fetched from graphql data using getStaticProps()</h1>
      <ul>
        {allOwner.map((item, index) => (
          <li key={index}>
            <Link href={`/relay-test/${item._id}`}>
              <a>{item.name}</a>
            </Link>
          </li>     
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  // bootleg way to run a graphql query as static props, this could be abstracted, could probably use fetchQuery
  const queryData = await fetch(`${process.env.DEMO_ENDPOINT}?query=${query.params.text}`)
    .then(response => response.json())

  return {
    props: { ...queryData }
  }
}

export default RelayTest
