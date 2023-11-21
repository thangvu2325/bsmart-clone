import { FunctionComponent, useRef, ReactNode, memo } from "react";
import classNames from "classnames/bind";
import styles from "./Course.module.scss";
import { Flex } from "antd";
import { IconArrowDown } from "@tabler/icons-react";
const cx = classNames.bind(styles);

interface CourseFilterProps {
  children: ReactNode;
  title: string;
}

const CourseFilter: FunctionComponent<CourseFilterProps> = ({
  children,
  title,
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
    <div className={cx("row")}>
      <div
        className={cx("title")}
        style={{ marginTop: "10px" }}
        onClick={handleClick}
      >
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

export default memo(CourseFilter);
