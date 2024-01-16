import { postsArray, displayPosts } from "./display-posts.js";

const barraBusca = document.querySelector("#input_busca");
const buscaBtn = document.querySelector(".icone_busca");

const buscaPosts = (str) => {
  const postsFiltrados = [];
  postsArray.forEach((post) => {
    if (post.legenda.toLowerCase().includes(str.toLowerCase())) postsFiltrados.push(post);
  })
  return postsFiltrados;
}

barraBusca.addEventListener("input", (e) => {
  const str = barraBusca.value;
  const postsEncontrados = buscaPosts(str);
  displayPosts(postsEncontrados);
})