import React from 'react'

export default function About() {
    return (
        <div className='about'>

            <div className='about-left bg-light'>

                <div className='m-4'>
                    <h2>Beceriler</h2>
                    <p>React.js</p>
                    <p>Linkedin</p>
                    <p>Github</p>
                    <p>Javascript</p>
                    <p>HTML & CSS && Bootstrap </p>
                    <p>Node.js</p>
                    <p>Veri Yapıları</p>
                    <p>Derin Öğrenme</p>
                    <p>Python</p>
                    <p>MySQL</p>
                    <p>Makine Öğrenimi</p>



                    <h5 className='mt-5'>Telefon</h5> <span>+90 552 799 22 81</span>
                    <h5 className='mt-2'>E-posta</h5> <span><a href="kolcayhan1@gmail.com" className='text-dark'>kolcayhan1@gmail.com</a></span>
                    <h5 className='mt-2'>Linkedin</h5> <span><a href="https://www.linkedin.com/in/olcayhan/" className='text-dark'>https://www.linkedin.com/in/olcayhan/</a></span>
                    <h5 className='mt-2'>Github</h5> <span><a href="https://github.com/olcayhan" className='text-dark'>https://github.com/olcayhan</a></span>



                </div>

            </div>

            <div className='about-right m-4'>

                <h1 >OLCAY HAN</h1>
                <h1>KORKUT</h1>

                <h4 className='bg-light px-5 mt-5'>Hakkımda</h4>
                <p className='mt-4'>
                    Ben Olcay Han Korkut, Bandırma 17 Eylül Üniversitesinde 2.Sınıf Bilgisayar Mühendisliği Öğrencisiyim.
                    Aktif olarak React ile kodlama yapıyorum ve angular öğreniyorum.
                    Javascript ve Python kodlama dillerini biliyorum.
                </p>

                <h4 className='bg-light px-5 mt-5'>Projelerim</h4>


                <span>Kullanıcı için To Do List hazırlayan bir React Programı  </span>
                <a href='https://github.com/olcayhan/TodoApp'>TodoApp</a>
                <br />
                <span> Bir Müzik Akademisi için React ile  Websitesi hazırlıyorum </span>
                <a href="https://github.com/olcayhan/website-project">Website</a>
                <br />
                <span> Kelimeleri ingilizce ve türkçe kaydedip quiz yapan bir React programı </span>
                <a href="https://github.com/olcayhan/QuizLate">QuizLate</a>

                <p>Bu ve Buna benzer projelerimi görmek için github adresimi ziyaret edebilirsiniz.</p>




                <h4 className='bg-light px-5 mt-5'>Sertifikalarım</h4>
                <div className='col'>
                    <a href='https://www.sololearn.com/certificates/CT-VH9EFN2G' className='row'>Javascript</a>
                    <a href='https://www.hackerrank.com/certificates/0c438f156652' className='row'>Python</a>
                    <a href='https://www.hackerrank.com/certificates/iframe/82b9a078f151' className='row'>React</a>
                    <a href='https://www.hackerrank.com/certificates/82745feec674' className='row'>SQL</a>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/9AFRR5K2RDXH' className='row'>Derin Öğrenme</a>


                </div>




            </div>


        </div>
    )
}
