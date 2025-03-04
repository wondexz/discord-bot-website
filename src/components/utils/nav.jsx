import React, { useState, useEffect } from 'react';
import config, { projectName, projectImage } from "../../../config.json";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="navbar bg-[#1e1e1e] rounded-full py-3 px-10 mt-4 mx-auto max-w-7xl">
            <div className="flex-1 flex items-center">
                <img src={projectImage} alt="projectIcon" height="40" width="40" className='rounded-full' />
                <a className="text-lg font-bold text-white hover:text-gray-300 transition-colors ml-4">{projectName}</a>
            </div>
            <div className="flex flex-1 justify-end items-center">
                {isMobile ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-full text-white hover:bg-[#333333] hover:shadow-lg transition-colors text-sm py-2 px-5">Menü</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-[#222222] rounded-lg z-[1] mt-2 w-56 p-3 shadow-lg">
                            <li>
                                <a href="/" className="block text-white hover:bg-[#333333] rounded-lg p-3 transition-colors text-sm">Ana sayfa</a>
                            </li>
                            <li>
                                <a href="/commands" className="block text-white hover:bg-[#333333] rounded-lg p-3 transition-colors text-sm">Komutlar</a>
                            </li>
                            <li>
                                <a href="/rp?r=support" className="block text-white hover:bg-[#333333] rounded-lg p-3 transition-colors text-sm">Destek</a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <button onClick={() => navigate("/")} className="btn btn-ghost rounded-full text-white hover:bg-[#333333] hover:shadow-lg transition-colors text-sm py-2 px-5">Ana sayfa</button>
                        <button onClick={() => navigate("/commands")} className="btn btn-ghost rounded-full text-white hover:bg-[#333333] hover:shadow-lg transition-colors text-sm py-2 px-5">Komutlar</button>
                        <button onClick={() => navigate("/rp?r=support")} className="btn btn-ghost rounded-full text-white hover:bg-[#333333] hover:shadow-lg transition-colors text-sm py-2 px-5">Destek</button>
                    </div>
                )}
            </div>
        </div>
    )
}