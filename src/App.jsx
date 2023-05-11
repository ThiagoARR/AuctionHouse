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
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3000/item/getAllItem').then((response) => {
      setItemList(response.data.item);
      setLoader(false)
    })
  },[])
  
  return (
    <>{itemList.length > 0 ? (itemList.map((col) => <div>{col.name}</div>)):(<div></div>)}
    </>
  )
}

export default App
