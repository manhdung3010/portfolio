"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Physcode",
    role: "Fullstack Developer",
    time: "3/2025 - Nay",
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
        name: "UpdownCrypto (2 members)",
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
      }
    ]
  },
  {
    company: "ACD TECHNOLOGY",
    role: "Full Stack Developer",
    time: "07/2023 - 2/2025",
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
        <div key={idx} className="bg-card rounded-xl shadow-lg p-6 border border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
            <div className="text-sm text-muted-foreground">
              {exp.role} | {exp.time}
            </div>
          </div>
          
          <div className="space-y-6">
            {exp.projects.map((project, projectIdx) => (
              <div key={projectIdx} className="border-l-4 border-primary pl-4 space-y-3">
                <div>
                  <h4 className="font-semibold text-lg mb-2">🔸 {project.name}</h4>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  
                  {project.tech && (
                    <div className="mb-3">
                      <span className="font-semibold text-sm text-primary">Công nghệ:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tech.map((tech, techIdx) => (
                          <span key={techIdx} className="bg-accent px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.demo && (
                    <div className="mb-3">
                      <span className="font-semibold text-sm text-primary">Demo: </span>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {project.demo}
                      </a>
                    </div>
                  )}
                  
                  {project.responsibilities && (
                    <div>
                      <span className="font-semibold text-sm text-primary">Trách nhiệm:</span>
                      <ul className="mt-1 space-y-1">
                        {project.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}