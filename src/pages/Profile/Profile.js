import React,{useState} from 'react';
import InfoLeft from '../../components/Info_Left';
import InfoRight from '../../components/Info_Right';
import logo from '../../svg.svg'
import style from './profile.module.css';
const Profile = () => {
      const [state, setState] = useState('Profile');

  return (
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
  			<div className={style.wrapper}>
  				<div className={style.header}>
  					<p style={{color:'#5a5a5a',fontSize:'1.5rem'}}>{state}</p>
            <div>
  					  <img src='https://upload.wikimedia.org/wikipedia/commons/3/33/Tourism_in_London795.jpg' style={{paddingRight:'10px'}}/>
  					  <p style={{color:'#5a5a5a',fontSize:'1.5rem'}}>sukhbir singh</p>
            </div>
  				</div>

            {state === 'Profile' ?
                <div className={style.info}>
        					<InfoLeft />
                  <InfoRight />
                </div>

                :

                <p>Comming Soon</p>
          }
  			</div>
  		</div>
  	)
}

export default Profile