import React from 'react'
import ImgService from 'assets/images/service.svg'
import Developer from 'assets/images/developer.svg'
export default function Service() {
  return (
    <>
      <section className=''>
        <div className='container'>

          <div className="row">
            <div className="col">
              <img src={ImgService} alt="Service Image" className='img-fluid' />
            </div>
            <div className="col">
              <div className='title'><h2 className='display-6 fw-bold'>My Servcice</h2></div>
              <div className='box rounded'>
                <div className='row p-3'>
                  <div className="col-12 gap-1 ">
                    <div className='d-flex box-child  align-items-center gap-3 p-3 rounded '>
                      <img src={Developer} alt="developer" className='img-fluid rounded-circle' width={60} />
                      <div className='row'>
                        <div className="col"><span className='fw-bold'>Developer</span></div>
                        <span>Keahlihan Programing saya tidak diragukan lagi</span>
                        <div className="col"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3 ">
                    <div className='d-flex box-child  align-items-center gap-3 p-3 rounded '>
                      <img src={Developer} alt="developer" className='img-fluid rounded-circle' width={60} />
                      <div className='row'>
                        <div className="col"><span className='fw-bold'>Developer</span></div>
                        <span>Keahlihan Programing saya tidak diragukan lagi</span>
                        <div className="col"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3 ">
                    <div className='d-flex box-child  align-items-center gap-3 p-3 rounded '>
                      <img src={Developer} alt="developer" className='img-fluid rounded-circle' width={60} />
                      <div className='row'>
                        <div className="col"><span className='fw-bold'>Developer</span></div>
                        <span>Keahlihan Programing saya tidak diragukan lagi</span>
                        <div className="col"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
