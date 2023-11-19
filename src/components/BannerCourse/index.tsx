import { FunctionComponent } from "react";
import styles from "./BannerCourse.module.scss";
import classNames from "classnames/bind";
import { Breadcrumb } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
const cx = classNames.bind(styles);

interface BannerCourseProps {
  items: Array<BreadcrumbItemType>;
}

const BannerCourse: FunctionComponent<BannerCourseProps> = ({ items }) => {
  return (
    <section className={cx("wrap")}>
      <div className={cx("banner_content")}>
        <h1>Danh sách khoá học</h1>
        <Breadcrumb
          className={cx("breadcrumb")}
          separator=">"
          items={[
            {
              title: "Trang Chủ",
              href: "/",
            },
            ...items,
          ]}
        />
      </div>
    </section>
  );
};

export default BannerCourse;
