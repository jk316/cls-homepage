# 设计规范文档 - cuiyong.net 学术主页重构

## 概述

本文档定义清华大学崔勇教授个人学术主页的完整设计规范，包含色彩、字体、间距、动效、组件等所有视觉与交互要素。本规范遵循"学术简约 + 科技感"的设计方向，在保留清华大学学术气质的同时体现网络研究的前沿性。

---

## 1. 设计原则

### 1.1 核心原则

| 原则 | 描述 | 实现方式 |
|------|------|----------|
| **学术简约** | 界面干净整洁，内容层次分明 | 大量留白，明确的信息分组，克制使用装饰元素 |
| **科技感** | 体现网络研究的前沿性 | 微妙的渐变，流畅的动效，现代的几何形状 |
| **品牌传承** | 保留清华紫的品牌识别 | 保留主色 #7422AA 作为核心品牌色 |
| **可访问性** | 符合 WCAG 2.1 AA 标准 | 足够的色彩对比度，键盘可导航，支持屏幕阅读器 |

---

## 2. 色彩系统

### 2.1 主色（Primary）

```css
:root {
  /* 清华紫 - 品牌核心色 */
  --color-primary-50:  #F3E8FD;
  --color-primary-100: #E9D5FF;
  --color-primary-200: #D8B4FE;
  --color-primary-300: #C084FC;
  --color-primary-400: #A855F7;
  --color-primary-500: #9333EA;
  --color-primary-600: #7422AA;  /* 主色 - 原始品牌色 */
  --color-primary-700: #6B21A8;
  --color-primary-800: #581C87;
  --color-primary-900: #4A1E6E;
  --color-primary-950: #3B0764;
}
```

**使用场景**：
- 导航栏背景
- 主要按钮背景
- 链接颜色（未访问）
- 强调元素

### 2.2 辅助色（Secondary - 科技蓝）

```css
:root {
  --color-secondary-50:  #F0F9FF;
  --color-secondary-100: #E0F2FE;
  --color-secondary-200: #BAE6FD;
  --color-secondary-300: #7DD3FC;
  --color-secondary-400: #38BDF8;
  --color-secondary-500: #0EA5E9;  /* 辅助主色 */
  --color-secondary-600: #0284C7;
  --color-secondary-700: #0369A1;
  --color-secondary-800: #075985;
  --color-secondary-900: #0C4A6E;
}
```

### 2.3 强调色（Accent - 金色）

```css
:root {
  --color-accent-50:  #FFFBEB;
  --color-accent-100: #FEF3C7;
  --color-accent-200: #FDE68A;
  --color-accent-300: #FCD34D;
  --color-accent-400: #FBBF24;
  --color-accent-500: #F59E0B;
  --color-accent-600: #D97706;
  --color-accent-700: #B45309;
  --color-accent-800: #92400E;
  --color-accent-900: #78350F;
}
```

### 2.4 背景色（Background）

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --bg-tertiary: #F4F4F5;
  --bg-elevated: #FFFFFF;

  --text-primary: #18181B;
  --text-secondary: #52525B;
  --text-tertiary: #A1A1AA;
  --text-inverse: #FFFFFF;

  --border-default: #E4E4E7;
  --border-hover: #D4D4D8;
  --border-strong: #A1A1AA;
}

[data-theme="dark"] {
  --bg-primary: #09090B;
  --bg-secondary: #18181B;
  --bg-tertiary: #27272A;
  --bg-elevated: #1C1C1E;

  --text-primary: #FAFAFA;
  --text-secondary: #A1A1AA;
  --text-tertiary: #71717A;
  --text-inverse: #18181B;

  --border-default: #27272A;
  --border-hover: #3F3F46;
  --border-strong: #52525B;
}
```

---

## 3. 字体系统

### 3.1 字体族

```css
:root {
  --font-serif-cn: "Noto Serif SC", "Source Serif Pro", "宋体", serif;
  --font-sans-cn: "Noto Sans SC", "Source Han Sans SC", "微软雅黑", sans-serif;
  --font-serif-en: "Playfair Display", "Georgia", serif;
  --font-sans-en: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", "Consolas", monospace;
  --font-heading: var(--font-serif-cn), var(--font-serif-en);
  --font-body: var(--font-sans-cn), var(--font-sans-en);
}
```

### 3.2 字体大小（流体）

```css
:root {
  --text-xs:   clamp(0.694rem, 0.66rem + 0.17vw, 0.8rem);
  --text-sm:   clamp(0.833rem, 0.79rem + 0.21vw, 0.96rem);
  --text-base: clamp(1rem, 0.94rem + 0.29vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 1.04rem + 0.43vw, 1.375rem);
  --text-xl:   clamp(1.25rem, 1.13rem + 0.59vw, 1.625rem);
  --text-2xl:  clamp(1.5rem, 1.33rem + 0.83vw, 2rem);
  --text-3xl:  clamp(1.875rem, 1.62rem + 1.27vw, 2.5rem);
  --text-4xl:  clamp(2.25rem, 1.89rem + 1.79vw, 3rem);
  --text-5xl:  clamp(3rem, 2.42rem + 2.89vw, 4rem);
}
```

---

## 4. 间距系统

```css
:root {
  --space-0:   0;
  --space-1:   0.25rem;
  --space-2:   0.5rem;
  --space-3:   0.75rem;
  --space-4:   1rem;
  --space-5:   1.25rem;
  --space-6:   1.5rem;
  --space-8:   2rem;
  --space-10:  2.5rem;
  --space-12:  3rem;
  --space-16:  4rem;
  --space-20:  5rem;
  --space-24:  6rem;

  --content-max-width: 1200px;
  --prose-max-width: 720px;
}
```

---

## 5. 圆角系统

```css
:root {
  --radius-sm:   0.125rem;
  --radius-md:   0.375rem;
  --radius-lg:   0.5rem;
  --radius-xl:   0.75rem;
  --radius-2xl:  1rem;
  --radius-full: 9999px;
}
```

| 组件 | 圆角 |
|------|------|
| 按钮 | radius-md |
| 卡片 | radius-xl |
| 输入框 | radius-md |
| 标签/徽章 | radius-full |
| 对话框 | radius-2xl |

---

## 6. 阴影系统

```css
:root {
  --shadow-xs:  0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm:  0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --shadow-primary: 0 4px 14px 0 rgb(116 34 170 / 0.25);
  --shadow-accent:  0 4px 14px 0 rgb(217 119 6 / 0.25);
}
```

---

## 7. 动效系统

### 7.1 时间变量

```css
:root {
  --duration-instant: 0ms;
  --duration-fast:   100ms;
  --duration-normal: 200ms;
  --duration-slow:   300ms;
  --duration-slower: 500ms;

  --ease-linear:    linear;
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 7.2 微交互动画

```css
/* 按钮 */
.btn {
  transition:
    background-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}
.btn:hover { transform: translateY(-1px); }
.btn:active { transform: translateY(0); }

/* 卡片 */
.card {
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* 链接下划线 */
.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary-600);
  transition: width var(--duration-normal) var(--ease-out);
}
.link:hover::after { width: 100%; }
```

### 7.3 滚动入场动画

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity var(--duration-slower) var(--ease-out),
    transform var(--duration-slower) var(--ease-out);
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

### 7.4 尊重减少动画偏好

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. 组件设计

### 8.1 按钮

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  transition: all var(--duration-fast) var(--ease-out);
  cursor: pointer;
}

.btn-primary {
  background: var(--color-primary-600);
  color: var(--text-inverse);
  border: none;
}
.btn-primary:hover {
  background: var(--color-primary-700);
  box-shadow: var(--shadow-primary);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary-600);
  border: 1px solid var(--color-primary-600);
}
.btn-secondary:hover {
  background: var(--color-primary-50);
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: none;
}
.btn-ghost:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
```

### 8.2 卡片

```css
.card {
  background: var(--bg-elevated);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
}
```

### 8.3 研究方向卡片

```css
.research-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  background: var(--bg-elevated);
  transition: all var(--duration-normal) var(--ease-out);
}
.research-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary-600), var(--color-secondary-500));
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}
.research-card:hover::before { opacity: 1; }
.research-card:hover {
  border-color: var(--color-primary-200);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### 8.4 导航栏

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-default);
  padding: var(--space-4) var(--space-6);
}
.navbar.scrolled { box-shadow: var(--shadow-md); }

.navbar-link {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  transition: all var(--duration-fast) var(--ease-out);
}
.navbar-link:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
.navbar-link.active {
  background: var(--color-primary-50);
  color: var(--color-primary-700);
}
```

### 8.5 移动端底部导航

```css
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-default);
  padding: var(--space-2) var(--space-4);
  padding-bottom: max(var(--space-2), env(safe-area-inset-bottom));
}
@media (min-width: 768px) { .mobile-nav { display: none; } }

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2);
  color: var(--text-tertiary);
  transition: color var(--duration-fast) var(--ease-out);
}
.mobile-nav-item.active { color: var(--color-primary-600); }
```

### 8.6 荣誉列表项

```css
.award-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border-left: 3px solid var(--color-accent-500);
  transition: all var(--duration-fast) var(--ease-out);
}
.award-item:hover {
  background: var(--bg-tertiary);
  transform: translateX(4px);
}
.award-year {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-accent-600);
  min-width: 48px;
}
```

### 8.7 论文列表项

```css
.paper-item {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--ease-out);
}
.paper-item:hover { background: var(--bg-tertiary); }
.paper-title {
  font-weight: var(--font-medium);
  color: var(--text-primary);
}
.paper-venue {
  color: var(--color-primary-600);
  font-style: italic;
}
```

### 8.8 标签

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}
.badge-primary { background: var(--color-primary-100); color: var(--color-primary-700); }
.badge-accent { background: var(--color-accent-100); color: var(--color-accent-700); }
.badge-secondary { background: var(--color-secondary-100); color: var(--color-secondary-700); }
```

---

## 9. 响应式断点

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

| 断点 | 设备 | 布局 |
|------|------|------|
| < 640px | 手机 | 单列，底部导航 |
| 768-1023px | 平板 | 双列网格 |
| 1024-1279px | 桌面 | 多列网格 |
| >= 1280px | 大桌面 | 最大宽度 1400px |

---

## 10. 暗色模式

```css
[data-theme="dark"] {
  --bg-primary: #09090B;
  --bg-secondary: #18181B;
  --bg-tertiary: #27272A;
  --text-primary: #FAFAFA;
  --text-secondary: #A1A1AA;
  --border-default: #27272A;
  --shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.4);
}
```

---

## 11. 图标规范

使用 **Lucide Icons** 或 **Heroicons**（线性风格，24x24 视口）

```css
.icon { display: inline-flex; align-items: center; justify-content: center; }
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
```

---

## 12. 图片规范

```css
img[loading="lazy"] {
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}
img[loading="lazy"].loaded { opacity: 1; }

.img-avatar {
  border-radius: var(--radius-full);
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
```

---

## 13. 无障碍

```css
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  padding: var(--space-4);
  background: var(--color-primary-600);
  color: var(--text-inverse);
}
.skip-link:focus { top: 0; }
```

---

## 14. CSS 变量完整参考

```css
:root {
  /* 色彩 */
  --color-primary-600: #7422AA;
  --color-secondary-500: #0EA5E9;
  --color-accent-500: #F59E0B;
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --text-primary: #18181B;
  --text-secondary: #52525B;

  /* 字体 */
  --font-heading: "Noto Serif SC", serif;
  --font-body: "Noto Sans SC", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* 间距 */
  --space-4: 1rem;
  --space-8: 2rem;
  --space-16: 4rem;

  /* 圆角 */
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;

  /* 阴影 */
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-primary: 0 4px 14px 0 rgb(116 34 170 / 0.25);

  /* 动画 */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

---

**文档版本**：1.0
**最后更新**：2026-04-21
