import React from "react";
function Dropdown({title=()=><></>,List=[],renderItem=(item)=>{},needr=false}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  // custom drpdown 
  return (
    <div className="" >
      <div className="cursor-pointer" onClick={handleOpen}>{title()}</div>
      {!needr&&open ? (
        <ul className="menu ">
          {(!needr)&&List?.map((x,index)=>(
             <li className="menu-item">
              <div>{x}</div>
             </li>
          ))}
        </ul>
      ) : null}
      {needr&&open ? (
          <div>
          {(!needr)&&List?.map((x,index)=>(renderItem))}
          </div>
      ) : null}      
    </div>
  );
}

export default Dropdown;