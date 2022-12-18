import React from 'react'

export default function Header() {


    let currentPage = window.location.pathname;

    return (
        <header className='header mt-4'>
            <div className='header-head row'>
                <h2 className='col-auto mr-auto'>Olcay Han Korkut</h2>

                <div className='col-auto'>
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>


            <nav className='navbar navbar-expand-lg navbar-light'>
                <ul className="navbar-nav">
                    <li className="nav-item ml-4">
                        <a className="nav-link text-dark" style={currentPage === "/" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/" >Anasayfa</a>
                    </li>
                    <li class="nav-item ml-4 ">
                        <a className="nav-link text-dark" style={currentPage === "/category" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/category" >Kategori</a>
                    </li>
                    <li className="nav-item  ml-4">
                        <a className="nav-link text-dark" style={currentPage === "/search" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/search">Arama</a>
                    </li>
                    <li className="nav-item  ml-4">
                        <a className="nav-link text-dark" style={currentPage === "/about" ? { backgroundColor: "#D6E4E5" } : { backgroundColor: "transparent" }} href="/about">Hakkımda</a>
                    </li>

                </ul>
            </nav>




            <hr />


        </header>
    )
}
