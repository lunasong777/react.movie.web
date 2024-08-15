import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail () {
  document.body.style.backgroundColor = 'dimgray'
  document.body.style.color = 'gainsboro'
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getMovie()
  }, []);
  const getMovie = async () => {
    const json = await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovieDetail(json.data.movie)
    console.log(json.data.movie)
    console.log('gg',movieDetail)
    setLoading(false)
  };

  return (
      <>
        {loading ? <h1>Loading...</h1>:
            <div>
              <img src={movieDetail.large_cover_image} alt={movieDetail.title}/>
              <h1>{movieDetail.title_long}</h1>
              <h2>Rating {movieDetail.rating}</h2>
              <p>{movieDetail.description_full? movieDetail.description_full: null}</p>
            </div>
        }

      </>
  )
}

export default Detail