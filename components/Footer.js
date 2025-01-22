"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaBuilding,
  FaUserAlt,
  FaHeart,
} from "react-icons/fa";
import { MdRealEstateAgent, MdDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-gradient-to-br from-[#050b2c] to-[#0a1854] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <FaHome className="text-[#ffa509] text-3xl" />
              <h2 className="text-2xl font-bold">مسكنك</h2>
            </div>
            <p className="text-gray-300">
              شريكك الموثوق به في العثور على العقار المثالي. نحن نجعل البحث عن العقارات وبيعها تجربة ممتعة.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#ffa509] transition-colors duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#ffa509] transition-colors duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#ffa509] transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#ffa509] transition-colors duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaSearch className="text-[#ffa509]" />
              روابط سريعة
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/properties"
                  className="text-gray-300 hover:text-[#ffa509] flex items-center gap-2"
                >
                  <FaBuilding className="w-4 h-4" />
                  تصفح العقارات
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/add"
                  className="text-gray-300 hover:text-[#ffa509] flex items-center gap-2"
                >
                  <MdRealEstateAgent className="w-4 h-4" />
                  قائمة الممتلكات الخاصة بك
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-[#ffa509] flex items-center gap-2"
                >
                  <MdDashboard className="w-4 h-4" />
                  لوحة التحكم
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/saved"
                  className="text-gray-300 hover:text-[#ffa509] flex items-center gap-2"
                >
                  <FaHeart className="w-4 h-4" />
                  العقارات المحفوظة
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BiSupport className="text-[#ffa509]" />
              معلومات الاتصال
            </h3>
            <ul className="space-y-4">
              {/* <li className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-[#ffa509] w-5 h-5 flex-shrink-0" />
                <span>123 Real Estate Ave, City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-[#ffa509] w-5 h-5 flex-shrink-0" />
                <span>+1 234 567 8900</span>
              </li> */}
              <li className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-[#ffa509] w-5 h-5 flex-shrink-0" />
                <span>contact@maskanak.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaEnvelope className="text-[#ffa509]" />
              النشرة الإخبارية
            </h3>
            <p className="text-gray-300 mb-4">
              اشترك في النشرة الإخبارية لدينا للحصول على أحدث التحديثات العقارية.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#ffa509] focus:ring-[#ffa509] placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-[#ffa509] hover:bg-[#ff9100] text-white py-2 rounded-lg transition-colors duration-300"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} مسكنك. جميع الحقوق محفوظة. تم الإنشاء بواسطة <Link className="text-[#ffa509] hover:text-white" href="https://dev-mahmoud.vercel.app">محمود محمد</Link>
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-[#ffa509]"
              >
                سياسة الخصوصية
              </Link>
              {/* <Link
                href="/terms"
                className="text-gray-300 hover:text-[#ffa509]"
              >
                شروط الخدمة
              </Link> */}
              {/* <Link
                href="/contact"
                className="text-gray-300 hover:text-[#ffa509]"
              >
                اتصل بنا
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
