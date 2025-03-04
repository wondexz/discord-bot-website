import { Helmet } from "react-helmet";
import config from "../../../config.json";
import { useNavigate } from "react-router-dom";
import { Nav } from "../utils/nav";
import { Footer } from "../utils/footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, Search } from "lucide-react";

export const Commands = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const categories = [
        { key: "all", label: "Hepsi" },
        { key: "settings", label: "Ayarlar" },
        { key: "mod", label: "Moderasyon" },
        { key: "extra", label: "Extra" },
        { key: "pro", label: <span className="text-yellow-400 font-bold">Premium</span> }
    ];

    const commands = [
        { name: "ping", description: "Botun pingini gösterir.", category: "extra" },
        { name: "yardım", description: "Bottaki komutları gösterir.", category: "bot" },
        { name: "dolar", description: "Doları gösterir.", category: "extra" },
        { name: "euro", description: "Euroyu gösterir.", category: "extra" },
        { name: "sunucu-bilgi", description: "Sunucu bilgilerini gösterir.", category: "extra" },
        { name: "kullanıcı-bilgi", description: "Belirtilen kullanıcının bilgilerini gösterir.", category: "extra" },
        { name: "shard", description: "Botun shardlarını gösterir.", category: "extra" },
        { name: "avatar", description: "Avatarı gösterir.", category: "extra" },
        { name: "emojiler", description: "Sunucudaki emojileri gösterir.", category: "extra" },
        { name: "çeviri", description: "Belirtilen dili çevirir.", category: "extra" },
    ];

    const filteredCommands = commands.filter(cmd =>
        (selectedCategory === "all" || cmd.category === selectedCategory) &&
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-40 flex flex-col items-center gap-7 px-4"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center">Komutlar</h2>
                <h2 className="text-lg md:text-3xl text-white font-light text-center">{config.projectName}'de aradığınız komutları burada bulabilirsiniz.</h2>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-4 rounded-lg border border-[#444] bg-[#222] w-full md:w-auto">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`px-4 md:px-9 py-2 rounded-lg font-bold transition duration-300 text-sm md:text-base ${
                                selectedCategory === category.key ? "text-[#5064d4] underline" : "text-white"
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Komut Ara..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-[#333] text-white border border-[#444] focus:outline-none"
                    />
                    <Search className="absolute right-3 top-2 text-white" size={20} />
                </div>

                <div className="w-full md:w-3/4 mt-5">
                    {filteredCommands.length > 0 ? (
                        filteredCommands.map((cmd, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 border border-[#444] mt-5 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 shadow-xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] hover:bg-[#333] transition duration-300"
                            >
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{cmd.name}</h3>
                                    <p className="text-sm md:text-lg text-gray-300 mt-1 md:mt-2">{cmd.description}</p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-lg md:text-xl text-red-500 font-semibold text-center">Bu kriterlere uygun komut bulunamadı.</p>
                    )}
                </div>
            </motion.div>

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

            <Footer />
        </>
    );
};
