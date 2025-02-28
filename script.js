function getRandomUrl(){
    const random = Math.random() * 1000;
    const randomImageUrl = `https://picsum.photos/300/200?random=${random}`;
    return randomImageUrl;
}
function getRandomText(){
    const randomText = Math.random().toString(36).substring(2, 110);
    console.log(randomText);
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

    newCard.appendChild(image);
    newCard.appendChild(para);
    newCard.classList.add("prod-card")

    products.appendChild(newCard);
    console.log("added")
}

const products = document.getElementById("prod-list")

