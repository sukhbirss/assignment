import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import InfoLeft from '../../components/Info_Left/Info_Left';
import InfoRight from '../../components/Info_Right/Info_Right';
import panOrbitApi from '../../api/panOrbitApi';
import logo from '../../svg.svg'
import style from './profile.module.css';
import LogoutCard from '../../components/logoutCard/LogoutCard';
import Chat from '../../components/Chat/Chat';

const Profile = () => {

      const [state, setState] = useState('Profile');
      const [data, setData] = useState("")
      const [show, setShow] = useState(false)
      const {id} = useParams();

      // here i am using useEffect to fetch data again when its reloaded
      useEffect(() => {
        panOrbitApi.get("/users.json").then((res) =>{
          setData(res.data.users)})
      }, [data])
  return (
    <>
    {data &&
  		<div className={style.container}>
        {/*this will be used to render navigation component...we can make reusable in future if we want to use it more then once*/}

  			<div className={style.navigator}>
          <div><p onClick={() => setState('Profile')}  style={state === "Profile" ? { color: "red" } : null}>Profile</p></div>
          <hr/>
          <div><p onClick={() => setState('Posts')} style={state === "Posts" ? { color: "red" } : null}>Posts</p></div>
          <hr/>
          <div><p onClick={() => setState('Gallary')} style={state === "Gallary" ? { color: "red" } : null}>Gallary</p></div>
          <hr/>
          <div><p onClick={() => setState('Todo')} style={state === "Todo" ? { color: "red" } : null}>Todo</p></div>
  			</div>

        {/*following code is for rendering the right hand portion from navigation bar*/}

  			<div className={style.wrapper} >
  				<div className={style.header}>
  					<p style={{color:'#5a5a5a',fontSize:'1.5rem'}}>{state}</p>
            <div >
  					  <img src={data[id-1].profilepicture} style={{paddingRight:'10px'}}/>
  					  <p style={{color:'#5a5a5a',fontSize:'1.5rem'}} onClick={()=>setShow(!show)}>{data[id-1].username}</p>
            </div>
  				</div>

        {/* here we are checking which field is active in the navbar ...if it is 
                Profileile then profile page will be shown otherwise cooming soon*/}

            {state === 'Profile' ?
                <div className={style.info} onClick={()=>setShow(false)}>
        					<InfoLeft data={data[id-1]} />
                  <InfoRight data={data[id-1]} />
                </div>

                :

                <p>Comming Soon</p>
          }
  			</div>


        {/* here we are using our Chat component which reusable and can be used anywhere*/}

        <Chat data={data}/>
  		</div>
    }
    
        {/* following is our logout card which will be displayed as popup when user clicks on the name*/}
        {/* better way of doing this is using react portals,but i decided to go with this easist approach this time*/}

    {show && <LogoutCard setShow={setShow} data={data} id={id}/>}

    </>
  	)
}

export default Profile