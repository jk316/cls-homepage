// Navigation links - preserved from original site
export const navigation = [
  { href: "/", label: "首页" },
  { href: "/tulun", label: "图论教材" },
  { href: "/award", label: "获奖情况" },
  { href: "/services", label: "学术兼职" },
  { href: "/project", label: "科研项目" },
  { href: "/dissertation", label: "学术论文" },
  { href: "/teach", label: "教学工作" },
  { href: "/standard", label: "技术标准" },
  { href: "/resources", label: "相关资源" },
  { href: "/network-ai", label: "网络AI" },
];

// Profile information
export const profile = {
  name: "崔勇",
  title: "清华大学长聘教授",
  position: "网络所所长",
  honor: "教育部长江学者特聘教授 · 首届青年长江学者",
  email: "cuiyong@tsinghua.edu.cn",
  address: "清华大学自强科技楼1号楼11层1112室",
  avatar: "/images/cuiyong.jpg",
  logo: "/images/THU-S.jpg",
};

// Research areas
export const researchAreas = [
  {
    id: "network-ai",
    title: "网络数字孪生 & 网络AI",
    description:
      "面向网络大模型应用，基于预训练模型技术探索网络流量建模与智能优化新范式：通过大模型实现网络流量理解、异常检测与资源分配优化，推动网络管理从规则驱动向智能驱动转型。",
    icon: "🤖",
    href: "/network-ai",
    image: "/images/Netmama.jpg",
  },
  {
    id: "low-latency",
    title: "低时延传输技术",
    description:
      "面向新型应用在融合网络场景下的互联互通以及实时高效的数据传输需求，研究新型的融合网络传输协议以及关键技术，为新型的时延敏感型应用业务提供网络传输支撑。",
    icon: "⚡",
    href: "#",
    image: "/images/low-latency.png",
  },
  {
    id: "security",
    title: "网络安全",
    description:
      "面向抗DDoS攻击，基于大模型技术探索智能防御与资源优化新范式：构建高效精准的流量异常检测模型和攻击溯源框架，实现对大规模DDoS攻击的主动防御与资源弹性调度。",
    icon: "🛡️",
    href: "#",
    image: "/images/SAVD.jpg",
  },
  {
    id: "streaming",
    title: "流媒体传输",
    description:
      "针对视频传输场景，构建更为准确的用户体验模型，并基于此做多维感知的视频传输优化，最终提升用户视频观看体验。",
    icon: "📹",
    href: "#",
    image: "/images/streaming.jpg",
  },
];

// External links from original site
export const externalLinks = [
  { href: "http://oj.cuiyong.net/", label: "在线评测", logo: "/images/net.jpg" },
  { href: "http://www.tsinghua.edu.cn/", label: "清华大学", logo: "/images/a.gif" },
  { href: "http://www.ietf.org/", label: "IETF", logo: "/images/e.jpg" },
  { href: "http://www.ccsa.org.cn/", label: "CCSA", logo: "/images/c.jpg" },
  { href: "http://www.cs.tsinghua.edu.cn/", label: "计算机系", logo: "/images/d.png" },
  { href: "http://www.ccf.org.cn", label: "CCF", logo: "/images/f.jpg" },
];
