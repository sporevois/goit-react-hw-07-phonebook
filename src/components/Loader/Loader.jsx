import { ThreeDots, RotatingLines } from 'react-loader-spinner';
import style from '../Loader/Loader.module.css';

export const LoaderThreeDots = () => (
  <div className={style.overlay}>
    <div className={style.loaderBox}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="lightcoral"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        timeout={10000}
      />
    </div>
  </div>
);

export const LoaderRotatingLines = () => (
  <RotatingLines
    strokeColor="lightcoral"
    strokeWidth="5"
    animationDuration="0.75"
    width="15"
    visible={true}
  />
);
