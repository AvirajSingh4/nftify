import React, { useEffect, useState } from 'react'

const Home = () => {
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

                  <h3>Basic Info</h3><br/>
                  <tr>
                    <td  className='label'>Pair Created At &nbsp; &nbsp;</td> 
                    <td>{value.pairCreatedAt}</td>
                  </tr>
                  <tr>
                    <td className='label'>Symbol &nbsp; &nbsp;</td> 
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.chainId}</td>
                  </tr>
                  <tr>
                    <td className='label'>Dex Id &nbsp; &nbsp;</td> 
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.dexId}</td>
                  </tr>
                  <tr>
                    <td className='label'>Pair Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> 
                    <td className='address'>{value.pairAddress}</td>
                  </tr>
                  
                  </table>
                </div>
              
                ))}
                
      
    </div>
    
  )
}

export default Home
