import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as C from './App.styles';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ebf6d40b6356a657fa7a2208a02e3bbd&units=metric`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        // console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <>
      <C.Container>
        <C.Input
          placeholder="Choose City"
          type="text"
          value={location}
          onKeyPress={searchLocation}
          onChange={(event) => setLocation(event.target.value)}
        />
        <C.Card>
          <C.Content>
            <C.Name>{data.name}</C.Name>
            {data.main ? <C.Temperature>{data.main.temp.toFixed(0)}°</C.Temperature> : null}
            {data.main ? <C.Description>{data.weather[0].description}</C.Description> : null}
          </C.Content>
        </C.Card>

        {data.name != undefined && (
          <C.BottomDiv>
            <C.DivInfo>
              Min<span>{data.main.temp_min.toFixed(0)}°</span>
            </C.DivInfo>
            <C.DivInfo>
              Max<span>{data.main.temp_max.toFixed(0)}°</span>
            </C.DivInfo>
            <C.DivInfo>
              Feels Like<span>{data.main.feels_like.toFixed(0)}°</span>
            </C.DivInfo>
          </C.BottomDiv>
        )}
      </C.Container>
    </>
  );
}

export default App;
