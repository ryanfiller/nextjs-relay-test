import { useState } from 'react'
import { graphql } from 'react-relay'
import { useQuery } from 'relay-hooks'

import TestFragment from './_test-fragment'

const query = graphql`
  query TestQuery($ownerName: String!) {
    allPalette(where: {owner: {name: {eq: $ownerName }}}) {
      title
      ...TestFragment_colors
    }
  }
`

const Test = (componentProps) => {

  const [ current, setCurrent ] = useState(null)

  const { props: relayProps, error } = useQuery(query, { ownerName: componentProps.owner } )
  if (error) return <div>{error.message}</div>
  if (!relayProps) return <div>Loading...</div>

  return (
    <>
      <h2>this is a dynamic query using <code>useQuery</code> from <code>'relay-hooks'</code></h2>
      {/* <pre>{JSON.stringify(relayProps, null, 2)}</pre> */}

      <ul>
        {relayProps.allPalette.map((item, index) => (
          <li key={index}>
            <button onClick={_event => setCurrent(item)}>
              {item.title}
            </button>
          </li>     
        ))}
      </ul>

      {current && <TestFragment palette={current} />}
      
    </>
  )
}

export default Test
