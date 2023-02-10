import Post from "./Post"


export default function Posts() {

    const posts = [
    {
        url : "assets/img/meowed.svg", name : "meowed",
        url2 : "assets/img/dog.svg", name2 : "dog",
        url3 : "assets/img/respondeai.svg", name3 : "respondeai", likes : 101
    },
    {
        url : "assets/img/barked.svg", name : "barked",
        url2 : "assets/img/gato-telefone.svg", name2 : "gato-telefone",
        url3 : "assets/img/adorable_animals.svg", name3 : "adorable_animals", likes : 10
    },
    {
        url : "assets/img/wawawicomics.svg", name : "wawawicomics",
        url2 : "assets/img/gato-telefone.svg", name2 : "gato-telefone",
        url3 : "assets/img/adorable_animals.svg", name3 : "adorable_animals", likes : 50
    },

    ]
    return (
        <div className="posts">
           {posts.map((p) => <Post url={p.url} name={p.name} url2={p.url2} name2={p.name2} url3={p.url3} name3={p.name3} likes={p.likes} />)}
        </div>
    )
} 