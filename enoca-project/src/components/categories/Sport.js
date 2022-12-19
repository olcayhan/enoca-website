import React, { useState, useEffect } from 'react'

export default function Sport() {
    const [news, setNews] = useState()

    function fetchData() {
        fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=0139e30aec504b85b9ab98994e11fa24`)
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
            })
            .catch((err) => { console.log(err) })

    }

    useEffect(() => {
        fetchData()
    }, [])




    return (

        <>

            <h2 className=' text-center m-5'>Spor</h2>
            <div className='row m-5'>
                {
                    news?.map((item) => {
                        return (
                            <div className='news-card bg-light'>
                                <img src={item.urlToImage} />
                                <div className='card-desc'>
                                    <p>{item.title}</p>
                                </div>

                            </div>)
                    })
                }
            </div>


        </>





    )
}
