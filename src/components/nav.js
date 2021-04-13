import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </li>
        <li>
          <Link href="/graphiql">
            <a>graphiql</a>
          </Link>
        </li>
        <li>
          <Link href="/relay-test">
            <a>relay test</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}