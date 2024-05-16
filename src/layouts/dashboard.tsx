import React from 'react'
import Navbar from '../components/navbar'

const Dashboard=()=>{
    return(
        <div>
          <Navbar />
          <div style={{padding:'10px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'10px',width:'400px',height:'200px',borderRadius:'5px',marginTop:'10px',padding:'10px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <h3 className="text-left font-sans font-bold" >UserName</h3>
            <h4 className="text-left font-sans">Ashish Sharma</h4>
            <h4 className="text-left font-sans">Ashish Sharma</h4>
            <h4 className="text-left font-sans">Ashish Sharma</h4>
          </div>
          </div>
        </div>
    )
}

export default Dashboard