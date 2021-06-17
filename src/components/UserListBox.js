import React from 'react'
import style from './UserListBox.module.css'

const UserListBox = () => {

  return (
  		<div className={style.box}>
  			<div className={style.section1}>Select an account</div>
  			<div className={style.section2}>{
  			[1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,11,1,1,1,1].map((el) => {
  				return(
  					<div className={style.detail}>
  						<img src='https://upload.wikimedia.org/wikipedia/commons/3/33/Tourism_in_London795.jpg'/>
  						<p>sukhbir singh</p>
  					</div>
  				)
  			})}
  				
  			</div>

  		</div>
  	)
}

export default UserListBox