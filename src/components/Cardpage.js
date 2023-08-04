import React from 'react'


export default function Cardpage(props) {

  let { title, discription} = props;


  return (
    <div>

    <div className='card-container'>
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>







</div>
    </div>
  )
}
