import React from 'react'
import propTypes from 'prop-types'
const Profilecomponents = ({user,children,name}) => {
    
    return (
        <div>
            <h1 onClick={()=>name(user.fullname)} style={{color:'red'}}> {user.fullname} </h1>
            {children}
            <p style={{color:'green',fontWeight:900}}> Bio:  </p>
            <p>  {user.bio} </p>
            <h3 style={{color:'gray'}}>Job: </h3>
            <h3 style={{color:'#00BFFF'}}>{user.Job}</h3>

            
        </div>
    )
}
Profilecomponents.defaultProps = {
    
    fullname:'Anonymous'

} 


Profilecomponents.propTypes = {
    fullname : propTypes.string,
    children : propTypes.object,
    user : propTypes.object,
        
}

export default Profilecomponents
