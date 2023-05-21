import Calender from '../../assets/png/calendar.png'
import Contacts from '../../assets/png/contacts.png'
import Keep from '../../assets/png/keep.png'
import Maps from '../../assets/png/maps.png'
import Tasks from '../../assets/png/tasks.png'

function Sidebar() {
    // sidebar where Calander and other icons need to show
    let data=[
        {
            item:Calender,
            src:`https://calendar.google.com/`,
        },
        {
            item:Contacts,
            src:`https://contacts.google.com/`,
        },
        {
            item:Keep,
            src:`https://keep.google.com/u/0/`,
        },
        {
            item:Maps,
            src:`https://www.google.com/maps`,
        },
        {
            item:Tasks,
            src:`https://tasksboard.com/`,
        },
    ]

    return ( 
        <div className="flex flex-col ">
            {
                data.map((x,index)=>{
                    return (
                        <div key={index} className="flex w-full h-full p-4 pt-2 pb-6 cursor-pointer">
                            <a href={x.src} target='_blank' rel="noreferrer" >
                            <img src={x.item} alt=''/>
                            </a>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Sidebar;