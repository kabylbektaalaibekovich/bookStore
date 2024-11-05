import React, { useState } from 'react';
import './Admin.css';
import { useMainContext } from '../../../context/Maincontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const { addBook } = useMainContext();
  const [imgFile, setImgFile] = useState(null);
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const notifyEmptyField = () => {
    toast.error('Все поля должны быть заполнены!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleCreateData = () => {
    // Проверка на пустые поля
    if (!bookTitle || !bookCategory || !bookPrice || !bookDescription || !imgFile) {
      notifyEmptyField();
      return;
    }

    if (isNaN(bookPrice) || bookPrice <= 0) {
      toast.error('Цена должна быть положительным числом!', {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imgFile); // Чтение изображения как Base64
    reader.onload = () => {
      const product = {
        name: bookTitle,
        category: bookCategory,
        price: bookPrice,
        description: bookDescription,
        imageURL: reader.result, // Данные изображения в формате Base64
      };
      addBook(product); // Добавляем книгу в контекст
      resetForm(); // Очищаем форму
    };
    reader.onerror = () => {
      toast.error('Ошибка загрузки изображения', {
        position: "top-center",
        autoClose: 3000,
      });
    };
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      const url = URL.createObjectURL(file); // Преобразуем файл в URL для предварительного просмотра
      setImageURL(url);
    }
  };

  const resetForm = () => {
    setBookTitle('');
    setBookCategory('');
    setBookPrice('');
    setBookDescription('');
    setImgFile(null);
    setImageURL('');
  };

  return (
    <div id='admin'>
      <div className="container">
        <div className="admin">
          <div className="krc">
            <div>
              <div className="img-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange} // Обработка выбора изображения
                />
              </div>
              {imageURL && (
                <div className="image-preview">
                  <img
                    src={imageURL} // Используем предварительный URL для отображения изображения
                    alt="Selected preview"
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                </div>
              )}
            </div>
            <div className="inputs">
              <input
                onChange={(e) => setBookTitle(e.target.value)}
                className='name'
                type="text"
                placeholder='Название книги'
                value={bookTitle}
              />
              <div className="inputt">
                <input
                  onChange={(e) => setBookCategory(e.target.value)}
                  type="text"
                  placeholder='Категория'
                  value={bookCategory}
                />
                <input
                  onChange={(e) => setBookPrice(e.target.value)}
                  type="number"
                  placeholder='Цена'
                  value={bookPrice}
                />
              </div>
              <input
                onChange={(e) => setBookDescription(e.target.value)}
                className='about-book'
                type="text"
                placeholder='Описание...'
                value={bookDescription}
              />
              <button onClick={handleCreateData}>Добавить</button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
