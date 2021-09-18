import {useState} from 'react';
import Map from './components/Map';
import SearchComponent from './components/SearchComponent';


function App() {

  const [center, setCenter] = useState({ lat: 33.971588, lng: -6.849813 })
  const [zoom, setZoom] = useState(10)

  const ChangeGeography = (latValue , lngValue) => {
    setCenter({lat: parseInt(latValue) , lng: parseInt(lngValue)})
    setZoom(16)
  }

  return (
    <>
      <SearchComponent ChangeGeography={ChangeGeography} />
      <Map center={center} zoom={zoom} />
    </>
  );
}

export default App;