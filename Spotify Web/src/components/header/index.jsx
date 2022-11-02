import "./index.css";

export const Header = ()=>{
    return (
        <header id="header-container">
            <div id="content-nav">
                <span class="material-symbols-outlined">arrow_back_ios</span>
                <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>

            <div id="user-area">
                <a>Inscrever-se</a>
                <button>Entrar</button>
            </div>
        </header>
    )
}