import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line
function Movie({id, medium_cover_image, title, summary, genres}) {
  return <div>
    <img src={medium_cover_image} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`} className="test">{title}</Link></h2>
    <p>{summary}</p>
    <ul>
      {genres?.map(genre => (<li key={genre}>{genre}</li>))}
    </ul>
    <hr/>
  </div>
}

Movie.propType = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;