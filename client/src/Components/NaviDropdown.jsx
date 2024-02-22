import React from 'react'
import './NaviDropdown.css';
import { MenuItems } from './MenuItems';



function NaviDropdown() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return(

        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                    <a href="/" className={item. cName} to ={item.path} onClick={() => setClick(false)}>{item.title}</a>
                    
                    
                    </li>
                )
            })}
        </ul>

    )
}

export default NaviDropdown;
