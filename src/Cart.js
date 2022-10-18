import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, deleteCount } from './store';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Cart(){

    let cart = useSelector((state) => state);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    return(
        <div className='cart'>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                {cart.clothes.map((a, i) => (
                    <tr key={i}>
                    <td>{cart.clothes[i].id}</td>
                    <td>{cart.clothes[i].name}</td>
                    <td>{cart.clothes[i].count}</td>
                    <td><button
                    onClick={() => {
                    dispatch(addCount(cart.clothes[i].id));
                    }}> + </button>
                    <button
                        onClick={() => {
                        dispatch(minusCount(cart.clothes[i].id));
                        }}> - </button>
                    <button
                        onClick={(e) => {
                        dispatch(deleteCount(e.target.parentElement));
                        }}> 삭제 </button></td>
                    
                    
                    </tr>
                ))}
                </tbody>
            </Table>
            
            <Button onClick={()=>{navigate('/Order')}} style={{marginTop:'30px'}} variant="outline-secondary">주문하기</Button>
        </div>
    )
}

export default Cart;