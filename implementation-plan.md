# 实施计划 - cuiyong.net 学术主页重构

## 概述

本计划详细描述将清华大学崔勇教授个人主页从过时的 frameset 结构重构为现代化响应式网站的完整实施路径。计划基于 Next.js 15 App Router 技术栈，分为 6 个阶段，预计总工期 8-10 周。

**核心约束**：
- 所有文本内容完全不变
- 所有链接地址（href）完全不变
- 信息结构（页面层级、内容顺序）不变

---

## 1. 项目结构

### 1.1 目录组织

```
homepage/
├── app/                          # Next.js 15 App Router
│   ├── layout.tsx                # 根布局（导航、页脚）
│   ├── page.tsx                  # 首页/个人简介
│   ├── globals.css               # 全局样式 + CSS 变量
│   ├── tulun/                    # 图论教材
│   │   └── page.tsx
│   ├── award/                    # 获奖情况
│   │   └── page.tsx
│   ├── services/                 # 学术兼职
│   │   └── page.tsx
│   ├── project/                   # 科研项目
│   │   └── page.tsx
│   ├── dissertation/             # 学术论文
│   │   └── page.tsx
│   ├── teach/                    # 教学工作
│   │   └── page.tsx
│   ├── standard/                  # 技术标准
│   │   └── page.tsx
│   ├── resources/                 # 相关资源
│   │   └── page.tsx
│   ├── network-ai/              # 网络AI（子页面）
│   │   └── page.tsx
│   └── en/                        # 英文版
│       └── page.tsx
├── components/                    # React 组件
│   ├── layout/
│   │   ├── Header.tsx            # 顶部导航栏
│   │   ├── Footer.tsx            # 页脚
│   │   ├── MobileNav.tsx         # 移动端底部导航
│   │   └── Sidebar.tsx           # 桌面端侧边导航（可选）
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Avatar.tsx
│   │   ├── Divider.tsx
│   │   └── Link.tsx
│   ├── sections/
│   │   ├── Hero.tsx              # Hero 区域
│   │   ├── ResearchAreas.tsx    # 研究方向（4个卡片）
│   │   ├── Awards.tsx            # 获奖列表
│   │   ├── Publications.tsx      # 论文列表
│   │   ├── Projects.tsx          # 科研项目
│   │   ├── Teaching.tsx          # 教学工作
│   │   └── Standards.tsx         # 技术标准
│   ├── icons/                    # 图标组件
│   │   └── *.tsx
│   └── providers/
│       └── ThemeProvider.tsx     # 暗色模式 Provider
├── lib/                          # 工具函数
│   ├── utils.ts                  # cn() 等工具
│   ├── animations.ts             # 动画工具
│   └── constants.ts              # 常量（链接、配置）
├── content/                      # 内容数据（JSON）
│   ├── awards.json
│   ├── publications.json
│   ├── projects.json
│   ├── services.json
│   ├── teaching.json
│   └── standards.json
├── public/
│   ├── images/                   # 现有图片资源
│   ├── movies/                   # 视频资源
│   └── fonts/                   # 自定义字体（如需）
├── styles/
│   └── tokens.css               # 设计令牌
├── tailwind.config.ts           # Tailwind 配置
├── next.config.ts               # Next.js 配置
├── tsconfig.json                # TypeScript 配置
├── package.json
└── README.md
```

### 1.2 文件命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 页面组件 | page.tsx | app/page.tsx |
| 布局组件 | PascalCase | Header.tsx |
| UI 组件 | PascalCase | Button.tsx, Card.tsx |
| 图标组件 | Icon + PascalCase | IconHome.tsx |
| 数据文件 | kebab-case.json | awards.json |

---

## 2. 技术栈详情

### 2.1 核心依赖

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

### 2.2 Tailwind 配置

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F3E8FD',
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#A855F7',
          500: '#9333EA',
          600: '#7422AA',
          700: '#6B21A8',
          800: '#581C87',
          900: '#4A1E6E',
        },
        secondary: {
          500: '#0EA5E9',
        },
        accent: {
          500: '#F59E0B',
        },
      },
      fontFamily: {
        heading: ['Noto Serif SC', 'serif'],
        body: ['Noto Sans SC', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgb(116 34 170 / 0.25)',
        'accent': '0 4px 14px 0 rgb(217 119 6 / 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
```

### 2.3 Next.js 配置

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
}

export default nextConfig
```

---

## 3. 组件列表

### 3.1 布局组件

| 组件 | 文件 | 说明 |
|------|------|------|
| Header | components/layout/Header.tsx | 顶部导航栏 |
| Footer | components/layout/Footer.tsx | 页脚 |
| MobileNav | components/layout/MobileNav.tsx | 移动端底部导航 |

### 3.2 UI 组件

| 组件 | 文件 | 说明 |
|------|------|------|
| Button | components/ui/Button.tsx | 按钮 |
| Card | components/ui/Card.tsx | 卡片容器 |
| Badge | components/ui/Badge.tsx | 标签/徽章 |
| Avatar | components/ui/Avatar.tsx | 头像 |
| Divider | components/ui/Divider.tsx | 分隔线 |

### 3.3 区块组件

| 组件 | 文件 | 说明 |
|------|------|------|
| Hero | components/sections/Hero.tsx | 首页 Hero |
| ResearchAreas | components/sections/ResearchAreas.tsx | 4个研究方向卡片 |
| ResearchCard | components/sections/ResearchCard.tsx | 单个研究方向卡片 |
| Awards | components/sections/Awards.tsx | 获奖列表 |
| Publications | components/sections/Publications.tsx | 论文列表 |
| Projects | components/sections/Projects.tsx | 科研项目 |
| Teaching | components/sections/Teaching.tsx | 教学工作 |
| Standards | components/sections/Standards.tsx | 技术标准 |

### 3.4 功能组件

| 组件 | 文件 | 说明 |
|------|------|------|
| ThemeProvider | components/providers/ThemeProvider.tsx | 暗色模式 |
| ScrollReveal | components/ui/ScrollReveal.tsx | 滚动入场动画 |
| LazyImage | components/ui/LazyImage.tsx | 懒加载图片 |

---

## 4. 页面清单

| 页面 | 路由 | 内容 |
|------|------|------|
| 首页/个人简介 | / | Hero + 研究方向 |
| 图论教材 | /tulun | 教材封面网格 |
| 获奖情况 | /award | 荣誉列表 |
| 学术兼职 | /services | 学术职务 |
| 科研项目 | /project | 项目列表 |
| 学术论文 | /dissertation | 论文列表 |
| 教学工作 | /teach | 课程+教材+教研 |
| 技术标准 | /standard | RFC/国标/行标 |
| 相关资源 | /resources | 外部链接 |
| 网络AI | /network-ai | 详情+视频 |
| 英文版 | /en | English |

---

## 5. 开发阶段划分

### Phase 1: 项目初始化（Week 1-2）

**目标**：搭建开发环境，创建基础架构

**交付物**：
- Next.js 15 项目初始化
- Tailwind CSS 配置
- 基础布局组件

**步骤**：
```bash
npx create-next-app@latest homepage --typescript --tailwind --eslint --app
npm install lucide-react clsx tailwind-merge framer-motion
```

---

### Phase 2: 样式系统与 UI 组件（Week 2-3）

**目标**：完成所有 UI 基础组件

**交付物**：
- Button, Card, Badge, Avatar, Divider
- 图标组件库
- CSS 变量系统
- 暗色模式

---

### Phase 3: 首页开发（Week 3-4）

**目标**：完成首页/个人简介页面

**交付物**：
- Hero 区域
- 研究方向区块（4卡片）
- 滚动动画效果

---

### Phase 4: 内容页面开发（Week 4-6）

**目标**：完成所有内容页面

**交付物**：
- /tulun, /award, /services
- /project, /dissertation
- /teach, /standard, /resources
- /network-ai

---

### Phase 5: 高级特性（Week 6-8）

**目标**：完成高级交互和优化

**交付物**：
- 移动端导航完整功能
- 页面过渡动画
- 懒加载图片
- 无障碍优化

---

### Phase 6: 测试与部署（Week 8-10）

**目标**：确保质量，准备上线

**交付物**：
- 单元测试
- 集成测试
- 视觉回归测试
- 部署到 Vercel

---

## 6. 里程碑定义

| 里程碑 | 阶段 | 完成标准 | 预计时间 |
|--------|------|----------|----------|
| M1 | Phase 1 | 项目初始化完成 | Week 2 |
| M2 | Phase 2 | UI 组件库完成 | Week 3 |
| M3 | Phase 3 | 首页完成 | Week 4 |
| M4 | Phase 4 | 所有内容页面完成 | Week 6 |
| M5 | Phase 5 | 高级特性完成 | Week 8 |
| M6 | Phase 6 | 测试通过，正式上线 | Week 10 |

---

## 7. 风险评估

### 高风险

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 内容迁移完整性 | 高 | 编写脚本自动比对；双重核对 |
| 链接保留验证 | 高 | 建立链接清单；自动化测试 |

### 中风险

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 响应式适配 | 中 | 尽早移动端测试 |
| 动画性能 | 中 | 使用 CSS 动画替代 |

### 低风险

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 字体加载 | 低 | 系统字体 fallback |
| SEO 变化 | 低 | 保留原有 meta |

---

## 8. 测试计划

### 8.1 单元测试
- lib/utils.test.ts
- 组件渲染测试

### 8.2 集成测试
- 页面内容完整性
- 链接 href 正确性

### 8.3 响应式测试

| 宽度 | 设备 | 检查项 |
|------|------|--------|
| 320px | iPhone SE | 单列布局 |
| 768px | iPad | 双列网格 |
| 1024px+ | 桌面 | 多列布局 |

### 8.4 性能目标

| 指标 | 目标 |
|------|------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FCP | < 1.5s |

---

## 9. 部署流程

### 9.1 预览部署
```bash
vercel --preview
```

### 9.2 生产部署
```bash
vercel --prod
```

### 9.3 部署后验证
- 所有页面可访问
- 所有链接有效
- 动画流畅

---

## 10. 维护计划

### 短期（上线后 1 个月）
- 收集反馈
- 修复问题
- 优化性能

### 长期
- 定期更新论文列表
- 更新获奖信息
- 监控依赖安全

---

**文档版本**：1.0
**最后更新**：2026-04-21
**预计工期**：8-10 周
