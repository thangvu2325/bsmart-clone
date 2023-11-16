import { FunctionComponent } from "react";
import { Flex, Image } from "antd";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconSearch,
} from "@tabler/icons-react";
import Input from "antd/es/input/Input";

const cx = classNames.bind(styles);

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className={cx("wrap")}>
      <Flex justify="space-between" className={cx("container")} align="center">
        <Flex className={cx("left")} align="center">
          <Flex className={cx("left_brand-list")}>
            <span className={cx("left_list-item")}>
              <IconBrandFacebookFilled
                className={cx("left_icon-brand")}
                width={18}
                height={18}
                stroke={1}
              ></IconBrandFacebookFilled>
            </span>
            <span className={cx("left_list-item")}>
              <IconBrandLinkedin
                className={cx("left_icon-brand")}
                width={18}
                height={18}
                stroke={1}
              ></IconBrandLinkedin>
            </span>
            <span className={cx("left_list-item")}>
              <IconBrandYoutube
                className={cx("left_icon-brand")}
                width={18}
                height={18}
                stroke={1}
              ></IconBrandYoutube>
            </span>
          </Flex>
        </Flex>
        <div className={cx("middle")}>
          <Flex className={cx("middle_contact")} align="center">
            <Flex className={cx("contact")} align="center">
              <Image
                src="https://bsmart.edu.vn/files/icon-gmail.webp"
                alt="icon mail"
                preview={false}
                width={32}
                height={32}
              ></Image>
              <span>admin@bsmart.edu.vn</span>
            </Flex>
            <Flex className={cx("contact")} align="center">
              <Image
                src="https://bsmart.edu.vn/files/icon-phone.webp"
                alt="icon phone"
                preview={false}
                width={32}
                height={32}
              ></Image>
              <span>028 9999 79 39</span>
            </Flex>
          </Flex>
        </div>
        <Flex className={cx("search")} justify="center">
          <Input
            placeholder="Tìm kiếm khóa học"
            type="text"
            className={cx("search-input")}
            suffix={
              <IconSearch
                className={cx("seach-icon")}
                width={18}
                height={18}
                stroke={4}
              ></IconSearch>
            }
          />
        </Flex>
        <Flex className={cx("right")}>
          <div className={cx("right_action")}>Đăng nhập</div>
          <span> | </span>
          <div className={cx("right_action")}>Đăng ký</div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
