class Post {
  constructor(imgPath, userImgPath, nomeUsuario, legenda) {
    this.imgPath = imgPath || null;
    this.userImgPath = userImgPath || null;
    this.nomeUsuario = nomeUsuario;
    this.legenda = legenda;
  }

  constroiHeader() {
    return `
          <div class="post_header f_align_center">
            <img src="${this.userImgPath}">
            <span>${this.nomeUsuario}</span>
          </div>
    `
  }

  constroiImagem() {
    if (this.imgPath) {
      return `
        <div class="post_imagem">
          <img src="${this.imgPath}" alt="Imagem do post">
        </div>
      `
    }
    return "";
  }

  constroiBtns() {
    return `
      <div class="post_btns espacado">
        <span class="interact">
          <iconify-icon icon="ant-design:like-outlined" width="32" height="32"></iconify-icon>
          <iconify-icon icon="uiw:message" width="32" height="32"></iconify-icon>
        </span>
        <span class="like">
          <iconify-icon icon="icon-park-outline:like" style="color: #db0031;" width="32" height="32"></iconify-icon>
        </span>
      </div>
    `
  }
  constroiLegenda() {
    return `
      <div class="legenda">
        <p>${this.legenda}</p>
      </div>
    `
  }

  constroiElemento() {
    let element = this.constroiHeader() + '<div class="post_conteudo f_column_dir">' + this.constroiImagem();
    if (this.imgPath) {
      element += this.constroiBtns() + this.constroiLegenda();
    } else {
      element += this.constroiLegenda() + this.constroiBtns();
    }
    element += "</div>";
    return element;
  }
}

export default Post;