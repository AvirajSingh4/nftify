import React, { useEffect, useState } from 'react'

const Home3 = () => {
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

                  <h3>Price</h3><br/>
                  <tr>
                    <td  className='label'>Price Native &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> 
                    <td>{value.priceNative}</td>
                  </tr>
                  <tr>
                    <td className='label'>Price USD &nbsp;</td> 
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.priceUsd}</td>
                  </tr>
                  
                  </table>
                </div>
              
                ))}
                
      
    </div>
    
  )
}

export default Home3
