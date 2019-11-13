import React from 'react'
import './styles.css';
 
const Loader = ({ loading }) => {
    return loading ? (
        <div className='loader'>
            LOADING...
        </div>
    ) : null
} 
 
export default Loader