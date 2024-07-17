import React, { useEffect } from 'react';
import { useMainContext } from '../../../context/Maincontext';
import './Basket.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Basket = () => {
    const{basket } = useMainContext();
    // useEffect(() =>{readBasket()},[])
    
    return (
        <div id='basket'>
            <div className="container">
                <div className="basket">
                    {
                        basket.map((el) => (
                            <div className='box'>
                        <Link to={`/detal/${el.id}`}> <img src={el.book} alt="" /></Link>
                       <h3>{el.name}</h3> 
                       <div className="price">
                       <span>{el.price}</span>
                       </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div className="inputs ">
        <h2>Submit Telegram</h2>
    <TextField className='inp-1'
          id="standard-multiline-flexible"
          label="Имя"
          multiline
          maxRows={4}
          variant="standard"
        />
          <TextField className='inp-1'
          id="standard-multiline-flexible"
          label="Адрес"
          multiline
          maxRows={4}
          variant="standard"
        />
          <TextField className='inp-1'
          id="standard-multiline-flexible"
          label="Телефон"
          multiline
          maxRows={4}
          variant="standard"
        />
        <button className=''>Submit</button>
    </div>
        </div>
    );
};

export default Basket;