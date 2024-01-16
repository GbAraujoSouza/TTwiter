class Post {
  constructor(imgPath, userImgPath, nomeUsuario, legenda) {
    this.imgPath = imgPath;
    this.userImgPath = userImgPath || null;
    this.nomeUsuario = nomeUsuario;
    this.legenda = legenda;
  }

  constroiElemento() {
    return `
          <div class="post_header f_align_center">
            <img src="${this.userImgPath}">
            <span>${this.nomeUsuario}</span>
          </div>
          <div class="post_conteudo">
            <div class="post_imagem">
              <img src="${this.imgPath}" alt="Imagem do post">
            </div>
            <div class="post_btns espacado">
              <span class="interact">
                <iconify-icon icon="ant-design:like-outlined" width="32" height="32"></iconify-icon>
                <iconify-icon icon="uiw:message" width="32" height="32"></iconify-icon>
              </span>
              <span class="like">
                <iconify-icon icon="icon-park-outline:like" style="color: #db0031;" width="32" height="32"></iconify-icon>
              </span>
            </div>
            <div class="legenda">
              <p>${this.legenda}</p>
            </div>
          </div>
        `
  }
}

export default Post;