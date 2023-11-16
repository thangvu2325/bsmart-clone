import { FunctionComponent, useCallback, useRef } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Home.module.scss";
import Banner from "../../layout/components/Banner";
import { Flex, Image } from "antd";
import ButtonCustom from "../../components/Button";
import { IconCircleCheck } from "@tabler/icons-react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCogsSetting,
  IconFire,
  IconQrcode,
  IconTrophy,
  IconUsers,
} from "../../components/Icon";

export interface HomeProps {}
const cx = classNames.bind(styles);
const Home: FunctionComponent<HomeProps> = () => {
  const sliderRef: any = useRef(null);

  const handleSlideChange = (swiper: any) => {
    console.log(`Current active index: ${swiper.activeIndex + 1}`);
  };
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    console.log(sliderRef.current?.swiper);
    sliderRef.current?.swiper.slideNext();
  }, []);
  const setActiveIndexSlide = useCallback((index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideTo(index);
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
                <ButtonCustom to="/" primary className={cx("btn")}>
                  XEM KHÓA HỌC
                </ButtonCustom>
                <ButtonCustom to="/" primary className={cx("btn")}>
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
          <Flex className={cx("advantage_content")}>
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

          <Flex className={cx("advantage_content")}>
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
        <Flex className={cx("container")}>
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
            <div className={cx("swiper")}>
              <Swiper
                ref={sliderRef}
                spaceBetween={10}
                slidesPerView={4}
                slidesPerGroup={4}
                onSlideChange={(swiper: any) => handleSlideChange(swiper)} // Sự kiện khi chuyển slide
              >
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 1
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 3
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 4
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 4
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 4
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 4
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 4
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 9
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      background: "red",
                      width: "316.5px",
                      height: "558.2px",
                    }}
                  >
                    Slide 10
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={cx("action-left")} onClick={handlePrev}>
                <IconChevronLeft className={cx("icon")}></IconChevronLeft>
              </div>
              <div className={cx("action-right")} onClick={handleNext}>
                <IconChevronRight className={cx("icon")}></IconChevronRight>
              </div>
              <div className={cx("dots")}>
                <button
                  className={cx("dot", {
                    active: true,
                  })}
                  onClick={() => {
                    setActiveIndexSlide(0);
                  }}
                >
                  <span></span>
                </button>

                <button
                  className={cx("dot", {
                    active: false,
                  })}
                  onClick={() => {
                    setActiveIndexSlide(4);
                  }}
                >
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
