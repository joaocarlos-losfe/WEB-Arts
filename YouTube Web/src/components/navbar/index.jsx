import "./index.css";

export const NavBar = ()=>
{
    return (
        <nav>
            <div>
                <button>
                    <span class="material-symbols-outlined">home</span>
                    <h2>Inicio</h2>
                </button>

                <button>
                <span class="material-symbols-outlined">library_music</span>
                    <h2>Shorts</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">subscriptions</span>
                    <h2>Inscrições</h2>
                </button>

                <hr />

                <button>
                    <span class="material-symbols-outlined">home</span>
                    <h2>Biblioteca</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">history</span>
                    <h2>Historico</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">slideshow</span>
                    <h2>Seus videos</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">schedule</span>
                    <h2>Assistir mais tarde</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">expand_more</span>
                    <h2>Mostrar mais</h2>
                </button>

                <hr />

                <h2 id="navbar-item-legend">Inscrições</h2>
                
                <button>
                    <img className="navbar-sub-img" src="https://yt3.ggpht.com/ytc/AMLnZu9uoF7NxMsmr9-qsLlpZCCLolHwDmGPyIoksxsn=s88-c-k-c0x00ffffff-no-rj"/>
                    <h2>NASASpaceflight</h2>
                </button>

                <button>
                    <img className="navbar-sub-img" src="https://yt3.ggpht.com/ytc/AMLnZu9OwWfYM4rz-H3q6BBCtiq36j-s-AI-D65zmG02=s176-c-k-c0x00ffffff-no-rj-mo"/>
                    <h2>Pabollo</h2>
                </button>

                <button>
                    <img className="navbar-sub-img" src="https://yt3.ggpht.com/ytc/AMLnZu-rihMwxuXoZ2IjdwvfXegytnGVYquLdSBhRf5-ZOM=s88-c-k-c0x00ffffff-no-rj"/>
                    <h2>Fabio Akita</h2>
                </button>

                <button>
                    <img className="navbar-sub-img" src="https://yt3.ggpht.com/ytc/AMLnZu_WAuqpF02ensW2x5GQSC0cmPrmh1AGWeI7rnjubw=s88-c-k-c0x00ffffff-no-rj"/>
                    <h2>Eduardo Mendes</h2>
                </button>

                <button>
                    <img className="navbar-sub-img" src="https://yt3.ggpht.com/aypXJDLRC-q7U8nNFRIM07EozoAe1neU2F_hNsbMtuFp6XLHFscxhK73JG-mVbjz_YuABStM-60=s88-c-k-c0x00ffffff-no-rj"/>
                    <h2>Diolinux</h2>
                </button>

                <button>
                    <img className="navbar-sub-img" src="https://yt3.ggpht.com/ytc/AMLnZu9-n9mDtKOwVMx3_-2zr8H57lHFag5t-0JcJNFPUQ=s88-c-k-c0x00ffffff-no-rj"/>
                    <h2>Rocketseat</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">expand_more</span>  
                    <h2>Mostrar mains 102</h2>
                </button>

                <hr />

                <h2 id="navbar-item-legend">Explorar</h2>
                
                <button>
                    <span class="material-symbols-outlined">music_note</span>
                    <h2>Música</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">theaters</span>
                    <h2>Filmes</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">surround_sound</span>
                    <h2>Ao vivo</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">sports_esports</span>
                    <h2>Jogos</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">music_note</span>
                    <h2>Esportes</h2>
                </button>

                <button>
                    <span class="material-symbols-outlined">school</span>
                    <h2>Aprender</h2>
                </button>
        
            </div>
        </nav>
    )
}