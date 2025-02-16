import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/color.css";
import "../public/assets/css/style.css";
import "../public/assets/css/typography.css";
import "../public/assets/css/custom.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { heebo, manrope } from "@/lib/font";
export const metadata = {
  title: "Kutch Potash Pvt ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${heebo.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
