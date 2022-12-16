import React from 'react'

export default function Header() {
    return (
        <header className='mt-5'>
            

                <div className='row'>
                    <h1 className='col'>Olcay Han</h1>
                    {/* <input className='input col w-25 me-auto ' type="text" placeholder='search' />
                    <button className='btn btn-dark'>Ara</button> */}
                    <div className="form-group row">
                        <input type="text" className="form-control w-75" placeholder="search" />
                        <button type="submit" className="btn btn-dark">Ara</button>
                    </div>
                </div>


                <nav className='navbar navbar-expand-lg navbar-light'>
                    <ul className="navbar-nav">
                        <li className="nav-item mt-4">
                            <a className="nav-link text-dark" href="/">Anasayfa</a>
                        </li>
                        <li class="nav-item m-4">
                            <a className="nav-link text-dark" href="#">Kategoriler</a>
                        </li>
                        <li className="nav-item m-4">
                            <a className="nav-link text-dark" href="#">Politics</a>
                        </li>
                        <li className="nav-item m-4">
                            <a className="nav-link text-dark" href="#">Hakkimda</a>
                        </li>

                    </ul>
                </nav>




          


        </header>
    )
}
