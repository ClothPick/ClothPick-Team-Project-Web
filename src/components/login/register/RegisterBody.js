import React from 'react';
import RegisterForm from './RegisterForm';
import Loginbanner from '../../../assets/image/resources/Loginbanner2.jpg';
import './RegisterBody.css'
const RegisterBody = () => {
    return(
        <div className='registerbody'>
            <RegisterForm />
            <img src={Loginbanner} alt='' className='registerbanner'/>
        </div>
    )
}

export default RegisterBody;