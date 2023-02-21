import {useState} from 'react'
import Map from '../components/Maps';
import Button from 'react-bootstrap/Button';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div className='shops' >
    <Button onClick={() => setCoordinates({lngLat: [58.9191, 25.4133], zoom: 7})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Tallinna poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</Button>
    
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;