import React, { useState, useEffect } from 'react'

export default function Search() {

    const [news, setNews] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [filter, setFilter] = useState(news);

    useEffect(() => {
        fetchData()
    }, [])


    useEffect(() => {
        setFilter(news)
    }, [news])

    let allNews = []
    let tempPage = 0
    for (let i = 0; i < (filter.length / 10); i++) {
        allNews.push(filter.slice(tempPage, tempPage + 10))
        tempPage = tempPage + 10;

    }




    function fetchData() {
        fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=0139e30aec504b85b9ab98994e11fa24')
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
            })

    }


    console.log(filter);


    return (
        <div>

            <div className='search-input text-center'>
                <p className='mt-4'>Aranılacak Kelimeyi Yazınız</p>
                <input type="text" placeholder="Ara..." onChange={(e) => {
                    let newFiltered = []
                    news?.map((item) => {
                        if (item.title.toLowerCase().includes(e.target.value.toLowerCase()))
                            return newFiltered.push(item)
                    })
                    setFilter(newFiltered)
                }} />
            </div>

            <h2 className='m-5 text-center'>Haberler</h2>
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

        </div>
    )
}
