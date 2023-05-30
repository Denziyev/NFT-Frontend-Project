let creator1 = document.createElement("img");
creator1.src = "../assets/image/avatars/avil/Avatar1.png";
let creator2 = document.createElement("img");
creator2.src = "../assets/image/avatars/avil/Avatar2.png";
let creator3 = document.createElement("img");
creator3.src = "../assets/image/avatars/avil/Avatar3.png";
let creator4 = document.createElement("img");
creator4.src = "../assets/image/avatars/avil/Avatar4.png";
let creator5 = document.createElement("img");
creator5.src = "../assets/image/avatars/avil/Avatar5.png";
let creator6 = document.createElement("img");
creator6.src = "../assets/image/avatars/avil/Avatar6.png";
let creator7 = document.createElement("img");
creator7.src = "../assets/image/avatars/avil/Avatar7.png";
let creator8 = document.createElement("img");
creator8.src = "../assets/image/avatars/avil/Avatar8.png";
let creator9 = document.createElement("img");
creator9.src = "../assets/image/avatars/avil/Avatar9.png";
let creator10 = document.createElement("img");
creator10.src = "../assets/image/avatars/avil/Avatar10.png";
let creator11 = document.createElement("img");
creator11.src = "../assets/image/avatars/avil/Avatar11.png";
let creator12 = document.createElement("img");
creator12.src = "../assets/image/avatars/avil/Avatar12.png";

const creatorcards=document.querySelector(".creatorcards")
let creatorimages = [creator1, creator2, creator3, creator4, creator5, creator6, creator7, creator8, creator9, creator10, creator11, creator12];
let creatornames=['Keepitreal','DigiLab','GravityOne','Juanie','BlueWhale','Mr Fox','Shroomie','robotica','RustyRobot','Animakid','Dotgu','Ghiblier'];



for (let i = 1; i <= creatorimages.length; i++) {
    const newcarddiv = document.createElement("div");
    newcarddiv.innerHTML = `
     
      <img src=${creatorimages[i-1].src}>
      <div class="creatorcardbody">
      <div>${creatornames[i-1]}</div>
      <div><div>Total Sales:</div><div>34.53 ETH</div></div>
      </div>
    `;
    newcarddiv.classList.add("newcard");
    creatorcards.append(newcarddiv);
}