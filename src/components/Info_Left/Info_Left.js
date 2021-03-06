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

const Info_Left = ({data}) => {

        {/*as the name suggest this is our left portion of profile information page which is right to the navbar*/}

  return (
  		<div className={style.container}>
        <div className={style.top}>
          <img src={data.profilepicture} />
  		    <p>{data.name}</p>
        </div>   


        {/*this is my resubale function i made this dynamic we just need to pass an object and the html jsx will be calculated automatically through the Data component*/}

        <Data data={{username:data.username,email:data.email,phone:data.phone,website:data.website}}/>

         <hr
              style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 1,
                  width:'50%'
              }}
          />
         <p style={{color:'#5a5a5a'}}>Company</p>
        <Data data={{name:data.company.name,catchPhrase:data.company.catchPhrase,bs:data.company.bs}}/>

      </div>
  	)
}

export default Info_Left