import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { addItem } from './store.js'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function Detail(props){

  let {id} = useParams();
  let find = props.cloth.find((x)=> x.id == id);
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();

  return (
        <div className="detail" style={{textAlign:'left'}}>
          <div className="row">
            <div className="col-md-6">
              <img src={require('./sub' + (find.id+1) + '.png')} width="100%" alt="#" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{find.title}</h4>
              <p>{find.content}</p>
              <p>{find.price}원</p>
              <Link to="/cart"><Button onClick={()=>{
                dispatch(addItem({id : find.id, name : find.title, count : 1}))
              }} variant="outline-secondary">장바구니</Button> </Link>
              
          </div>
        </div>

        <div className='tab'>
          <Nav variant="tabs" defaultActiveKey="link0">
              <Nav.Item>
                <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">상품명</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">상품설명</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">품번</Nav.Link>
              </Nav.Item>
          </Nav> 
          <TabContent cloth={props.cloth} tab={tab} />
        </div>
      </div> 
    )
  }
  
  function TabContent({tab, cloth}){

    return (<div style={{margin:'10px'}}>
      {[ <div style={{height:'100px'}}>{cloth[0].title}</div>, 
      <div style={{height:'100px'}}>{cloth[0].content}</div>, 
      <div style={{height:'100px'}}>COBQX-F26588</div>][tab]}
      </div>)
  }
  
  export default Detail;