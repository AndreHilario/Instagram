import Story from "./Story"

export default function Stories(){

    const stories = [
        {url : "assets/img/9gag.svg", text : "9gag"},
        {url : "assets/img/meowed.svg", text : "meowed"},
        {url : "assets/img/barked.svg", text : "barked"},
        {url : "assets/img/nathanwpylestrangeplanet.svg", text : "nathanwp..."},
        {url : "assets/img/wawawicomics.svg", text : "wawawico..."},
        {url : "assets/img/respondeai.svg", text : "respondeai"},
        {url : "assets/img/filomoderna.svg", text : "filomoderna"},
        {url : "assets/img/memeriagourmet.svg", text : "memeriag..."},
    ]
    return (
        <div class="stories">
            {stories.map((s) => <Story url={s.url} text={s.text}/>)}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle" role="img" class="md hydrated" aria-label="chevron forward circle"></ion-icon>
            </div>
        </div>
    )
}
 
