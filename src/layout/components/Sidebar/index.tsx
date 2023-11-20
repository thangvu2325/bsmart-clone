import { FunctionComponent, useRef, ReactNode, useState } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Flex, Image, Input } from "antd";
import { IconMinus, IconPlus, IconSearch, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import routes from "../../../config/route";
import { sidebarStateSelector } from "../../../redux/selectors";
import {
  IconFacebook,
  IconLinkedin,
  IconYoutube,
} from "../../../components/Icon";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { toggleStateSidedbar } from "../../../redux/settingsSlice";

const cx = classNames.bind(styles);
interface SidebarProps {}
interface CreateElementProps {
  children: ReactNode;
  title: string;
}
const CreateElement: FunctionComponent<CreateElementProps> = ({
  title,
  children,
}) => {
  const [icon, setIcon] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIcon(!icon);
    if (ref.current) {
      if (ref.current.style.display === "flex") {
        ref.current.style.display = "none";
      } else {
        ref.current.style.display = "flex";
      }
    }
  };
  return (
    <li>
      <Link to={routes.stem}>
        {title}
        <span
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            padding: "12px 0 12px 12px",
            zIndex: "22",
          }}
        >
          <span onClick={handleClick} style={{ padding: "8px" }}>
            {icon ? (
              <IconMinus width={12} height={12}></IconMinus>
            ) : (
              <IconPlus width={12} height={12}></IconPlus>
            )}
          </span>
        </span>
      </Link>
      <div className={cx("sub-menu")} ref={ref}>
        <ul>{children}</ul>
      </div>
    </li>
  );
};
const Sidebar: FunctionComponent<SidebarProps> = () => {
  const isSidebarState = useAppSelector(sidebarStateSelector);
  const dispatch = useAppDispatch();
  const handleToggleStatusSidebar = () => {
    dispatch(toggleStateSidedbar());
  };
  return (
    <>
      <div
        className={cx("shadow", {
          show: isSidebarState,
        })}
      ></div>
      <div
        className={cx("wrap", {
          show: isSidebarState,
        })}
      >
        <div className={cx("container")}>
          <Flex className={cx("top")} align="center" justify="space-between">
            <span className={cx("logo")}>
              <img
                width={100}
                height={75}
                src="https://bsmart.edu.vn/files/icon-logo-mobile.webp"
                alt="logo"
              ></img>
            </span>
            <span
              className={cx("action")}
              onClick={handleToggleStatusSidebar}
              style={{ cursor: "pointer" }}
            >
              <IconX width={24} height={24} stroke={7}></IconX>
            </span>
          </Flex>
          <div className={cx("card")}>
            <img
              src="https://bsmart.edu.vn/files/icon-shopping-cart.webp"
              alt="logo"
              width={52}
              height={52}
              style={{ objectFit: "cover" }}
            ></img>
            <span className={cx("card-total")}>0</span>
          </div>
          <div className={cx("menu")}>
            <ul>
              <li>
                <Link to={routes.home}>TRANG CHỦ</Link>
              </li>
              <CreateElement title="VỀ CHÚNG TÔI">
                <li>
                  <Link to={routes.home}>CÂU CHUYỆN FOUNDER</Link>
                </li>
                <li>
                  <Link to={routes.home}>NỀN TẢNG LMS</Link>
                </li>
              </CreateElement>
              <li>
                <Link to={routes.home}>KHÓA HỌC STEM</Link>
              </li>
              <CreateElement title="KHÓA HỌC">
                <li>
                  <Link to={routes.home}>BACK-END</Link>
                </li>
                <li>
                  <Link to={routes.home}>BACK-END</Link>
                </li>
                <li>
                  <Link to={routes.home}>DATABASE</Link>
                </li>
                <li>
                  <Link to={routes.home}>CẤP TỐC</Link>
                </li>
                <li>
                  <Link to={routes.home}>OTHER</Link>
                </li>
                <li>
                  <Link to={routes.home}>STEM</Link>
                </li>
              </CreateElement>
              <li>
                <Link to={routes.mentor}>MENTOR</Link>
              </li>
              <li>
                <Link to={routes.blog}>BLOG</Link>
              </li>
            </ul>
          </div>
          <div className={cx("bottom")}>
            <div className={cx("search")}>
              <Input
                allowClear
                className={cx("seach_input")}
                suffix={
                  <IconSearch
                    className={cx("seach-icon")}
                    width={18}
                    height={18}
                    stroke={3}
                  ></IconSearch>
                }
                placeholder="Tìm Kiếm Khóa Học"
              ></Input>
            </div>
            <div className={cx("contact")}>
              <Flex align="center" style={{ marginBottom: "16px" }}>
                <span style={{ paddingLeft: "10px" }}>
                  <Image
                    src="https://bsmart.edu.vn/files/icon-gmail.webp"
                    alt="logo"
                    width={42}
                    height={42}
                  ></Image>
                </span>

                <span style={{ fontSize: "1.6rem", color: "#212529" }}>
                  admin@bsmart.edu.vn
                </span>
              </Flex>
              <Flex align="center" style={{ marginBottom: "16px" }}>
                <span style={{ paddingLeft: "10px" }}>
                  <Image
                    src="https://bsmart.edu.vn/files/icon-phone.webp"
                    alt="logo"
                    width={42}
                    height={42}
                  ></Image>
                </span>

                <span style={{ fontSize: "1.6rem", color: "#212529" }}>
                  028 9999 79 39
                </span>
              </Flex>
            </div>

            <div className={cx("social-list")}>
              <IconFacebook width="1.6rem" height="1.6rem"></IconFacebook>
              <IconLinkedin width="1.6rem" height="1.6rem"></IconLinkedin>
              <IconYoutube width="1.6rem" height="1.6rem"></IconYoutube>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
