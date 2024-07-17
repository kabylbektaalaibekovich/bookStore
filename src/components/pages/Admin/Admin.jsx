import React, { useState } from 'react';
import './Admin.css'
import { useMainContext } from '../../../context/Maincontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admin = () => {
    const {addBook} = useMainContext()
    const [book , setBook ] = useState('')
    const [name , setName ] = useState('')
    const [ category, setCategory] = useState('')
    const [price , setPrice ] = useState('')
    const [description  , setDescription ] = useState('')

const infoData = () => {
    toast.error('Это поле обязательно', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }
    
    function createData() {


 if(book.length === 0 && name.length === 0 && category.length === 0 && price.length === 0 && description.length === 0){

infoData()
 } else  {
    let product = {
        book : book,
        name:name,
        category:category,
        price:price,
        description:description,
    }
    setBook('')
    setName('')
    setCategory('')
    setPrice('')
    setDescription('')
    addBook(product)
 }
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
 <button onClick={createData}>Добавить</button>
 <ToastContainer />

</div>
  </div>

                </div>
            </div>
      
        </div>
    );
};

export default Admin;