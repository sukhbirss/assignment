import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import style from './UserListBox.module.css'
import panOrbitApi from '../api/panOrbitApi';

const UserListBox = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    panOrbitApi.get("/users.json").then((res) =>setData(res.data.users))
  }, [data])


  return (
  		<div className={style.box}>
  			<div className={style.section1}>Select an account</div>
        {data &&
    			<div className={style.section2}>{
    			data.map((el) => {
    				return(
            <Link to={`/profile/${el.id}`}>
    					<div className={style.detail}>
    						<img src={el.profilepicture}/>
    						<p>{el.name}</p> 
    					</div>
              </Link>
    				)
    			})}
  				
  			</div>
      }
  		</div>
  	)
}

export default UserListBox