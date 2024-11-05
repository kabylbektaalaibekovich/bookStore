// import React, { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { useMainContext } from '../../../context/Maincontext';
import './Search.css'
import axios from 'axios';
const Search = ({bookName}) => {
    let API = 'http://localhost:3000/data'

     const {search  } = useMainContext()
   const{setSearch }= useMainContext()


       

     let filterSearch = search.filter((el) => {
     return el.name.toLowerCase().includes(bookName.toLowerCase())
     }) 

      
    return (
        <div id='search'>
            <div className="container">
                <div className="search">
                    {
                        filterSearch.map((el,idx) => (
                            <div className='box' key={idx}>
                            <img className='searchImg' src={el.imageURL} alt="" />
                          <h3 className='searchName'>{el.name}</h3> 
                  
                       <div className="price">
                       <span>${el.price}</span>
                       </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
