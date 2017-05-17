import Link from 'next/link'
import Head from 'next/head'
import { Navbar, Container, NavbarBrand, Nav, NavItem, Button } from 'reactstrap'
import LoginButton from './LoginButton'

const Header = () => (
  <div>
    <Head>
      <title>PairHub</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Find remote pair programming buddies" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      <script src="https://use.fontawesome.com/49ef5fd256.js"></script>
      <style>{`
        .btn-secondary {
          color: #0000ff;
          border-color: #0000ff;
          cursor: pointer;
        }
        .btn-secondary:hover {
          color: white;
          border-color: #0000ff;
          background-color: #0000ff;
        }
        .container {
          max-width: 960px;
        }
        a {
          color: #0000ff;
        }
        a:hover {
          color: #0000ff;
        }
      `}</style>
    </Head>

    <Navbar color="faded" light toggleable style={{padding: '0px', marginBottom: '35px'}}>
      <Container>
        <div style={{marginRight:'15px'}}>
          <NavbarBrand tag={Link} href="/">
            <a><img src="/static/pairhub-logo.png" width="50" height="50" /></a>
          </NavbarBrand>
        </div>

        <Nav navbar>
          <NavItem>
            <Link href="/about"><a className="nav-link">About</a></Link>
          </NavItem>
          <NavItem>
            <Link href="/guide"><a className="nav-link">Guide</a></Link>
          </NavItem>
          <NavItem>
            <a href="https://gitter.im/pairhub/Lobby" target="_blank" className="nav-link">Chat</a>
          </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
          <LoginButton />
        </Nav>
      </Container>
    </Navbar>
  </div>
)

export default Header
