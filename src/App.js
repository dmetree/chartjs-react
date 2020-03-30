import React, { Component } from 'react';
import s from './App.module.css';
// import { Line } from 'react-chartjs-2';
import Chart from './components/Chart';



class App extends Component {


  render() {

    return (
      <div className={s.App}>
         <Chart/>
      </div>
    );
  }
}

export default App;