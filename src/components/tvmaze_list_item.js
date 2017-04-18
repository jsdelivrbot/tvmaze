import React from 'react';
import noimage from '../utils/no_image';

const TVMazeListItem = ({serie, onSerieSelect}) => {
  return (
    <li className="list-group-item" onClick={() => onSerieSelect(serie)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object img-thumbnail show-thumbnail"
          src={serie.show.image ? serie.show.image.medium : noimage} />
        </div>
        <div className="media-body">
          <div className="media-heading">{serie.show.name}</div>
          <p>Rating: {serie.show.rating.average}/10</p>
        </div>
      </div>
    </li>
  );
};

export default TVMazeListItem;
