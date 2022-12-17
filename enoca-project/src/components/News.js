import React from 'react'

export default function News({ allNews }) {
    return (
        <>
            <h2 className='m-5'>Haberler</h2>
            <div className='row m-5'>
                {
                    allNews[0]?.map((item) => {
                        return (
                            <div className='home-card row m-2'>
                                <img src={item.urlToImage} />
                                <div className='card-desc col'>
                                    <p>{item.title}</p>
                                </div>

                            </div>)
                    })
                }
            </div>


        </>

    )
}
