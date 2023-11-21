import { FunctionComponent, useState, useEffect, useRef, memo } from "react";
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

import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "../../../config/route";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { changeFilter } from "../../../redux/coursesFilterSlice";
import { courseType } from "../../../type/type";
import { coursesRemainingSelector } from "../../../redux/selectors";
const cx = classNames.bind(styles);

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [searchParams] = useSearchParams();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const courseSearch: Array<courseType> = useAppSelector(
    coursesRemainingSelector
  );
  const refSearchMenu = useRef<HTMLSpanElement>(null);
  if (refSearchMenu.current && searchInput?.length && courseSearch.length) {
    refSearchMenu.current.style.display = "block";
  } else if (refSearchMenu.current && (!searchInput || !courseSearch.length)) {
    refSearchMenu.current.style.display = "none";
  }
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      changeFilter({ NameCourse: searchParams.get("NameCourse") || "" })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
          <span className={cx("search-content")}>
            <Input
              placeholder="Tìm kiếm khóa học"
              type="text"
              className={cx("search-input")}
              suffix={
                <IconSearch
                  className={cx("search-icon")}
                  width={18}
                  height={18}
                  stroke={4}
                ></IconSearch>
              }
              value={searchInput ? searchInput : ""}
              onChange={(e) => {
                const valueInput = e.target.value;
                dispatch(changeFilter({ NameCourse: valueInput }));
                setSearchInput(e.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                }
              }}
            />
            <span className={cx("search-menu")} ref={refSearchMenu}>
              {courseSearch.length
                ? courseSearch.map((course) => (
                    <Link
                      to={`${routes.course}?NameCourse=${course.course}`}
                      key={course.courseId}
                      onClick={() => {
                        setSearchInput("");
                      }}
                    >
                      {course.course}
                    </Link>
                  ))
                : ""}
            </span>
          </span>
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

export default memo(Header);
