import React, { useEffect, useState } from 'react'

export default function Category() {

    const [news, setNews] = useState()
    const [category, setCategory] = useState("general")

    function fetchData() {
        fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=0139e30aec504b85b9ab98994e11fa24`)
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
            })
            .catch((err) => { console.log(err) })

    }


    console.log(news)


    useEffect(() => {
        fetchData()
    }, [category])




    return (
        <div className='category'>

            <div className='category-categories'>
                <h2 className='mt-3'>Kategoriler</h2>
                <button className='mt-3' disabled={category === "general" && "disabled"} onClick={() => { setCategory("general") }}>Genel</button>
                <button disabled={category === "business" && "disabled"} onClick={() => { setCategory("business") }}>İşletme</button>
                <button disabled={category === "entertainment" && "disabled"} onClick={() => { setCategory("entertainment") }}>Eğlence</button>
                <button disabled={category === "health" && "disabled"} onClick={() => { setCategory("health") }}>Sağlık</button>
                <button disabled={category === "science" && "disabled"} onClick={() => { setCategory("science") }}>Bilim</button>
                <button disabled={category === "sports" && "disabled"} onClick={() => { setCategory("sports") }}>Spor</button>
                <button disabled={category === "technology" && "disabled"} onClick={() => { setCategory("technology") }}>Teknoloji</button>
            </div>
            <div className='category-line'></div>

            <div className='category-news row'>
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



        </div>
    )
}
