import { useState } from 'react';
import {ReactComponent as DocIcon} from '../../assets/svg/docsicon.svg' 
import Dropdown from '../microcomponents/Dropdown';
import ModifiedText from '../microcomponents/ModifiedText';
import {MdStarBorder,MdDriveFileMoveOutline,MdOutlineCloudDone, MdHistory, MdOutlineInsertComment, MdOutlineVideocam, MdLockOutline} from 'react-icons/md';
import {RxAvatar} from 'react-icons/rx'
function Header() {
    // head /navbar
    const headeritem=[
        {
            title:'File',
            lable:'file',
            list:[],
        },
        {
            title:'Edit',
            lable:'Edit',
            list:[],
        },
        {
            title:'View',
            lable:'View',
            list:[],
        },
        {
            title:'Insert',
            lable:'Insert',
            list:[],
        },
        {
            title:'Format',
            lable:'Format',
            list:[],
        },
        {
            title:'Tools',
            lable:'Tools',
            list:[],
        },
        {
            title:'Extensions',
            lable:'Extensions',
            list:[],
        },
        {
            title:'Help',
            lable:'Help',
            list:[],
        },
        ]
    const [filename,setfilename]=useState('Untitled Document')
    const setvalue=(e)=>{
        setfilename(e.target.value)
    }
    const styIcon={height:'15px',weidth:'15px'}
    return ( 
        <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start" >
                <div className='flex m-2 cursor-pointer' style={{background:'transparent',height:'36px',width:'36px'}}> 
                    <DocIcon/>
                </div>
                <div className="flex flex-col justify-start ">
                        <div className="flex flex-row items-center">
                            <div className='w-auto' style={{padding:2}}>
                                <input className=' text-base' defaultValue={`Untitled Document`} value={filename} style={{width:`${filename.length>0?`${filename.length*10}px`:'auto '}`}} onChange={setvalue}/>
                            </div>
                            <div className='px-2 cursor-pointer'><MdStarBorder style={styIcon}/></div>
                            <div className='px-2 cursor-pointer'><MdDriveFileMoveOutline style={styIcon}/></div>
                            <div className='px-2 cursor-pointer'><MdOutlineCloudDone style={styIcon}/></div>
                        </div>
                        <div className="flex flex-row mt-0">
                            {headeritem.map((x,index)=>{
                                return <div key={index} className='pr-4 cursor-pointer'>
                                         <Dropdown title={()=>(<ModifiedText text={()=>(<div className='px-1'>{x.title}</div>)} pop={x.lable}/>)} List={x.list} renderItem={(item)=>{}}/>
                                       </div>
                            })}
                        </div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className='flex h-full w-full p-2 m-1 items-center cursor-pointer' style={{height:'40px'}}>
                    <MdHistory style={{height:'25px',width:'25px',color:'#444746'}}/>
                </div>
                <div className='flex h-full w-full p-2 m-1 items-center cursor-pointer'>
                    <MdOutlineInsertComment style={{height:'22px',width:'22px',color:'#444746'}}/>
                </div>
                <div className='flex h-full w-full p-2 m-1 items-center cursor-pointer'>
                    <MdOutlineVideocam style={{height:'25px',width:'25px',color:'#444746'}}/>
                </div>
                <div>
                    <div className='flex flex-row gap-2 p-2 m-2 px-4 items-center rounded-full cursor-pointer' style={{background:'#c2e7ff'}}>
                        <MdLockOutline style={{height:'22px',width:'22px',color:'#000',background:'#c2e7ff'}} />
                        <div className='' style={{background:'#c2e7ff'}}>Share</div>
                    </div>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <RxAvatar className='p-2 m-1 rounded-full' style={{height:'50px',width:'50px',color:'#000'}}/>
                </div>
            </div>
        </div>
     );
}

export default Header;