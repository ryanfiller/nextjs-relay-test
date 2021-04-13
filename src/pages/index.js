import { graphql, fetchQuery } from 'react-relay'
import { useQuery } from 'relay-hooks'

import { initEnvironment } from '../lib/createEnvironment'
import BlogPosts from '../components/BlogPosts'

// const query = graphql`
//   query pages_indexQuery {
//     viewer {
//       ...BlogPosts_viewer
//     }
//   }
// `

const Index = ({ environment, data }) => {
  // const { error, props } = useQuery(query)

  // if (error) return <div>{error.message}</div>

  // if (!props) return <div>Loading...</div>

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <a href={`https://www.lensrentals.com${item.path}`}>
            {item.name}
            <img src={`https://www.lensrentals.com${item.baseball_card_image_url}`} alt={item.name}/>
          </a>
        </li>     
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://www.lensrentals.com/')
    .then(response => response.text())
    .then(data => {
      return JSON.parse(data
        .match(/window\._products = (.*)<\/script>/gs)[0]
        .replace('window._products = ', '')
        .replace('</script>', ''))
    })

  return {
    props: {
      data: data
    }
  }
}

export default Index
