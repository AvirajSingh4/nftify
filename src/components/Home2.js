import React, { useEffect, useState } from 'react'

const Home2 = () => {
    const [record,setRecord]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
        const url='https://api.dexscreener.com/latest/dex/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        await fetch(url)
        .then((response)=> {return response.json()})
        .then((data) => {setRecord(data.pairs)})
        }
        fetchData()
},[])
  return (
    <div className='container'>
  

            {record.map((value,key)=>(
             
                <div className='item' key={key}>

                  <table className='content'>

                  <h3>Quote Token</h3><br/>
                  <tr>
                    <td  className='label'>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> 
                    <td>{value.quoteToken.name}</td>
                  </tr>
                  <tr>
                    <td className='label'>Symbol &nbsp;</td> 
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;{value.quoteToken.symbol}</td>
                  </tr>
                  <tr>
                    <td className='label'>Address &nbsp;</td> 
                    <td className='address'>&nbsp;&nbsp;&nbsp;{value.quoteToken.address}</td>
                  </tr>
                 
                  
                  </table>
                </div>
              
                ))}
                
      
    </div>
    
  )
}

export default Home2
