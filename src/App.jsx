import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";                                       

function App() {
  const [itemList, setItemList] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/item/getAllItem').then((response) => {
      setItemList(response.data.item);
    })
  },[])

  const syncItem = () => {
    setItemList([])
    axios.get('http://localhost:3000/item/getAllItem').then((response) => {
      setItemList(response.data.item);
    })
  }

  const updateItemDB = () =>{  
    setLoader(true);
    axios.get('http://localhost:3000/item/updateOrCreateItem').then((response) => {
      setItemList(response.data.item);
      setLoader(false)
      syncItem;
    })
  }
  
  return (
    <>
    </>
  )
}

export default App
