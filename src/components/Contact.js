import React from 'react'

const Contact = () => {
  return (
    <div >
      <h1 className="text-orange-500 text-2xl font-bold text-center">Contact us</h1>
      <div className="flex justify-center">
      <form onSubmit={()=>{console.log("submited");}}>
        <input className="border border-orange-300 m-4 mr-4" placeholder='mail'></input>
        <input className="border border-orange-300 m-4 mr-4" placeholder='concerns'></input>
        <button className="border bg-orange-300 p-1 rounded-lg h-7 text-white ">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact;