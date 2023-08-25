import React from 'react'

const Header = () => {
  return (
    <div>
        <form className='head' style={{padding:"0px 398px"}}>
      <input className="searchbar1" type='text' placeholder='Search' style={{marginRight:"890px",background: "transparent",
    width: "435px",
    height: "50px",
    marginTop: "27px",
    marginLeft:"0px",
    borderRadius: "20px",
    border: "1px solid grey",
    padding:"6px",
    color:"white"
    }} />
    <button className='connect' style={{
    float: "right",
    background: "linear-gradient(95.24deg, #7C0F35 7.59%, #581266 104.01%)",
    color:"white",
    padding:"12px",
    borderRadius:"20px",
    width:"156px",
    height:"52px",
    margin:"-50px -358px"

    }}>Connect</button>
      </form>
    
    </div>
  )
}

export default Header