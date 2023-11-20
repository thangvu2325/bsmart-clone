import { FunctionComponent } from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Divider, Flex } from "antd";
import { Link } from "react-router-dom";
import {
  IconFacebook,
  IconLinkedin,
  IconYoutube,
} from "../../../components/Icon";
import routes from "../../../config/route";
const cx = classNames.bind(styles);
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={cx("wrap")}>
      <Flex className={cx("row")} wrap="wrap">
        <div
          className={cx("col-4")}
          style={{ flex: "0 0 auto", width: "33.3333333%" }}
        >
          <div className={cx("content_logo")}>
            <div className={cx("logo")}>
              <img
                src="https://bsmart.edu.vn/files/icon-logo-footer.webp"
                className={cx("image")}
                alt="logo"
              ></img>
            </div>
            <p className={cx("description")}>
              Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ
              năng lập trình của bạn. Tất cả các mentor của chúng tôi đều có
              nhiều kinh nghiệm trong thực tế và giảng dạy.
            </p>
            <h6 className={cx("description_bottom")}>
              Theo dõi chúng tôi tại:
            </h6>
            <Flex className={cx("left_brand-list")}>
              <Link
                to="https://www.facebook.com/bsmart.edu.vn"
                className={cx("left_icon-brand")}
              >
                <IconFacebook width={"18px"} height={"18px"}></IconFacebook>
              </Link>
              <Link
                to="https://www.linkedin.com/company/amazingtech74"
                className={cx("left_icon-brand")}
              >
                <IconLinkedin width={"18px"} height={"18px"}></IconLinkedin>
              </Link>

              <Link
                to={"https://www.youtube.com/channel/UCxuIkuRJkam2Ii3xPehiirw"}
                className={cx("left_icon-brand")}
              >
                <IconYoutube width={"18px"} height={"18px"}></IconYoutube>
              </Link>
            </Flex>
          </div>
        </div>
        <div
          className={cx("col")}
          style={{ flex: "0 0 auto", width: "16.66666667%" }}
        >
          <div className={cx("content")}>
            <h4 className={cx("title")}>Menu</h4>
            <ul className={cx("list")}>
              <li>
                <Link to={routes.home}>Trang chủ</Link>
              </li>
              <li>
                <Link to={routes.aboutus}>Về chúng tôi</Link>
              </li>
              <li>
                <Link to={routes.course}>Nền tảng LMS</Link>
              </li>
              <li>
                <Link to={routes.stem}>Khoá học STEM</Link>
              </li>
              <li>
                <Link to={routes.course}>Khoá học</Link>
              </li>
              <li>
                <Link to={routes.mentor}>Mentor</Link>
              </li>
              <li>
                <Link to={routes.blog}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={cx("col")}
          style={{ flex: "0 0 auto", width: "16.66666667%" }}
        >
          <div className={cx("content")}>
            <h4 className={cx("title")}>Điều khoản</h4>
            <ul className={cx("list")}>
              <li>
                <Link to={"/"}>Chính sách bảo mật</Link>
              </li>
              <li>
                <Link to={"/"}>Điều khoản dịch vụ</Link>
              </li>
            </ul>
            <h4 className={cx("title")}>Cộng tác viên</h4>
            <ul className={cx("list")}>
              <li>
                <Link to={"/"}>Đăng ký Cộng tác viên</Link>
              </li>
              <li>
                <Link to={"/"}>Đăng ký Mentor</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={cx("col-4")}
          style={{ flex: "0 0 auto", width: "33.3333333%" }}
        >
          <div className={cx("content")}>
            <h4 className={cx("title")} style={{ marginBottom: "10px" }}>
              Liên hệ với chúng tôi
            </h4>
            <ul className={cx("list")}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "-16px",
                  padding: "0",
                }}
              >
                <span>
                  <img
                    src="https://bsmart.edu.vn/files/icon-location.webp"
                    alt="img"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  ></img>
                </span>
                <span style={{ marginLeft: "-10px" }}>
                  Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "-16px",
                  padding: "0",
                }}
              >
                <span>
                  <img
                    src="https://bsmart.edu.vn/files/icon-gmail.webp"
                    alt="img"
                    style={{
                      width: "42px",
                      height: "42px",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                  ></img>
                </span>
                <span>admin@bsmart.edu.vn</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "-16px",
                  padding: "0",
                }}
              >
                <span>
                  <img
                    src="https://bsmart.edu.vn/files/icon-phone.webp"
                    alt="img"
                    style={{
                      width: "42px",
                      height: "42px",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                  ></img>
                </span>
                <span>028 9999 79 39</span>
              </li>
            </ul>
          </div>
        </div>
      </Flex>
      <Divider
        style={{ marginBottom: "16px", borderColor: "#14313b" }}
      ></Divider>
      <div
        style={{
          margin: "0 auto",
          padding: "0 12px",
          maxWidth: "1320px",
          textAlign: "center",
        }}
      >
        <span>
          © Bản quyền BSmart 2023 - Empowered by BSmart - version 1.1.13
        </span>
      </div>
    </footer>
  );
};

export default Footer;
