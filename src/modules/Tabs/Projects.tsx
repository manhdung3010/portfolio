"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Code, Users, Calendar } from "lucide-react";

const projects = [
  {
    title: "WorldReader",
    image: "/projects/worldreader.png",
    description: "WorldReader là một dự án tập trung vào việc xây dựng các API cho một cửa hàng sách trực tuyến, tích hợp đầy đủ các tính năng thiết yếu của một trang web thương mại điện tử điển hình. Các tính năng bao gồm quản lý sản phẩm, tài khoản người dùng, giỏ hàng, giảm giá, xử lý đơn hàng và nhiều tính năng khác.",
    role: "Backend Developer (1 thành viên)",
    tech: ["NestJs", "MySQL", "TypeORM", "JWT", "Google OAuth2.0", "Swagger"],
    link: "https://github.com/manhdung3010/WordReader-Backend",
    demo: null,
    responsibilities: [
      "Phát triển các API cho ứng dụng sử dụng NestJS, đảm bảo tính mở rộng và dễ bảo trì.",
      "Tích hợp xác thực JWT để đảm bảo đăng nhập người dùng an toàn và quản lý phiên làm việc.",
      "Triển khai Google OAuth2.0 để người dùng có thể đăng nhập liền mạch với tài khoản Google.",
      "Thiết kế và phát triển các tính năng quản lý sản phẩm trong chương trình flash sale.",
      "Tài liệu hóa API bằng Swagger, cung cấp tài liệu API rõ ràng và tương tác.",
      "Đảm bảo chất lượng và tính nhất quán của mã nguồn thông qua các thực hành mã hóa đúng đắn và kiến trúc module."
    ],
    features: ["RESTful API", "Authentication", "Authorization", "Database Design", "API Documentation"]
  },
  {
    title: "Decoraz",
    image: "/projects/decoraz.png",
    description: "Một trang web thương mại điện tử cung cấp đầy đủ các tính năng thường có trên các nền tảng bán lẻ trực tuyến. Trang web bao gồm danh sách sản phẩm, bài viết blog, quản lý giảm giá và khuyến mãi, chức năng giỏ hàng, tài khoản người dùng, chính sách, thông tin liên hệ, các tùy chọn mua sắm và chương trình liên kết.",
    role: "Fullstack Developer (3 thành viên)",
    tech: ["NextJs", "Material UI", "Tailwind CSS", "Java Spring Boot", "MySQL"],
    link: "https://github.com/manhdung3010/decoraz",
    demo: "https://decoraz.vn",
    responsibilities: [
      "Phát triển và triển khai front-end cho trang web, đảm bảo tính năng và trải nghiệm người dùng.",
      "Thiết kế và xây dựng các trang web dựa trên mockup hoặc mẫu thiết kế đã được cung cấp.",
      "Tối ưu hóa trang web cho SEO để cải thiện khả năng hiển thị và thứ hạng trên công cụ tìm kiếm.",
      "Tạo và phát triển bảng điều khiển quản trị để quản lý nội dung và các tính năng của trang web.",
      "Xử lý quy trình triển khai để đảm bảo trang web hoạt động mượt mà và ổn định."
    ],
    features: ["E-commerce", "SEO Optimization", "Admin Dashboard", "Responsive Design", "Payment Integration"]
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
          className="bg-card rounded-xl shadow-lg overflow-hidden border border-border card-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <div className="p-6 space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Project Image */}
              <div className="flex-shrink-0">
                <div className="relative w-full lg:w-80 h-48 bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Code className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Project Preview</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
              
              {/* Project Content */}
              <div className="flex-1 space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-2xl text-primary">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{project.role}</span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
                
                {/* Features */}
                {project.features && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm text-primary">Tính năng chính:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm text-primary">Công nghệ:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-accent px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Responsibilities */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm text-primary">Trách nhiệm:</span>
                  </div>
                  <ul className="space-y-1">
                    {project.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-sm text-muted-foreground flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Eye className="w-4 h-4" />
                      Xem demo
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Xem code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Projects Summary */}
      <motion.div
        className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-primary mb-3">Tổng quan dự án</h3>
        <p className="text-muted-foreground mb-4">
          Các dự án cá nhân và nổi bật thể hiện khả năng phát triển toàn diện từ Frontend đến Backend, 
          với focus vào trải nghiệm người dùng và hiệu suất ứng dụng.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2</div>
            <div className="text-sm text-muted-foreground">Dự án chính</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Fullstack</div>
            <div className="text-sm text-muted-foreground">Frontend & Backend</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Modern</div>
            <div className="text-sm text-muted-foreground">Công nghệ hiện đại</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}