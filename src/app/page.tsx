import { css } from '@styled-system/css'
import Link from 'next/link'

const Home = () => (
  <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
    Hello 🐼!
    <h1>Pideswap Dapp! WalletPass Demo</h1>
    <ul>
      <li>
        <Link href="/landing">Register</Link>
      </li>
      <li>
        <Link href="/landing">Login</Link>
      </li>
    </ul>
  </div>
)

export default Home
