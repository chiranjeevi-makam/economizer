import './index.css'  
import GaugeChart from 'react-gauge-chart'
 
import Item from '../Item' 


const Bottom=()=>(
    
    <div className='bottomLayout'> 
    <div>
    <div className='topBar'>
        <button type="button" className='btn'>Automation</button> 
        <button type="button" className='btn'>Campains</button> 
        <button type="button" className='btn'>Segement</button> 
        <select>
            <option>Last Month</option> 
            <option>Last six Months</option>
        </select>
    </div> 
    <hr className='finish'/> 
    <ul className='unorderList'>
    <Item/> 
    <Item/> 
    <Item/>
    </ul> 
    </div> 
    <div>
    <GaugeChart id="gauge-chart1"  
    nrOfLevels={1}
    arcsLength={[0.9,0.3]}
    percent={0.8}
    arcPadding={0}
    colors={['#0083FF',"#E2E7F5"]}
    textColor={'#000000'}
    cornerRadius={0}/>
    <div className='speed'>$14,495</div>
    </div>
    </div>
    

    


    

    
) 

export default Bottom 
