import { Api } from "@mui/icons-material"
import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const useBook = createContext() 
export const useMainContext = () => useContext(useBook)

const Maincontext = ({children}) => {
  let API = 'http://localhost:3000/data'
const [category , setCategory] = useState("")
const[edit , setEdit] = useState({})
  const [book , setBook ] = useState([])
  const[basket , setBasket] = useState([])
  const [search, setSearch] = useState([])

 //////////////////////////////////////////////////////CREATE//////////////////////////////////////////////////////////////////////////////////
async function addBook(newBook) {
await axios.post(`${API}`, newBook)
readBook()
}
///////////////////////////////////////////////////// READE ///////////////////////////////////////////////////////
async function readBook() {
   let { data } = await axios.get(API)
   setBook(data)
  //  console.log(book, 'book');
}
//////////////////////////////////////////////////  DELETE //////////////////////////////////////////////////////

async function removeData(id){
  await axios.delete(`${API}/${id}`);
  readBook();
  }

///////////////////////////////////////////////// EDIT /////////////////////////////////////////////////////////

async function editBook(id){
  let {data} = await axios(`${API}/${id}`);
   setEdit(data)
}

async function addeditBookid(id , editProd){
 axios.patch(`${API}/${id}`, editProd);
}

/////////////////////////////////////////////////// SEARCH ///////////////////////////////////////////////////
 async function getSearch() {
let { data } = await axios(API)
setSearch(data)
}
///////////////////////////////////////////////// BASKET //////////////////////////////////////////////////////

function getStorage(){
  let resBas = JSON.parse(localStorage.getItem('basket' )) || []
  setBasket(resBas)
}
useEffect(() => {
getStorage()
},[])



useEffect(()=> {
  getSearch()
},[])


  let values = {
          addBook,
          readBook,
          book,
          setBook,
          setCategory,
          category,
          removeData,
          // readBasket,
          basket,
          setBasket,
          search,
          setSearch,
          getSearch,
        editBook,
        edit,
        addeditBookid,
          
    }

  return ( <useBook.Provider value={values}>{children}</useBook.Provider>
  )
}

export default Maincontext;