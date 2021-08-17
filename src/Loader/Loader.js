import Loader from "react-loader-spinner";
import styles from './Loader.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spiner = () => (
    <Loader
        type="ThreeDots"
        color="#3f51b5"
        className={styles.loader}
    />
);

export default Spiner;