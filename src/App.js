import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Admin from './components/pages/Admin/Admin';
import Section from './components/Section/Section';
import Basket from './components/pages/Basket/Basket';
import Search from './components/pages/Search/Search';
import { useState } from 'react';
import Edit from './components/pages/Edit/Edit';
import Detal from './components/pages/Detal/Detal';

function App() {
  const [value , setValue] = useState('')
  return (
    <div className="App">
    <Header setValue={setValue}/>

    <Routes >
    <Route path='/' element={<Section /> } key={1}/>
    <Route path='/admin' element={<Admin/> } key={2}/>
    <Route path='/basket' element={<Basket/>} key={3}/>
    <Route path='/Search' element={<Search bookName ={value}/>} key={4} />
    <Route path='/edit/:id' element={<Edit/> } key={5}/>
    <Route path='/detal/:proId' element={<Detal/>}/>
    </Routes>
    </div>
  );
}

export default App;
