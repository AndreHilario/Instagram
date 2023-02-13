import Sugestao from "./Sugestao"

export default function Sugestoes() {

    const sugestoes = [
        {url : "assets/img/bad.vibes.memes.svg", nome : "bad.vibes.memes", status : "Segue você", acao : "Seguir"},
        {url : "assets/img/chibirdart.svg", nome : "chibirdart", status : "Segue você", acao : "Seguir"},
        {url : "assets/img/razoesparaacreditar.svg", nome : "razoesparaacreditar", status : "Novo no Instagram", acao : "Seguir"},
        {url : "assets/img/adorable_animals.svg", nome : "adorable_animals", status : "Segue você", acao : "Seguir"},
        {url : "assets/img/smallcutecats.svg", nome : "smallcutecats", status : "Segue você", acao : "Seguir"},
    ]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            
            {sugestoes.map((c) => <Sugestao key={c.nome} url={c.url} nome={c.nome} status={c.status} acao={c.acao} />)}
        </div>
        
    )
}