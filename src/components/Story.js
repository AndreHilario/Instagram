export default function Story(props){
    return (
        <div className="story">
            <><div className="imagem">
                <img src={props.url} alt={props.text} />
            </div>
            
            <div className="usuario"> {props.text} </div></>
        </div>
    )
} 