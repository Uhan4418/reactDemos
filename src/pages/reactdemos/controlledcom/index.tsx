import React, { Component, FC, useState } from 'react'

const NameForm: FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: any) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: any) => {
    alert(`提交的名字: ${value}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名字:
          <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="提交" />
    </form>
  );
}

export default NameForm