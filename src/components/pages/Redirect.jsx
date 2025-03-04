import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import config, { supportServer, botInvite } from "../../../config.json";
import { Helmet } from "react-helmet";
import { Nav } from "../utils/nav";

export const Redirect = () => {
    const [searchParams] = useSearchParams();
    const rp = searchParams.get("r");

    useEffect(() => {
        if (rp === "support") {
            window.location.href = supportServer;
        } else if (rp === "invite") {
            window.location.href = botInvite;
        } else {
            window.location.href = "/";
        }
    }, [rp]);

    return (
        <>
            <Nav />
            <Helmet>
                <title>{config.projectName}</title>
                <link rel="icon" href={config.projectImage} />
            </Helmet>
            <div className="container mx-auto mt-20">
                <div className="text-center">
                    <h1 className="text-5xl text-[#5064d4] font-bold">Yönlendiriliyorsunuz</h1>
                    <p className="text-lg">Lütfen bekleyin, yönlendirme işlemi yapılıyor...</p>
                </div>
            </div>
        </>
    );
};
