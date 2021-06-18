import React from 'react'
import { Link } from 'react-router-dom'
import style from './logoutCard.module.css'

const LogoutCard = (props) => {
  

  return (
    		<div className={style.box}>
          <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg"/>
          <p>Leanne Graham</p>
          <p>Sincere@april.biz</p>

           <hr
                style={{
                    color: "grey",
                    backgroundColor: "#d2d2d2",
                    borderTop:'solid 1px #d2d2d2',
                    width:'80%'
                }}
            />
            <div>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
            </div>
           <hr
                style={{
                    color: "grey",
                    backgroundColor: "#d2d2d2",
                    borderTop:'solid 1px #d2d2d2',
                    width:'80%'
                }}
            />
            <div>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
            </div>

            <button className={style.btn}>Sign out</button>
    		</div>
  	)
}

export default LogoutCard