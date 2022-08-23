import Link from 'next/link'
import styles from '../styles/layout.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.globalNav}>
      <Navbar bg="dark" expand="lg" variant="dark" className={styles.mainNav}>
      <Container>
        <Navbar.Brand href="/">Grayson Bertaina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/academics">Academics</Nav.Link>
            <Nav.Link href="/aviation">Aviation</Nav.Link>
            <Nav.Link href="/entrepeneurship">Entrepeneurship</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
            
        
      </nav>
      <main className={styles.main}>{children}</main>


      <footer className={styles.footer}>
          <p>Grayson Bertaina, All Rights Reserved ©2022 </p>
          <div className={styles.links}>
            <div>
                <a className={styles.button, styles.linkone} href="tel:8578297049">Call Me</a>
            </div>
            <div>
                <a className={styles.button, styles.linkone} href="mailto:graysonb@mit.edu">Email: graysonb@mit.edu</a>
            </div>

          </div>
          
      </footer>
    </>
  )
}

