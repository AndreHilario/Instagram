import PostTopo from "./PostTopo"
import PostConteudo from "./PostConteudo"
import PostFundo from "./PostFundo"


export default function Post1() {
    return (
        <div class="post">
            <PostTopo url="assets/img/meowed.svg" name="meowed" />
            <PostConteudo url="assets/img/gato-telefone.svg" name="gato-telefone" />
            <PostFundo url="assets/img/respondeai.svg" name="respondeai" likes="101.523"/>
        </div>
    )
} 