"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "WorldReader",
    image: "/projects/worldreader.png",
    description: "WorldReader là một dự án tập trung vào việc xây dựng các API cho một cửa hàng sách trực tuyến, tích hợp đầy đủ các tính năng thiết yếu của một trang web thương mại điện tử điển hình. Các tính năng bao gồm quản lý sản phẩm, tài khoản người dùng, giỏ hàng, giảm giá, xử lý đơn hàng và nhiều tính năng khác.",
    role: "Backend Developer (1 thành viên)",
    tech: ["NestJs", "MySQL", "TypeORM", "JWT", "Google OAuth2.0", "Swagger"],
    link: "https://github.com/manhdung3010/WordReader-Backend",
    responsibilities: [
      "Phát triển các API cho ứng dụng sử dụng NestJS, đảm bảo tính mở rộng và dễ bảo trì.",
      "Tích hợp xác thực JWT để đảm bảo đăng nhập người dùng an toàn và quản lý phiên làm việc.",
      "Triển khai Google OAuth2.0 để người dùng có thể đăng nhập liền mạch với tài khoản Google.",
      "Thiết kế và phát triển các tính năng quản lý sản phẩm trong chương trình flash sale.",
      "Tài liệu hóa API bằng Swagger, cung cấp tài liệu API rõ ràng và tương tác.",
      "Đảm bảo chất lượng và tính nhất quán của mã nguồn thông qua các thực hành mã hóa đúng đắn và kiến trúc module."
    ]
  },
  {
    title: "Decoraz",
    image: "/projects/decoraz.png",
    description: "Một trang web thương mại điện tử cung cấp đầy đủ các tính năng thường có trên các nền tảng bán lẻ trực tuyến. Trang web bao gồm danh sách sản phẩm, bài viết blog, quản lý giảm giá và khuyến mãi, chức năng giỏ hàng, tài khoản người dùng, chính sách, thông tin liên hệ, các tùy chọn mua sắm và chương trình liên kết.",
    role: "Fullstack Developer (3 thành viên)",
    tech: ["NextJs", "Material UI", "Tailwind CSS", "Java Spring Boot", "MySQL"],
    link: "https://decoraz.vn",
    demo: "https://decoraz.vn",
    responsibilities: [
      "Phát triển và triển khai front-end cho trang web, đảm bảo tính năng và trải nghiệm người dùng.",
      "Thiết kế và xây dựng các trang web dựa trên mockup hoặc mẫu thiết kế đã được cung cấp.",
      "Tối ưu hóa trang web cho SEO để cải thiện khả năng hiển thị và thứ hạng trên công cụ tìm kiếm.",
      "Tạo và phát triển bảng điều khiển quản trị để quản lý nội dung và các tính năng của trang web.",
      "Xử lý quy trình triển khai để đảm bảo trang web hoạt động mượt mà và ổn định."
    ]
  }
];

export default function Projects() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="bg-card rounded-xl shadow-lg overflow-hidden border border-border"
          whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="aspect-video w-64 bg-muted rounded-lg flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-primary">{project.title}</h3>
                  <div className="text-sm text-muted-foreground mb-3">{project.role}</div>
                  <p className="text-base leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-sm text-primary">Công nghệ:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="font-semibold text-sm text-primary">Trách nhiệm:</span>
                  <ul className="mt-2 space-y-1">
                    {project.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4 pt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Xem demo
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Xem code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}