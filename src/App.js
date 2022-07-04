import React, {Component} from 'react';
import './App.css';
import Moment from "react-moment";
import 'moment/locale/es'
import moment from "moment";
import {Button} from "./components/button";
import {Table} from "./components/table";
import {Search} from "./components/search";
import TimeComponent from "./timer";
import Photo from "./photo";
const DEFAULT_QUERY = 'react';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

export const clock=()=>{
  return(
      <div className='box-reloj'>
        <h1> {new Date().toLocaleTimeString()}</h1>
      </div>
  )
}
const App=()=>{

  return (
      <div className="App">
        <TimeComponent />
        <Photo />
      </div>
    );
  }











export default App;
