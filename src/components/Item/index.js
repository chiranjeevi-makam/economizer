import './index.css' 
import { TiShoppingCart } from "react-icons/ti";

const Item=()=>(
    <li className='list'> 
    <div className='cardSide'>  
    <TiShoppingCart size={40}/> 
    <div className='names'>
        <p>Abandoned Cart 7 Days <span>-></span></p> 
        <p>4024 sent|124 clicks</p>
    </div>
    </div> 
    <div>
        <p className='names'>$5,231</p> 
        <p>41 orders|$150 ADV</p>
    </div>

    </li>
) 

export default Item