import React from 'react'
import { graphql } from 'react-relay'
import { useFragment } from 'relay-hooks'

import styles from '../../styles/_color-blocks.module.scss'

const TestFragment = props => {
  const fragmentData = useFragment(
    graphql`
      fragment TestFragment_colors on Palette {
        colors {
          name
          value
        }
      }
    `,
    props.palette
  )

  console.log('props', props)

  const { colors } = fragmentData

  return (
    <>
      <h2>this is a query fragment using <code>useFragment</code> from <code>'relay-hooks'</code></h2>

      <div className={styles['color-blocks']}>
        {colors.map((color, index) => (<span key={index} style={{background: color.value}} />))}
      </div>

      <pre>{JSON.stringify(colors, null, 2)}</pre>
    </>
  )
}

export default TestFragment
