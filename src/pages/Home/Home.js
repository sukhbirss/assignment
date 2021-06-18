import React,{useEffect} from 'react'
import UserListBox from '../../components/UserListBox/UserListBox'
import style from './home.module.css'
import axios from "axios";

const Home = () => {

  return (
  		<div className={style.container} >
  			{/* i made this resuable so we can use it any time anywhere in this app if we needs to*/}
  			<UserListBox />
  		</div>

  	)
}

export default Home