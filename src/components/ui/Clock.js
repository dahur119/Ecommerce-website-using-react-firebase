import { useEffect, useState } from "react"
import React from 'react'
import { setDay } from "date-fns"
import '../../style/clock.css';
function Clock() {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDown =()=>{
        const destination = new Date('Oct 10, 2022').getTime()

        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different/(1000 * 60 * 60 * 24))
            console.log(days)

            const hours = Math.floor(different % (1000 * 60 *60 * 24)/(1000* 60 * 60 ))
            const minutes = Math.floor(different % (1000 * 60 *60 )/(1000* 60 ))
            const second = Math.floor(different % (1000 * 60 )/(1000))

            if(destination < 0) clearInterval(interval.current)
            else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(second)
            }



        })
    }
    useEffect(()=>{
        countDown()

    }, [])
  return <div className='clock__wrapper d-flex align-items-center gap-3'>
    <div className='clock__data  d-flex align-items-center gap-3'>
        <div >
            <h1 className='text-black fs-3 mb-2'>{days}</h1>
            <h5 className='text-black f5-6'>Days</h5>
        </div>
        <span className='text-black fs-3'>:</span>

    </div>
    <div className='clock__data  d-flex align-items-center gap-3'>
        <div >
            <h1 className='text-black fs-3 mb-2'>{hours}</h1>
            <h5 className='text-black f5-6'>Hours</h5>
        </div>
        <span className='text-black fs-3'>:</span>

    </div>
    <div className='clock__data  d-flex align-items-center gap-3'>
        <div >
            <h1 className='text-black fs-3 mb-2'>{minutes}</h1>
            <h5 className='text-black f5-6'>Minutes</h5>
        </div>
        <span className='text-black fs-3'>:</span>

    </div><div className='clock__data  d-flex align-items-center gap-3'>
        <div >
            <h1 className='text-black fs-3 mb-2'>{seconds}</h1>
            <h5 className='text-black f5-6'>Seconds</h5>
        </div>
        <span className='text-black fs-3'>:</span>

    </div>

  </div>
}

export default Clock