import styles from './CamperList.module.css';

const CampersList = ({ items }) => {
    const elements = items.map(
        ({
            id,
            name,
            // gallery,
            // price,
            // location,
            // rating,
            // description,
            // adults,
            // transmission,
            // engine,
            // details,
        }) => <li key={id}>{name}</li>
    );
    return <ul className={styles.list}>{elements}</ul>;
};
export default CampersList;
