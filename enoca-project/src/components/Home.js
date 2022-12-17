import React, { useState, useEffect } from 'react'
import Slider from './Slider';
export default function Home() {

    const [news, setNews] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    let slideNews = news.slice(0, 3)
    let allNews = []

    let tempPage = 3
    for (let i = 0; i < (news.length / 20); i++) {
        allNews.push(news.slice(tempPage, tempPage + 20))
        tempPage = tempPage + 20;

    }

    console.log(allNews)

    function fetchData() {
        fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971')
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
            })

    }

    useEffect(() => {
        fetchData()
    }, [])



    return (

        <>

            <Slider news={slideNews} />


            <h2 className='m-5'>Haberler</h2>
            <div className='row m-5' style={{ height: "100%" }}>
                {
                    allNews[pageNumber]?.map((item) => {
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

            <nav>
                <ul class="pagination justify-content-center">
                    {
                        allNews?.map((item, key) => {
                            return (<li class="page-item"><button onClick={() => { setPageNumber(key) }}>{key + 1}</button></li>)
                        })
                    }


                </ul>
            </nav>




        </>
    )
}
