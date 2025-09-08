import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { Sidebar } from './Sidebar';

const UserLayout = () => {
  return (
    <div>
        <Header />
        <Container fluid>
          <Row className="vh-100">
            <Col md={3} xl={2} className="bg-dark text-white">
              <div className='p-3'>
                <div>Welcome Back,</div>
                <h4>Pradhumna!</h4>
              </div>
              <hr />
              <Sidebar />
            </Col>
            <Col>    
              <main className="main">
                  <Outlet/>
              </main>
            </Col>
          </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default UserLayout