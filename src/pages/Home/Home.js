import React,{useEffect} from 'react'
import UserListBox from '../../components/UserListBox'
import style from './home.module.css'
import axios from "axios";

const Home = () => {

  return (
  		<div className={style.container} >
  			<UserListBox />
  		</div>
  	)
}

export default Home