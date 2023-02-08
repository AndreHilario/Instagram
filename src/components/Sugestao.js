export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.url} alt={props.nome} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>
            <div class="seguir">{props.acao}</div>
        </div>
    )
}