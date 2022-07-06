import React from 'react'

export default function servicecard(props) {
  return (
    <div>
      <div className="col-12  ">
        <div className='d-flex box-child  align-items-center gap-3 p-3 rounded '>
          <img src={props.image} alt="developer" className='img-fluid ' width={60} />
          <div className='row'>
            <div className="col"><span className='fw-bold'>{props.name_service}</span></div>
            <span>{props.service_details}</span>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
