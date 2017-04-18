import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AsyncGet from './utils/async_get';
import SearchBar from './components/search_bar';
import TVMazeList from './components/tvmaze_list';
import TVMazeDetail from './components/tvmaze_detail';
import _ from 'lodash';
const ROOT_URL = 'http://api.tvmaze.com';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      selectedSerie: null
    };

    this.serieSearch('girls');
  }

  serieSearch(query) {
    AsyncGet(`${ROOT_URL}/search/shows?q=${query}`)
      .then(
          series => {this.setState(
            {
              series: series,
              selectedSerie: series[0]
            }
          )},
          error => console.log(error)
        );
  }

  render () {
    const videoSearch = _.debounce((query) => {this.serieSearch(query)}, 300);

    return (
      <div>
        <SearchBar onSearchQueryChanged={videoSearch} />
        <TVMazeDetail serie={this.state.selectedSerie} />
        <TVMazeList
         onSerieSelect={selectedSerie => this.setState({selectedSerie})}
         series={this.state.series} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
