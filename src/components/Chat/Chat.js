import React,{useState} from 'react'
import style from './chat.module.css'
import chatIcon from '../../chat-alt-outline.svg'

const Chat = ({data}) => {
    const [show, setShow] = useState(false);


  return (
    <>
      {show ?
    		<div className={style.container} >
          <div className={style.chat} onClick={()=>setShow(!show)}>
          </div>
          <div className={style.box}>
              <div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Grasdadadaham</p>
              </div>
              <div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div><div>
                  <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{paddingRight:'10px'}}/>
                  <p style={{color:'#5a5a5a'}}>Leanne Graham</p>
              </div>
          </div>
        </div>
      :

        <div className={style.container2} onClick={()=>setShow(!show)}>
              acac
        </div>


      }
    </>

  	)
}

export default Chat