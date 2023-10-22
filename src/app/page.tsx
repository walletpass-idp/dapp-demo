import Link from 'next/link'
import { css } from '@styled-system/css'
import { Box, Flex } from '../components/primitives'
import Navbar from '../components/navbar'
import LandingPage from '../components/LandingPage'

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
        <LandingPage />
      </div>
    </Flex>
  </Box>

)

export default Home
