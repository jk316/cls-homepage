import type { Metadata } from "next";
import { Inter, Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "崔勇 - 清华大学长聘教授",
  description:
    "清华大学崔勇教授个人主页 - 网络所所长，长江学者特聘教授，主要研究方向包括网络数字孪生、低时延传输、网络安全和流媒体传输等。",
  keywords: [
    "崔勇",
    "清华大学",
    "网络研究",
    "计算机网络",
    "长江学者",
    "Sigcomm",
  ],
  authors: [{ name: "崔勇" }],
  openGraph: {
    title: "崔勇 - 清华大学长聘教授",
    description: "清华大学崔勇教授个人主页",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md"
        >
          跳转到主要内容
        </a>
        {children}
      </body>
    </html>
  );
}
