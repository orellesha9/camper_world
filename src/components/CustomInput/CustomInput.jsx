import icons from 'assets/react.svg';
// import { useSelector } from 'react-redux';
import css from './CustomInput.module.css';
import CustomButton from 'components/Custombutton/CustomButton';
const CustomInput = () => {
    // const campers = useSelector((store) => store.campers);

    // type,
    // name,
    // placeholder,
    // onClick,
    // register,
    // errors,

    {
        return (
            <form>
                <div className={css.wrapper}>
                    <label className={css.label}>Location</label>
                    <input
                        className={css.input}
                        type="text"
                        name="location"
                        id="location"
                        required
                        placeholder="City"
                    />
                    <svg className={css.input_icon}>
                        <use href={`${icons}#map-pin`}></use>
                    </svg>
                </div>
                <div>
                    <p className={css.filter_text}>Filters</p>
                    <h3 className={css.title_text}>Vehicle equipment</h3>
                    <div>
                        <ul className={css.list}>
                            <li className={css.li_icon}>
                                <div className={css.icon_container}>
                                    <svg className={css.icon_svg}>
                                        <use href={`${icons}#ac`}></use>
                                    </svg>
                                    <p className={css.icon_text}>AC</p>
                                </div>
                            </li>
                            <li className={css.li_icon}>
                                <div className={css.icon_container}>
                                    <svg className={css.icon_svg}>
                                        <use href={`${icons}#automatic`}></use>
                                    </svg>
                                    <p className={css.icon_text}>Automatic</p>
                                </div>
                            </li>

                            <li className={css.li_icon}>
                                <div className={css.icon_container}>
                                    <svg className={css.icon_svg}>
                                        <use href={`${icons}#kitchen`}></use>
                                    </svg>
                                    <p className={css.icon_text}>Kitchen</p>
                                </div>
                            </li>
                            <li className={css.li_icon}>
                                <div className={css.icon_container}>
                                    <svg className={css.icon_svg_fill}>
                                        <use href={`${icons}#TV`}></use>
                                    </svg>
                                    <p className={css.icon_text}>TV</p>
                                </div>
                            </li>

                            <li className={css.li_icon}>
                                <div className={css.icon_container}>
                                    <svg className={css.icon_svg}>
                                        <use href={`${icons}#WC`}></use>
                                    </svg>
                                    <p className={css.icon_text}>Shower/WC</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={css.wrapper}>
                    <h3 className={css.title_text}>Vehicle type</h3>
                    <ul className={css.list}>
                        <li className={css.li_icon}>
                            <div className={css.icon_container}>
                                <svg className={css.icon_svg_camper}>
                                    <use href={`${icons}#Van`}></use>
                                </svg>
                                <p className={css.icon_text}>Van</p>
                            </div>
                        </li>
                        <li className={css.li_icon}>
                            <div className={css.icon_container}>
                                <svg className={css.icon_svg_camper}>
                                    <use href={`${icons}#full`}></use>
                                </svg>
                                <p className={css.icon_text}>
                                    Fully Integrated
                                </p>
                            </div>
                        </li>
                        <div className={css.icon_container}>
                            <svg className={css.icon_svg_camper}>
                                <use href={`${icons}#alcove`}></use>
                            </svg>
                            <p className={css.icon_text}>Alcove</p>
                        </div>
                    </ul>
                </div>

                <CustomButton text="Search" />
            </form>
        );
    }
};

export default CustomInput;
