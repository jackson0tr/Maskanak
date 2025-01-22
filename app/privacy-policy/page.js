'use client'
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <motion.div
            className="mx-auto md:h-[100vh] h-auto p-8 bg-gradient-to-br from-[#050b2c] to-[#1a237e] shadow-xl ring-1 ring-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="text-4xl font-bold text-center text-[#ffa509] mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                سياسة الخصوصية
            </motion.h2>

            <motion.p
                className="text-white leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                في مسكنك، نحن ملتزمون بحماية خصوصية عملائنا وضمان أمان معلوماتهم الشخصية. يتم جمع
                بياناتك واستخدامها فقط وفقًا للقوانين واللوائح المعمول بها.
            </motion.p>

            <Section
                title="١. البيانات التي نقوم بجمعها"
                content={[
                    "المعلومات التي تقدمها عند إنشاء الحساب، مثل الاسم والبريد الإلكتروني ورقم الهاتف.",
                    "البيانات التي يتم جمعها تلقائيًا مثل عنوان IP ونوع المتصفح.",
                    "معلومات حول تفضيلاتك واستخدامك لخدماتنا.",
                ]}
            />

            <Section
                title="٢. كيف نستخدم بياناتك"
                content={[
                    "تحسين تجربتك على الموقع.",
                    "التواصل معك لتقديم العروض والخدمات الجديدة.",
                    "معالجة المدفوعات والمشتريات.",
                ]}
            />

            <Section
                title="٣. كيف نحمي بياناتك"
                content={[
                    "تشفير البيانات أثناء النقل.",
                    "الوصول المقيد إلى المعلومات الشخصية.",
                    "التخزين الآمن للبيانات في خوادم موثوقة.",
                ]}
            />

            <motion.h3
                className="text-2xl font-semibold text-[#ffa509] mt-10 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                ٤. حقوقك
            </motion.h3>
            <motion.p
                className="text-white leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها. يمكنك أيضًا طلب إيقاف
                استخدامنا لبياناتك في أي وقت.
            </motion.p>

            <Section
                title="٥. التغييرات على سياسة الخصوصية"
                content={[
                    "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم إعلامك بالتغييرات عبر البريد الإلكتروني أو من خلال إشعار على موقعنا.",
                ]}
            />

            <motion.p
                className="mt-10 text-white text-center leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                إذا كان لديك أي استفسار حول سياسة الخصوصية، لا تتردد في الاتصال بنا.
            </motion.p>
        </motion.div>
    );
}

function Section({ title, content }) {
    return (
        <>
            <motion.h3
                className="text-2xl font-semibold text-[#ffa509] mt-10 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {title}
            </motion.h3>
            <motion.ul
                className="list-disc list-inside space-y-3 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </motion.ul>
        </>
    );
}
