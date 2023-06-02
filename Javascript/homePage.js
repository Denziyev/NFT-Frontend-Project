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
      <div class="numberr"><p>${i}</p></div>
      <img src=${creatorimages[i - 1].src}>
      <div class="creatorcardbody">
      <div>${creatornames[i - 1]}</div>
      <div><div>Total Sales:</div><div>34.53 ETH</div></div>
      </div>
    `;

    creatorcards.append(newcarddiv);
}


//-----------------------------------------------------


const browse1 = document.createElement("img");
browse1.src = "../assets/image/browseCategories/browse1.png";
const browse2 = document.createElement("img");
browse2.src = "../assets/image/browseCategories/browse2.png";
const browse3 = document.createElement("img");
browse3.src = "../assets/image/browseCategories/browse3.png";
const browse4 = document.createElement("img");
browse4.src = "../assets/image/browseCategories/browse4.png";
const browse5 = document.createElement("img");
browse5.src = "../assets/image/browseCategories/browse5.png";
const browse6 = document.createElement("img");
browse6.src = "../assets/image/browseCategories/browse6.png";
const browse7 = document.createElement("img");
browse7.src = "../assets/image/browseCategories/browse7.png";
const browse8 = document.createElement("img");
browse8.src = "../assets/image/browseCategories/browse8.png";

const browsecards = document.querySelector(".browsecards");
let browseimages = [browse1, browse2, browse3, browse4, browse5, browse6, browse7, browse8];
let browsenames = ['Art', 'Collectibles', 'Music', 'Photography', 'Video', 'Utility', 'Sport', 'Virtual Worlds'];

for (let i = 0; i < browseimages.length; i++) {
    const newbrowsecarddiv = document.createElement("div");
    newbrowsecarddiv.className = "newbrowsecard";
    newbrowsecarddiv.innerHTML = `
    <img src=${browseimages[i].src}>
    <div>
    <p>${browsenames[i]}</p>
    <div>
    `;
    browsecards.append(newbrowsecarddiv);
}


//--------------------------------------------------------------

const discover1 = document.createElement("img");
discover1.src = "../assets/image/NFTs/NFT1.png";
const discover2 = document.createElement("img");
discover2.src = "../assets/image/NFTs/NFT2.png";
const discover3 = document.createElement("img");
discover3.src = "../assets/image/NFTs/NFT3.png";

let discoverimages = [discover1, discover2, discover3];
let discovernames = ['Distant Galaxy', 'Life On Edena.', 'AstroFiction'];

const discoveravatar1 = document.createElement("img");
discoveravatar1.src = "../assets/image/avatars/avil/avatar16.png";
const discoveravatar2 = document.createElement("img");
discoveravatar2.src = "../assets/image/avatars/avil/avatar10.png";
const discoveravatar3 = document.createElement("img");
discoveravatar3.src = "../assets/image/avatars/avil/avatar15.png";

let discoveravatarimages = [discoveravatar1, discoveravatar2, discoveravatar3];
let discoveravatarnames = ['MoonDancer', 'NebulaKid', 'Spaceone'];
const discovercards = document.querySelector(".discovercards")
for (i = 0; i < discoveravatarimages.length; i++) {
    const newdiscovercard = document.createElement("div");
    newdiscovercard.className = "discovercard";
    newdiscovercard.innerHTML = `
    <img src=${discoverimages[i].src}>
        <div class="discovercarddown">
          <div class="discoveravatar">
              <p>${discovernames[i]}</p>
            <div>
                <img src=${discoveravatarimages[i].src} alt="">
              <p>${discoveravatarnames[i]}</p>
            </div>
          </div>

        <div class="discovercarddowndown">
        <div class="discovercarddowndownLeft">
          <p>Price</p>
          <p>1.63 ETH</p>
        </div>
        <div class="discovercarddowndownRight">
          <p>Highest Bid</p>
          <p>0.33 wETH</P>
        </div>
      </div>
    </div>
    `;
    discovercards.append(newdiscovercard);
}



//-----------------------------------------------------------------

const how1=document.createElement("img");
how1.src="../assets/image/howItWorksImages/how1.png";
const how2=document.createElement("img");
how2.src="../assets/image/howItWorksImages/how2.png";
const how3=document.createElement("img");
how3.src="../assets/image/howItWorksImages/how3.png";

const howcards=document.querySelector(".howcards")
let howimages=[how1,how2,how3];
let howtittles=['Setup Your wallet','Create Collection','Start Earning'];
let howtexts=['Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.','Upload your work and setup your collection. Add a description, social links and floor price.','Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'];

for(let i=0;i<howimages.length;i++){
    const newhowcard=document.createElement("div");
    newhowcard.className="newhowcard";
    newhowcard.innerHTML=`
    <img src=${howimages[i].src}>
    <div>
    <p>${howtittles[i]}</p>
    <p>${howtexts[i]}</P>
    </div>
    `
    howcards.append(newhowcard);
}



//-------------------------------------------------------------


