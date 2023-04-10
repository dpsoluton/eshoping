import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./index";
import logo from './download.png'
import { useContext, useState } from "react";
import { product } from "./dataContext/Context";


export function Navigation() {
  const {data}= useContext(product)
  const [search,setsearch] = useState()
    
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} sticky = "top" bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar><Link to = "/">
              <h2 className="headings"><img className="logo" src={logo} alt="logo" /></h2>
              </Link>
            </Navbar>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 <h2>Welcome</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link >
                    <Link className="link" to = "/"><h3>Home</h3></Link>
                    
                  </Nav.Link>
                  <NavDropdown
                    title="shop"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item >
                    <Link className="link"  to = "/men"><h5>men</h5></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <Link className="link" to ="/women"><h5>women</h5></Link>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item >
                    <Link className="link" to = "/kids"><h5>kids</h5></Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link >
                  <Link className="link"  to = "/about"><h3>Aboutus</h3></Link>
                  </Nav.Link>
                  <Nav.Link>
                  <Link className="link"  to = "/support"><h3>Support</h3></Link>
                  </Nav.Link>
              
                <Nav.Link>
                  <Link  className="link" to = "/cart"><h3 className="nav-head">cart</h3></Link>
                  </Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value = {search}
                    onChange={(e)=>setsearch(e.target.value)}
                   
                  />
                
                  {/* <Button variant="outline-success">Search</Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
