import { useState } from "react";

function ModifiedText({text=()=>{return <></>},pop='hello'}) {
    const [showtxt,setshowtxt]=useState(false)
    // little pop shower on hover on text
    return ( 
        <div onMouseEnter={()=>setshowtxt(true)} onMouseLeave={()=>setshowtxt(false)}>
            <div className="dropdowntext itemh rounded-md cursor-pointer" style={{backgroundColor:showtxt?'#dadce0':''}} >
             {text()}
            </div>
            <div>
                {showtxt&&
                <div className="item rounded-xl">
                    {pop}
                </div>
                }
            </div>
        </div> 
    );
}

export default ModifiedText;