export default function PostFundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline">
                        <div class="icon-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Heart</title><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                        </div>
                    </ion-icon>
                    <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="chatbubble outline">
                        <div class="icon-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Chatbubble</title><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" stroke-linecap="round" stroke-miterlimit="10" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                        </div>
                    </ion-icon>
                    <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline">
                        <div class="icon-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Paper Plane</title><path d="M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                        </div>
                    </ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline" role="img" class="md hydrated" aria-label="bookmark outline">
                        <div class="icon-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Bookmark</title><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                        </div>
                    </ion-icon>
                </div>
            </div>
            <div class="curtidas">
                <img src={props.url} alt={props.name} />
                <div class="texto">
                    Curtido por <strong>{props.name}</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    )
}