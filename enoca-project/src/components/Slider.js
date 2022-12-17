import React, { useState } from 'react'

export default function Slider({ news }) {
    const [current, setCurrent] = useState(0)
    const prevNew = () => {
        current > 0 && setCurrent(current - 1)
        current == 0 && setCurrent(2)
    }

    const nextNew = () => {
        (current >= 0 && current < 2) && setCurrent(current + 1)
        current == 2 && setCurrent(0)
    }

    return (
        <div className='row mt-5' style={{ height: '26rem' }}>
            <button className='btn h-25 m-auto' onClick={prevNew}>
                <i className='fas fa-arrow-left'> </i>
            </button>
            <div className='col row w-100'>
                <img src={news[current]?.urlToImage} style={{ width: '50%' }} />
                <h5 className='col mt-5'>{news[current]?.title}</h5>

            </div>
            <button className='btn  m-auto' onClick={nextNew}>
                <i className='fas fa-arrow-right'> </i>
            </button>
        </div >
    )
}
