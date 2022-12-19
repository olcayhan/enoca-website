import React, { useState } from 'react'

export default function Header() {

    const [check, setCheck] = useState()
    let currentPage = window.location.pathname;


    return (
        <header className='header mt-4'>
            <input type="checkbox" id="check" onChange={(e) => {
                e.target.checked ? setCheck(true) : setCheck(false)
            }} />
            <label htmlFor="check" className="checkbtn">
                <i className="fa-solid fa-bars"></i>
            </label>

            <div className='header-head row'>
                <h2 className='col-auto mr-auto'>Olcay Han Korkut</h2>

                <div className='col-auto'>
                    <input type="text" placeholder="Ara..." />
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>



            <nav className='navbar navbar-expand-lg navbar-light'>
                <ul className={!check ? "navbar-nav" : "navbar-nav-responsive"}>
                    <li className="nav-item ">
                        <a className="nav-link text-dark px-3" style={currentPage === "/" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/" >Anasayfa</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/category" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/category" >Kategori</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/search" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/search">Arama</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/general" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/general">Genel</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/business" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/business">İşletme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/entertainment" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/entertainment">Eğlence</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/health" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/health">Sağlık</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/science" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/science">Bilim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/sports" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/sports">Spor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/technology" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/technology">Teknoloji</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-dark px-3" style={currentPage === "/about" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/about">Hakkımda</a>
                    </li>


                </ul>
            </nav>




            <hr />


        </header>
    )
}
