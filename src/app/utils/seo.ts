export function getMeta({
  title = "Nguyễn Mạnh Dũng | Portfolio",
  description = "Portfolio cá nhân chuyên nghiệp của Nguyễn Mạnh Dũng - Frontend Developer.",
  url = "https://your-portfolio-url.com/",
  image = "/avatar.jpg",
} = {}) {
  return [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}