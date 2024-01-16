import React from 'react'
import { Link,Route,Routes } from 'react-router-dom';

function NotFound() {
  return (
    <div>
        <h3>Lehekülge ei leitud</h3>
        <Link to= "/">
         <button className="nupu-stiil" >Avalehele</button>
        </Link>
    </div>
  )
}

export default NotFound