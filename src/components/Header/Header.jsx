                       import React, { useState } from 'react';
                       import './Header.css';
                       import { Link, useNavigate } from 'react-router-dom';
                       import { GrSearch } from "react-icons/gr";
                       import TextField from '@mui/material/TextField';
                       import Button from '@mui/material/Button';
                       import { AiOutlineClose } from "react-icons/ai";
                       import { BsCart3 } from "react-icons/bs";
                       import { IoMdMenu } from "react-icons/io";
                       import { useMainContext } from '../../context/Maincontext';
                       import { MdFavoriteBorder } from "react-icons/md";
                       import { HiOutlineUserCircle } from "react-icons/hi2";
                       const Header = ({ setValue }) => {
                       const nav = useNavigate();
                       const { basket, favorite } = useMainContext();
                       const [text, setText] = useState('');
                       const [pasword, setPasword] = useState('');
                       const [modal, setModal] = useState(false);
                       const [menuModal, setMenuModal] = useState(false);
                       const [chek, setChek] = useState(false);
                       function paswordData() {
                       if (pasword === '1234') {
                       nav('/admin');
                       setModal(false);
                       } else if (!pasword) {
                       alert('Введите пароль!');
                       } else {
                      setText('Неправильный пароль!');
                       }}
                        return (
                        <header>
                        <div className="container">
                        <div className="header">
                        <div className="img-text">
                        <Link to='/'><img  className='header-logo' src='https://cdn-icons-png.flaticon.com/512/864/864685.png' alt="Лого" /></Link>
                        <Link to='/'><h2 className='header-text'>Магазин книг</h2></Link>
                        </div>
                        <nav>
                        <div className="input-search">
                        <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='Поиск книги' />
                        <button onClick={() => nav("/Search")}><GrSearch /></button>
                        </div>
                        <Link className='relative' to='/basket'><BsCart3 /></Link>
                        {basket.length > 0 && <p className='absolute'>{basket.length}</p>}
                        <Link className='favoriteLink' to='/favorite'><MdFavoriteBorder /></Link>
                        {favorite.length > 0 && <p className='favoriteLength'>{favorite.length}</p>}
                        <button onClick={() => setModal(true)} className='admin'><HiOutlineUserCircle /></button>
                        <button onClick={() => setMenuModal(!menuModal)} className='menu'><IoMdMenu /></button>
                         </nav>
                         </div>

                         {modal && (
                         <div className="password-modal">
                         <div className="input-pas">
                         <TextField 
                          onChange={(e) => setPasword(e.target.value)}
                          label="Пароль"
                          type={chek ? 'text' : 'password'}
                          autoComplete="current-password"
                          />
                         <div className="modal-actions">
                         <input className='checkbox' onClick={() => setChek(!chek)} type='checkbox' /> Показать пароль
                         <Button  className='siginBtn'onClick={() => paswordData()} variant="outlined">Войти</Button>
                         <AiOutlineClose className='closeBtn' onClick={() => setModal(false)} />
                         <h4>{text}</h4>
                         </div>
                        </div>
                        </div>
                         )}

                        {menuModal && (
                        <div className="modal-overlay" onClick={() => setMenuModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setMenuModal(false)}>
                        <AiOutlineClose size={24} />
                        </button>
                        <div className="modal-item">
                        <Link onClick={() => setMenuModal(!menuModal)} className="modal-item1" to="/basket">Корзина🛒</Link>
                        <h1 onClick={() => setMenuModal(!menuModal)+  setModal(!false)}  className="modal-item2">Админ 👤</h1>
                        <Link onClick={() => setMenuModal(!menuModal)} className="modal-item3" to="/favorite">Избранные</Link>
                        <Link onClick={() => setMenuModal(!menuModal)}  className="modal-item4" href="https://wa.me/996552102179">0(552)102179</Link>
                        </div>
                        </div>
                        </div>
                        )}
                        </div>
                        </header>
                        );
                        };
                      export default Header;
