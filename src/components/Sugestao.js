export default function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.url} alt={props.nome} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.status}</div>
                </div>
            </div>
            <div className="seguir">{props.acao}</div>
        </div>
    )
}