import "./index.css";

import ImgYoutubeLogo from "../../../public/icon-youtube.svg";

import ImgVoiceSearch from "../../assets/icon-voice-search.svg";

export const Header = ()=>
{
    return (
        <header>
            <div>
                <section className="LogoArea">
                    <span class="material-symbols-outlined">menu</span>
                    <img src={ImgYoutubeLogo} alt="youtube logo"/>
                    <h1>YouTube <sup>br</sup></h1>
                </section>

                <section className="SearchArea">

                    <div id="search">
                        <input type="text" placeholder="Pesquisar" />
                        <button>
                            <span class="material-symbols-outlined">search</span>
                        </button>
                    </div>

                    <button id="voice-search-button">
                        <span class="material-symbols-outlined">mic</span>
                    </button>

                </section>

                <section className="UserArea">
                    <button className="navbar-action-button">
                        <span class="material-symbols-outlined">video_call</span>
                    </button>

                    <button className="navbar-action-button">
                        <span class="material-symbols-outlined">notifications</span>
                    </button>

                    <button className="navbar-action-button-user">
                        <span class="material-symbols-outlined">account_circle</span>
                    </button>
                </section>
            </div>
        </header>
    )
}