import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
export default function Footer() {

    const date = new Date();

    return (
        <>
            <footer className="mt-5 p-5 footer">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <h4>Dapatkan info Tengtang Ku</h4>
                            <p>
                                Untuk Bisnis dapat menghubungi email{" "}
                                <a className="link" href="mailto:musthopaa043@gmail.com">
                                    musthopaa043@gmail.com
                                </a>
                            </p>
                            <div className="d-flex gap-4">
                                <a href="youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} className="" size="2x" />
                                </a>

                                <FontAwesomeIcon icon={faFacebook} className="" size="2x" />
                                <FontAwesomeIcon icon={faTwitter} className="" size="2x" />
                                <FontAwesomeIcon icon={faInstagram} className="" size="2x" />
                                <FontAwesomeIcon icon={faGithubAlt} className="" size="2x" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <span className="text-center">Ahmad Nurul Musthopa Copyright {date.getFullYear()}</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
