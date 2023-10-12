import React, { useState } from 'react'
import { getInitialData } from '../initialData'

function Form({tambahCatatan ,catatan}) {

  const maxLengthTitle = 50
  const [title , setTitle] = useState('')
  const [body , setBody] = useState('')
  const [archived, setArchived] = useState(false)
  

  
  

    var data = catatan


    const findId = () => {

      let idExist = false
      let idCanUse = 0
      
      for (let i = 1; i <= data.length; i++) {
        idExist = false
        for (let j = 0; j < data.length ; j++) {
          if(data[j].id == i){
            idExist = true
          }
        }
        if(!idExist){
          return idCanUse = i
        }
      }
      if(idCanUse == 0){
        return idCanUse = data.length + 1
    }
      return idCanUse
    }

    const createTimeStamp = () => {
      const timeStamp = new Date()
      const formated = timeStamp.toISOString()
      return formated
    }
    
    const inputData = () => {
      const formSchema = {
        id: findId(),
        title: title,
        body: body,
        archived: archived, 
        createdAt: createTimeStamp(),
      }
      tambahCatatan(formSchema)
    }
// const inputData = () => {
//   console.log(archived)
// }
    
    

  return (
    <div>
    <p>title left : {maxLengthTitle - title.length}</p>
    <form className=" w-[70vmin] h-[50vmin] rounded-[2vmin]" >
        <div className=' h-1/5 w-full'>
            <input placeholder='Title' onChange={(e)=> {setTitle(e.target.value)}} maxLength={maxLengthTitle} type="text" className='w-full h-full rounded-t-[4vmin] focus:outline-none text-3xl px-11 font-bold'/>
        </div>
        <div className='h-4/5 w-full '>
            <textarea placeholder='Text' onChange={(e) => {setBody(e.target.value)}} type="text" className='w-full h-full rounded-b-[4vmin] p-[1em] focus:outline-none' />
        </div>
    </form>
    <div className='flex'>
      <div className='w-1/2 flex justify-center items-center h-[8vmin] '>
          <label htmlFor="arsip" className='w-10/12 h-4/6 rounded-[1vmin] bg-white flex justify-evenly items-center text-xl'>arsipkan
            <input type="checkbox" name="arsip" id="arsip" className='w-[2vmin] h-[2vmin]' onChange={(e) => { setArchived( () => archived == true ? false : true )}} />
          </label>
      </div>
      <div className=' w-1/2 flex justify-center items-center h-[8vmin] text-xl'>
        <button className=' w-10/12 h-4/6 rounded-[1vmin] bg-white' onClick={inputData}>submit</button>
      </div>
    </div>
    </div>
  )
}

export default Form