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
      courseId: "1",
      mentor: "Trần Hòa Hiệp",
      banner: "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
      course: ".NET Core API",
      session: 15,
      price: 3000000,
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "backend",
      level: "kho",
      count: 148,
      description:
        ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
      rate: 5,
    },
    {
      courseId: "2",

      mentor: "Tô Lý Hữu Nhân",
      banner: "https://bsmart.edu.vn/files/testing%20foundation.jpg",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
      course: "Nhập Môn Kiểm Thử Phần Mềm",
      session: 12,
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "other",
      price: 2500000,
      level: "trung_binh",
      count: 22,
      description:
        "Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử. Như viết test case, system test hay hiểu rõ quy trình thực hiện kiểm thử một phần mềm nào đó. Khóa học sẽ hướng đến Manual Testing đồng thời cung cấp khái niệm về Automation Testing.",
      rate: 4.5,
    },
    {
      courseId: "3",

      mentor: "Nguyễn Thị Trà My",
      banner: "https://bsmart.edu.vn/files/CourseImage/web-java.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/my.webp",
      course: "Java Web",
      typeOfLearning: ["offline"],
      filterCourseCate: "backend",
      session: 18,
      price: 3000000,
      level: "trung_binh",
      count: 15,
      description:
        "Java là một ngôn ngữ dùng trong lập trình. Trong khi đó, web là từ viết tắt của website mà một website thì lại có thể chứa các trang web khác. Như vậy, Java Web được hiểu đơn giản là dùng ngôn ngữ lập trình Java, kết hợp với một số công nghệ khác như HTML, Javascript, CSS… nhằm tạo ra các website hoặc ứng dụng web.",
      rate: 5,
    },
    {
      courseId: "4",

      mentor: "Đỗ Minh Quân",
      banner: "https://bsmart.edu.vn/files/CourseImage/java-script-SEO.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
      course: "JavaScript",
      typeOfLearning: ["offline"],
      session: 18,
      level: "trung_binh",
      price: 2500000,
      filterCourseCate: "frontend",
      count: 18,
      description:
        "JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web.",
      rate: 5,
    },
    {
      courseId: "5",

      mentor: "Tô Lý Hữu Nhân",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/software-requirement-specification-1-638.webp",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
      course: "Software Requirement",
      typeOfLearning: ["online", "offline"],
      session: 15,
      filterCourseCate: "other",
      price: 2700000,
      level: "trung_binh",
      count: 13,
      description:
        "Môn software requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.",
      rate: 5,
    },
    {
      courseId: "6",

      mentor: "Hồ Hồng Minh",
      banner:
        "https://bsmart.edu.vn/files/software-requirements-document-header%402x.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp",
      course: "Software Requirement for Beginner",
      typeOfLearning: ["offline"],
      filterCourseCate: "other",
      session: 18,
      price: 2500000,
      level: "de",
      count: 15,
      description:
        "Môn Software Requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.",
      rate: 5,
    },
    {
      courseId: "7",

      mentor: "Phan Nhật Tân",
      banner: "https://bsmart.edu.vn/files/download.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "C Fundamental",
      typeOfLearning: ["online", "offline"],
      session: 18,
      price: 2000000,
      level: "de",
      filterCourseCate: "backend",
      count: 17,
      description:
        "Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính và Lập trình, trong đó sinh viên sẽ học cách sử dụng ngôn ngữ lập trình C++ để tạo ra các chương trình ứng dụng và phần mềm.",
      rate: 5,
    },
    {
      courseId: "8",

      mentor: "Đoàn Ngọc Trân Châu",
      banner: "https://bsmart.edu.vn/files/CourseImage/web-java.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/my.webp",
      course: "Database Fundamental",
      typeOfLearning: ["offline"],
      filterCourseCate: "database",
      session: 15,
      price: 2500000,
      level: "trung_binh",
      count: 17,
      description:
        "Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý thông tin một cách hiệu quả. Môn học cơ sở dữ liệu (Database) được xem là một trong những môn học quan trọng trong lĩnh vực Công nghệ thông tin.",
      rate: 5,
    },
    // Cap toc
    {
      courseId: "9",

      mentor: "Phan Nhật Tân",
      banner: "https://bsmart.edu.vn/files/CourseImage/PRJ301.webp",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "Java Web Application_Cấp Tốc",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "cap_toc",
      session: 3,
      level: "cap_toc",
      price: 500000,
      count: 22,
      description: "Khóa này sẽ giúp các bạn vượt qua kì thi một cách dễ dàng!",
      rate: 5,
    },
    {
      courseId: "10",

      mentor: "Đoàn Ngọc Trân Châu",
      banner: "https://bsmart.edu.vn/files/CourseImage/DB_captoc.webp",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp",
      course: "Database_Cấp Tốc",
      typeOfLearning: ["offline"],
      filterCourseCate: "cap_toc",
      session: 2,
      price: 500000,
      level: "cap_toc",

      count: 16,
      description:
        "Giúp các bạn vượt qua kì thi môn Database một cách dễ dàng!",
      rate: 5,
    },
    {
      courseId: "11",

      mentor: "Phan Nhật Tân",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/object-oriented-programming-oop.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "OOP_Cấp Tốc",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "cap_toc",
      session: 2,
      price: 500000,
      level: "cap_toc",

      count: 18,
      description: "Tự tin bước vào kì thi thực hành chỉ với 2 buổi học !",
      rate: 5,
    },
    {
      courseId: "12",

      mentor: "Đỗ Minh Quân",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/reactjs-nhung-dieu-ban-can-phai-biet-3.webp",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
      course: "ReactJS_Cấp Tốc",
      typeOfLearning: ["online", "offline"],
      session: 2,
      price: 500000,
      filterCourseCate: "cap_toc",
      level: "cap_toc",
      count: 19,
      description: "Tự tin lấy điểm cao thực hành chỉ với 2 buổi học cấp tốc ",
      rate: 5,
    },
    {
      courseId: "13",

      mentor: "Tô Lý Hữu Nhân",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/software-requirement-specification-1-638.webp",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
      course: "Software Requirement_Cấp Tốc",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "cap_toc",
      session: 3,
      price: 500000,
      level: "cap_toc",

      count: 40,
      description:
        "Zero to Hero, khóa học cấp tốc này giúp các bạn sẽ dễ dàng hiểu và làm được bài thi thực hành chỉ với các thao tác đơn giản!",
      rate: 5,
    },
    {
      courseId: "14",

      mentor: "Phan Nhật Tân",
      banner: "https://bsmart.edu.vn/files/CourseImage/c-sharp.webp",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "Windows Form",
      typeOfLearning: ["online"],
      session: 15,
      price: 3000000,
      level: "trung_binh",
      filterCourseCate: "backend",
      count: 0,
      description:
        "Khóa học Windows Forms là một khóa học chuyên về phát triển ứng dụng desktop sử dụng công nghệ Windows Forms của Microsoft. Windows Forms là một bộ công cụ phát triển ứng dụng trực quan và dễ sử dụng trong môi trường Windows, cho phép người phát triển xây dựng các ứng dụng Windows một cách nhanh chóng và hiệu quả.",
      rate: 0,
    },
    {
      courseId: "15",

      mentor: "Nguyễn Viết Châu",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/object-oriented-programming-oop.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "Object-oriented programming (OOP)",
      typeOfLearning: ["offline"],
      filterCourseCate: "backend",
      session: 15,
      price: 3400000,
      level: "trung_binh",
      count: 26,
      description:
        "Lập trình hướng đối tượng (OOP) là một kỹ thuật lập trình cho phép lập trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng.",
      rate: 5,
    },
    {
      courseId: "16",

      mentor: "Nguyễn Viết Châu",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/lap-trinh-c-cong-cong-hieu-qua-3.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "C Basic",
      typeOfLearning: ["offline"],
      filterCourseCate: "backend",
      session: 18,
      price: 3600000,
      level: "de",
      count: 30,
      description:
        "C/C++ là một ngôn ngữ lâu đời, có tốc độ nhanh, các kiểu dữ liệu rõ ràng. Nếu như làm chủ được ngôn ngữ nền tảng như C/C++ thì sau này học các ngôn ngữ khác trở nên dễ dàng hơn, do đó rất phù hợp với người mới bắt đầu.",
      rate: 5,
    },
    {
      courseId: "17",

      mentor: "Đoàn Ngọc Trân Châu",
      banner: "https://bsmart.edu.vn/files/CourseImage/html-vs-css.png",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp",
      course: "HTML & CSS _ Basic",
      typeOfLearning: ["offline"],
      session: 18,
      price: 3000000,
      filterCourseCate: "frontend",
      level: "de",
      count: 12,
      description:
        "HTML&nbsp;hay&nbsp;HyperText Markup Language&nbsp;– <em>Ngôn ngữ đánh dấu siêu văn bản</em>, là ngôn ngữ được sử dụng cho các tài liệu web.&nbsp CSS là ngôn ngữ tạo phong cách cho trang web – Cascading Style Sheet language. Nó dùng để tạo phong cách và định kiểu cho những yếu tố được viết dưới dạng ngôn ngữ đánh dấu, như là HTML. Nó có thể điều khiển định dạng của nhiều trang web cùng lúc để tiết kiệm công sức cho người viết web. Nó phân biệt cách hiển thị của trang web với nội dung chính của trang bằng cách điều khiển bố cục, màu sắc, và font chữ.",
      rate: 5,
    },
    {
      courseId: "18",

      mentor: "Phan Nhật Tân",
      banner: "https://bsmart.edu.vn/files/maxresdefault.jpg",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "Java Basic",
      typeOfLearning: ["offline"],
      filterCourseCate: "backend",
      session: 15,
      price: 2500000,
      level: "trung_binh",
      count: 26,
      description:
        "Java là một ngôn ngữ lập trình đặc biệt được thiết kế để chạy trên nhiều nền tảng khác nhau, bao gồm cả hệ điều hành Windows, Linux và Mac OS. Nó được phát triển bởi Sun Microsystems và sau đó được mua lại bởi Oracle Corporation.",
      rate: 5,
    },
    {
      courseId: "19",

      mentor: "Đỗ Minh Quân",
      banner: "https://bsmart.edu.vn/files/CourseImage/html-770x515.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
      course: "HTML & CSS",
      filterCourseCate: "frontend",
      typeOfLearning: ["offline"],
      session: 18,
      price: 2500000,
      level: "de",
      count: 19,
      description:
        "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây dựng cấu trúc các thành phần có trong trang web hoặc ứng dụng. Cùng với đó chúng cũng giúp trang web phân chia các đoạn văn, links, heading, blockquotes,…",
      rate: 5,
    },
    {
      courseId: "20",

      mentor: "Phan Nhật Tân",
      banner: "https://bsmart.edu.vn/files/Database-Design.jpg",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "Database Basic",
      typeOfLearning: ["offline"],
      filterCourseCate: "database",
      session: 18,
      price: 2700000,
      level: "trung_binh",
      count: 40,
      description:
        "cung cấp cho sinh viên kiến thức về các khái niệm cơ bản của cơ sở dữ liệu, các kiểu dữ liệu và thuật toán lưu trữ, truy xuất, xử lý, cập nhật dữ liệu trong cơ sở dữ liệu. Ngoài ra, sinh viên cũng được học cách thiết kế cơ sở dữ liệu cho các ứng dụng thực tế, bảo vệ dữ liệu cũng như quản lý dữ liệu.",
      rate: 5,
    },
    {
      courseId: "21",

      mentor: "Tuấn Anh Phạm",
      banner: "https://bsmart.edu.vn/files/CourseImage/unnamed.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/aa.webp",
      course: "Scratch",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "other",
      session: 18,
      price: 2500000,
      level: "de",
      count: 17,
      description:
        "Học cách làm việc với dữ liệu, tương tác với máy tính: Scratch cho phép bạn thực hành cách làm việc với dữ liệu và tương tác với máy tính. Học cách tạo ra các ứng dụng, trò chơi và hoạt động: Scratch cho phép bạn tạo ra các ứng dụng, trò chơi và hoạt động, giúp phát triển kỹ năng về cách thiết kế và thiết lập các hoạt động. Học cách suy nghĩ nghiêm túc và giải quyết vấn đề: Scratch khuyến khích việc suy nghĩ nghiêm túc và giải quyết vấn đề, giúp bạn bắt đầu suy nghĩ về các vấn đề, đặt ra câu hỏi và tìm giải pháp. Học cách hợp tác và chia sẻ: Scratch cũng cho phép bạn học cách làm việc trong nhóm, hợp tác và chia sẻ ý tưởng, giúp bạn trở thành một người học tập đáng kính và tôn trọng. Học cách lập trình: Scratch là một công cụ tốt để bắt đầu học lập trình, giúp bạn học cách tạo ra các lệnh, đoạn mã và chương trình để điều khiển máy tính.",
      rate: 4.5,
    },
    {
      courseId: "22",

      mentor: "Tuấn Anh Phạm",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/nganh-khoa-hoc-may-tinh.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/aa.webp",
      course: "Khoa Học Máy Tính",
      typeOfLearning: ["offline"],
      filterCourseCate: "other",
      session: 18,
      price: 3500000,
      level: "de",
      count: 10,
      description:
        "Khóa học này cung cấp một cái nhìn tổng quan về nguyên tắc cơ bản của máy tính. Các chủ đề bao gồm tất cả các lĩnh vực của khoa học máy tính theo chiều rộng như tổ chức máy tính, mạng, hệ điều hành, cấu trúc dữ liệu, cấu trúc tệp, các vấn đề xã hội và đạo đức.",
      rate: 4.5,
    },
    {
      courseId: "23",

      mentor: "Phan Nhật Tân",
      banner:
        "https://bsmart.edu.vn/files/Uploads/mot-so-nguyen-ly-lap-trinh-huong-doi-tuong-20230309090859-202451.jpg",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
      course: "OOP Fundamental",
      typeOfLearning: ["offline"],
      filterCourseCate: "backend",
      session: 18,
      price: 2700000,
      level: "trung_binh",
      count: 18,
      description:
        "OOP Fundamental là một khái niệm cốt lõi của Lập trình Hướng đối tượng (OOP). Nó bao gồm một số khái niệm và kỹ thuật cơ bản như lớp, đối tượng, kế thừa, đa hình và trừu tượng hóa.",
      rate: 4.5,
    },
    {
      courseId: "24",

      mentor: "Hồ Hồng Minh",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/how-to-make-a-website-using-html-and-css-website-design-in-html-and-css.jpg",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp",
      course: "HTML & CSS Foundation",
      typeOfLearning: ["offline"],
      session: 18,
      filterCourseCate: "frontend",
      price: 3000000,
      level: "de",
      count: 19,
      description:
        "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây dựng cấu trúc các thành phần có trong trang web hoặc ứng dụng. Cùng với đó chúng cũng giúp trang web phân chia các đoạn văn, links, heading, blockquotes,…",
      rate: 4.5,
    },
    {
      courseId: "25",

      mentor: "Đỗ Minh Quân",
      banner: "https://bsmart.edu.vn/files/CourseImage/reactjs.png",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
      course: "ReactJS",
      typeOfLearning: ["offline"],
      session: 18,
      price: 2700000,
      filterCourseCate: "frontend",
      level: "kho",
      count: 18,
      description:
        "ReactJS là một thư viện JavaScript có tính hiệu quả và linh hoạt để xây dựng các thành phần giao diện người dùng (UI) có thể sử dụng lại. ReactJS giúp phân chia các UI phức tạp thành các thành phần nhỏ (được gọi là component).",
      rate: 5,
    },
    {
      courseId: "26",

      mentor: "Nguyễn Thị Trà My",
      banner: "https://bsmart.edu.vn/files/CourseImage/2-8.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/my.webp",
      course: "JavaScript_ Basic",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "frontend",
      session: 18,
      price: 3000000,
      level: "kho",
      count: 15,
      description:
        "JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web.",
      rate: 5,
    },
    {
      courseId: "27",

      mentor: "Hồ Hồng Minh",
      banner: "https://bsmart.edu.vn/files/CourseImage/reactjs.png",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp",
      course: "ReactJS Fundamental",
      typeOfLearning: ["offline"],
      filterCourseCate: "frontend",
      session: 18,
      price: 2700000,
      level: "kho",
      count: 14,
      description:
        "JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web.",
      rate: 4.5,
    },
    {
      courseId: "28",

      mentor: "Nguyễn Viết Châu",
      banner: "https://bsmart.edu.vn/files/CourseImage/2-8.jpg",
      avatar:
        "https://bsmart.edu.vn/files/Avatar_Mentor/z4269915579822-aeabe623ca8078c8fcc4fdf2780c3869.webp",
      course: "JavaScript Basic",
      typeOfLearning: ["offline"],
      filterCourseCate: "frontend",
      session: 18,
      price: 3000000,
      level: "trung_binh",
      count: 16,
      description:
        "JavaScript là ngôn ngữ lập trình website phổ biến hiện nay, nó được tích hợp và nhúng vào HTML giúp website trở nên sống động hơn. JavaScript đóng vai trò như là một phần của trang web, thực thi cho phép Client-side script từ phía người dùng cũng như phía máy chủ (Nodejs) tạo ra các trang web động.",
      rate: 4.5,
    },
    {
      courseId: "29",

      mentor: "Team STEM Mentor",
      banner:
        "https://bsmart.edu.vn/files/stem/scratch-ni%C3%B1os-1024x934.png",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp",
      course: "Scratch Cơ bản",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "stem",
      session: 12,
      price: 2500000,
      level: "de",
      count: 12,
      description:
        "Khóa học Scratch cơ bản giúp học viên tiếp cận công nghệ 4.0 thông qua ngôn ngữ lập trình Scratch. Học viên sẽ học cách thiết kế nhân vật, tạo trò chơi và điều khiển robot thông qua Scratch. Khóa học tập trung vào rèn luyện tư duy logic, kỹ năng thiết kế và giải quyết vấn đề, đồng thời phát triển kỹ năng giao tiếp và làm việc nhóm. Sau khi hoàn thành khóa học cơ bản, học viên có thể tiếp tục học khóa Scratch Nâng cao để nâng cao kỹ năng lập trình và thực hiện các dự án phức tạp hơn.",
      rate: 5,
    },
    {
      courseId: "30",

      mentor: "Team STEM Mentor",
      banner: "https://bsmart.edu.vn/files/2212%20THUMBNAIL%20WEB-11.jpg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp",
      course: "Scratch Nâng cao",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "stem",
      session: 12,
      price: 2500000,
      level: "de",
      count: 12,
      description:
        "Khóa học Scratch Nâng cao giúp học viên tiếp cận và làm quen với các khái niệm và công cụ lập trình phức tạp hơn. Học viên sẽ học cách xây dựng và tổ chức các dự án lớn, tạo ra các bối cảnh, kiến trúc và nhân vật phức tạp và hoàn thiện sản phẩm của mình. Đồng thời, khóa học cũng khuyến khích học viên tìm hiểu và ứng dụng công nghệ một cách sáng tạo và có ý nghĩa.",
      rate: 5,
    },
    {
      courseId: "31",

      mentor: "Team STEM Mentor",
      banner:
        "https://bsmart.edu.vn/files/CourseImage/313d5643-9e50-48c1-a6b7-e52da489d01a_1.48ce68860d2a4169c0ed9e55ce3039b0.jpeg",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp",
      course: "Robot Cơ bản",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "stem",
      session: 12,
      price: 2500000,
      level: "de",
      count: 12,
      description:
        "Khóa học Robot cơ bản là khóa học tương tác giữa Robotics và lập trình. Học viên sẽ lắp ráp các mô hình robot với LEGO WeDo và sử dụng ngôn ngữ lập trình Scratch để tương tác và điều khiển robot. Học viên sẽ tìm hiểu về cấu tạo robot và các cảm biến, lập trình các chuyển động và tác động đơn giản và áp dụng kiến thức STEM để giải quyết các bài toán thực tế. Cuối khóa, học viên sẽ tổng kết và trình bày dự án robot của mình.",
      rate: 5,
    },
    {
      courseId: "32",
      mentor: "Team STEM Mentor",
      banner:
        "https://bsmart.edu.vn/files/ngon-ngu-lap-tring-cho-IoT-768x695.webp",
      avatar: "https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp",
      course: "Lập trình IoT",
      typeOfLearning: ["online", "offline"],
      filterCourseCate: "stem",
      session: 12,
      price: 2500000,
      level: "de",
      count: 14,
      description:
        "Khóa học Lập trình IoT cung cấp kiến thức về khoa học, vật lý, lập trình và điện tử, sử dụng bo mạch Microbit và ngôn ngữ lập trình MakeCode. Học viên sẽ xây dựng các hệ thống cảm biến và mạch điều khiển, áp dụng vào cuộc sống. Học viên cũng học về vi mạch Arduino, Raspberry, lập trình Arduino IDE và Python để thiết lập hệ thống Internet of Things. Lộ trình này giúp học viên hiểu sâu về IoT và có khả năng thiết kế, xây dựng và sử dụng các hệ thống điều khiển trong lĩnh vực này.",
      rate: 3.5,
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
