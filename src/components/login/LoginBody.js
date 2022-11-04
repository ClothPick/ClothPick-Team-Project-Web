import React from 'react';
import Loginform from './LoginForm';
import Loginbanner from '../../assets/image/resources/Loginbanner.png'
import './LoginBody.css'
const loginbody = () => {
    return(
        <div className='loginbody'>
                <img src={Loginbanner} alt='' className='loginbanner'/>
                <Loginform />
        </div>
    )
}

export default loginbody;