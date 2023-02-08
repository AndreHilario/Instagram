import Sugestao from "./Sugestao"

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao url="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" status="Segue você" acao="Seguir"/>
            <Sugestao url="assets/img/chibirdart.svg" nome="chibirdart" status="Segue você" acao="Seguir"/>
            <Sugestao url="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" status="Novo no Instagram" acao="Seguir"/>
            <Sugestao url="assets/img/adorable_animals.svg" nome="adorable_animals" status="Segue você" acao="Seguir"/>
            <Sugestao url="assets/img/smallcutecats.svg" nome="smallcutecats" status="Segue você" acao="Seguir"/>
        </div>
        
    )
}