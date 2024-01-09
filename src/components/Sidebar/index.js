import './index.css'  
import { GiConversation } from "react-icons/gi";  
import { CiSearch } from "react-icons/ci"; 
import { MdDashboard } from "react-icons/md";  
import Avatar from '@mui/material/Avatar';
import avatar from '../avatar.png'
import { Typography } from '@mui/material'; 
import { FcConferenceCall,FcAbout,FcOnlineSupport } from "react-icons/fc"; 
import { FaCrosshairs } from "react-icons/fa6";  
import { BiMerge } from "react-icons/bi";
import { RxMixerHorizontal } from "react-icons/rx"; 
import { TfiInfo } from "react-icons/tfi";


const Sidebar=()=>(
    <div className="sildeBarBackground"> 
    <div className='iconAndName'>
        <GiConversation size={60}/> 
        <h1>BlueRecipt</h1>
    </div> 
    <br/> 
    
    <div className='search'> <CiSearch/> <input placeholder="Search..." className='input1'/></div> 
    <br/> 
    <div className='dashboard'><MdDashboard/> <p1>Dashboarrd</p1></div> 
    <hr className='sideLine'/>  
    <br/> 
    <div className='options'><FcAbout size={20}/> <p1 className="optionName">Converstion</p1></div> 
    <br/>  
    <div className='options'><RxMixerHorizontal size={20}/> <p1 className="optionName">Automation</p1></div> 
    <br/>  
    <div className='options'><FcConferenceCall size={20}/> <p1 className="optionName">Campaign</p1></div> 
    <br/>  
    <div className='options'><BiMerge  size={20}/> <p1 className="optionName">PopUp</p1></div> 
    <br/>  
    <div className='options'><FcOnlineSupport size={20}/> <p1 className="optionName">Live Chart</p1></div> 
    <br/>  
    <div className='options'><FaCrosshairs  size={20}/> <p1 className="optionName">Segments</p1></div> 
    <br/>  
    <div className='options'><TfiInfo size={20}/> <p1 className="optionName">Intigirations</p1></div> 
    <br/> 

    <div className='avatar'>
    <Avatar alt="Remy Sharp" src={ avatar } />
    <div>  <Typography>Oguz Kara</Typography>
    <Typography>store Name</Typography>
    <p></p></div>
  
        {/* <RxAvatar fontSize="p"/> */} 
    </div>


    </div>
)

export default Sidebar