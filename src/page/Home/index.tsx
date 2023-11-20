import { FunctionComponent, useEffect } from "react";
import classNames from "classnames/bind";
import "swiper/css";
import styles from "./Home.module.scss";
import Banner from "../../layout/components/Banner";
import { Flex, Image } from "antd";
import ButtonCustom from "../../components/Button";
import { IconCircleCheck } from "@tabler/icons-react";
import {
  IconCogsSetting,
  IconFire,
  IconQrcode,
  IconTrophy,
  IconUsers,
} from "../../components/Icon";
import SwiperSliderItem from "../../components/SwiperSlideItem";
import CardCourse from "../../components/CardCourse";
import CardMember from "../../components/CardMember";
import { useAppSelector } from "../../redux/hook";
import {
  getUrgentlyCoursesSelecter,
  mentorsSelector,
  mostFamoustCoursesSelecter,
} from "../../redux/selectors";
import routes from "../../config/route";
import { courseType } from "../../type/type";
export interface HomeProps {}
const cx = classNames.bind(styles);

const LogoBrand: Array<string> = [
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-01.webp",
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-02.webp",
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-03.webp",
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-04.webp",
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-05.webp",
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-06.webp",
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp",
  "https://bsmart.edu.vn/assets/images/logo-dai-hoc-01.webp",
];
const ImageComponent: FunctionComponent<{ data: string }> = ({ data }) => {
  return <Image height={100} preview={false} src={data}></Image>;
};
const Home: FunctionComponent<HomeProps> = () => {
  const mostFamoustCourses: courseType[] = useAppSelector(
    mostFamoustCoursesSelecter
  );
  const urgentCourse = useAppSelector(getUrgentlyCoursesSelecter);
  // const urgentCourse: courseType[] = [];
  const mentorList = useAppSelector(mentorsSelector);
  useEffect(() => {
    document.title = "Trang chủ - Bsmart học cùng mentor";
  }, []);
  return (
    <div className={cx("wrap")}>
      <Banner></Banner>
      <section className={cx("aboutus")}>
        <div className={cx("aboutus_container")}>
          <h2 className={cx("aboutus_title")}>Về chúng tôi</h2>
          <Flex className={cx("aboutus_content")} justify="flex-start">
            <div className={cx("aboutus_left")}>
              <p>
                BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về
                đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ
                Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến
                các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa
                dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể
                lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình.
                BSMART cập nhật và áp dụng những công nghệ mới, giúp học viên và
                Mentor được tiếp cận với những kiến thức và kỹ năng mới nhất
                trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ
                trợ học viên trong quá trình học tập và phát triển sự nghiệp sau
                khi tốt nghiệp.
              </p>
              <Flex className={cx("left_btn")} justify="center" align="center">
                <ButtonCustom to={routes.course} primary className={cx("btn")}>
                  XEM KHÓA HỌC
                </ButtonCustom>
                <ButtonCustom
                  to="https://www.facebook.com/bsmart.edu.vn"
                  primary
                  className={cx("btn")}
                >
                  HỖ TRỢ KHÓA HỌC
                </ButtonCustom>
              </Flex>
            </div>
            <div className={cx("aboutus_right")}>
              <Image
                src={"https://bsmart.edu.vn/files/banner-2.webp"}
                className={cx("aboutus_image")}
                preview={false}
              ></Image>
            </div>
          </Flex>
        </div>
      </section>
      <section className={cx("advantage")}>
        <div className={cx("advantage_container")}>
          <h2 className={cx("container_title")}>Điểm ưu việt tại BSmart</h2>
          <Flex className={cx("advantage_content")} wrap="wrap">
            <div className={cx("card")}>
              <Flex className={cx("title")} align="center">
                <IconCircleCheck
                  width={30}
                  height={30}
                  stroke={4}
                  className={cx("icon")}
                ></IconCircleCheck>
                <h4>Học theo lộ trình, có định hướng</h4>
              </Flex>
              <div className={cx("content")}>
                BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm
                phát triển năng lực và niềm đam mê lập trình của bạn để có việc
                ngay sau khi học.
              </div>
            </div>
            <div className={cx("card")}>
              <Flex className={cx("title")} align="center">
                <IconCogsSetting className={cx("icon")}></IconCogsSetting>
                <h4>Nền tảng cốt lõi trong lập trình</h4>
              </Flex>
              <div className={cx("content")}>
                BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất
                trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ
                và môi trường làm việc.
              </div>
            </div>
            <div className={cx("card")}>
              <Flex className={cx("title")} align="center">
                <IconFire className={cx("icon")}></IconFire>
                <h4>Mài giũa bạn qua thực tế</h4>
              </Flex>
              <div className={cx("content")}>
                Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án
                thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu
                lửa" cho bạn.
              </div>
            </div>
          </Flex>

          <Flex className={cx("advantage_content")} wrap="wrap">
            <div className={cx("card")}>
              <Flex className={cx("title")} align="center">
                <IconUsers className={cx("icon")}></IconUsers>
                <h4>Mentor tận tâm</h4>
              </Flex>
              <div className={cx("content")}>
                Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng
                vai trò một thành viên trong quy trình Scrum, Agile. Được Mentor
                hỗ trợ tận tâm, nhiệt tình.
              </div>
            </div>
            <div className={cx("card")}>
              <Flex className={cx("title")} align="center">
                <IconQrcode width="24" className={cx("icon")}></IconQrcode>
                <h4>Công nghệ mới, thực tế</h4>
              </Flex>
              <div className={cx("content")}>
                Bạn được học và trải nghiệm các công nghệ lập trình mới nhất,
                chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.
              </div>
            </div>
            <div className={cx("card")}>
              <Flex className={cx("title")} align="center">
                <IconTrophy width="28" className={cx("icon")}></IconTrophy>
                <h4>Trao tay chìa khóa thành công</h4>
              </Flex>
              <div className={cx("content")}>
                Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng
                doanh nghiệp ngay sau khi tốt nghiệp.
              </div>
            </div>
          </Flex>
        </div>
      </section>
      <section className={cx("learning")}>
        <Flex className={cx("container")} wrap="wrap">
          <div className={cx("left")}>
            <div className={cx("content")}>
              <h2>Trái ngành</h2>
              <p>From Zero to Hero</p>
            </div>
          </div>
          <div className={cx("right")}>
            <div className={cx("content")}>
              <h2>ĐÃ BIẾT LẬP TRÌNH</h2>
              <p>Đã có kiến thức tư duy lập trình và OOP</p>
            </div>
          </div>
        </Flex>
      </section>
      {/* Course Slider */}
      <section className={cx("slider")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <h2>Khoá học tiêu biểu</h2>
            <SwiperSliderItem
              Comp={CardCourse}
              data={mostFamoustCourses}
              spaceBetween={10}
              slidesPerView={4}
              slidesPerGroup={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            ></SwiperSliderItem>
          </div>
        </div>
      </section>
      <section className={cx("slider")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <h2>Khoá học cấp tốc</h2>
            <SwiperSliderItem
              Comp={CardCourse}
              data={urgentCourse}
              spaceBetween={10}
              slidesPerView={4}
              slidesPerGroup={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            ></SwiperSliderItem>
          </div>
        </div>
      </section>
      <section className={cx("slider")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <h2>Mentor tiêu biểu</h2>
            <SwiperSliderItem
              Comp={CardMember}
              data={mentorList}
              spaceBetween={10}
              slidesPerView={4}
              slidesPerGroup={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            ></SwiperSliderItem>
          </div>
        </div>
      </section>
      <section className={cx("banner-2")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <h4>Định hướng và Chuẩn hoá lộ trình học tập</h4>
            <h2>Học Thật, Dự Án Thật, Mentor Tận Tâm</h2>
            <Flex className={cx("btn_list")} justify="center">
              <ButtonCustom to={routes.course} primary className={cx("btn")}>
                DANH SÁCH KHÓA HỌC
              </ButtonCustom>
              <ButtonCustom
                to="https://www.facebook.com/bsmart.edu.vn"
                primary
                className={cx("btn")}
              >
                TƯ VẤN LỘ TRÌNH
              </ButtonCustom>
            </Flex>
          </div>
        </div>
      </section>
      <section className={cx("banner-3")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <h4>Nhận được sự tin tưởng của các đối tác</h4>
            <SwiperSliderItem
              Comp={ImageComponent}
              data={LogoBrand}
              spaceBetween={10}
              arrow={false}
              slidesPerView={4}
              slidesPerGroup={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            ></SwiperSliderItem>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
