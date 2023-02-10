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
                        <ion-icon data-test="edit-name" onClick={adicionarNome} name="pencil" role="img" className="md hydrated" aria-label="pencil"></ion-icon>
                    </span>
                </div>
            </div>
    )
}