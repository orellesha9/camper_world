import { useState, useEffect } from 'react';
import styles from './post.module.css';
import { getAllPosts } from 'api/post';
import { Link, useLocation } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const { data } = await getAllPosts();
                setPosts(data.results?.length ? data.results : []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const elements = posts.map(({ id, title }) => (
        <li key={id} className={styles.ImageGalleryItem}>
            <Link to={`/posts/${id}`} state={{ from: location }}>
                {title}
            </Link>
        </li>
    ));
    return (
        <>
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {Boolean(elements.length) && (
                <ol className={styles.ImageGallery}>{elements}</ol>
            )}
        </>
    );
};

export default Post;
