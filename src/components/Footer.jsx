import { Link } from "react-router-dom";
import GithubLogo from "../assets/github-logo.png";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 text-center rounded-t-lg">
            <Link to="https://github.com/aythp/project2" target="_blank">
                <img src={GithubLogo} alt="GitHub Logo" className="w-8 h-8 inline-block mr-2" />
            </Link>
        </footer>
    );
}