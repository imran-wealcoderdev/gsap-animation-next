import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GSAP Animation Learning",
  description: "A simple Next.js app with GSAP animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4 flex-wrap">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/scrolltrigger" className="hover:text-gray-300">
                ScrollTrigger
              </Link>
            </li>
            <li>
              <Link href="/timeline" className="hover:text-gray-300">
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/timelinescrolltrigger"
                className="hover:text-gray-300"
              >
                ScrollTrigger Timeline
              </Link>
            </li>
            <li>
              <Link href="/drawsvg" className="hover:text-gray-300">
                drawsvg
              </Link>
            </li>
            <li>
              <Link href="/morpsvg" className="hover:text-gray-300">
                Morph Svg
              </Link>
            </li>
            <li>
              <Link href="/3d-scroll" className="hover:text-gray-300">
                3D Scroll
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
