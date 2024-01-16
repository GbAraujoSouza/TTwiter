import Post from "./Post.js";

const postContainer = document.querySelector(".post_cards");

// Posts iniciais do prototipo
const postsArray = [
  new Post("./img/post_image1.jpg", "./img/profile_image.jpg", "HIDEO_KOJIMA", "With Al Pacino san."),
  new Post("./img/post_image2.jpg", "./img/profile_image.jpg", "HIDEO_KOJIMA", "With Norman."),
  new Post("./img/post_image3.jpg", "HIDEO_KOJIMA", "Our Keanu visited Kojima Productions."),
];

const displayPosts = (listaDePosts) => {
  listaDePosts.forEach((post) => {
    const elemento = document.createElement("div");
    elemento.classList.add("post");
    elemento.innerHTML = post.constroiElemento();
    postContainer.appendChild(elemento);
  });
}

displayPosts(postsArray);

