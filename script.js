function getRandomUrl(){
    const random = Math.random() * 1000;
    const randomImageUrl = `https://picsum.photos/300/200?random=${random}`;
    return randomImageUrl;
}
function getRandomText(){
    const randomText = Math.random().toString(36).substring(2, 110);
    return randomText;
}
function addNewCard(){
    const newCard = document.createElement("div");

    const imgUrl = getRandomUrl();
    const desc = getRandomText();

    const image = document.createElement("img");
    image.src = imgUrl;
    image.classList.add("card-img");

    const para = document.createElement("p")
    para.innerHTML = desc;
    para.classList.add("card-desc");

    const span = document.createElement("span")
    span.innerHTML = deleteSpan;
    span.classList.add("remove-btn")

    newCard.appendChild(image);
    newCard.appendChild(para);
    newCard.appendChild(span);
    newCard.classList.add("prod-card")

    products.appendChild(newCard);
    saveData();
}


document.getElementById("prod-list").addEventListener("click", e => {
    if (e.target.closest(".remove-btn")) {
      const card = e.target.closest(".prod-card"); // Find the nearest .prod-card
      if (card) {
        card.remove(); // Remove the card
      }
    }
  });

function saveData() {
  localStorage.setItem("products", products.innerHTML);
}

function showTask() {
  products.innerHTML = localStorage.getItem("products");
}

const products = document.getElementById("prod-list")
const deleteSpan = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>`;

showTask();





