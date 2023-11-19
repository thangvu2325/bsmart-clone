import { createSlice } from "@reduxjs/toolkit";
import { courseType } from "../type/type";
// Define a type for the slice state
interface CoursesState {
  data: Array<courseType>;
}

// Define the initial state using that type
const initialState: CoursesState = {
  data: [
    {
      mentor: "Trần Hòa Hiệp",
      banner: "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
      course: ".NET Core API",
      session: 15,
      price: 3000000,
      level: 3,
      count: 148,
      description:
        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
      rate: 5,
    },
    {
      mentor: "Tô Lý Hữu Nhân",
      banner: "https://bsmart.edu.vn/files/testing%20foundation.jpg",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
      course: "Nhập Môn Kiểm Thử Phần Mềm",
      session: 12,
      price: 2500000,
      level: 2,
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
      level: 2,
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
      level: 2,
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
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
      course: "Software Requirement",
      session: 15,
      price: 2700000,
      level: 2,
      count: 13,
      description:
        "Môn software requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.",
      rate: 5,
    },
    {
      mentor: "Hồ Hồng Minh",
      banner:
        "https://bsmart.edu.vn/files/software-requirements-document-header%402x.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp",
      course: "Software Requirement for Beginner",
      session: 18,
      price: 2500000,
      level: 1,
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
      level: 1,

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
      level: 2,
      count: 17,
      description:
        "Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý thông tin một cách hiệu quả. Môn học cơ sở dữ liệu (Database) được xem là một trong những môn học quan trọng trong lĩnh vực Công nghệ thông tin.",
      rate: 5,
    },
  ],
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = coursesSlice.actions;

export default coursesSlice.reducer;
