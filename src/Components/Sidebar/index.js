import Calender from '../../assets/png/calendar.png'
import Contacts from '../../assets/png/contacts.png'
import Keep from '../../assets/png/keep.png'
import Maps from '../../assets/png/maps.png'
import Tasks from '../../assets/png/tasks.png'

function Sidebar() {
    // sidebar where Calander and other icons need to show
    let data=[
        {
            item:Calender
        },
        {
            item:Contacts
        },
        {
            item:Keep
        },
        {
            item:Maps
        },
        {
            item:Tasks
        },
    ]

    return ( 
        <div className="flex flex-col ">
            {
                data.map((x,index)=>{
                    return (
                        <div key={index} className="flex w-full h-full p-4 pt-2 pb-6 cursor-pointer">
                            <img src={x.item} alt=''/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Sidebar;