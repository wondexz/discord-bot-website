import { Nav } from "../utils/nav";
import { Helmet } from "react-helmet";
import config from "../../../config.json";
import { Footer } from "../utils/footer";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, Search } from "lucide-react";

export const HomePage = () => {
    const navigate = useNavigate();

    const [copiedCommand, setCopiedCommand] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const copyToClipboard = (command) => {
        navigator.clipboard.writeText(command);
        setCopiedCommand(command);
        setTimeout(() => setCopiedCommand(null), 1500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function TanitimDetay({ item, copiedCommand, copyToClipboard }) {
        return (
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold flex items-center gap-2">{item.title}</h3>
                <p className="text-white text-lg mt-3">{item.description}</p>
                <button
                    onClick={() => copyToClipboard(item.command)}
                    className="bg-[#5064d4] text-white px-5 py-2 rounded-lg text-lg mt-4 relative"
                >
                    {copiedCommand === item.command ? "Kopyalandı!" : item.command}
                </button>
                <p className="text-gray-300 text-md mt-4">
                    Komutunu kullanarak sistemimizi kurabilir ve gelişmiş özelliklerden yararlanabilirsiniz.
                </p>
            </div>
        );
    }

    const tanitimlar = [
        {
            title: "🎟️ Ticket Sistemi",
            description: "Özel transcript sistemleri ile ticket sisteminizi korur.",
            command: "/ticket-kur",
            image: ""
        },
        {
            title: "🎟️ Jail Sistemi",
            description: "Jail sistemi ile kural bozanları engelleyin.",
            command: "/jail-kur",
            image: ""
        },
        {
            title: "🎟️ Guard Sistemi",
            description: "Hain yetkililerinizi engelleyin.",
            command: "/guard-kur",
            image: ""
        },
        {
            title: "🎟️ Giriş Çıkış Sistemi",
            description: "Sunucunuza giren çıkan kişileri görün.",
            command: "/giris-cikis-kur",
            image: ""
        }
    ];

    const stats = {
        server: 1434,
        user: 21873,
        command: 100,
        shard: 100,
        uptime: "10 Saat"
    }

    return (
        <>
            <Helmet>
                <title>{config.projectName}</title>
                <link rel="icon" href={config.projectImage} />
            </Helmet>

            <div className="fixed top-0 w-full transition-all duration-300">
                <Nav />
            </div>

            <motion.div
                className="text-center mt-40"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h1 className="text-4xl font-bold text-white">Türkiye'nin En İyi Discord Botu!</h1>
                <div className="mt-10 flex justify-center gap-10">
                    <button
                        className="px-6 py-3 bg-[#5064d4] text-white hover:bg-[#5064d4] rounded-lg shadow-md transition btn border border-[#5064d4] transition-transform hover:scale-110 flex items-center gap-2"
                        onClick={() => navigate("/rp?r=invite")}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 -28.5 256 256" aria-hidden="true">
                            <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
                        </svg>
                        Sunucuya Ekle
                    </button>
                    <button
                        className="px-10 py-3 bg-[#5064d4] text-white hover:bg-[#5064d4] rounded-lg shadow-md transition btn border border-[#5064d4] transition-transform hover:scale-110"
                        onClick={() => navigate("/rp?r=support")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 50 50">
                            <path d="M 36.875 -0.03125 C 32.851563 0.0820313 27.898438 0.722656 25.09375 3.53125 L 24.40625 4.1875 C 19.851563 8.773438 19.886719 15.988281 24.46875 20.59375 L 29.46875 25.59375 C 31.691406 27.824219 34.609375 29.0625 37.6875 29.0625 C 40.730469 29.0625 43.617188 27.824219 45.8125 25.625 L 46.46875 24.96875 C 49.957031 21.484375 49.988281 14.289063 50 11.21875 C 50.003906 10.679688 49.882813 10.257813 49.59375 9.96875 C 49.359375 9.734375 49.023438 9.625 48.6875 9.625 C 48.152344 9.625 47.738281 9.9375 47.53125 10.125 L 41.03125 16.65625 C 40.894531 16.679688 40.578125 16.71875 39.96875 16.71875 C 37.78125 16.71875 34.726563 16.292969 33.96875 15.96875 C 33.464844 14.867188 33.074219 10.042969 33.40625 9.03125 C 34.421875 8.015625 39.960938 2.445313 40 2.40625 C 40.175781 2.207031 40.75 1.515625 40.40625 0.75 C 40.273438 0.457031 39.914063 -0.0273438 38.96875 -0.03125 L 38.53125 -0.03125 C 38.003906 -0.03125 37.449219 -0.046875 36.875 -0.03125 Z M 21.375 19.9375 L 2.3125 37.28125 C 0.292969 39.304688 -1.496094 43.9375 2.3125 47.75 C 4.066406 49.503906 5.902344 49.96875 7.375 49.96875 C 7.753906 49.96875 8.085938 49.925781 8.40625 49.875 C 10.3125 49.589844 11.902344 48.601563 12.78125 47.71875 L 30.09375 28.65625 L 28.5 27.4375 L 22.59375 21.53125 Z"></path>
                        </svg>
                        Destek Sunucusu
                    </button>
                </div>
            </motion.div>

            <br />

            {showScrollButton && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-10 right-10 bg-[#5064d4] hover:bg-[#4053b5] text-white p-4 rounded-full shadow-lg transition-all duration-300"
                >
                    <ChevronUp size={24} />
                </motion.button>
            )}

            <motion.div
                className={`mt-16 flex ${isMobile ? 'flex-col items-center' : 'justify-center gap-10'} px-8`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-10 rounded-xl shadow-2xl text-center w-70 transform transition-transform hover:scale-110 hover:shadow-2xl hover:border-[#4b4b4b] border border-[#444444]">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Gelişmiş Koruma</h2>
                    <p className="text-lg text-gray-300">Sunucunuzda kötü niyetli kullanıcıları engelleyin.</p>
                </div>
                <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-10 rounded-xl shadow-2xl text-center w-70 transform transition-transform hover:scale-110 hover:shadow-2xl hover:border-[#4b4b4b] border border-[#444444]">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Eğlence Komutları</h2>
                    <p className="text-lg text-gray-300">Arkadaşlarınızla keyifli vakit geçirin.</p>
                </div>
                <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-10 rounded-xl shadow-2xl text-center w-70 transform transition-transform hover:scale-110 hover:shadow-2xl hover:border-[#4b4b4b] border border-[#444444]">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Gelişmiş Müzik Sistemi</h2>
                    <p className="text-lg text-gray-300">Yüksek kaliteli müzik keyfini çıkarın.</p>
                </div>
            </motion.div>



            <br />
            <br />
            <br />

            <div className="mt-16 flex flex-col items-center">
                <h2 className="text-4xl mb-6 font-extrabold text-white tracking-wide">Tanıtımlar</h2>

                {tanitimlar.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-[#444] text-white p-6 md:p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-[1100px] mb-8 hover:scale-105 transition-transform duration-300"
                    >
                        {index % 2 === 0 ? (
                            <>
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-xl w-full object-cover shadow-lg hover:shadow-2xl transition duration-300"
                                    />
                                </div>
                                <TanitimDetay item={item} copiedCommand={copiedCommand} copyToClipboard={copyToClipboard} />
                            </>
                        ) : (
                            <>
                                <TanitimDetay item={item} copiedCommand={copiedCommand} copyToClipboard={copyToClipboard} />
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-xl w-full object-cover shadow-lg hover:shadow-2xl transition duration-300"
                                    />
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-16 flex flex-col items-center gap-7"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h2 className="text-4xl font-extrabold text-white">İstatistikler</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-8 rounded-xl shadow-2xl hover:border-[#4b4b4b] border border-[#444444] text-center w-full md:w-60 transition-transform hover:scale-110 hover:shadow-2xl cursor-pointer" onClick={() => navigate("/shard")}>
                        <h2 className="text-2xl font-extrabold text-white">{stats.server}</h2>
                        <h2 className="text-lg text-gray-300">Sunucu</h2>
                    </div>
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-8 rounded-xl shadow-2xl hover:border-[#4b4b4b] border border-[#444444] text-center w-full md:w-60 transition-transform hover:scale-110 hover:shadow-2xl cursor-pointer" onClick={() => navigate("/shard")}>
                        <h2 className="text-2xl font-extrabold text-white">{stats.user}</h2>
                        <h2 className="text-lg text-gray-300">Kullanıcı</h2>
                    </div>
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-8 rounded-xl shadow-2xl hover:border-[#4b4b4b] border border-[#444444] text-center w-full md:w-60 transition-transform hover:scale-110 hover:shadow-2xl cursor-pointer" onClick={() => navigate("/shard")}>
                        <h2 className="text-2xl font-extrabold text-white">{stats.command}</h2>
                        <h2 className="text-lg text-gray-300">Komut</h2>
                    </div>
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-8 rounded-xl shadow-2xl hover:border-[#4b4b4b] border border-[#444444] text-center w-full md:w-60 transition-transform hover:scale-110 hover:shadow-2xl cursor-pointer" onClick={() => navigate("/shard")}>
                        <h2 className="text-2xl font-extrabold text-white">{stats.shard}</h2>
                        <h2 className="text-lg text-gray-300">Shard</h2>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
}