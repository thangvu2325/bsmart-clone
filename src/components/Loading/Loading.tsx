import { FunctionComponent } from "react";
import { IconLoader } from "../Icon";
import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("loader")}>
        <IconLoader className={cx("icon")}></IconLoader>
      </div>
    </div>
  );
};

export default Loading;
