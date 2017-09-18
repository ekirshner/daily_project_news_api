import React, { Component } from 'react';
import '../App.css';
//api key = 44ee69c9022d4d09a061bbe23d515896
//emonayyyy

import NewsSource from './NewsSource';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h1>News src = "here"</h1>
        </div>
        <div className="news-container">
          <div id="News1">
             <h2>ABC News</h2>
             <NewsSource from="abc-news-au"/>  
          </div>
          <div id="News2">
             <h2>Techcrunch</h2>
             <NewsSource from="techcrunch"/>
          </div>
          <div id="News3">
             <h2>Bloomberg</h2>
             <NewsSource from="bloomberg"/> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
