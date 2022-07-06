import React from 'react'
import ImgService from 'assets/images/service.svg'
import ServiceCard from 'element/service-card'
import { ServiceData } from 'data/data'
export default function Service() {
  return (
    <>
      <section className=''>
        <div className='container'>

          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={ImgService} alt="Service Image" className='img-fluid' data-aos="zoom-in" data-aos-duration="3000" />
            </div>
            <div className="col-md-6 ">
              <h2 className='display-5 fw-bold subtitle mb-5'>My Service</h2>
              <div className='mt-3 p-4 box rounded shadow'>
                <div className='row gy-4 '>
                  {ServiceData.map((data, idx) => (
                    <ServiceCard key={idx} image={data.image} name_service={data.title} service_details={data.deskription} />
                  )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
