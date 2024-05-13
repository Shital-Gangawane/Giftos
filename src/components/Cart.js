import React from 'react'
import { useLocation } from 'react-router-dom'

function Cart() {
    const loc=useLocation();

    let data=loc.state;
    console.log(data)

  return (
    <div className='container mt-5'>
      <table className='table border'>
        <tr>
            <td>{data.id}</td>
            <td><img src={data.image} alt=''/></td>
            <td>{data.name}</td>
            <td>{data.price}</td>
        </tr>
      </table>
    </div>
  )
}


export default Cart
