import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const roupa = props.data;
  return (
    <Link to={`/view/${roupa._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ roupa.tipo }</h5>
          <span className="badge bg-primary">{ roupa.genero }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
