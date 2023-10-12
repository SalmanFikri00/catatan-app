import React, { useState } from 'react'
import Form from '../components/form'
import Catatan from '../components/catatan'


function Dashboard({catatan ,tambahCatatan , deleteCatatan , catatanToArsip , cariCatatan ,arsipCatatan }) {

const [searchResults, setSearchResults] = useState([])
const [keywords , setKeywords] = useState('')

const search = (keyword) => {
  setKeywords(keyword)
  if (keyword === '') {
    setSearchResults([])
  } else {
    const results = cariCatatan(keyword)
    setSearchResults(results)
  }
}

  return (
    <div className=' bg-slate-400 w-screen h-screen flex justify-center items-center overflow-hidden'>
        <div className=' bg-red-200 w-1/2 h-screen flex justify-evenly items-center flex-col'>
            <Form tambahCatatan={tambahCatatan} catatan={catatan}/>
        </div>
        <div className='w-1/2 h-screen'>
          <div className='w-[full] h-[14%] flex justify-center items-center '>
            <input type="text" className=' w-10/12 h-1/2 rounded-[2vmin] px-10 text-2xl focus:outline-none' placeholder='search' onChange={(e) => {
              search(e.target.value)
            }} />
          </div>
          <div className=' bg-blue-200 w-full h-[86vh] overflow-scroll'>
          <div className=' bg-blue-200 w-full flex flex-wrap justify-evenly items-start py-8 gap-5'>
            {
                keywords.length > 0
                  ? (searchResults.length == 0 ? 'tidak ada catatan' :
                      searchResults.map((s) => (
                        <Catatan
                          archived={s.archived}
                          key={s.id}
                          id={s.id}
                          title={s.title}
                          body={s.body}
                          createdAt={s.createdAt}
                          deleteCatatan={deleteCatatan}
                          catatanToArsip={catatanToArsip}
                        />
                      )))
                  : (
                    catatan.length == 0 ? 'tidak ada catatan' :
                      (catatan.map((s) => (
                        <Catatan
                          archived={s.archived}
                          key={s.id}
                          id={s.id}
                          title={s.title}
                          body={s.body}
                          createdAt={s.createdAt}
                          deleteCatatan={deleteCatatan}
                          catatanToArsip={catatanToArsip}
                        />
                      ))
                      )
                  )
              }              
          </div>
          <div className='h-[5vmin] justify-center items-center w-full text-2xl flex'>
            {keywords.length > 0 ? null : 'arsipan'}
          </div>
          <div className=' bg-blue-200 w-full flex flex-wrap justify-evenly items-start py-8 gap-5'>
            {
              keywords.length > 0
              ? null
              : (arsipCatatan.length == 0 ? 'tidak ada arsip catatan' :
              arsipCatatan.map((s) => (
                <Catatan
                  archived={s.archived}
                  key={s.id}
                  id={s.id}
                  title={s.title}
                  body={s.body}
                  createdAt={s.createdAt}
                  deleteCatatan={deleteCatatan}
                  catatanToArsip={catatanToArsip}
                />
              ))
              )
            }
          </div>
            </div>
          </div>
    </div>
  )
}

export default Dashboard


