// length/width of single tile is 50px
wrapper = document.getElementById("tiles");

let size,
  rows = 0,
  cols = 0,
  toggled = false;

// const colors = ["#2FF3E0", "#F8D210", "#FA26A0", "#F51720"];

const createTiles = (quantity) => {
  let string = "",
    opacity = toggled ? 0 : 1;
  for (let i = 0; i < quantity; i++) {
    string += `<div class="tile" id="${i}" style="opacity:${opacity}"></div>`;
  }

  return string;
};

const createGrid = () => {
  wrapper.innerHTML = "";
  size = document.body.clientWidth > 800 ? 100 : 50;

  // prettier-ignore
  rows = Math.round(document.body.clientHeight / size),
  cols = Math.round(document.body.clientWidth / size);

  wrapper.style.setProperty("--rows", rows);
  wrapper.style.setProperty("--cols", cols);

  wrapper.innerHTML = createTiles(cols * rows);
};

createGrid();
window.onresize = () => createGrid();

function handleOnClick(event) {
  toggled = !toggled;
  document.body.classList.toggle("toggled");

  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [cols, rows],
      from: event.target.id,
    }),
  });
}

wrapper.onclick = (e) => handleOnClick(e);
