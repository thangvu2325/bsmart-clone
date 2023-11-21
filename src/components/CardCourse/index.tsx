import { FunctionComponent, memo } from "react";
import { courseType } from "../../type/type";
import { Divider, Flex, Image } from "antd";
import classNames from "classnames/bind";
import styles from "./CardCourse.module.scss";
import { Link } from "react-router-dom";
import { IconUserFilled } from "@tabler/icons-react";
import { Rate } from "antd";
import { IconCalenda } from "../Icon";
import ButtonCustom from "../Button";

const cx = classNames.bind(styles);
interface CardCourseProps {
  data: courseType;
  className?: string;
  divider: boolean;
}
const BugImage = {
  cap_toc: "https://bsmart.edu.vn/assets/images/captoc.webp",
  de: "https://bsmart.edu.vn/files/Levels/1/ant-icon-01.webp",
  trung_binh: "https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp",
  kho: "https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp",
  cuc_kho: "https://bsmart.edu.vn/files/Levels/1/ant-icon-04.webp",
};

const CardCourse: FunctionComponent<CardCourseProps> = ({
  data,
  className,
  divider,
}) => {
  return (
    <Flex justify="center" className={cx("wrap")}>
      <div
        className={cx("container", {
          [`${className}`]: true,
        })}
      >
        <Link to="/">
          <div
            className={cx("banner")}
            style={{ backgroundImage: `url('${data.banner}')` }}
          >
            <div className={cx("avatar")}>
              <Image
                src={data.avatar}
                preview={false}
                className={cx("avatar_content")}
              ></Image>
            </div>
          </div>
        </Link>
        <div className={cx("body")}>
          <Link to={"/"} className={cx("title")}>
            <h5>{data.course}</h5>
          </Link>
          <div className={cx("image_bug")}>
            <Image
              src={(BugImage as any)[data.level]}
              preview={false}
              width={50}
              height={50}
            ></Image>
          </div>
          <Link to={"/"} className={cx("mentor")}>
            Mentor
            <span>{data.mentor}</span>
          </Link>
          <Flex className={cx("count")} justify="left" align="center">
            <IconUserFilled width={16} height={16}></IconUserFilled>
            <i
              style={{
                fontSize: "1.6rem",
                color: "#212529",
                paddingLeft: "5px",
                lineHeight: "16px",
                fontWeight: "400",
              }}
            >
              {data.count} Học viên
            </i>
          </Flex>
          <div className={cx("description")}>
            <p>{data.description}</p>
          </div>
          <Rate
            disabled
            allowHalf={true}
            defaultValue={data.rate}
            style={{
              height: "34px",
              lineHeight: "34px",
              color: "#ff630e",
              display: "flex",
              justifyContent: "left",
            }}
          />
          <Flex align="center" className={cx("feedback")}>
            <div className={cx("price")}>
              {data?.price?.toLocaleString()} VND
            </div>
            <Flex className={cx("session")} align="center">
              <IconCalenda
                width="16px"
                height="16px"
                className={cx("icon")}
              ></IconCalenda>
              <span> {data.session} Buổi học</span>
            </Flex>
          </Flex>
          {divider ? <Divider style={{ margin: "16px 0 0 0" }}></Divider> : ""}

          <ButtonCustom
            className={cx("btn", {
              divider,
            })}
            primary
          >
            XEM CHI TIẾT
          </ButtonCustom>
        </div>
      </div>
    </Flex>
  );
};

export default memo(CardCourse);
