import React,{useState} from 'react'
import style from './chat.module.css'
import chatIcon from '../../chat-alt-outline.svg'

const Chat = ({ data }) => {
    const [show, setShow] = useState(false);


        {/* this component will be used to show that chat box*/}

  return (
    <>
      {show ?
    		<div className={style.container} >
          <div className={style.chat} onClick={()=>setShow(!show)}>
            <p>Chat</p>
          </div>
          <div className={style.box}>
          {
            data.map((el)=>{
              return(
                  <div>
                      <img src={el.profilepicture} style={{paddingRight:'10px'}}/>
                      <p style={{color:'#5a5a5a'}}>{el.username}</p>
                       <span className={style.green}></span>
                  </div>
              )
            })
              
          }
          </div>
        </div>
      :

        <div className={style.container2} onClick={()=>setShow(!show)}>
              <p>Chat</p>
        </div>


      }
    </>

  	)
}

export default Chat