export default function Story(props){
    return (
        <div class="story">
            <><div class="imagem">
                <img src={props.url} alt={props.text} />
            </div>
            
            <div class="usuario"> {props.text} </div></>
        </div>
    )
} 