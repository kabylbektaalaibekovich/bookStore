import React from 'react';
import { useMainContext } from '../../context/Maincontext';
import Hero from './Hero';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import axios from 'axios';
const HeroCart = ({el}) => {
const navi = useNavigate()

const {book , basket , setBasket} = useMainContext()
const{removeData} = useMainContext()

// const addBasket = async (obj) => {
//     await axios.post('http://localhost:3000/basket', obj)
   
//    }
function addBasket(data){
  let findProd = basket.find((el =>  el.id === data.id));
  if(findProd){
    let filtProd = basket.filter((el) => !el.id === data.id);
  localStorage.setItem('basket' , JSON.stringify(filtProd))

}else{
  let res = [...basket , data]
  setBasket(res)
  localStorage.setItem('basket' , JSON.stringify(res))
}
}
    return (
        <div>
     <div className='box'>
     <Link to={`/detal/${el.id}`}>  <img src={el.book} alt="" /></Link> 
<h3 >{el.name}</h3>
     <div className="price">
     <span>{el.price}</span>
       <div className="delete">
       <button  className='favorite'onClick={()=>addBasket(el)}><BsCart3 /></button>
       <button  className='editBtn'  onClick={() =>  navi(`/edit/${el.id}`)}><FaPencil /></button>
        <button className='delBtn'onClick={() => removeData(el.id)}> <MdDeleteOutline/></button>
       </div>
     </div>
      </div>
        </div>
    );
};

export default HeroCart;