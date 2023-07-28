console.log("JavaScript file is linked correctly. Hooray.");
function createImage() {
  let img = document.createElement("img");
  img.src = "src/images/poppies.jpg";
  img.alt = "Poppie's Fish and Chips";
  img.width = 800;
  img.height = 400;
  document.body.appendChild(img);
  createImage();
}