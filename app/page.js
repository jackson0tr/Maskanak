"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { FaSearch, FaHome, FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import { MdRealEstateAgent, MdLocationCity } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          "/api/properties?limit=6&sortBy=createdAt&order=desc"
        );
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setProperties(data.properties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Hero Section with Search */}
      <div
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wujhat.com/wp-content/uploads/2020/03/alolia-hotels-riyadh-5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#050b2c] opacity-75"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl md:text-7xl text-white font-bold text-center mb-6 animate-fadeIn">
            اكتشف منزلك المثالي
          </h1>
          <p className="text-2xl text-white text-center mb-12 max-w-2xl">
            رحلتك للعثور على العقار المثالي تبدأ هنا
          </p>
          <form onSubmit={handleSearch} className="w-full max-w-4xl mb-8">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="أدخل الموقع أو نوع العقار أو الكلمات الرئيسية..."
                  className="w-full pl-14 pr-4 py-6 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#ffa509] shadow-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-[#ffa509] hover:bg-[#ff9100] text-[#050b2c] px-10 py-6 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105"
              >
                <FaSearch className="h-5 w-5" />
                ابحث الآن
              </button>
            </div>
          </form>

          {/* List Property CTA */}
          <button
            onClick={() => router.push("/properties/add")}
            className="bg-white/90 hover:bg-white text-[#050b2c] px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 text-lg"
          >
            <FaPlus className="h-5 w-5 text-[#ffa509]" />
            قائمة الممتلكات الخاصة بك
          </button>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-[#050b2c] py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => router.push("/properties?type=sale")}
              className="bg-[#ffa509] hover:bg-[#ff9100] text-[#050b2c] p-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <BiBuildingHouse className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-bold text-lg">عقارات للبيع</div>
                <div className="text-sm opacity-75">
                  ابحث عن منزل أحلامك اليوم
                </div>
              </div>
            </button>
            <button
              onClick={() => router.push("/properties?type=rent")}
              className="bg-[#ffa509] hover:bg-[#ff9100] text-[#050b2c] p-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <FaHome className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-bold text-lg">عقارات للإيجار</div>
                <div className="text-sm opacity-75">استكشاف خيارات الإيجار</div>
              </div>
            </button>
            <button
              onClick={() => router.push("/properties/add")}
              className="bg-[#ffa509] hover:bg-[#ff9100] text-[#050b2c] p-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <FaPlus className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="font-bold text-xl mb-1">قائمة الممتلكات الخاصة بك</h3>
                <p className="text-sm opacity-90">الوصول إلى آلاف المشترين</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-[#050b2c] to-[#0a1854]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            لماذا تختارنا؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MdRealEstateAgent className="w-12 h-12" />,
                title: "الوكلاء الخبراء",
                desc: "التوجيه المهني في كل خطوة",
              },
              {
                icon: <FaMapMarkerAlt className="w-12 h-12" />,
                title: "مواقع مميزة",
                desc: "العقارات في المناطق الأكثر طلبًا",
              },
              {
                icon: <FaHome className="w-12 h-12" />,
                title: "منازل ذات جودة عالية",
                desc: "عقارات مميزة تم اختيارها بعناية",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#ffa509] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.desc}</p>
                <button
                  onClick={() => router.push("/about-us")}
                  className="text-[#ffa509] hover:text-white transition-colors text-sm font-semibold"
                >
                  تعلم المزيد →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#050b2c]">
                خصائص مميزة
              </h2>
              <p className="text-gray-600 mt-2">
                عقارات مختارة خصيصًا لك
              </p>
            </div>
            <button
              onClick={() => router.push("/properties")}
              className="bg-[#050b2c] text-white px-6 py-3 rounded-lg hover:bg-[#0a1854] transition-colors flex items-center gap-2"
            >
              <MdLocationCity className="w-5 h-5" />
              عرض جميع العقارات
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffa509] mx-auto"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#050b2c] py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            هل أنت مستعد لإدراج عقارك؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            انضم إلى شبكتنا من أصحاب العقارات وتواصل مع آلاف المشترين والمستأجرين المحتملين
          </p>
          <button
            onClick={() => router.push("/properties/add")}
            className="bg-[#ffa509] hover:bg-[#ff9100] text-[#050b2c] px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105"
          >
            <FaPlus className="w-5 h-5" />
            أدرج عقارك الآن
          </button>
        </div>
      </div>
    </div>
  );
}
