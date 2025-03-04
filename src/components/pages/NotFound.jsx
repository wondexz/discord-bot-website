import { Nav } from "../utils/nav";
import { Footer } from "../utils/footer";
import { Helmet } from "react-helmet";
import config from "../../../config.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";  // framer-motion'ı import ettik

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Nav />
            <Helmet>
                <title>{config.projectName}</title>
                <link rel="icon" href={config.projectImage} />
            </Helmet>

            <motion.div 
                className="text-center mt-60" 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1 
                    className="text-7xl font-bold text-red-600" 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    404
                </motion.h1>
                <motion.h2 
                    className="text-4xl font-bold text-white" 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Aradığınız sayfa bulunamadı.
                </motion.h2>
                <div className="mt-5 flex justify-center gap-10">
                    <motion.button 
                        className="px-10 py-3 bg-[#5064d4] text-white hover:bg-[#5064d4] rounded-lg shadow-md transition btn border border-[#5064d4] transition-transform"
                        onClick={() => navigate("/")}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Ana Sayfaya Dön
                    </motion.button>
                </div>
            </motion.div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
};
