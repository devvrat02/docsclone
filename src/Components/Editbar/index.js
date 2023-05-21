import CustomC from "./CustomC";
import {BiUndo,BiRedo,BiPaintRoll,BiCommentAdd, BiLeftIndent} from 'react-icons/bi'
import {AiOutlinePrinter,AiOutlineMinus,AiOutlinePlus,AiOutlineBold,AiOutlineUnderline,AiOutlineHighlight} from 'react-icons/ai'
import {MdSpellcheck,MdLink, MdOutlineImage,MdOutlineFormatAlignLeft, MdOutlineFormatLineSpacing, MdChecklist, MdFormatListBulleted, MdOutlineFormatListNumbered, MdOutlineFormatIndentDecrease, MdOutlineFormatClear, MdOutlineEdit, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {BsTypeItalic,BsThreeDotsVertical} from 'react-icons/bs'
import {TbTextColor} from 'react-icons/tb'
function Editbar({showHeader,setShowHeader}) {
const styl={
        width:"18px",
        height:"18px",
        borderRadius:"10px"
    }
    const items1=[
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><BiUndo style={styl}/></div>,
            label:'Undo (CTRL+Z)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><BiRedo style={styl}/></div>,
            label:'Redo (CTRL+Y)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><AiOutlinePrinter style={styl}/></div>,
            label:'Print (CTRL+Z)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><MdSpellcheck style={styl}/></div>,
            label:'Spelling and grammer check (CTRL+Z)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><BiPaintRoll style={styl}/></div>,
            label:'Print (CTRL+P)',
        },
        {
            type:'dropdown',
            value:'100%',
            icon:<></>,
            options:['a','b','c'],
            label:'100%',
            event:'click'
        }
    ]
    const items2=[
        {
            type:'dropdown',
            value:'100%',
            icon:<></>,
            options:['a','b','c'],
            label:'Arial',
            event:'click'
        },
    ]
    const items3=[
        {
            type:'dropdown',
            value:'100%',
            icon:<></>,
            options:['a','b','c'],
            label:'Normal text',
            event:'click'
        },
    ]
    const items4=[
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><AiOutlineBold style={styl}/></div>,
            label:'Bold (CTRL+B)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><BsTypeItalic style={styl}/></div>,
            label:'Italic (CTRL+I)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><AiOutlineUnderline style={styl}/></div>,
            label:'Underline (CTRL+U)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><TbTextColor style={styl}/></div>,
            label:'Text Color',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><AiOutlineHighlight style={styl}/></div>,
            label:'Highlight color',
        }
    ]
    const items5=[
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><MdLink style={styl}/></div>,
            label:'Insert link (CTRL+K)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><BiCommentAdd style={styl}/></div>,
            label:'Add Comment (CTRL+Alt+M)',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><MdOutlineImage style={styl}/></div>,
            label:'Insert image',
        },
    ]
    const items6=[
        {
            ict:true,
            type:'dropdown',
            value:'100%',
            Icon:()=>(<div className=""><MdOutlineFormatAlignLeft style={styl}/></div>),
            options:['a','b','c'],
            label:'Normal text',
            event:'click'
        }, 
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><MdOutlineFormatLineSpacing style={styl}/></div>,
            label:'Line and Paragraph spacing',
        },
        {
            ict:true,
            type:'dropdown',
            value:'100%',
            Icon:()=>(<div className=""><MdChecklist style={styl}/></div>),
            options:['a','b','c'],
            label:'Normal text',
            event:'click'
        }, 
        {
            ict:true,
            type:'dropdown',
            value:'100%',
            Icon:()=>(<div className=""><MdFormatListBulleted style={styl}/></div>),
            options:['a','b','c'],
            label:'Normal text',
            event:'click'
        },  
        {
            ict:true,
            type:'dropdown',
            value:'100%',
            Icon:()=>(<div className=""><MdOutlineFormatListNumbered style={styl}/></div>),
            options:['a','b','c'],
            label:'Normal text',
            event:'click'
        }, 
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><MdOutlineFormatIndentDecrease style={styl}/></div>,
            label:'Decrese indent (CTRL+[)',
        }, 
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><BiLeftIndent style={styl}/></div>,
            label:'Increase indent (CTRL+])',
        },
        {
            type:'icon',
            Icon:()=><div className="p-1 m-1 my-2"><MdOutlineFormatClear style={styl}/></div>,
            label:'Clear Formatting (CTRL+\\)',
        },
    ]
    const enditems={
        ict:true,
        type:'dropdown',
        value:'100%',
        Icon:()=>(<div className="flex flex-row"><div><MdOutlineEdit style={styl}/></div><div className="px-2 itemhideedit">Editing</div></div>),
        options:['a','b','c'],
        label:'Normal text',
        event:'click'
    }

    // Editbar
    const Divider=({className})=>(<div className={`ml-2 mt-3 h-5 border-r-gray-400 border-r ${className}`} />)
    return (
        <div className="pr-8">
            <div className="flex flex-row mx-4 w-full rounded-full justify-between px-5" style={{background:'#edf2fa'}}>
                <div className="flex flex-row">
                    <div className="flex flex-row itemhideedit8">
                        {items1.map((x,key)=>( 
                            <div className="cursor-pointer" key={key}>
                                    <CustomC data={x} />
                                </div>
                            ))}
                    </div>
                    <Divider className={`itemhideedit8`}/>
                    <div className="flex flex-row itemhideedit7">
                        {items3.map((x,key)=>( 
                            <div className="cursor-pointer" key={key}>
                                    <CustomC  data={x} />
                                </div>
                            ))}
                    </div>
                    <Divider className={`itemhideedit7`}/>
                    <div className="flex flex-row itemhideedit6">
                        {items2.map((x,key)=>( 
                            <div className="cursor-pointer" key={key}>
                                    <CustomC data={x} />
                                </div>
                            ))}
                    </div>
                    <Divider className={`itemhideedit6`}/>
                    <div className="flex flex-row itemhideedit5">
                        <div className="flex flex-row ">
                            <div className="p-2 flex items-center cursor-pointer"><AiOutlineMinus/></div>
                            <div className="p-2 flex items-center cursor-pointer"><input className="w-10 bg-transparent border px-2 border-gray-900 rounded-lg" value={10}/></div>
                            <div className="p-2 flex items-center cursor-pointer"><AiOutlinePlus/></div>
                        </div>
                    </div>
                    <Divider className={`itemhideedit5`}/>
                    <div className="flex flex-row itemhideedit4">
                        {items4.map((x,key)=>( 
                            <div className="cursor-pointer" key={key}>
                                    <CustomC data={x} />
                                </div>
                            ))}
                    </div>
                    <Divider className={`itemhideedit4`}/>
                    <div className="flex flex-row itemhideedit3">
                        {items5.map((x,key)=>( 
                            <div className="cursor-pointer" key={key}>
                                    <CustomC data={x} />
                                </div>
                            ))}
                    </div> 
                    <Divider className={`itemhideedit3`}/>
                    <div className="flex flex-row items-center itemhideedit2">
                            {items6.map((x,key)=>( 
                                <div className="cursor-pointer" key={key}>
                                        <CustomC data={x} />
                                    </div>
                                ))}
                    </div> 
                    <div className="flex flex-row items-center itemshowdit ">
                         <div className="p-1 m-1 my-2 cursor-pointer"><BsThreeDotsVertical style={styl}/></div>
                    </div>
                
                </div>
                <div className="flex flex-row items-center ">
                    <div>
                        <CustomC data={enditems} />
                    </div>
                    <div className="ml-2 mr-2 h-5 border-r-gray-400 border-r cursor-pointer" />
                    <div className="cursor-pointer" onClick={()=>{setShowHeader(!showHeader)}}>
                        {showHeader?<MdOutlineKeyboardArrowUp style={styl}/>:<MdOutlineKeyboardArrowDown style={styl}/>}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Editbar;