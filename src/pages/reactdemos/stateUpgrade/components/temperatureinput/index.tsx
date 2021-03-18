import React, {FC} from "react";

type PropsType = {
  temperature: string;
  scale: string;
  onTemperatureChange : (a?:any) => void
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput: FC<PropsType> = (props) => {

  const handleChange = (e: { target: { value: any; }; }) => {
    props.onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input value={props.temperature}
             onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput