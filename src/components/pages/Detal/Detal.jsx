import React from 'react';
import { useParams } from 'react-router-dom';
import { useMainContext } from '../../../context/Maincontext';
import './Detal.css'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Detal = ({el}) => { 
    const {basket ,setBasket} = useMainContext();

    const {proId} = useParams()
    const{book ,  } = useMainContext() 
    let findDetal = book.find((el) => el.id === proId)
    return (
   <div className='container'>
<div className='book'>

<div className='book-img'>
    <img src={findDetal.book} alt="" width={300} />
   <div className='book-text'>
   <h1> {findDetal.name}</h1>
   <h3 className='text-3'>{findDetal.description}</h3>
   <span>{findDetal.price}</span>

<div className='count-btn'>
    <button  className='countBtn-1'><FaMinus /></button>
    <h5>1</h5>
    <button   className='countBtn-2'><FaPlus /></button>

</div>
</div>
</div>
   </div>
</div>
    );
};

export default Detal;