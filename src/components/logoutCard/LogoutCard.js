import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import style from './logoutCard.module.css'

const LogoutCard = ({ data,id }) => {
  const history = useHistory();


  {/*this component is to render logout card popup*/}
  {/*data is being fetched from props*/}

  return (
    		<div className={style.box}>
          <img src={data[id-1].profilepicture}/>
          <p>{data[id-1].username}</p>
          <p>{data[id-1].email}</p>

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

            <button className={style.btn} onClick={()=>history.push("/")}>Sign out</button>
    		</div>
  	)
}

export default LogoutCard