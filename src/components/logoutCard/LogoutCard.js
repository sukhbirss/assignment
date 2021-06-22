import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import style from './logoutCard.module.css'

const LogoutCard = ({ data,id }) => {
  const history = useHistory();
  const [firstUser,setFirstUser] = useState(generateRandom(0, 9));
  const [second,setSecondUser] = useState(generateRandom(0, 9));

   function generateRandom(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === id-1) ? generateRandom(min, max) : num;
}

 
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
                <img src={data[firstUser].profilepicture} style={{paddingRight:'10px'}}/>
                <Link to={`/profile/${firstUser+1}`}><p style={{color:'#5a5a5a'}}>{data[firstUser].name}</p></Link>
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
                <img src={data[second].profilepicture} style={{paddingRight:'10px'}}/>
                <Link to={`/profile/${second+1}`}><p style={{color:'#5a5a5a'}}>{data[second].name}</p></Link>
            </div>

            <button className={style.btn} onClick={()=>history.push("/")}>Sign out</button>
    		</div>
  	)
}

export default LogoutCard