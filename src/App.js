import './App.css';
import {useState,useEffect} from 'react';
import { Editbar, Header, Sidebar, TextContainer } from './Components';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

function App() {
  const [loader,setloader]=useState(true);
  useEffect(() => {
    // Used to show black loading screen on start
    setTimeout(() => {
      setloader(true);   
    }, 2000);
  },[])
  const [showHeader,setShowHeader]=useState(true)
  const [showSidebar,setShowSidebar]=useState(true)
  // Note there are various feature are incomplete need to complete 
  // loader condition is checking
  if(loader){
    return(
    <div className='flex flex-col p-2 overflow-hidden'  >
      <div className='w-full'>
        {showHeader&&<Header/>}
      </div>
      <div className='flex'>
        <div className='flex flex-col w-full'>
          <div>
            <Editbar showHeader={showHeader} setShowHeader={setShowHeader}/>
          </div>

          <div className='col-span-12 overflow-auto pl-10 txtcont' >
            <TextContainer/>
          </div>
        </div>
        {showSidebar&&<div className='w-14'>
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            </div>
        }
        <div>
            <div className='absolute right-5 bottom-8 rounded-full itemh p-2 bg-white cursor-pointer' >
                {showSidebar?<div onClick={()=>(setShowSidebar(false))}><MdOutlineKeyboardArrowLeft style={{background:'transparent',width:'20px',height:'20px'}}/></div>:
                            <div onClick={()=>(setShowSidebar(true))}><MdOutlineKeyboardArrowRight style={{background:'transparent',width:'20px',height:'20px'}}/></div>
                            }
              </div>
            </div>
      </div>
    </div>
    )
  }else
  {
    return <div className="App App-header"/>
  } 
}

export default App;
