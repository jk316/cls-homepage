import Link from "next/link";

const footerLinks = [
  { href: "http://www.tsinghua.edu.cn/", label: "清华大学" },
  { href: "http://www.cs.tsinghua.edu.cn/", label: "计算机系" },
  { href: "http://www.ccf.org.cn", label: "中国计算机学会" },
  { href: "http://www.ietf.org/", label: "IETF" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-secondary-200 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-3 font-serif text-lg font-semibold text-primary-900">
              联系方式
            </h3>
            <address className="not-italic text-sm text-secondary">
              <p>清华大学自强科技楼1号楼11层1112室</p>
              <p className="mt-1">
                <a
                  href="mailto:cuiyong@tsinghua.edu.cn"
                  className="text-primary-600 hover:text-primary-700"
                >
                  cuiyong@tsinghua.edu.cn
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-serif text-lg font-semibold text-primary-900">
              相关链接
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="mb-3 font-serif text-lg font-semibold text-primary-900">
              关于
            </h3>
            <p className="text-sm text-secondary">
              清华大学长聘教授
              <br />
              网络所所长
              <br />
              教育部长江学者特聘教授
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-200 pt-6 text-center text-sm text-tertiary">
          <p>&copy; {new Date().getFullYear()} 崔勇. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}
