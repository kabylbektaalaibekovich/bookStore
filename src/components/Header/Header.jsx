import React, { useState } from 'react';
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { GrSearch } from "react-icons/gr";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineClose } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

import { useMainContext } from '../../context/Maincontext';

const Header = ({ setValue  }) => {
    const{basket ,book} = useMainContext()
const[text , setText] = useState('')
const [empty , setEmpty] = useState('')
const nav = useNavigate()
const[modal , setModal] = useState(false)
const [pasword , setPasword] = useState('')
const[chek , setChek] = useState(false)
function paswordData(){
if(pasword === '1234'){
nav('/admin')
setModal(!modal)
}else if (pasword == empty){
 alert('write your password')
}else if(pasword != 'admin'){
 setText('wrong password')
}}


    return (
<header>
<div className="container">
<div className="header">
<div className="img-text">
<Link to='/'><img src='https://cdn-icons-png.flaticon.com/512/864/864685.png'></img></Link>
<h1><NavLink to='/'>Магазин книг</NavLink></h1>
</div>
<nav>
<div className="input-search">
<input onChange={(e) => { setValue(e.target.value)} } type='text' placeholder='Поиск книгу'/>
<button onClick={() => {
    nav("/Search")
}}><GrSearch /></button>
</div>

<a  className='relative'><Link to='/basket'><BsCart3 /></Link></a> 

{
                          basket.length ? 
                    <p className='absolute'>{basket.length}</p>
                  : null
                    }
<p className='basabsolute'></p>
 <Link onClick={() => setModal(!modal)} ><h6><FaUserLarge /></h6></Link>
</nav>
 </div>
<div style={{
                position:'fixed',
                top:'0',
                right:'0',
                display:  modal ? 'flex' : 'none',
                justifyContent:'center',
                alignItems:'center',
                zIndex:'99'
            }} className="pasword">
                <div className="input-pas">
       <TextField onChange={(e) => setPasword(e.target.value) }
          id="outlined-password-input"
          label="Пароль"
          type={chek ? 'text' : 'password'}
          autoComplete="current-password"
        
        />
                 <div className="div">
        <input onClick={() => setChek(!chek)} className='chekbox' type='checkbox' />

                 <Button className='btn-4'  onClick={() => {
                        paswordData()
                   
                        }} variant="outlined">Войти</Button>
<AiOutlineClose className='btn-5'  onClick={() => setModal(!modal)}/>
<h4>{text}</h4>


                 </div>


                </div>
            </div>
        </div>
       </header>
    );
};

export default Header;