import { FunctionComponent, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconChevronLeft, IconChevronRight } from "../Icon";
import styles from "./SwiperSlideItem.module.scss";
import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const cx = classNames.bind(styles);
interface SwiperSliderItemProps {
  spaceBetween?: number;
  slidesPerView?: number;
  slidesPerGroup?: number;
  data: Array<any>;
  breakpoints: any;
  arrow?: boolean;
  Comp: FunctionComponent<any>;
}

const SwiperSliderItem: FunctionComponent<SwiperSliderItemProps> = ({
  data,
  Comp,
  arrow = true,
  ...props
}) => {
  const sliderRef: any = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideNext();
  }, []);

  return (
    <div className={cx("swiper")}>
      <Swiper
        ref={sliderRef}
        {...props}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{ paddingBottom: "50px" }}
      >
        {data?.length
          ? data.map((item) => (
              <SwiperSlide key={item.description || Math.random()}>
                <div>
                  <Comp data={item}></Comp>
                </div>
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
      {arrow ? (
        <>
          <div className={cx("action-left")} onClick={handlePrev}>
            <IconChevronLeft className={cx("icon")}></IconChevronLeft>
          </div>
          <div className={cx("action-right")} onClick={handleNext}>
            <IconChevronRight className={cx("icon")}></IconChevronRight>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SwiperSliderItem;
