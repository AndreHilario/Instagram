import { useState } from "react"

export default function Post(props) {

    const [like, setLike] = useState(<ion-icon data-test="like-post" onClick={darLike} name="heart-outline"></ion-icon>)

    const [salvo, setSalvo] = useState(<ion-icon data-test="save-post" onClick={salvarPost} name="bookmark-outline"></ion-icon>)

    const [number, setNumber] = useState(props.likes)

    function darLike() {
        setLike(<ion-icon data-test="like-post" onClick={retirarLike} class="red" name="heart"></ion-icon>)
        setNumber(number + 1)
    }

    function darLikePost() {
        setLike(<ion-icon data-test="like-post" onClick={retirarLike} class="red" name="heart"></ion-icon>)
        setNumber(number + 1)
    }

    function retirarLike() {
        setLike(like)
        setNumber(number)
    }
    
    function salvarPost() {
        setSalvo(<ion-icon data-test="save-post" onClick={retirarPostSalvo} class="black" name="bookmark"></ion-icon>)
    }

    function retirarPostSalvo() {
        setSalvo(salvo)
    }


    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.url} alt={props.name} />
                    {props.name}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal" role="img" className="md hydrated" aria-label="ellipsis horizontal"></ion-icon>
                </div>
            </div>
            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={darLikePost} src={props.url2} alt={props.name2} />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        {like}
                        <ion-icon name="chatbubble-outline" role="img" className="md hydrated" aria-label="chatbubble outline"></ion-icon>
                        <ion-icon name="paper-plane-outline" role="img" className="md hydrated" aria-label="paper plane outline"></ion-icon>
                    </div>
                    <div>
                        {salvo}
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.url3} alt={props.name3} />
                    <div className="texto">
                        Curtido por <strong>{props.name3}</strong> e <strong>outras <span data-test="likes-number">{number}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
} 