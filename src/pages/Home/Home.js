import React from 'react'
import UserListBox from '../../components/UserListBox'
import style from './home.module.css'
const Home = () => {
  return (
  		<div className={style.container} >
  			<UserListBox />
  		</div>
  	)
}

export default Home