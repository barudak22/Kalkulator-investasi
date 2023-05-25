import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

const Home = ({ setData }) => {
    const navigate = useNavigate()
    const [invest, setInvest] = useState("")
    const [bunga, setBunga] = useState()
    const [time, setTime] = useState("Bulan")
    const [duration, setDuration] = useState()
    const re = /^[0-9\b]+$/;
    const handleSubmit = (e) => {
        e.preventDefault()
        let result
        if(parseInt(invest)< 100){
            alert("Harus lebih dari 100")
            return
        }
        result = ((parseInt(invest) * parseInt(bunga)) / 100) * parseInt(duration)
        let temp = {
            invest,
            bunga,
            time,
            duration,
            result
        }
        setData(temp)
        navigate("/result")
    }
    const validate = (e) => {
        if (re.test(e.target.value) || e.target.value === "") {
            setInvest(e.target.value)
        } else {
            alert("hanya angka")
        }
    }
    return (
        <Layout>
            <div className='flex flex-col h-screen bg-slate-100 w-96'>
                <div className='sticky top-0 mx-auto'>
                    <span className='text-2xl font-bold'>Investasi</span>
                </div>
                <div className='h-full mt-24 text-xl font-semibold text-gray-800'>
                    <form onSubmit={handleSubmit} className='relative h-full p-4 text-left md:p-6'>
                        <div className='flex flex-col'>
                            <label>Total Investasi</label>
                            <input className='font-normal bg-transparent' onChange={validate} value={invest} type='text' placeholder='Masukan Jumlah' required />
                        </div>
                        <div className='flex flex-col'>
                            <label>Bunga (persentase)</label>
                            <input className='font-normal bg-transparent' onChange={e => setBunga(e.target.value)} type='number' placeholder='Masukan Suku Bunga' required />
                        </div>
                        <div className='flex flex-col'>
                            <label>Pilih Durasi</label>
                            <select className='font-normal bg-transparent' onChange={e => setTime(e.target.value)}>
                                <option value="" disabled>Pilih salah satu</option>
                                <option value="Bulan">Bulan</option>
                                <option value="Tahun">Tahun</option>
                            </select>
                        </div>
                        <div className='flex flex-col border-b-2'>
                            <label>Durasi ({time})</label>
                            <input className='font-normal bg-transparent' onChange={e => setDuration(e.target.value)} type='number' placeholder='Masukan Durasi' required />
                        </div>
                        <div className='flex justify-center font-medium text-white'>
                            <input type='submit' className='w-full mt-16 bg-blue-600 cursor-pointer rounded-xl' />
                        </div>

                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Home