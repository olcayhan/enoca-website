import React, { useState, useEffect } from 'react'
import Slider from './Slider';
export default function Home() {

    const [news, setNews] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);




    function fetchData() {
        fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971')
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
            })

    }

    useEffect(() => {
        fetchData()
        setPageNumber(news.length / 20)

    }, [])




    console.log(pageNumber)








    return (

        <>

            <Slider news={news} />

            <div className='row m-2'>
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

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>

                </ul>
            </nav>




        </>
    )
}
