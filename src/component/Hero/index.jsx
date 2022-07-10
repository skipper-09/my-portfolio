import React from 'react'
import ImgHero from 'assets/images/programing.svg';

// style css
import './hero.css';
export default function Hero() {
    return (
        <div>
            <section className='hero '>
                <div className='container'>
                    <div className="row align-items-center content-hero">
                        <div className="col-md-6 col-12 col-lg-6 " data-aos="fade-up" data-aos-duration="2000">
                            <h2 className='text-capitalize display-2 hi '>Hi I'm </h2>
                            <span className='display-6 name mt-n1'>Ahmad Nurul Musthopa</span>
                            <p className='pt-2'>Saya seorang mahasiswa di Sekolah Ilmu Komputer di Banyuwangi.
                                saya seorang freelancer kemampuan yang saya miliki yaitu programing React Js  </p>
                            <div className="d-flex gap-2">
                                <button className="btn  hover btn-lg ">Here Me</button>
                                <button className="btn  ">Job Me</button>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 col-lg-6'>
                            <img src={ImgHero} alt="Image" width={520} className='img-fluid' data-aos="zoom-in" data-aos-duration="2000" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
