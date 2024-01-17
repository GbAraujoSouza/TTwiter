import Post from './Post.js';
import { postsArray, displayPosts } from './display-posts.js';

const msgElement = document.querySelector("#mensagem");
const postBtn = document.querySelector(".enviar_postagem");

postBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const msg = msgElement.value;
  if (msg.trim().length) {
    const novoPost = new Post("", "", "usuário", msg);
    postsArray.unshift(novoPost);
    msgElement.value = "";
    displayPosts(postsArray);
  }
})
