import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { Rupiah } from '../utils/Rupiah'

const Result = ({data}) => {
  const navigate = useNavigate()
  const res = parseInt(data.invest)+data.result
 
  return (
    <Layout>
            <div className='flex flex-col h-screen p-2 bg-slate-100 w-96'>
                <div className='sticky top-0 flex justify-center'>
                    <span className='text-2xl font-semibold'>Hasil</span>
                </div>
                <div className='items-center justify-center h-full p-4 text-xl font-normal'>
                   <div className='flex flex-col mt-10 border-2 rounded-lg h-1/2'>
                    <div className='flex flex-col items-center justify-center space-y-4 border-b-2 h-1/2'>
                      <span>Total Nilai</span>
                      <span>{data.duration} {data.time}</span>
                      <span>RP. {Rupiah(res)}</span>
                    </div>
                    <div className='flex items-center justify-center h-1/2'>
                      <div className='flex justify-center w-full space-x-6'>
                        <div className='flex flex-col items-center justify-center'>
                          <span>Total Investasi</span>
                          <span>RP. {Rupiah(data.invest)}</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <span>Total Bunga</span>
                          <span>RP. {(Rupiah(data.result))}</span>
                        </div>
                      </div>
                    </div> 
                   </div>
                   <div className='flex justify-center font-medium text-white'>
                        <button onClick={e => navigate(-1)} className='w-full mt-16 bg-blue-600 cursor-pointer rounded-xl' >Kembali</button>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default Result