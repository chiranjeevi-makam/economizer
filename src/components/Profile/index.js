import Avatar from '@mui/material/Avatar';
import avatar from '../avatar.png' 
import './index.css' 
 
import { FcCalendar } from "react-icons/fc";

const Profile=()=>(
<div className="profileLayOut"> 
<div className="nameAndAvatar"> 
    <Avatar alt="Remy Sharp" src={ avatar } /> 
    <div>
        <h1>Good Marning Oguz</h1> 
        <p>Here are your stats for Today, 24 Aug 2020</p>
    </div>

</div> 
<div className='calandar'> 
<div className='today'> <FcCalendar/>Today</div> 
<p>compared To</p> 
<div><select  className='Preview'> <option>Previous Period</option> </select></div>

</div>

</div>)  

export default Profile