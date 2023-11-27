import { FunctionComponent, memo } from "react";
import { courseType } from "../../type/type";
import { Card, Divider, Flex, Image, Rate, Space } from "antd";
import classNames from "classnames/bind";
import styles from "./CardCommon.module.scss";
import { Link } from "react-router-dom";
import { IconUserFilled } from "@tabler/icons-react";
import { IconCalenda } from "../Icon";
import ButtonCustom from "../Button";

const cx = classNames.bind(styles);

interface CardCommonProps {
  data: courseType;
  type?: "course" | "member";
  className?: string;
  divider: boolean;
}

const CardCommon: FunctionComponent<CardCommonProps> = ({
  data,
  type = "course",
  className,
  divider,
}) => {
  const BugImage = {
    cap_toc: "https://bsmart.edu.vn/assets/images/captoc.webp",
    de: "https://bsmart.edu.vn/files/Levels/1/ant-icon-01.webp",
    trung_binh: "https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp",
    kho: "https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp",
    cuc_kho: "https://bsmart.edu.vn/files/Levels/1/ant-icon-04.webp",
  };

  return (
    <div className={cx("wrap")}>
      <Card
        bodyStyle={{
          padding: `${
            type === "course" ? "40px 16px 16px 16px" : "15px 15px 10px 15px"
          }`,
          border: "1px solid #c1c1c1",
          position: "relative",
          borderTop: "none",
        }}
        className={cx("container", className)}
        cover={
          <Link to="/">
            {type === "course" ? (
              <div
                className={cx("banner")}
                style={{
                  backgroundImage: `url('${data.banner}')`,
                }}
              >
                <div className={cx("avatar")}>
                  <Image
                    src={data.avatar}
                    preview={false}
                    className={cx("avatar_content")}
                  ></Image>
                </div>
              </div>
            ) : (
              <Image
                src={data.banner}
                width={"100%"}
                preview={false}
                alt=""
                className={cx("avatar-mentor")}
              ></Image>
            )}
          </Link>
        }
      >
        <Space
          direction="vertical"
          className={cx("body")}
          align="start"
          style={{ rowGap: "0" }}
        >
          {type === "course" ? (
            <Link to="/" className={cx("title")}>
              <h5>{data.course}</h5>
            </Link>
          ) : (
            <Link to="/" style={{ textAlign: "center" }}>
              <h5
                style={{
                  margin: "0",
                  lineHeight: "34px",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#ff630e",
                }}
              >
                {data.mentor}
              </h5>
            </Link>
          )}

          {type === "course" && (
            <div className={cx("image_bug")}>
              <img
                className={cx("img")}
                src={(BugImage as any)[data.level]}
                alt="bug"
                style={{ width: 50, height: 50 }}
              />
            </div>
          )}

          {type === "course" && (
            <Link to="/" className={cx("mentor")}>
              <span>{data.mentor}</span>
            </Link>
          )}

          {type === "course" && (
            <Flex align="center">
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
          )}
          {type === "course" ? (
            <div className={cx("description")}>
              <p>{data.description}</p>
            </div>
          ) : (
            <h4 className={cx("mentor-description")}>{data.description}</h4>
          )}

          {type === "course" && (
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
          )}

          {type === "course" && (
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
          )}

          {divider && <Divider style={{ margin: "16px 0 0 0" }} />}

          {type === "course" ? (
            <ButtonCustom
              className={cx("btn", {
                divider,
              })}
              primary
            >
              XEM CHI TIẾT
            </ButtonCustom>
          ) : (
            ""
          )}
        </Space>
      </Card>
    </div>
  );
};

export default memo(CardCommon);
