import React, {useEffect} from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import diabetes from '../../assests/diabetes.jpg'
import Avatar from '../Avatar/Avatar.jsx'
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css'
import { jwtDecode } from  'jwt-decode'
import { setCurrentUser } from '../../actions/currentuser'

const Navbar = () => {

  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);




  return (
    <div className='navbar'>
        <div className="navbar-container">
        <Link to = '/' className='nav-item nav-logo'>
          <img src={diabetes} alt = 'Logo' width= '100px' />
        </Link>
        <Link to = '/About' className='nav-item nav-btn' style={{fontSize: '20px',color:'black'}}>Impact</Link>
        <Link to = '/Products' className='nav-item nav-btn' style={{fontSize: '20px',color:'black'}}>Accuracy</Link>
        <Link to = '/Consult' className='nav-item nav-btn' style={{fontSize: '20px',color:'black'}}>Research</Link>
        {
         User === null ?
               <Link to='/Auth' className='nav-item-nav-links' style={{fontSize: '20px',color:'black'}}>Log in</Link> : 
               <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>
                          <Link to = {`/Users/${User.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link>
                        </Avatar>
                        <button className='nav-item-nav-links'  onClick={handleLogout}>Log out</button>
               </>
        }


        </div>
    </div>
  )
}

export default Navbar