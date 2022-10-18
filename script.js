// length/width of single tile is 50px
const TILE_SIZE = 100,
  wrapper = document.getElementById("tiles");

let rows = 0,
  cols = 0;

const createTile = (index) => {
  const tile = document.createElement("div");

  tile.classList.add("tile");

  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  wrapper.innerHTML = "";

  // prettier-ignore
  rows = Math.round(document.body.clientHeight / TILE_SIZE),
  cols = Math.round(document.body.clientWidth / TILE_SIZE);

  wrapper.style.setProperty("--rows", rows);
  wrapper.style.setProperty("--cols", cols);

  createTiles(cols * rows);
};

createGrid();
window.onresize = () => createGrid();
