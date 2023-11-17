import { FunctionComponent } from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Flex } from "antd";
const cx = classNames.bind(styles);
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={cx("wrap")}>
      <Flex justify="center" align="center" className={cx("container")}>
        <div className={cx("")}></div>
      </Flex>
    </footer>
  );
};

export default Footer;
