import { FunctionComponent, useRef, ReactNode } from "react";
import styles from "./Course.module.scss";
import classNames from "classnames/bind";
import BannerCourse from "../../components/BannerCourse";
import { Dropdown, Flex, Image, Input, MenuProps } from "antd";
import ButtonCustom from "../../components/Button";
import { IconArrowDown, IconChevronDown } from "@tabler/icons-react";
import CardCourse from "../../components/CardCourse";
const cx = classNames.bind(styles);
interface CoursePageProps {}
interface CreateElementProps {
  children: ReactNode;
  title: string;
}
const items: MenuProps["items"] = [
  {
    label: "Sắp xếp khóa học",
    key: "0",
  },
  {
    label: "Khóa học mới nhất",
    key: "1",
  },
  {
    label: "Khóa học nhiều người học",
    key: "2",
  },
  {
    label: "Khóa học sắp bắt đầu",
    key: "3",
  },
  {
    label: "A - Z",
    key: "4",
  },
  {
    label: "Z - A",
    key: "5",
  },
];

const CreateElement: FunctionComponent<CreateElementProps> = ({
  title,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (ref.current) {
      if (ref.current.style.height === "100%") {
        ref.current.style.height = "0";
      } else {
        ref.current.style.height = "100%";
      }
    }
  };
  return (
    <div className={cx("row")} onClick={handleClick}>
      <div className={cx("title")} style={{ marginTop: "10px" }}>
        <Flex align="center" style={{ fontSize: "1.7rem" }}>
          <IconArrowDown
            width={18}
            height={18}
            stroke={4}
            style={{ marginRight: "8px", display: "none" }}
            className={cx("icon")}
          ></IconArrowDown>
          {title}
        </Flex>
      </div>
      <div className={cx("row-content")} ref={ref}>
        {children}
      </div>
    </div>
  );
};
const CoursePage: FunctionComponent<CoursePageProps> = () => {
  return (
    <div className={cx("wrap")}>
      <BannerCourse items={[{ title: "Khóa học" }]}></BannerCourse>
      <div className={cx("container")}>
        <Flex justify="flex-start" className={cx("content")} wrap="wrap">
          <div className={cx("menu")}>
            <CreateElement title={"KHOẢNG GIÁ"}>
              <Flex className={cx("price_from")} vertical>
                <span className={cx("price_text")}>Từ Giá</span>
                <Input className={cx("price_input")} />
              </Flex>
              <Flex className={cx("price_to")} vertical>
                <span className={cx("price_text")}>Từ Giá</span>
                <Input className={cx("price_input")} />
              </Flex>
            </CreateElement>
            <CreateElement title={"Hình Thức Học"}>
              <div className={cx("learning")}>
                <Input
                  type="checkbox"
                  name="learning"
                  style={{ width: "fit-content" }}
                ></Input>
                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  Online
                </span>
              </div>
              <div className={cx("learning")}>
                <Input
                  type="checkbox"
                  name="learning"
                  style={{ width: "fit-content" }}
                ></Input>

                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  Ofline
                </span>
              </div>
            </CreateElement>
            <CreateElement title={"Trình Độ"}>
              <Flex
                className={cx("level")}
                align="center"
                justify="space-between"
              >
                <span className={cx("left")}>
                  <Input
                    type="checkbox"
                    name="level"
                    style={{ width: "fit-content" }}
                  ></Input>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "1.6rem",
                      marginLeft: "6px",
                    }}
                  >
                    Dễ
                  </span>
                </span>
                <Image
                  src="https://bsmart.edu.vn/files/Levels/1/ant-icon-01.webp"
                  className={cx("right")}
                  preview={false}
                ></Image>
              </Flex>
              <Flex
                className={cx("level")}
                align="center"
                justify="space-between"
              >
                <span className={cx("left")}>
                  <Input
                    type="checkbox"
                    name="level"
                    style={{ width: "fit-content" }}
                  ></Input>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "1.6rem",
                      marginLeft: "6px",
                    }}
                  >
                    Trung Bình
                  </span>
                </span>
                <Image
                  src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                  className={cx("right")}
                  preview={false}
                ></Image>
              </Flex>
              <Flex
                className={cx("level")}
                align="center"
                justify="space-between"
              >
                <span className={cx("left")}>
                  <Input
                    type="checkbox"
                    name="level"
                    style={{ width: "fit-content" }}
                  ></Input>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "1.6rem",
                      marginLeft: "6px",
                    }}
                  >
                    Khó
                  </span>
                </span>
                <Image
                  src="https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp"
                  className={cx("right")}
                  preview={false}
                ></Image>
              </Flex>
              <Flex
                className={cx("level")}
                align="center"
                justify="space-between"
              >
                <span className={cx("left")}>
                  <Input
                    type="checkbox"
                    name="level"
                    style={{ width: "fit-content" }}
                  ></Input>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "1.6rem",
                      marginLeft: "6px",
                    }}
                  >
                    Cực Khó
                  </span>
                </span>
                <Image
                  src="https://bsmart.edu.vn/files/Levels/1/ant-icon-04.webp"
                  className={cx("right")}
                  preview={false}
                ></Image>
              </Flex>
            </CreateElement>
            <CreateElement title={"LĨNH VỰC"}>
              <div className={cx("filterCourseCate")}>
                <Input
                  type="checkbox"
                  name="filterCourseCate"
                  style={{ width: "fit-content" }}
                ></Input>
                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  Back-End
                </span>
              </div>
              <div className={cx("filterCourseCate")}>
                <Input
                  type="checkbox"
                  name="filterCourseCate"
                  style={{ width: "fit-content" }}
                ></Input>

                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  Front-End
                </span>
              </div>
              <div className={cx("filterCourseCate")}>
                <Input
                  type="checkbox"
                  name="filterCourseCate"
                  style={{ width: "fit-content" }}
                ></Input>

                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  Database
                </span>
              </div>
              <div className={cx("filterCourseCate")}>
                <Input
                  type="checkbox"
                  name="filterCourseCate"
                  style={{ width: "fit-content" }}
                ></Input>

                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  Cấp tốc
                </span>
              </div>
              <div className={cx("filterCourseCate")}>
                <Input
                  type="checkbox"
                  name="filterCourseCate"
                  style={{ width: "fit-content" }}
                ></Input>

                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  Other
                </span>
              </div>
              <div className={cx("filterCourseCate")}>
                <Input
                  type="checkbox"
                  name="filterCourseCate"
                  style={{ width: "fit-content" }}
                ></Input>

                <span
                  style={{
                    color: "gray",
                    fontSize: "1.6rem",
                    marginLeft: "6px",
                  }}
                >
                  STEM
                </span>
              </div>
            </CreateElement>
            <div className={cx("row")}>
              <ButtonCustom type="submit" primary className={cx("btn")}>
                Tìm kiếm
              </ButtonCustom>
            </div>
          </div>

          <div className={cx("course-list")}>
            <Flex justify="space-between" className={cx("course-list_header")}>
              <div className={cx("left")}>33 Khoá học</div>
              <div className={cx("right")}>
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottom"
                >
                  <Flex
                    align="center"
                    justify="space-between"
                    className={cx("right-content")}
                    style={{ verticalAlign: "center" }}
                  >
                    <span style={{ marginRight: "50px" }}>
                      Sắp xếp khóa học
                    </span>
                    <span style={{ position: "relative" }}>
                      <IconChevronDown
                        width={18}
                        height={18}
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      ></IconChevronDown>
                    </span>
                  </Flex>
                </Dropdown>
              </div>
            </Flex>
            <div className={cx("main-course")}>
              <Flex className={cx("row")} wrap="wrap">
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
                <div className={cx("col")}>
                  <CardCourse
                    className={cx("col-card")}
                    data={{
                      mentor: "Trần Hòa Hiệp",
                      banner:
                        "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
                      avatar:
                        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
                      course: ".NET Core API",
                      session: 15,
                      price: 3000000,
                      count: 148,
                      description:
                        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
                      rate: 5,
                    }}
                  ></CardCourse>
                </div>
              </Flex>
            </div>
            <Flex
              justify="center"
              align="center"
              className={cx("course-list_footer")}
            >
              <ul className={cx("pagination")}>
                <li>
                  <span
                    className={cx("", {
                      [`active`]: true,
                    })}
                  >
                    1
                  </span>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <span>3</span>
                </li>
                <li>
                  <span>4</span>
                </li>
                <li>
                  <span>{">"}</span>
                </li>
              </ul>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CoursePage;
