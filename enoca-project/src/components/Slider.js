import React, { useState } from 'react'

export default function Slider({ news }) {
    const [current, setCurrent] = useState(0)


    return (
        <div className='row'>
            <button className='col' onClick={() => current > 0 && setCurrent(current - 1)}> Geri</button>
            <img src={news[current]?.urlToImage} className=' w-100' style={{ width: "100px" }} />
            <button className='col' onClick={() => { (current >= 0 && current < 2) && setCurrent(current + 1) }}> İleri</button>
        </div>
    )
}
