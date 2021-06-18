import React from 'react'
import style from './Info_Right.module.css'

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

const Info_Right = ({data}) => {
  return (
  		<div className={style.container}>
  			<p>Address:</p>
  			<div style={{paddingLeft:'3%'}}>
  				<Data data={{street:data.username,suite:data.address.suite,city:data.address.city,zipcode:data.address.zipcode}}/>
  			</div>
  		</div>
  	)
}

export default Info_Right