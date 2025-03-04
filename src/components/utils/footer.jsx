import { projectName, projectImage, projectDescription } from "../../../config.json";

export const Footer = () => {
    return (
        <footer className="footer footer-center bg-primary text-primary-content p-10">
            <aside>
                <img src={projectImage} alt="projectImage" height="70" width="70" className="rounded-full" />
                <p className="font-bold">
                    {projectName}
                    <br />
                    {projectDescription}
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    )
}