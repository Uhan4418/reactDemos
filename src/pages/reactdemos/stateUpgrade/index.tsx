/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC, useState } from 'react';
import BoilingVerdict from './components/boilingVerdict';
import TemperatureInput from './components/temperatureinput';

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: { (fahrenheit: number): number; (celsius: number): number; (arg0: number): any; }) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

type PropsType = {

}

const Calculator: FC<PropsType> = () => {
  const [scale, setScale] = useState<string>('c')
  const [temperature, setTemperature] = useState<string>('')

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
  
  const handleCelsiusChange = (temperature:any) => {
    setScale('c');
    setTemperature(temperature)
  }

  const handleFahrenheitChange = (temperature:any) => {
    setScale('f');
    setTemperature(temperature)
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict
        celsius={parseFloat(celsius)} />
    </div>
  );

}

export default Calculator