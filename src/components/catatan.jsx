import React from 'react'

function Catatan({ title , body , createdAt , deleteCatatan , id , catatanToArsip , archived}) {

   const hapusCatatan = () => {
    deleteCatatan(id)
   }

   const toArsip = () => {
    catatanToArsip(id)
   }

  return (
    <div className=' w-[50vmin] bg-slate-600 h-[31vmin] rounded-[30px]'>
      <div className='w-full h-1/4 flex items-end px-9 overflow-hidden '>
        <div className=' overflow-hidden'>
          <p className=' text-5xl text-white whitespace-nowrap'>{title}</p>
        </div>
      </div>
      <div className=' w-full h-1/2 p-7 overflow-hidden'>
        <p className=' text-xl text-white '>{body}</p>
      </div>
      <div className=' h-1/4 w-full flex justify-center items-end'>
         <button className=' bg-violet-400 w-1/2 h-2/3 rounded-bl-[30px] border' onClick={hapusCatatan}>Delete</button>
         <button className=' bg-violet-400 w-1/2 h-2/3 rounded-br-[30px] border' onClick={toArsip} >{archived == false ? 'arsipkan' : 'batal arsipkan'}</button>
      </div>
    </div>
  )
}

export default Catatan