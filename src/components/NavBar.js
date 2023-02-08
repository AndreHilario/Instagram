export default function NavBar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram">
                        <div class="icon-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg>
                        </div>
                    </ion-icon>
                    <div class="separador"></div>
                    <img src="Assets/logo.png" alt="logo"></img>
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                
                <div class="icones">
                    <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline">
                    <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Paper Plane</title><path d="M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                    </div>
                    </ion-icon>
                    <ion-icon name="compass-outline" role="img" class="md hydrated" aria-label="compass outline">
                    <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Compass</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" stroke-miterlimit="10" class="ionicon-fill-none ionicon-stroke-width"></path><path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z"></path></svg>
                    </div>
                    </ion-icon>
                    <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline">
                    <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Heart</title><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                    </div>
                    </ion-icon>
                    <ion-icon name="person-outline" role="img" class="md hydrated" aria-label="person outline">
                    <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Person</title><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" stroke-miterlimit="10" class="ionicon-fill-none ionicon-stroke-width"></path></svg>
                    </div>
                    </ion-icon>
                </div>
            </div>
        </div>
    )
}