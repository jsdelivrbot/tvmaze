import React from 'react';
import TVMazeListItem from './tvmaze_list_item';

const TVMazeList = (props) => {

  const serieItems = props.series.map(serie => {
    return (
            <TVMazeListItem
            onSerieSelect={props.onSerieSelect}
            key={serie.show.id}
            serie={serie} />
          );
  });

  return (
    <ul className="col-md-4 list-group">
      {serieItems}
    </ul>
  );
};

export default TVMazeList;
