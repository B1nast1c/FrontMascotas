import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer
            className="section-footer bg-white border-top p-3"
            style={{
                marginTop: "2rem",
            }}
        >
            <div className="container">
                <section className="footer-main py-5">
                    <div className="row">
                        <aside className="col-md-12 col-lg-3 col-xl-3">
                            <article className="me-lg-4">
                                <FontAwesomeIcon className="logo-footer" icon={faDog} />

                                <p className="mt-3">
                                    <br />
                                </p>
                            </article>
                        </aside>
                        <aside className="col-6 col-md-3 col-lg-2 col-xl-2">
                            <h6 className="title">Categorías</h6>
                            <ul className="list-menu mb-3">
                                <li>
                                    <Link to="/alimentos" className="list-item">Alimentos</Link>
                                </li>
                                <li>
                                    <Link to="/hogar" className="list-item">Accesorios para el Hogar</Link>
                                </li>
                                <li>
                                    <Link to="/exteriores" className="list-item">Accesorios para exteriores</Link>
                                </li>
                                <li>
                                    <Link to="/higiene-bienestar" className="list-item">Higiene y Bienestar</Link>
                                </li>
                                <li>
                                    <Link to="/juguetes" className="list-item">Juguetes</Link>
                                </li>
                            </ul>
                        </aside>
                        <aside className="col-6 col-md-3 col-lg-2 col-xl-2">
                            <ul className="list-menu mb-3">
                                <li>
                                    <p></p>
                                </li>
                                <li>
                                    <p></p>
                                </li>
                                <li>
                                    <p></p>
                                </li>
                            </ul>
                        </aside>
                        <aside className="col-6 col-md-3 col-lg-2 col-xl-2">
                            <ul className="list-menu mb-3">
                                <li>
                                    <p></p>
                                </li>
                                <li>
                                    <p></p>
                                </li>
                                <li>
                                    <p></p>
                                </li>
                            </ul>
                        </aside>
                        <aside className="col-6 col-md-3 col-lg-3 col-xl-3">
                            <h6 className="title">Contáctanos</h6>
                            <p className="h5 mb-0">(0800) Diosito</p>
                            <small className="text-muted">
                                (Horario de Atención: 8am a 10pm)
                            </small>
                            <div className="mt-3">
                                <p
                                    className="btn btn-icon btn-light"
                                    title="Facebook"
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </p>
                                <p
                                    className="btn btn-icon btn-light"
                                    title="Instagram"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </p>
                                <p
                                    className="btn btn-icon btn-light"
                                    title="Youtube"
                                >
                                    <FontAwesomeIcon icon={faYoutube} />
                                </p>
                                <p
                                    className="btn btn-icon btn-light"
                                    title="Twitter"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
