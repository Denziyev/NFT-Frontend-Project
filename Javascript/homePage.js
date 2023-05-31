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

const creatorcards = document.querySelector(".creatorcards")
let creatorimages = [creator1, creator2, creator3, creator4, creator5, creator6, creator7, creator8, creator9, creator10, creator11, creator12];
let creatornames = ['Keepitreal', 'DigiLab', 'GravityOne', 'Juanie', 'BlueWhale', 'Mr Fox', 'Shroomie', 'robotica', 'RustyRobot', 'Animakid', 'Dotgu', 'Ghiblier'];



for (let i = 1; i <= creatorimages.length; i++) {
    const newcarddiv = document.createElement("div");
    newcarddiv.classList.add("newcard");
    newcarddiv.innerHTML = `
      <div>${i}</div>
      <img src=${creatorimages[i - 1].src}>
      <div class="creatorcardbody">
      <div>${creatornames[i - 1]}</div>
      <div><div>Total Sales:</div><div>34.53 ETH</div></div>
      </div>
    `;
    
    creatorcards.append(newcarddiv);
}


//-----------------------------------------------------


const browse1=document.createElement("img");
browse1.src="../assets/image/browseCategories/browse1.png";
const browse2=document.createElement("img");
browse2.src="../assets/image/browseCategories/browse2.png";
const browse3=document.createElement("img");
browse3.src="../assets/image/browseCategories/browse3.png";
const browse4=document.createElement("img");
browse4.src="../assets/image/browseCategories/browse4.png";
const browse5=document.createElement("img");
browse5.src="../assets/image/browseCategories/browse5.png";
const browse6=document.createElement("img");
browse6.src="../assets/image/browseCategories/browse6.png";
const browse7=document.createElement("img");
browse7.src="../assets/image/browseCategories/browse7.png";
const browse8=document.createElement("img");
browse8.src="../assets/image/browseCategories/browse8.png";

const browsecards = document.querySelector(".browsecards");
let browseimages = [browse1, browse2, browse3, browse4, browse5, browse6, browse7, browse8];
let browsenames = ['Art', 'Collectibles', 'Music', 'Photography', 'Video', 'Utility', 'Sport', 'Virtual Worlds'];

for(let i=0;i<browseimages.length;i++){
    const newbrowsecarddiv = document.createElement("div");
    newbrowsecarddiv.className="newbrowsecard";
    newbrowsecarddiv.innerHTML=`
    <img src=${browseimages[i].src}>
    <div>
    <p>${browsenames[i]}</p>
    <div>
    `;
    browsecards.append(newbrowsecarddiv);
}