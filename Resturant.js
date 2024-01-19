import React,{useState} from 'react'
import './style.css';
import menu from './menuApi.js'
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import Menu from './menuApi.js';

const uniquelist=[...new Set(menu.map((currElem)=>{
    return currElem.category;
})),"all"]

const Resturant = () => {
    // const mystyle={color:"red" };
    const [menuData,setmenuData]=useState(menu);
    const [ menuList,setmenuList]=useState(uniquelist);
    const ItemFilter=(category)=>{
        if(category==="All"){
                setmenuData(Menu);
                return;
        }
        const updatedlist=menu.filter((currElem)=>{
                return currElem.category===category;
        });
        setmenuData(updatedlist);
        }
    
    return (
        <>
       <Navbar ItemFilter={ItemFilter} menuList={menuList}/>
          <MenuCard menuData={menuData}/>  
        </>
    )
}

export default Resturant
