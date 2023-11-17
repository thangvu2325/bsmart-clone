import { FunctionComponent } from "react";
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
import { cardType } from "../../type/type";
import CardCourse from "../../components/CardCourse";
import CardMember from "../../components/CardMember";
export interface HomeProps {}
const cx = classNames.bind(styles);
const dataSwiperFirst: Array<cardType> = [
  {
    mentor: "Trần Hòa Hiệp",
    banner: "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
    course: ".NET Core API",
    session: 15,
    price: 3000000,
    count: 148,
    description:
      ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
    rate: 5,
  },
  {
    mentor: "Tô Lý Hữu Nhân",
    banner: "https://bsmart.edu.vn/files/testing%20foundation.jpg",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
    course: "Nhập Môn Kiểm Thử Phần Mềm",
    session: 12,
    price: 2500000,
    count: 22,
    description:
      "Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử. Như viết test case, system test hay hiểu rõ quy trình thực hiện kiểm thử một phần mềm nào đó. Khóa học sẽ hướng đến Manual Testing đồng thời cung cấp khái niệm về Automation Testing.",
    rate: 4.5,
  },
  {
    mentor: "Nguyễn Thị Trà My",
    banner: "https://bsmart.edu.vn/files/CourseImage/web-java.jpg",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/my.webp",
    course: "Java Web",
    session: 18,
    price: 3000000,
    count: 15,
    description:
      "Java là một ngôn ngữ dùng trong lập trình. Trong khi đó, web là từ viết tắt của website mà một website thì lại có thể chứa các trang web khác. Như vậy, Java Web được hiểu đơn giản là dùng ngôn ngữ lập trình Java, kết hợp với một số công nghệ khác như HTML, Javascript, CSS… nhằm tạo ra các website hoặc ứng dụng web.",
    rate: 5,
  },
  {
    mentor: "Đỗ Minh Quân",
    banner: "https://bsmart.edu.vn/files/CourseImage/java-script-SEO.jpg",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
    course: "JavaScript",
    session: 18,
    price: 2500000,
    count: 18,
    description:
      "JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web.",
    rate: 5,
  },
  {
    mentor: "Tô Lý Hữu Nhân",
    banner:
      "https://bsmart.edu.vn/files/CourseImage/software-requirement-specification-1-638.webp",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
    course: "Software Requirement",
    session: 15,
    price: 2700000,
    count: 13,
    description:
      "Môn software requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.",
    rate: 5,
  },
  {
    mentor: "Hồ Hồng Minh",
    banner:
      "https://bsmart.edu.vn/files/software-requirements-document-header%402x.png",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp",
    course: "Software Requirement for Beginner",
    session: 18,
    price: 2500000,
    count: 15,
    description:
      "Môn Software Requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.",
    rate: 5,
  },
  {
    mentor: "Phan Nhật Tân",
    banner: "https://bsmart.edu.vn/files/download.png",
    avatar:
      "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
    course: "C Fundamental",
    session: 18,
    price: 2000000,
    count: 17,
    description:
      "Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính và Lập trình, trong đó sinh viên sẽ học cách sử dụng ngôn ngữ lập trình C++ để tạo ra các chương trình ứng dụng và phần mềm.",
    rate: 5,
  },
  {
    mentor: "Đoàn Ngọc Trân Châu",
    banner: "https://bsmart.edu.vn/files/CourseImage/web-java.jpg",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/my.webp",
    course: "Database Fundamental",
    session: 15,
    price: 2500000,
    count: 17,
    description:
      "Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý thông tin một cách hiệu quả. Môn học cơ sở dữ liệu (Database) được xem là một trong những môn học quan trọng trong lĩnh vực Công nghệ thông tin.",
    rate: 5,
  },
];
const dataSwiperSecond: Array<cardType> = [
  {
    mentor: "Phan Nhật Tân",
    banner: "https://bsmart.edu.vn/files/CourseImage/PRJ301.webp",
    avatar:
      "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
    course: "Java Web Application_Cấp Tốc",
    session: 3,
    price: 500000,
    count: 22,
    description: "Khóa này sẽ giúp các bạn vượt qua kì thi một cách dễ dàng!",
    rate: 5,
  },
  {
    mentor: "Đoàn Ngọc Trân Châu",
    banner: "https://bsmart.edu.vn/files/CourseImage/DB_captoc.webp",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp",
    course: "Database_Cấp Tốc",
    session: 2,
    price: 500000,
    count: 16,
    description: "Giúp các bạn vượt qua kì thi môn Database một cách dễ dàng!",
    rate: 5,
  },
  {
    mentor: "Phan Nhật Tân",
    banner:
      "https://bsmart.edu.vn/files/CourseImage/object-oriented-programming-oop.png",
    avatar:
      "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
    course: "OOP_Cấp Tốc",
    session: 2,
    price: 500000,
    count: 18,
    description: "Tự tin bước vào kì thi thực hành chỉ với 2 buổi học !",
    rate: 5,
  },
  {
    mentor: "Đỗ Minh Quân",
    banner:
      "https://bsmart.edu.vn/files/CourseImage/reactjs-nhung-dieu-ban-can-phai-biet-3.webp",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
    course: "ReactJS_Cấp Tốc",
    session: 2,
    price: 500000,
    count: 19,
    description: "Tự tin lấy điểm cao thực hành chỉ với 2 buổi học cấp tốc ",
    rate: 5,
  },
  {
    mentor: "Tô Lý Hữu Nhân",
    banner:
      "https://bsmart.edu.vn/files/CourseImage/software-requirement-specification-1-638.webp",
    avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
    course: "Software Requirement_Cấp Tốc",
    session: 3,
    price: 500000,
    count: 40,
    description:
      "Zero to Hero, khóa học cấp tốc này giúp các bạn sẽ dễ dàng hiểu và làm được bài thi thực hành chỉ với các thao tác đơn giản!",
    rate: 5,
  },
];

const dataSwiperThird: Array<cardType> = [
  {
    mentor: "Phan Nhật Tân",
    banner:
      "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
    description:
      "Nhật Tân, với kinh nghiệm giảng dạy và chia sẻ cho nhiều học viên, tôi đã xây dựng được niềm tin rất lớn đối với cộng đồng. Hy vọng tôi sẽ đem đến cho các bạn những trải nghiệm đáng quý trong quá trình học tập cùng tôi.",
  },
  {
    mentor: "Đỗ Minh Quân",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
    description:
      "Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin, chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công trong lĩnh vực lập trình Front-end.",
  },
  {
    mentor: "Team STEM Mentor",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp",
    description:
      "Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong nhiều năm và  yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.",
  },
  {
    mentor: "Tuấn Anh Phạm",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/aa.webp",
    description:
      "Xin chào! Tôi là Phạm Tuấn Anh - một lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc với các dự án phần mềm và phát triển ứng dụng. Tôi đã từng dẫn dắt nhiều học sinh, sinh viên từ zero đến hero trong lĩnh vực công nghệ thông tin. Tôi tin rằng công nghệ thông tin sẽ tiếp tục phát triển và luôn tìm cách để cập nhật tin tức mới nhất từ ngành.",
  },
  {
    mentor: "Hồ Hồng Minh",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp",

    description:
      "Xin chào, tôi là Hồ Hồng Minh. Tôi có hơn 3 năm kinh nghiệm trong việc giảng dạy và mentor cho các học sinh, sinh viên về chuyên ngành kĩ thuật phần mềm. Tôi đã hướng dẫn nhiều dự án và có thể giúp đỡ học sinh và sinh viên thành công trong việc đạt được các mục tiêu học tập và nghề nghiệp của họ. Ngoài ra, tôi cũng đam mê nghiên cứu và đăng ký các bài báo khoa học để chia sẻ các phát hiện và kiến thức mới với cộng đồng. Tôi tin rằng giáo dục là một công cụ mạnh mẽ để đẩy mạnh sự phát triển của cá nhân, cộng đồng, và tôi mong muốn hỗ trợ các học sinh và sinh viên trong việc đạt được sự thành công trong cuộc sống và nghề nghiệp của họ.",
  },
  {
    mentor: "Đoàn Ngọc Trân Châu",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp",

    description:
      "Tôi là Châu. Với mong muốn chia sẻ kiến thức của mình đến với những bạn yêu thích lập trình, tôi đã và đang hướng dẫn cho nhiều lớp học sinh và sinh viên. Với khả năng truyền đạt kiến thức một cách xúc tích và dễ hiểu nhất, tôi tin rằng tình yêu lập trình của các bạn sẽ ngày càng được nung nóng và ngày càng mãnh liệt hơn.",
  },
  {
    mentor: "Tô Lý Hữu Nhân",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",

    description:
      "Tôi là Hữu Nhân, hiện tại là một Business Analyst với hơn 3 năm kinh nghiệm và 2 năm với vị trí Tester/QC. Tôi đã tham gia các dự án product tới outsource. Và từ những kinh nghiệm trầy da tróc vảy khi tham gia các dự án, tôi tin rằng tôi có thể chia sẻ các kinh nghiệm về quản lý dự án, quy trình làm phầm mềm, kiểm thử phần mềm và những kinh nghiệm xử lý vấn đề.",
  },
  {
    mentor: "Nguyễn Viết Châu",
    banner:
      "https://bsmart.edu.vn/files/Avatar_Mentor/z4269915579822-aeabe623ca8078c8fcc4fdf2780c3869.webp",

    description:
      "Xin chào! Tôi là Nguyễn Viết Châu – mentor có kinh nghiệm trong việc giảng dạy các môn học liên quan đến công nghệ thông tin. Với 3 năm kinh nghiệm làm mentor và một nền tảng kiến thức chuyên môn vững vàng, tôi tự tin rằng mình có thể giúp các bạn sinh viên nắm vững kiến thức, nâng cao kỹ năng và đạt được thành tích tốt nhất trong học tập. Tôi luôn đặt sự tiếp thu và hiểu biết của sinh viên lên hàng đầu và dùng các phương pháp giảng dạy đa dạng, trực quan để giúp các bạn hiểu bài một cách dễ dàng và thú vị. ",
  },
  {
    mentor: "Nguyễn Thị Trà My",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/my.webp",

    description:
      "Xin chào, tôi là Nguyễn Thị Trà My. Với kinh nghiệm làm mentor cũng như giảng dạy về các môn lập trình trong ngành công nghệ thông tin, tôi sẽ giúp các bạn hiểu rõ hơn về các môn học cũng như những kinh nghiệm thực hành. Tôi sẽ đồng hành cùng các bạn trong suốt quá trình học và định hướng nghề nghiệp trong tương lai.",
  },
  {
    mentor: "Trần Hòa Hiệp",
    banner: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",

    description:
      "Tôi là Trần Hòa Hiệp, một full stack developer với 5 năm kinh nghiệm về công nghệ .NET có kiến ​​thức tốt về Thiết kế cơ sở dữ liệu, Design Pattern, Phân tích và thiết kế hướng đối tượng. 2 năm trong việc đào tạo học viên là người đi làm, và sinh viên sắp ra trường.",
  },
];
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
            <SwiperSliderItem
              Comp={CardCourse}
              data={dataSwiperFirst}
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
              data={dataSwiperSecond}
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
              data={dataSwiperThird}
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
              <ButtonCustom primary className={cx("btn")}>
                DANH SÁCH KHÓA HỌC
              </ButtonCustom>
              <ButtonCustom primary className={cx("btn")}>
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
