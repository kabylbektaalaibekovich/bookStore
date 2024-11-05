import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const useBook = createContext();
export const useMainContext = () => useContext(useBook);

const Maincontext = ({ children }) => {
  let API = 'http://localhost:3000/data';
  const [category, setCategory] = useState("");
  const [edit, setEdit] = useState({});
  const [book, setBook] = useState([]);
  const [basket, setBasket] = useState([]);
  const [search, setSearch] = useState([]);
  const [favorite , setFavorite] = useState([])

  async function addBook(newBook) {
    await axios.post(`${API}`, newBook);
    readBook();
  }

  async function readBook() {
    try {
      let { data } = await axios.get(API);
      setBook(data);
    } catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    }
  }

  async function removeData(id) {
    await axios.delete(`${API}/${id}`);
    readBook();
  }

  async function editBook(id) {
    let { data } = await axios(`${API}/${id}`);
    setEdit(data);
  }

  async function addeditBookid(id, editProd) {
    await axios.patch(`${API}/${id}`, editProd);
    readBook(); 
  }

  
  async function getSearch() {
    try {
      let { data } = await axios(API);
      setSearch(data);
    } catch (error) {
      console.error("Ошибка при поиске:", error);
    }
  }

  
  function getStorage() {
    let resBas = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(resBas);
  }

  useEffect(() => {
    getStorage();
  }, []);


  const addToBasket = (item) => {
    const updatedBasket = [...basket, item];
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket)); 
};
function addBasket(data){
  let findProd = basket.find((el =>  el.id === data.id));
  if(findProd){
    let filtProd = basket.filter((el) => !el.id === data.id);
  localStorage.setItem('basket' , JSON.stringify(filtProd))

}else{
  let res = [...basket , data]
  setBasket(res)
  localStorage.setItem('basket' , JSON.stringify(res))
}
}
useEffect(() => {
  const savedBasket = JSON.parse(localStorage.getItem('basket')) || [];
  setBasket(savedBasket);
}, []);

  const removeFromBasket = (id) => {
    const updatedBasket = basket.filter((el) => el.id !== id);
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket)); 
  };

  const updateQuantity = (id, quantity) => {
    const updatedBasket = basket.map((el) =>
      el.id === id ? { ...el, quantity } : el
    );
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };

  useEffect(() => {
    getSearch();
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket)); 
  }, [basket]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];
    setFavorite(savedFavorites);
  }, []);

 const addFavorite = (item) => {
    setFavorite((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, item];
      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  
 
  const removeFavorite = (id) => {
    setFavorite((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((item) => item.id !== id);
      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  
  const values = {
    addBook,
    readBook,
    book,
    setBook,
    setCategory,
    category,
    removeData,
    basket,
    setBasket,
    search,
    setSearch,
    getSearch,
    editBook,
    edit,
    addeditBookid,
    removeFromBasket,
    updateQuantity,
    addToBasket,
    favorite,
    setFavorite ,
    addBasket,
    addFavorite,
    removeFavorite,
  };

  return <useBook.Provider value={values}>{children}</useBook.Provider>;
};

export default Maincontext;
