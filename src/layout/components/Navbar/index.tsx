import { FunctionComponent } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { Flex, Image, MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
import MenuDropdown from "../../../components/MenuDropdown";
import { IconMenu2 } from "@tabler/icons-react";
import routes from "../../../config/route";
const cx = classNames.bind(styles);

interface NavbarProps {}
const aboutUsItems: MenuProps["items"] = [
  {
    key: "1",
    label: "Câu chuyện Founder",
  },
  {
    key: "2",
    label: "Nền Tảng LMS",
  },
];
const courseItems: MenuProps["items"] = [
  {
    key: "1",
    label: "Back-End",
  },
  {
    key: "2",
    label: "Front-End",
  },
  {
    key: "3",
    label: "Database",
  },
  {
    key: "4",
    label: "Cấp tốc",
  },
  {
    key: "5",
    label: "Other",
  },
  {
    key: "6",
    label: "STEM",
  },
];
const blogItems: MenuProps["items"] = [
  {
    key: "1",
    label: "Công Nghệ",
  },
  {
    key: "2",
    label: "Khuyến Mãi",
  },
  {
    key: "3",
    label: "Giáo dục",
  },
];
const Navbar: FunctionComponent<NavbarProps> = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div className={cx("wrap")}>
      <Flex align="center" justify="space-between" className={cx("container")}>
        <div className={cx("left")}>
          <Image
            src="https://bsmart.edu.vn/files/icon-logo.webp"
            preview={false}
            alt="logo"
            width={220}
            height={80}
          ></Image>
        </div>
        <div className={cx("middle")}>
          <Flex align="center" className={cx("content")}>
            <div className={cx("content-title")}>
              <Link
                to={routes.home}
                className={cx("", {
                  active: pathname === routes.home,
                })}
              >
                Trang Chủ
              </Link>
            </div>
            <div className={cx("content-title")}>
              <MenuDropdown menu={aboutUsItems}>
                <Link
                  to={routes.aboutus}
                  className={cx("", {
                    active: pathname === routes.aboutus,
                  })}
                >
                  Về Chúng Tôi
                </Link>
              </MenuDropdown>
            </div>
            <div className={cx("content-title")}>
              <Link
                to={routes.stem}
                className={cx("", {
                  active: pathname === routes.stem,
                })}
              >
                Khóa Học STEM
              </Link>
            </div>
            <div className={cx("content-title")}>
              <MenuDropdown menu={courseItems}>
                <Link
                  to={routes.course}
                  className={cx("", {
                    active: pathname === routes.course,
                  })}
                >
                  Khóa Học
                </Link>
              </MenuDropdown>
            </div>
            <div className={cx("content-title")}>
              <Link
                to={routes.mentor}
                className={cx("", {
                  active: pathname === routes.mentor,
                })}
              >
                Mentor
              </Link>
            </div>
            <div className={cx("content-title")}>
              <MenuDropdown menu={blogItems}>
                <Link
                  to={routes.blog}
                  className={cx("", {
                    active: pathname === routes.blog,
                  })}
                >
                  Blog
                </Link>
              </MenuDropdown>
            </div>
          </Flex>
        </div>
        <div className={cx("right")}>
          <Image
            src="https://bsmart.edu.vn/files/icon-shopping-cart.webp"
            preview={false}
            width={62}
            height={62}
          ></Image>
          <span className={cx("right-count")}>0</span>
        </div>
        <div className={cx("bars")}>
          <IconMenu2 width={24} height={24} stroke={3}></IconMenu2>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
