export default function SideBar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong>catanacomics</strong>
                        <ion-icon name="pencil" role="img" class="md hydrated" aria-label="pencil">
                            <div class="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Pencil</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zM413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z" class="ionicon-fill-none"></path></svg>
                            </div>
                        </ion-icon>
                    </span>
                </div>
            </div>
            <div class="links">

                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
        
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}