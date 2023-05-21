import Dropdown from "../microcomponents/Dropdown";
import ModifiedText from "../microcomponents/ModifiedText";
import {AiFillCaretDown} from "react-icons/ai"
function CustomC({data}) {
    // custom usage for drpdown or Icon or text show from array
    if(data.type==='dropdown')return ( 
        <div>
            <Dropdown 
                title={()=>(<div className="flex flex-row justify-between items-center px-2 py-1 m-1 itemh rounded-md cursor-pointer">
                    <div>{data?.ict?data?.Icon():data.label}</div>
                    <div className="ml-2 cursor-pointer"><AiFillCaretDown/></div>
                     </div>)}
                List={data.options}
                renderItem={(text)=>(
                    <div>
                        {text}
                    </div>
                )}
            />
        </div>
     );
     else {
        
        return  <ModifiedText text={data?.Icon} pop={data?.label}/>
     }
}

export default CustomC;