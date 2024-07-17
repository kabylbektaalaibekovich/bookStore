import React, { useEffect, useState } from 'react';
import { useMainContext } from '../../../context/Maincontext';
import "./edit.css"
import { useParams } from 'react-router-dom';





const Edit = () => {
    const{ editBook,edit, addeditBookid } = useMainContext()

    
    const [book , setBook ] = useState('')
    const [name , setName ] = useState('')
    const [ category, setCategory] = useState('')
    const [price , setPrice ] = useState('')
    const [description  , setDescription ] = useState('')
    
    const { id }= useParams() 

    useEffect(() => {
     editBook(id)
    },[])


    useEffect(()=>  {
         setBook(edit.book)
         setName(edit.name)
         setCategory(edit.category)
         setDescription(edit.description)
         setPrice(edit.price)
    },[edit])


  function saveHundle(){
const edited = {
book: book,
name: name,
category: category,
description: description,
price: price
};
addeditBookid(id ,edited)
 }
    return (
        <div id='admin'> 
            <div className="container">
                <div className="admin">
  <div className="krc">
  <div className="img-input">
                    <input onChange={(e) => setBook(e.target.value)} type="text" placeholder='img' value={book}/>
        
                    </div> 
<div className="inputs">
<input onChange={(e) => setName(e.target.value)} className='name' type="text" placeholder='Название книги' value={name}/>
<div className="inputt">
<input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Категории' value={category} />
 <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Цена' value={price} />
</div>
 <input onChange={(e) => setDescription(e.target.value)} className='about-book' type="text"  placeholder='Описание продукта...' value={description}/>
 <button onClick={()=> saveHundle()} >Добавить</button>
</div>
  </div>

                </div>
            </div>
      
        </div>
    );
};

export default Edit;