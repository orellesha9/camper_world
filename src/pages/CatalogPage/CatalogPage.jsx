// import styles from './movies-page.module.css';
// import PostsSearch from "components/PostsSearch/PostsSearch";
import Container from 'components/Container';
import CustomInput from 'components/CustomInput/CustomInput';
import css from './catalog-page.module.css';
import testdata from '../../assets/test';
import CampersList from 'components/CampersList/campresList';
const CatalogPage = () => {
    return (
        <Container>
            <section>
                <div className={css.wrapper}>
                    <div className={css.filter}>
                        <CustomInput />
                    </div>
                    <div>
                        <CampersList items={testdata} />
                    </div>
                </div>
            </section>
        </Container>
    );
};
export default CatalogPage;
