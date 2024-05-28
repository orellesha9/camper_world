import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCommetsByPostId } from 'api/post';

import styles from "./SinglePostComentPage.module.css"

const SinglePostComentsPage = () => {
  const [coments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const isComments = Boolean(coments.length);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const { data } = await getCommetsByPostId(id);
        setComments(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [id]);
  const elements = coments.map(
    ({ id, profile_path, original_name, character }) => (
      <li key={id}>
         <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt="" className={styles.img}/>
        <h4>{original_name}</h4>
        <p>{character}</p>
      </li>
    )
  );

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isComments && <ul>{elements}</ul>}
    </>
  );
};

export default SinglePostComentsPage;
