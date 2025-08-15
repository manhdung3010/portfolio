"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, Users, ExternalLink, Code, Database, Cloud } from "lucide-react";

const experiences = [
  {
    company: "Physcode",
    role: "Fullstack Developer",
    time: "3/2025 - Nay",
    logo: "🏢",
    projects: [
      {
        name: "Mosyne AI – Nền tảng chỉnh sửa ảnh (3 thành viên)",
        description: "Phát triển nền tảng web chỉnh sửa ảnh chuyên nghiệp ứng dụng AI, cung cấp các công cụ như xóa nền, inpainting, phóng to ảnh, sinh nền từ văn bản... Hệ thống hỗ trợ giao diện canvas trực quan, thao tác drag & drop, chia sẻ dự án, xác thực người dùng, thanh toán, và bộ công cụ thiết kế thương hiệu.",
        tech: ["NextJS", "TypeScript", "Ant Design", "Tailwind CSS", "Konva.js", "React-Konva", "Zustand", "React Query", "MongoDB", "AWS S3", "Redis", "PayPal"],
        demo: "https://doop-staging.acdtech.asia",
        responsibilities: [
          "Xây dựng mã nền cho dự án front-end, bao gồm việc định nghĩa kiến trúc và thiết lập các quy tắc viết mã.",
          "Triển khai và quản lý quy trình CI/CD.",
          "Phát triển và duy trì các tính năng front-end.",
          "Đưa ra phản hồi và điều chỉnh để cải thiện thiết kế giao diện người dùng.",
          "Hỗ trợ phát triển back-end bằng cách sửa lỗi và cải thiện mã nguồn back-end khi cần thiết."
        ]
      },

      {
        name: "Washbank – Hệ thống quản lý chuỗi cửa hàng rửa xe",
        description: "Phát triển nền tảng quản trị toàn diện cho ngành rửa xe tại Hàn Quốc. Xây dựng hệ thống đặt lịch, xử lý thanh toán và dashboard quản lý chi tiết",
        responsibilities: [
          "Phát triển nền tảng quản trị toàn diện cho ngành rửa xe tại Hàn Quốc",
          "Xây dựng hệ thống đặt lịch, xử lý thanh toán và dashboard quản lý chi tiết"
        ]
      },
      {
        name: "KNU Component Platform – Cổng thông tin giáo dục số",
        description: "Phát triển website chính thức cho dự án đổi mới giáo dục AI của Đại học Kyungpook. Xây dựng hệ thống đa ngôn ngữ, tối ưu SEO, tích hợp CMS và CI/CD",
        responsibilities: [
          "Phát triển website chính thức cho dự án đổi mới giáo dục AI của Đại học Kyungpook",
          "Xây dựng hệ thống đa ngôn ngữ, tối ưu SEO, tích hợp CMS và CI/CD"
        ]
      }
    ]
  },
  {
    company: "ACD TECHNOLOGY",
    role: "Full Stack Developer",
    time: "07/2023 - 2/2025",
    logo: "🏢",
    projects: [
      {
        name: "DOOP - F&B Management System (8 thành viên)",
        description: "Ứng dụng web quản lý dịch vụ F&B và giải trí với các tính năng nổi bật như quản lý chi nhánh, vai trò và phân quyền nhân viên, hệ thống POS hỗ trợ bán hàng, quản lý tồn kho và sản phẩm, CRM tương tác khách hàng, theo dõi tài chính, quản lý gói dịch vụ, cùng với báo cáo kinh doanh chi tiết và phân tích số liệu",
        tech: ["NextJS", "TypeScript", "Ant Design", "Tailwind CSS", "Java Spring Boot", "MySQL", "JPA/Hibernate"],
        demo: "https://mosyne.ai",
        responsibilities: [
          "Thiết kế & phát triển toàn bộ frontend với Next.js & TailwindCSS",
          "Xây dựng canvas editor với Konva.js (drag-drop, layer, undo/redo)",
          "Phát triển toàn bộ backend (API, MongoDB, Mongoose)",
          "Tích hợp xác thực người dùng (Email, Google, JWT, reset password)",
          "Quản lý dự án ảnh (lưu, chia sẻ link, auto-save, thumbnail)",
          "Tích hợp thanh toán PayPal, xây dựng gói dịch vụ & giới hạn tính năng",
          "Tối ưu hiệu năng (SSR, lazy load) & bảo mật (CSRF, validation)"
        ]
      },
      {
        name: "UpdownCrypto (2 thành viên)",
        description: "Ứng dụng web sử dụng thư viện TradingView Lightweight Charts để hiển thị biến động giá Bitcoin theo thời gian thực. Ứng dụng cung cấp các tính năng theo dõi biến động giá ở cấp độ giây và phút, đảm bảo dữ liệu chính xác và chi tiết.",
        tech: ["ReactJs", "TypeScript", "Ant Design", "Tailwind CSS", "Java Spring Boot", "MongoDB", "WebSocket", "Socket.IO"],
        responsibilities: [
          "Xây dựng mã nền cho dự án front-end, bao gồm định nghĩa kiến trúc và thiết lập các quy tắc viết mã.",
          "Phát triển và duy trì các tính năng front-end, đảm bảo chúng được tối ưu hóa và tương thích trên nhiều thiết bị.",
          "Hỗ trợ phát triển back-end bằng cách sửa lỗi và cải thiện mã nguồn khi cần thiết.",
          "Triển khai cập nhật dữ liệu theo thời gian thực bằng cách sử dụng Socket.IO và WebSocket cho biến động giá Bitcoin.",
          "Tích hợp thư viện TradingView Lightweight Charts để hiển thị chính xác và động biến động giá Bitcoin.",
          "Đưa ra phản hồi và đề xuất cải tiến thiết kế giao diện người dùng nhằm nâng cao trải nghiệm người dùng."
        ]
      },

      {
        name: "Decoraz",
        description: "Một trang web thương mại điện tử cung cấp đầy đủ các tính năng thường có trên các nền tảng bán lẻ trực tuyến. Trang web bao gồm danh sách sản phẩm, bài viết blog, quản lý giảm giá và khuyến mãi, chức năng giỏ hàng, tài khoản người dùng, chính sách, thông tin liên hệ, các tùy chọn mua sắm và chương trình liên kết.",
       tech: ["NextJs", "Material UI", "Tailwind CSS", "Java Spring Boot", "MySQL"],
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
     
    ]
  }
];

export default function Experience() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {experiences.map((exp, idx) => (
        <motion.div 
          key={idx} 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-muted" />
          
          <div className="bg-card rounded-xl shadow-lg p-6 border border-border ml-16 relative card-hover">
            {/* Company Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  {exp.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.role}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute -left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
            </div>
            
            {/* Projects */}
            <div className="space-y-6">
              {exp.projects.map((project, projectIdx) => (
                <motion.div 
                  key={projectIdx} 
                  className="border-l-4 border-primary/30 pl-6 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + projectIdx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="font-semibold text-lg text-primary">🔸 {project.name}</h4>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    {project.tech && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-sm text-primary">Công nghệ:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIdx) => (
                            <span key={techIdx} className="bg-accent px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.responsibilities && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-sm text-primary">Trách nhiệm:</span>
                        </div>
                        <ul className="space-y-2">
                          {project.responsibilities.map((resp, respIdx) => (
                            <li key={respIdx} className="text-sm text-muted-foreground flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Experience Summary */}
      <motion.div
        className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-primary mb-3">Tổng quan kinh nghiệm</h3>
        <p className="text-muted-foreground mb-4">
          Với kinh nghiệm làm việc tại các công ty công nghệ hàng đầu, tôi đã tham gia phát triển nhiều dự án 
          đa dạng từ ứng dụng web đến hệ thống quản lý phức tạp, tích lũy kiến thức toàn diện về Fullstack Development.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2</div>
            <div className="text-sm text-muted-foreground">Công ty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Dự án chính</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}