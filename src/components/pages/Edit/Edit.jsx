import React, { useEffect, useState } from 'react';
import { useMainContext } from '../../../context/Maincontext';
import { useParams } from 'react-router-dom';
import "./edit.css";

const Edit = () => {
    const { editBook, edit, addeditBookid } = useMainContext();

    const [book, setBook] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState(''); 
    const [imgFile, setImgFile] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        editBook(id);
    }, [id]);

    useEffect(() => {
        if (edit) {
            setBook(edit.book);
            setName(edit.name);
            setCategory(edit.category);
            setDescription(edit.description);
            setPrice(edit.price);
            setImageURL(edit.imageURL || localStorage.getItem(`imageURL-${id}`)); 
        }
    }, [edit]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImgFile(file);
            const url = URL.createObjectURL(file); 
            setImageURL(url);
        }
    };

    const saveHandle = () => {
        const edited = {
            book,
            name,
            category,
            description,
            price,
            imageURL: imgFile ? imageURL : edit.imageURL, 
            
        };
        addeditBookid(id, edited);
        setName('')
        setCategory('')
        setDescription('')
        setImageURL('')
        setPrice('')
    };

    return (
        <div id='admin'>
            <div className="container">
                <div className="admin">
                    <div className="mainInput">
                        <div className="img-input">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange} // обработка выбора изображения
                            />
                        </div>
                        {imageURL && (
                            <div className="image-preview">
                                <img
                                    src={imageURL} // показываем текущее или выбранное изображение
                                    alt="Selected preview"
                                    style={{ maxWidth: '300px', height: 'auto' }}
                                />
                            </div>
                        )}
                        <div className="inputs">
                            <input onChange={(e) => setName(e.target.value)} className='name' type="text" placeholder='Название книги' value={name} />
                            <div className="inputt">
                                <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Категории' value={category} />
                                <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Цена' value={price} />
                            </div>
                            <input onChange={(e) => setDescription(e.target.value)} className='about-book' type="text" placeholder='Описание продукта...' value={description} />
                            <button onClick={saveHandle}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
