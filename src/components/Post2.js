import PostTopo from "./PostTopo"
import PostConteudo from "./PostConteudo"
import PostFundo from "./PostFundo"


export default function Post2() {
    return (
        <div class="post">
            <PostTopo url="assets/img/barked.svg" name="barked" />
            <PostConteudo url="assets/img/dog.svg" name="dog" />
            <PostFundo url="assets/img/adorable_animals.svg" name="adorable_animals" />
        </div>
    )
}