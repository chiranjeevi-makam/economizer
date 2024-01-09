import './App.css';  
import { Component } from 'react'; 
import Sidebar from './components/Sidebar';
import { GiConversation } from "react-icons/gi";  
import Profile from './components/Profile'; 
import Details from './components/Details' 
import MyLineChart from './components/Chart' 
import MyLineCharto from './components/Chart2' 
import Bottom from './components/Bottom' 
import { FcMenu } from "react-icons/fc";

 
 


class App extends Component{ 

    state={status:true} 

    statusChange=()=>this.setState(prev=>({status:!prev.status}))

    render(){  
        const{status}=this.state
        return(
            <div className='layout'>  
            <div>
            
            <div className='show'>
            <FcMenu onClick={this.statusChange} />  
            <div className='namesetting'>
            <GiConversation size={60}/> 
                <h2 className='namesetting'>BlueRecipt</h2>
                </div>  
                </div> 
                <div className='medium'>
                    {status?null:<Sidebar/>}
                </div>

              </div>
             
            <div className='showMedium'>
                <Sidebar/>
            </div>  
            <hr className='mainLine'/>
            <div className='d'> 
            <Profile/> 
            <Details/> 
            <div className='mediumChart'>
                <MyLineChart/>
            </div> 
            <div className='small'><MyLineCharto/></div> 
            
             <Bottom/>

            </div>
            
             
            </div>
        )
    }
}

export default App;
