import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Course.module.scss";
import classNames from "classnames/bind";
import BannerCourse from "../../components/BannerCourse";
import { Dropdown, Flex, Image, Input, MenuProps, Pagination } from "antd";
import ButtonCustom from "../../components/Button";
import { IconChevronDown } from "@tabler/icons-react";
import CardCourse from "../../components/CardCourse";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { coursesRemainingSelector } from "../../redux/selectors";
import { useSearchParams } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { changeFilter } from "../../redux/coursesFilterSlice";
import { courseType } from "../../type/type";
import CourseFilter from "./CourseFilter";

const cx = classNames.bind(styles);
interface CoursePageProps {}

const ITEM_PER_PAGE = 9;

const getItemsForCurrentPage = (
  arr: Array<courseType>,
  currentPage: number
) => {
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  return arr.slice(startIndex, endIndex);
};
const sortData = {
  new: "Khóa học mới nhất",
  popular: "Khóa học nhiều người học",
  soonStart: "Khóa học sắp bắt đầu",
  az: "A - Z",
  za: "Z - A",
};

const CoursePage: FunctionComponent<CoursePageProps> = () => {
  const coursesList = useAppSelector(coursesRemainingSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pf, setPf] = useState<string | null>(
    searchParams.get("pf") || "0 VND"
  );
  const [pt, setPt] = useState<string | null>(
    searchParams.get("pt") || "10,000,000 VND"
  );
  const [sort, setSort] = useState<string | null>(searchParams.get("sort"));
  const [typeOfLearning, setTypeOfLearning] = useState<string[] | null>(
    searchParams.getAll("typeOfLearning")
  );
  const dispatch = useAppDispatch();
  const [level, setLevel] = useState<string[] | null>(
    searchParams.getAll("level")
  );
  const [filterCourseCate, setFilterCourseCate] = useState<string[] | null>(
    searchParams.getAll("filterCourseCate")
  );
  const [pg, setPg] = useState<string | null>(searchParams.get("pg") || "1");
  const handleChangePage = (page: number) => {
    setPg(page.toString());

    setSearchParams(() => {
      const prevSearchParams = { ...Object.fromEntries(searchParams) };
      dispatch(
        changeFilter({
          pg,
          pf,
          pt,
          level,
          sort,
          filterCourseCate,
          typeOfLearning,
        })
      );
      const newSearchParams = { ...prevSearchParams, pg: page.toString() };
      return newSearchParams;
    });
  };
  // const coursesfilter = useS
  useEffect(() => {
    dispatch(
      changeFilter({
        pg,
        pf,
        pt,
        level,
        sort,
        filterCourseCate,
        typeOfLearning,
        NameCourse: searchParams.get("NameCourse") ?? "",
      })
    );
    document.title = "Khóa học - Bsmart học cùng mentor";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const items: MenuProps["items"] = [
    {
      label: "Sắp xếp khóa học",
      key: "0",
      onClick: () => {
        setSort("");
        dispatch(
          changeFilter({
            sort: "",
          })
        );
        setSearchParams(() => {
          const prevSearchParams = { ...Object.fromEntries(searchParams) };
          const newSearchParams = { ...prevSearchParams, sort: "" };
          return newSearchParams;
        });
      },
    },
    {
      label: "Khóa học mới nhất",
      key: "1",

      onClick: () => {
        setSort("new");
        dispatch(
          changeFilter({
            sort: "new",
          })
        );
        setSearchParams(() => {
          const prevSearchParams = { ...Object.fromEntries(searchParams) };
          const newSearchParams = { ...prevSearchParams, sort: "new" };

          return newSearchParams;
        });
      },
    },
    {
      label: "Khóa học nhiều người học",
      key: "2",
      onClick: () => {
        setSort("popular");
        dispatch(
          changeFilter({
            sort: "popular",
          })
        );
        setSearchParams(() => {
          const prevSearchParams = { ...Object.fromEntries(searchParams) };
          const newSearchParams = { ...prevSearchParams, sort: "popular" };

          return newSearchParams;
        });
      },
    },
    {
      label: "Khóa học sắp bắt đầu",
      key: "3",
      onClick: () => {
        setSort("soonStart");
        dispatch(
          changeFilter({
            sort: "soonStart",
          })
        );
        setSearchParams(() => {
          const prevSearchParams = { ...Object.fromEntries(searchParams) };
          const newSearchParams = { ...prevSearchParams, sort: "soonStart" };

          return newSearchParams;
        });
      },
    },
    {
      label: "A - Z",
      key: "4",
      onClick: () => {
        setSort("az");
        dispatch(
          changeFilter({
            sort: "az",
          })
        );
        setSearchParams(() => {
          const prevSearchParams = { ...Object.fromEntries(searchParams) };
          const newSearchParams = { ...prevSearchParams, sort: "az" };

          return newSearchParams;
        });
      },
    },
    {
      label: "Z - A",
      key: "5",
      onClick: () => {
        setSort("za");
        dispatch(
          changeFilter({
            sort: "za",
          })
        );
        setSearchParams(() => {
          const prevSearchParams = { ...Object.fromEntries(searchParams) };
          const newSearchParams = { ...prevSearchParams, sort: "za" };

          return newSearchParams;
        });
      },
    },
  ];
  return (
    <div className={cx("wrap")}>
      <BannerCourse items={[{ title: "Khóa học" }]}></BannerCourse>
      <div className={cx("container")}>
        <Flex justify="flex-start" className={cx("content")} wrap="wrap">
          <form className={cx("menu")}>
            <CourseFilter title={"KHOẢNG GIÁ"}>
              <Flex className={cx("price_from")} vertical>
                <span className={cx("price_text")}>Từ giá</span>
                <NumericFormat
                  className={cx("price_input")}
                  type="text"
                  value={pf ? pf : ""}
                  name="pf"
                  thousandsGroupStyle="thousand"
                  suffix=" VND"
                  thousandSeparator=","
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    setPf(floatValue ? floatValue.toString() : "");
                  }}
                />
              </Flex>
              <Flex className={cx("price_to")} vertical>
                <span className={cx("price_text")}>Đến giá</span>
                <NumericFormat
                  className={cx("price_input")}
                  type="text"
                  value={pt ? pt : ""}
                  name="pt"
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  suffix=" VND"
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    setPt(floatValue ? floatValue.toString() : "");
                  }}
                />
              </Flex>
            </CourseFilter>
            <CourseFilter title={"Hình Thức Học"}>
              <div className={cx("learning")}>
                <Input
                  type="checkbox"
                  name="typeOfLearning"
                  style={{ width: "fit-content" }}
                  value="online"
                  checked={typeOfLearning?.includes("online")}
                  onChange={() => {
                    setTypeOfLearning((prev) => {
                      if (prev?.includes("online")) {
                        // Nếu "online" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "online");
                      } else {
                        // Nếu "online" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "online"] : ["online"];
                      }
                    });
                  }}
                />
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
                  name="typeOfLearning"
                  style={{ width: "fit-content" }}
                  value="offline"
                  checked={typeOfLearning?.includes("offline")}
                  onChange={() => {
                    setTypeOfLearning((prev) => {
                      if (prev?.includes("offline")) {
                        // Nếu "offline" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "offline");
                      } else {
                        // Nếu "offline" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "offline"] : ["offline"];
                      }
                    });
                  }}
                />
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
            </CourseFilter>
            <CourseFilter title={"Trình Độ"}>
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
                    value="de"
                    checked={level?.includes("de")}
                    onChange={() => {
                      setLevel((prev) => {
                        if (prev?.includes("de")) {
                          // Nếu "de" đã được chọn, loại bỏ nó khỏi mảng
                          return prev.filter((item) => item !== "de");
                        } else {
                          // Nếu "de" chưa được chọn, thêm nó vào mảng
                          return prev ? [...prev, "de"] : ["de"];
                        }
                      });
                    }}
                  />
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
                    value="trung_binh"
                    checked={level?.includes("trung_binh")}
                    onChange={() => {
                      setLevel((prev) => {
                        if (prev?.includes("trung_binh")) {
                          // Nếu "trung_binh" đã được chọn, loại bỏ nó khỏi mảng
                          return prev.filter((item) => item !== "trung_binh");
                        } else {
                          // Nếu "trung_binh" chưa được chọn, thêm nó vào mảng
                          return prev
                            ? [...prev, "trung_binh"]
                            : ["trung_binh"];
                        }
                      });
                    }}
                  />

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
                    value="kho"
                    checked={level?.includes("kho")}
                    onChange={() => {
                      setLevel((prev) => {
                        if (prev?.includes("kho")) {
                          // Nếu "kho" đã được chọn, loại bỏ nó khỏi mảng
                          return prev.filter((item) => item !== "kho");
                        } else {
                          // Nếu "kho" chưa được chọn, thêm nó vào mảng
                          return prev ? [...prev, "kho"] : ["kho"];
                        }
                      });
                    }}
                  />

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
                    value="cuc_kho"
                    checked={level?.includes("cuc_kho")}
                    onChange={() => {
                      setLevel((prev) => {
                        if (prev?.includes("cuc_kho")) {
                          // Nếu "cuc_kho" đã được chọn, loại bỏ nó khỏi mảng
                          return prev.filter((item) => item !== "cuc_kho");
                        } else {
                          // Nếu "cuc_kho" chưa được chọn, thêm nó vào mảng
                          return prev ? [...prev, "cuc_kho"] : ["cuc_kho"];
                        }
                      });
                    }}
                  />

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
            </CourseFilter>
            <CourseFilter title={"LĨNH VỰC"}>
              <div className={cx("filterCourseCate")}>
                <Input
                  type="checkbox"
                  name="filterCourseCate"
                  style={{ width: "fit-content" }}
                  value="backend"
                  checked={filterCourseCate?.includes("backend")}
                  onChange={() => {
                    setFilterCourseCate((prev) => {
                      if (prev?.includes("backend")) {
                        // Nếu "backend" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "backend");
                      } else {
                        // Nếu "backend" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "backend"] : ["backend"];
                      }
                    });
                  }}
                />

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
                  value="frontend"
                  checked={filterCourseCate?.includes("frontend")}
                  onChange={() => {
                    setFilterCourseCate((prev) => {
                      if (prev?.includes("frontend")) {
                        // Nếu "frontend" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "frontend");
                      } else {
                        // Nếu "frontend" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "frontend"] : ["frontend"];
                      }
                    });
                  }}
                />

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
                  value="database"
                  checked={filterCourseCate?.includes("database")}
                  onChange={() => {
                    setFilterCourseCate((prev) => {
                      if (prev?.includes("database")) {
                        // Nếu "database" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "database");
                      } else {
                        // Nếu "database" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "database"] : ["database"];
                      }
                    });
                  }}
                />
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
                  value="cap_toc"
                  checked={filterCourseCate?.includes("cap_toc")}
                  onChange={() => {
                    setFilterCourseCate((prev) => {
                      if (prev?.includes("cap_toc")) {
                        // Nếu "cap_toc" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "cap_toc");
                      } else {
                        // Nếu "cap_toc" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "cap_toc"] : ["cap_toc"];
                      }
                    });
                  }}
                />

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
                  value="other"
                  checked={filterCourseCate?.includes("other")}
                  onChange={() => {
                    setFilterCourseCate((prev) => {
                      if (prev?.includes("other")) {
                        // Nếu "other" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "other");
                      } else {
                        // Nếu "other" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "other"] : ["other"];
                      }
                    });
                  }}
                />

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
                  value="stem"
                  checked={filterCourseCate?.includes("stem")}
                  onChange={() => {
                    setFilterCourseCate((prev) => {
                      if (prev?.includes("stem")) {
                        // Nếu "stem" đã được chọn, loại bỏ nó khỏi mảng
                        return prev.filter((item) => item !== "stem");
                      } else {
                        // Nếu "stem" chưa được chọn, thêm nó vào mảng
                        return prev ? [...prev, "stem"] : ["stem"];
                      }
                    });
                  }}
                />

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
            </CourseFilter>
            <div className={cx("row")}>
              <ButtonCustom type="submit" primary className={cx("btn")}>
                Tìm kiếm
              </ButtonCustom>
            </div>
          </form>

          <div className={cx("course-list")}>
            <Flex justify="space-between" className={cx("course-list_header")}>
              <div className={cx("left")}>{coursesList.length} Khoá học</div>
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
                      {sort?.length
                        ? (sortData as any)[sort]
                        : "Sắp xếp khóa học"}
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
                {/* Get Item per Page */}
                {coursesList.length
                  ? getItemsForCurrentPage(coursesList, Number(pg)).map(
                      (course) => (
                        <div className={cx("col")} key={course.courseId}>
                          <CardCourse
                            divider={true}
                            className={cx("col-card")}
                            data={course}
                          ></CardCourse>
                        </div>
                      )
                    )
                  : ""}
              </Flex>
            </div>
            <Flex
              justify="center"
              align="center"
              className={cx("course-list_footer")}
            >
              <Pagination
                total={coursesList.length}
                className={cx("pagination")}
                pageSize={9}
                current={Number(pg)}
                onChange={handleChangePage}
                itemRender={(page, type) => {
                  if (type === "next") {
                    return <span>{">"}</span>;
                  } else if (type === "prev") {
                    return <span>{"<"}</span>;
                  }
                  if (type === "page") {
                    return <span>{page}</span>;
                  }
                }}
              ></Pagination>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CoursePage;
