import Link from 'next/link'
import { css } from '@styled-system/css'
import { Box, Flex } from '../components/primitives'
import Navbar from '../components/navbar'

const Home = () => (
  <Box
    css={{
      background: 'neutralBg',
      height: '100%',
      width: '100%',
      minHeight: '100vh',
      md: { pt: '5' },
    }}
  >
    <Flex
      direction="column"
      css={{
        width: '100%',
        sm: { maxWidth: 1920 },
        mx: 'auto',
      }}
    >
      <Navbar />
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
  </Flex>
  </Box>

)

export default Home
