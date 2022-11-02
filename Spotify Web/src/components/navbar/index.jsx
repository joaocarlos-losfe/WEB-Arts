import "./index.css";

import logo_white from "../../assets/logo_white.png"

export const Navbar = ()=>{
    return (
        <nav>
            <div className="container">
                
                <div className="logo-area">
                    <img src={logo_white} alt="spotify logo" />
                    <h1>Spotify</h1>
                </div>

                <div className="nav-options">
                    
                    <section id="primary-options">
                        <div className="option">
                            <span class="material-symbols-outlined">home</span>
                                <h2>Inicio</h2>
                            </div>

                            <div className="option">
                            <span class="material-symbols-outlined">search</span>
                                <h2>Buscar</h2>
                            </div>

                            <div className="option">
                                <span class="material-symbols-outlined">library_music</span>
                                <h2>Sua Biblioteca</h2>
                            </div>
                    </section>

                    <section id="secondary-options">
                        <div className="option">
                            <button id="playlist-add-button">
                                <span class="material-symbols-outlined">add</span>
                            </button>
                            <h2>Criar playlist</h2>
                        </div>

                        <div className="option">
                            <button id="music-like-button">
                                <span class="material-symbols-outlined">favorite</span>
                            </button>
                            <h2>Músicas curtidas</h2>
                        </div>
                        
                    </section>

                </div>
                
            </div>
            <div id="privacy">
                <h3>Cookies</h3>
                <h3>Privacidade</h3>
            </div>
        </nav>
    )
}