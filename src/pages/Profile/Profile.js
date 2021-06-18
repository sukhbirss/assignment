import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import InfoLeft from '../../components/Info_Left';
import InfoRight from '../../components/Info_Right';
import panOrbitApi from '../../api/panOrbitApi';
import logo from '../../svg.svg'
import style from './profile.module.css';
import LogoutCard from '../../components/logoutCard/LogoutCard';

const Profile = () => {
      const [state, setState] = useState('Profile');
      const [data, setData] = useState("")
      const [show, setShow] = useState(false)
      const {id} = useParams();

      useEffect(() => {
        panOrbitApi.get("/users.json").then((res) =>{
          setData(res.data.users)})
      }, [data])
  return (
    <>
    {data &&
  		<div className={style.container}>
  			<div className={style.navigator}>
          <div><p onClick={() => setState('Profile')}>Profile</p></div>
          <hr/>
          <div><p onClick={() => setState('Posts')}>Posts</p></div>
          <hr/>
          <div><p onClick={() => setState('Gallary')}>Gallary</p></div>
          <hr/>
          <div><p onClick={() => setState('Todo')}>Todo</p></div>
  			</div>
  			<div className={style.wrapper} >
  				<div className={style.header}>
  					<p style={{color:'#5a5a5a',fontSize:'1.5rem'}}>{state}</p>
            <div >
  					  <img src={data[id-1].profilepicture} style={{paddingRight:'10px'}}/>
  					  <p style={{color:'#5a5a5a',fontSize:'1.5rem'}} onClick={()=>setShow(!show)}>{data[id-1].username}</p>
            </div>
  				</div>

            {state === 'Profile' ?
                <div className={style.info} onClick={()=>setShow(false)}>
        					<InfoLeft data={data[id-1]} />
                  <InfoRight data={data[id-1]} />
                </div>

                :

                <p>Comming Soon</p>
          }
  			</div>
  		</div>
    }
    
    {show && <LogoutCard setShow={setShow}/>}
    </>
  	)
}

export default Profile