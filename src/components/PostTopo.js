export default function PostTopo(props) {
    return (

        <div class="topo">
            <div class="usuario">
                <img src={props.url} alt={props.name} />
                {props.name}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal" role="img" class="md hydrated" aria-label="ellipsis horizontal">
                    <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Ellipsis Horizontal</title><circle cx="256" cy="256" r="48"></circle><circle cx="416" cy="256" r="48"></circle><circle cx="96" cy="256" r="48"></circle></svg>
                    </div>
                </ion-icon>
            </div>
        </div>

    )
} 