import {TfiMenuAlt } from 'react-icons/tfi'
function TextContainer() {
    // Text Editor 
    return (
        <div className="flex justify-center mt-4 ">
                    <div className='absolute left-5  rounded-full itemh p-2 cursor-pointer' >
                        <TfiMenuAlt style={{background:'transparent',width:'20px',height:'20px'}}/>
                    </div>
                    <div className="bg-white border-gray-400 border" style={{width:'816px',height:'1056px'}}>
                        <textarea className='w-full h-full p-4 '/>
                    </div>
        </div>
        );
}

export default TextContainer;