import React from 'react';

export default function Homepage() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6 col-12 col-lg-6">
                            <h2 className='text-capitalize '>Hi I'm Ahmad Nurul Musthopa</h2>
                            <p>Saya seorang mahasiswa di Sekolah Ilmu Komputer di Banyuwangi. saya seorang freelancer  </p>
                            <div className="d-flex gap-2">
                                <button className="btn btn-primary hover btn-lg ">Here Me</button>
                                <button className="btn btn-secondary ">Job Me</button>
                            </div>
                        </div>

                        <div className='col-md-6 col-12 col-lg-6'>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
