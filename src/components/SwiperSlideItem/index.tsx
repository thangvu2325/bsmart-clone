import { FunctionComponent, useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconChevronLeft, IconChevronRight } from "../Icon";
import styles from "./SwiperSlideItem.module.scss";
import classNames from "classnames/bind";
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
  const [activeDot, setActiveDot] = useState<number>(0);
  const dots: number = data?.length / 4 + (data?.length % 4 !== 0 ? 1 : 0);
  const handleSlideChange = (swiper: any) => {
    setActiveDot(Math.floor(swiper.activeIndex / 4));
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
  const renderDots = () => {
    return Array.from({ length: dots }, (_, index) => {
      return (
        <button
          key={index}
          className={cx("dot", {
            active: index === activeDot,
          })}
          onClick={() => {
            setActiveIndexSlide(index * 4);
            setActiveDot(index);
          }}
        >
          <span></span>
        </button>
      );
    });
  };
  return (
    <div className={cx("swiper")}>
      <Swiper
        ref={sliderRef}
        {...props}
        onSlideChange={(swiper: any) => handleSlideChange(swiper)} // Sự kiện khi chuyển slide
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

      <div className={cx("dots")}>{renderDots()}</div>
    </div>
  );
};

export default SwiperSliderItem;
