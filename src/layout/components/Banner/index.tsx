import { FunctionComponent } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import ButtonCustom from "../../../components/Button";

const cx = classNames.bind(styles);
interface BannerProps {}

const Banner: FunctionComponent<BannerProps> = () => {
  return (
    <section className={cx("wrap")}>
      <div className={cx("container")}>
        <h4 className={cx("title")}>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h4>
        <h2 className={cx("caption")}>
          Trở thành lập trình viên chuyên nghiệp tại BSMART
        </h2>
        <p>
          Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa
          học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và
          phát triển bản thân trên con đường trở thành lập trình viên chuyên
          nghiệp
        </p>
        <span className={cx("caption_btn")}>
          <ButtonCustom to="/" className={cx("btn")} primary>
            <span>XEM KHÓA HỌC</span>
          </ButtonCustom>
        </span>
      </div>
    </section>
  );
};

export default Banner;
