import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { lazy, Suspense, createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Link} from 'react-router-dom';

const Detail = lazy(() => import('./detail'));
const Cart = lazy(()=> import('./Cart.js'));
const Order = lazy(()=> import('./Order.js'));
const Location = lazy(()=> import('./Location.js'));
const Privacy = lazy(()=> import('./Privacy.js'));
const Customer = lazy(()=> import('./Customer.js'));
const Ourstory = lazy(()=> import('./Ourstory.js'));

export let Context1 = createContext();

function App() {

  let obj = {name: 'kim'};
  localStorage.setItem('data', JSON.stringify(obj));

  let [cloth, setcloth] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/lesbasic">Les Basic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/lesbasic')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{navigate('/location')}}>매장찾기</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/customer')}}>고객센터</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/privacy')}}>이용약관</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{navigate('/ourstory')}}>Our Story</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Suspense fallback={<div style={{marginTop:'50px'}}>로딩중</div>}>
    <Routes>
        <Route path="/lesbasic" element={
          <>
            <div className="main-bg"></div>
   
            <div className="product">
              <div className="row">
                {
                  cloth.map((a,i)=>{
                    return(
                      <List  key={i} cloth={cloth[i]} i={i+1}></List>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />


        <Route path="/detail/:id" element={<Detail cloth={cloth}/>} />
        <Route path="/cart" element={<Cart/>} />  
        <Route path="/order" element={<Order/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/ourstory" element={<Ourstory/>} />
      </Routes>
  </Suspense>
    </div>
  );
}


function List(props){
  return (
    <div className="col-md-4">
      <Link to={"/detail/"+(props.i-1)}>
        <img src={require('./sub' + props.i + '.png')} alt="#"/>
        <h4>{ props.cloth.title }</h4>
        <p>{ props.cloth.content}</p>
        <p>{ props.cloth.price }</p>
      </Link>
      
    </div>
    
  )
}

export default App;
