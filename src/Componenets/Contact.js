import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact-container'>
    <div className='contact-image'>
        <img src='https://tse3.mm.bing.net/th?id=OIP.VSYoLGm1-_4NzFa3Rj7LAgHaHl&pid=Api&P=0&h=180' alt=''/>
      </div>
      <div className='contact-content'>
        <div className='contact-item'>
        <div className='contact'><input type='text' placeholder='Enter name...'/></div>
        <div className='contact'><input type='email' placeholder='Enter Email...'/></div>
        <div className='contact'><input type='text' placeholder='Enter message...'/></div>
      </div>
      <div className='contact-submit'>
        <button onClick={()=>{
          console.log("Submitted");
        }}>Submit Message</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Contact