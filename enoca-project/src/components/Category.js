import React, { useEffect, useState } from 'react'

export default function Category() {

    const [news, setNews] = useState()
    const [category, setCategory] = useState("")

    function fetchData() {
        fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=676f017549224f488970f1835f9db971`)
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
            })

    }


    console.log(news)


    useEffect(() => {
        fetchData()
    }, [category])




    return (
        <div>

            <div className='category'>
                <h5>Kategoriler</h5>
                <button className='btn btn-outline-dark' onClick={() => { setCategory("business") }}>business</button>
                <button className='btn btn-outline-dark' onClick={() => { setCategory("entertainment") }}>entertainment</button>
                <button className='btn btn-outline-dark' onClick={() => { setCategory("general") }}>general</button>
                <button className='btn btn-outline-dark' onClick={() => { setCategory("health") }}>health</button>
                <button className='btn btn-outline-dark' onClick={() => { setCategory("science") }}>science</button>
                <button className='btn btn-outline-dark' onClick={() => { setCategory("sports") }}>sports</button>
                <button className='btn btn-outline-dark' onClick={() => { setCategory("technology") }}>technology</button>
            </div>


            <h5>Haberler</h5>
            <div className='news-category'>
                {
                    news?.map((item) => {
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



        </div>
    )
}
