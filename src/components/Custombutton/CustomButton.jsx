import css from './CustomButton.module.css';

const CustomButton = ({ type, text }) => {
    return (
        <button type={type} className={css.btn}>
            {text}
        </button>
    );
};
export default CustomButton;
