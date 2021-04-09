import { graphql, fetchQuery } from 'react-relay'
import { useQuery } from 'relay-hooks'

import { initEnvironment } from '../lib/createEnvironment'
import BlogPosts from '../components/BlogPosts'

const query = graphql`
  query pages_indexQuery {
    viewer {
      ...BlogPosts_viewer
    }
  }
`

const Index = ({ environment, data }) => {
  // const { error, props } = useQuery(query)
  console.log('data', data)

  // if (error) return <div>{error.message}</div>

  // if (!props) return <div>Loading</div>

  // return <BlogPosts viewer={props.viewer} />

  return (
    <div>hello from index</div>
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
    },
  }
}

export default Index
