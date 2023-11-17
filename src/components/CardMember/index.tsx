import { FunctionComponent } from "react";
import { cardType } from "../../type/type";
import { Flex, Image } from "antd";
import classNames from "classnames/bind";
import styles from "./CardMember.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
interface CardMemberProps {
  data: cardType;
}

const CardMember: FunctionComponent<CardMemberProps> = ({ data }) => {
  return (
    <Flex justify="center" className={cx("wrap")}>
      <div className={cx("container")}>
        <Link to="/">
          <Image
            src={data.banner}
            preview={false}
            width={"100%"}
            className={cx("banner")}
          ></Image>
        </Link>
        <div className={cx("body")}>
          <Link to={"/"} className={cx("title")}>
            <h5>{data.mentor}</h5>
          </Link>
          <div className={cx("description")}>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default CardMember;
