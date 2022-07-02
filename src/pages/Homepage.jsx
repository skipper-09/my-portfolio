import React from 'react';

export default function Homepage(props) {
    return (
        <>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <h2 className='text-capitalize '>Ahmad Nurul Musthopa</h2>
                            <p>Saya seorang mahasiswa semester 6 di stikom pgri banyuwangi </p>
                            <div className="d-flex gap-2">
                                <button className="btn btn-primary hover btn-lg ">Here Me</button>
                                <button className="btn btn-secondary ">Job Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}