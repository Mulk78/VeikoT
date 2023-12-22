import React from 'react'
import { Link,Route,Routes } from 'react-router-dom';

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on tühi</div>
      <Link to="/avaleht">
        <button className="nupu-stiil" >Avalehele</button>
      </Link>
    </div>
  )
}

export default Ostukorv