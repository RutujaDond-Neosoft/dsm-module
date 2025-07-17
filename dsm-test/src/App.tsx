import React from 'react';
import './App.css';
import CustomButton from './components/CustomButton';
import CustomSwitch from './components/CustomSwitch';
import CustomSlider from './components/CustomSlider';
import CustomTypography from './components/CustomTypography';
import CustomInput from './components/CustomInput';

function App() {
  return (
    <div className="App" style={{padding: '20px'}}>
      <CustomButton />
      <CustomSwitch />
      <CustomSlider />
      <CustomTypography />
      <CustomInput />
    </div>
  );
}

export default App;
