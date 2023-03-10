import React, { useState, useEffect } from 'react'
import Slider from './Slider';
export default function Home() {

    const [news, setNews] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    // slider için gösterilen haberler
    let slideNews = news.slice(0, 3)
    let allNews = []

    // sayfalama özelliği için haberlerin 10'ar olarak ayrılması 
    let tempPage = 3
    for (let i = 0; i < (news.length / 10); i++) {
        allNews.push(news.slice(tempPage, tempPage + 10))
        tempPage = tempPage + 10;
    }

    useEffect(() => {
        fetchData()
    }, [])

    // haberleri api'dan çekme foksyiyonu
    function fetchData() {
        fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=0139e30aec504b85b9ab98994e11fa24')
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
            })

    }




    return (

        <>

            <Slider news={slideNews} />


            <h2 className='m-5'>Haberler</h2>
            <div className='row m-5'>
                {
                    allNews[pageNumber]?.map((item) => {
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

            <nav>
                <ul class="pagination justify-content-center">
                    {
                        allNews?.map((item, key) => {
                            return (
                                <li className="page-item m-1">
                                    <button disabled={pageNumber === key && "disabled"} style={{ backgroundColor: "transparent", border: "none", fontSize: "20px" }} onClick={() => { setPageNumber(key) }}>{key + 1}</button>
                                </li>)
                        })
                    }
                </ul>
            </nav>




        </>
    )
}
