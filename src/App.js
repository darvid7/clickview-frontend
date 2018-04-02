import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardCollection from './components/CardCollection';
import AppState from './model/AppState';
import {categoryParser, tagParser} from './utils/DataParser';
import AutoCompleteSearch from './components/AutoCompleteSearch';
import AppBarWithMennu from './components/AppBarWithMenu';

let appState = new AppState();
appState.tags = [];
console.log('tags b4');
console.log(appState.tags);

class App extends Component {

  componentDidMount () {
    // Copy of window.videos.
    const videoMetaData = window.videos.slice(0);
    appState.videoMetaDataTotal = window.videos.slice(0);
    // Load the videos.
    videoMetaData.forEach((e) => appState.videoMetaData.push(e));
    let parsedCategories = categoryParser(videoMetaData);
    parsedCategories.forEach((cat) => appState.categories.push(cat));
    let parsedTags = tagParser(videoMetaData);
    parsedTags.forEach((tag) => appState.tags.push(tag));

    console.log('tags');
    console.log(appState.tags);
    console.log('categories');
    console.log(appState.categories);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div
          style={{
            background: '#FFE0B2',
            minHeight: '1000px'
          }}
        >
          <AppBarWithMennu/>
          <div
            style={{
              padding: '16px',
            }}>
            <AutoCompleteSearch state={appState}/>
            <CardCollection state={appState}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
