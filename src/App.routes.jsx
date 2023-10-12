import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { useState } from "react";
import { getInitialData } from './initialData.jsx'


function App() {

  const [data,setData] = useState(getInitialData)
  const noArsip = (paramData) =>  paramData.filter( e => e.archived === false)
  const [catatan , setCatatan] = useState(noArsip(data))
  const arsip = (paramData) => paramData.filter( e => e.archived === true)
  const [arsipCatatan , setArsipCatatan] = useState(arsip(data))

    const catatanToArsip = (id) => {
      let dataBaru = data

      for( let d = 0 ; d < dataBaru.length ; d++){
         if(dataBaru[d].id == id){
          if(dataBaru[d].archived == false){
            dataBaru[d].archived = true
          }else{
            dataBaru[d].archived = false
          }
         }
      }
      setCatatan(noArsip(dataBaru))
      setArsipCatatan(arsip(dataBaru))
    }

  const tambahCatatan = (catatanBaru) => {
    const dataBaru = [...data,catatanBaru]
    setData(dataBaru)
    setCatatan(noArsip(dataBaru))
    setArsipCatatan(arsip(dataBaru))
  }

  const cariCatatan = (keyword) => {
    const hasil = data.filter( (object) => object.title.includes(keyword))
    return hasil
  }

  const deleteCatatan = (id) => {
     const deleted = data.filter( (object) => object.id !== id )
     setData(deleted)
     setCatatan(noArsip(deleted))
     setArsipCatatan(arsip(deleted))
  }

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={ <Dashboard catatan={catatan} arsipCatatan={arsipCatatan} cariCatatan={cariCatatan} tambahCatatan={tambahCatatan} deleteCatatan={deleteCatatan} catatanToArsip={catatanToArsip} /> }/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
