export default function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="logo"></img>
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    <ion-icon name="paper-plane-outline" role="img" className="md hydrated" aria-label="paper plane outline"></ion-icon>
                    <ion-icon name="compass-outline" role="img" className="md hydrated" aria-label="compass outline"></ion-icon>
                    <ion-icon name="heart-outline" role="img" className="md hydrated" aria-label="heart outline"></ion-icon>
                    <ion-icon name="person-outline" role="img" className="md hydrated" aria-label="person outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}