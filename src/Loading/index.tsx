import { FunctionComponent } from "react";
import styles from "./Loading.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
type LoadingProps = {};
const Loading: FunctionComponent<LoadingProps> = () => {
  return <div className={cx("wrap")}></div>;
};
export default Loading;
