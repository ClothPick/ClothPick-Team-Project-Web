import React from 'react';

import Modal from './Modal';
import logding from '../../../assets/image/resources/loding.gif'
// import styled from 'styled-components';
import './loading.css';


const LoadingModal = ({ onClose }) => {
    return (
        <Modal onClose={onClose}>
            <div className='loadingbox'>
                <img src={logding} alt='' className='lodingimg'/>
                <p className='loadingtext'>Loading......</p>
            </div>
        </Modal>
    );
}



export default LoadingModal;