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
        <div className='slider mt-5'>
            <button className='btn m-auto' onClick={prevNew}>
                <i className='fas fa-arrow-left'> </i>
            </button>

            <div className='slider-main bg-light' >

                <img src={news[current]?.urlToImage} />

                <div className='content'>
                    <h5>{news[current]?.title}</h5>
                    <p>{news[current]?.description}</p>
                </div>

            </div>

            <button className='btn m-auto' onClick={nextNew}>
                <i className='fas fa-arrow-right'> </i>
            </button>
        </div >
    )
}
