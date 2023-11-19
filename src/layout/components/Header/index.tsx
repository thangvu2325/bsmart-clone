import { FunctionComponent, useState, useEffect, useRef } from "react";
import { Flex, Image } from "antd";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { IconSearch } from "@tabler/icons-react";
import Input from "antd/es/input/Input";
import {
  IconFacebook,
  IconLinkedin,
  IconYoutube,
} from "../../../components/Icon";

const cx = classNames.bind(styles);

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  if (ref.current) {
    if (isScrolled) {
      ref.current.style.opacity = "0";
      ref.current.style.transition = "opacity 0.01s ease-in-out";
    } else {
      ref.current.style.opacity = "0";
      ref.current.style.transition = "opacity 0.01s ease-in-out";
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra vị trí scroll để xác định khi nào ở đầu và khi nào đã cuộn xuống
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setIsScrolled(false); // Ở đầu trang
      } else {
        setIsScrolled(true); // Cuộn xuống
      }
    };

    // Thêm sự kiện cuộn
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cx("wrap")}>
      <Flex justify="space-between" className={cx("container")} align="center">
        <Flex className={cx("left")} align="center">
          <Flex className={cx("left_brand-list")}>
            <span className={cx("left_list-item")}>
              <IconFacebook
                className={cx("left_icon-brand")}
                width={"18px"}
                height={"18px"}
              ></IconFacebook>
            </span>
            <span className={cx("left_list-item")}>
              <IconLinkedin
                className={cx("left_icon-brand")}
                width={"18px"}
                height={"18px"}
              ></IconLinkedin>
            </span>
            <span className={cx("left_list-item")}>
              <IconYoutube
                className={cx("left_icon-brand")}
                width={"18px"}
                height={"18px"}
              ></IconYoutube>
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
