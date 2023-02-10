import { useState } from "react"

export default function Post(props) {

    const [like, setLike] = useState(<ion-icon data-test="like-post" onClick={darLike} name="heart-outline"></ion-icon>)

    const [salvo, setSalvo] = useState(<ion-icon data-test="save-post" onClick={salvarPost} name="bookmark-outline"></ion-icon>)

    const [number, setNumber] = useState(props.likes)

    function darLike() {
        setLike(<ion-icon onClick={retirarLike} class="like" name="heart"></ion-icon>)
        setNumber(number + 1)
    }
    function retirarLike() {
        setLike(like)
        setNumber(number)
    }
    
    /* function darLikePeloPost() {
       setLike(<ion-icon class="like" name="heart"></ion-icon>)
    } */
    function salvarPost() {
        setSalvo(<ion-icon onClick={retirarPostSalvo} name="bookmark"></ion-icon>)
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
                    <ion-icon name="ellipsis-horizontal" role="img" className="md hydrated" aria-label="ellipsis horizontal">
                        <div className="icon-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Ellipsis Horizontal</title><circle cx="256" cy="256" r="48"></circle><circle cx="416" cy="256" r="48"></circle><circle cx="96" cy="256" r="48"></circle></svg>
                        </div>
                    </ion-icon>
                </div>
            </div>
            <div className="conteudo">
                <img data-test="post-image" onClick={darLike} src={props.url2} alt={props.name2} />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        {like}
                        <ion-icon name="chatbubble-outline" role="img" className="md hydrated" aria-label="chatbubble outline">
                            <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Chatbubble</title><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" stroke-linecap="round" stroke-miterlimit="10" className="ionicon-fill-none ionicon-stroke-width"></path></svg>
                            </div>
                        </ion-icon>
                        <ion-icon name="paper-plane-outline" role="img" className="md hydrated" aria-label="paper plane outline">
                            <div className="icon-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Paper Plane</title><path d="M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285" stroke-linecap="round" stroke-linejoin="round" className="ionicon-fill-none ionicon-stroke-width"></path></svg>
                            </div>
                        </ion-icon>
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