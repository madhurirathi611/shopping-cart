import React from 'react'
import './shppingCart.css'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
const NavBarPanel = () => {

    const navigate =useNavigate()

    const cartProduct = useSelector(state=>state.cart)
  return (
    <div className='header'>
        <img className='logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"   onClick={()=>navigate('/')}/>

        {/* <nav>
            <div className='options'>
                <span onClick={()=>navigate('/')}>Products</span>
            </div>
        </nav> */}
        <div className='search_bar'>
            <input type="text"  />
            <span>
                <i><SearchIcon/></i>
            </span>
        </div>
        <nav>
            <div className='options'>
              <span className='options_upper'>Hello,John</span>
              <span className='options_lower'>Account & List</span>
            </div>
            <div className='options'>
              <span  className='options_upper'>Return</span>
              <span className='options_lower'>& Orders</span>
            </div>
            <div className='options'>
              <span  className='options_upper' onClick={()=>navigate('/cart')}>{cartProduct.length}</span>
              <span className='options_lower'  onClick={()=>navigate('/cart')}>My Cart</span>
            </div>
        </nav>
    </div>
  )
}

export default NavBarPanel