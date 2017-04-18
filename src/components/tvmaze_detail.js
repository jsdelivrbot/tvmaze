import React from 'react';
import noimage from '../utils/no_image';

const TVMazeDetail = ({serie}) => {

  if(!serie) {
    return <div>Loading...</div>;
  }


  const genreList =  serie.show.genres.map(genre => {
    return <span key={genre}>{genre}</span>;
  });

  return (
      <div className="serie-detail col-md-8">
        <div className="details">
          <h4>{serie.show.name}</h4>
          <h5>Language: {serie.show.language}</h5>
          {serie.show.summary.replace(/<\/?[a-z]+>/gi, '')}
          <div className="genre">{genreList}</div>
        </div>
        <div>
          <img src={serie.show.image? serie.show.image.original: noimage}
          className="img-fluid" alt={serie.show.name} />
        </div>
      </div>

  );
};

export default TVMazeDetail;
