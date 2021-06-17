import React from 'react'
import style from './Info_Left.module.css'
const Data = ({data}) =>{
   
 return (
       <div className={style.middle}>
       {data &&
            Object.entries(data).map(([key,value])=>{

              return(
                     <div style={{display:'flex',width:'100%'}}> 
                         <p style={{color:'#9c9b9c',justifyContent:'flex-end'}}>{key}</p> 
                         <p style={{color:'#5a5a5a'}}>: {value.toString()}</p>
                     </div>
                    )
              })
       }
        </div>
   )
}

const Info_Left = () => {
  return (
  		<div className={style.container}>
        <div className={style.top}>
          <img src="https://rukminim1.flixcart.com/image/416/416/klicfww0/poster/i/p/7/medium-wall-decor-3d-psoter-for-doraemon-nobita-cartoon-funny-original-imagym48nrgmyrhx.jpeg" />
  		    <p>Leanne Graham</p>
        </div>   

        <Data data={{username:'sukhbir',email:'s.sukhbirsohal@gmail.com',phone:'9873078858',website:'sukhbir.com'}}/>

         <hr
              style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 1,
                  width:'50%'
              }}
          />
         <p style={{color:'#5a5a5a'}}>Company</p>
        <Data data={{name:'sukhbir',catchPhrase:'Multi-layered client-server neural-net',bs:'harness real-time e-markets'}}/>

      </div>
  	)
}

export default Info_Left