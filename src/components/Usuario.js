import { useState } from "react";

export default function Usuario() {


    const [nomeDoUsuario, setNomeDoUsuario] = useState("catacomics")
    const [imagemPerfil, setImagemPerfil] = useState("assets/img/catanacomics.svg")
    

    function adicionarFoto(){
        const novaImagem = prompt("Coloque aqui a URL da sua foto de perfil")
        setImagemPerfil(novaImagem === "" ? imagemPerfil : novaImagem)
    }
    function adicionarNome(){
        const nomeNovo = prompt("Coloque aqui o seu nome de perfil")
        setNomeDoUsuario(nomeNovo === "" ? nomeDoUsuario : nomeNovo)
    }

    return (
        <div className="usuario">
                <img data-test= "profile-image" onClick={adicionarFoto} src={imagemPerfil} alt="imagem de perfil" />
                <div className="texto">
                    <span>
                        <strong data-test="name">{nomeDoUsuario}</strong>
                        <ion-icon onClick={adicionarNome} name="pencil" role="img" className="md hydrated" aria-label="pencil">
                            <div data-test="edit-name" className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Pencil</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zM413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z" className="ionicon-fill-none"></path></svg>
                            </div>
                        </ion-icon>
                    </span>
                </div>
            </div>
    )
}