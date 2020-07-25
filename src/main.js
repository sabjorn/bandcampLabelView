import LabelView from "./label_view.js";
import DownloadHelper from "./download_helper.js";
import Player from "./player.js";

window.onload = () => {
  const lv = new LabelView();
  lv.init();

  let checkIsDownloadPage = document.querySelector(".download-item-container");
  if (checkIsDownloadPage) {
    const dh = new DownloadHelper();
    dh.init();
  }

  let checkIsPageWithPlayer = document.querySelector("div.inline_player");
  if (checkIsPageWithPlayer) {
    const player = new Player();
    player.init();
  }
};