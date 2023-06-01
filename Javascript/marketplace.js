const marketplace1 = document.createElement("img");
marketplace1.src = "../assets/image/NFTs/NFT10.png";
const marketplace2 = document.createElement("img");
marketplace2.src = "../assets/image/NFTs/NFT11.png";
const marketplace3 = document.createElement("img");
marketplace3.src = "../assets/image/NFTs/NFT12.png";
const marketplace4 = document.createElement("img");
marketplace4.src = "../assets/image/NFTs/NFT13.png";
const marketplace5 = document.createElement("img");
marketplace5.src = "../assets/image/NFTs/NFT5.png";
const marketplace6 = document.createElement("img");
marketplace6.src = "../assets/image/NFTs/NFT8.png";
const marketplace7 = document.createElement("img");
marketplace7.src = "../assets/image/NFTs/NFT7.png";
const marketplace8 = document.createElement("img");
marketplace8.src = "../assets/image/NFTs/NFT17.png";
const marketplace9 = document.createElement("img");
marketplace9.src = "../assets/image/NFTs/NFT14.png";
const marketplace10 = document.createElement("img");
marketplace10.src = "../assets/image/NFTs/NFT15.png";
const marketplace11 = document.createElement("img");
marketplace11.src = "../assets/image/NFTs/NFT16.png";
const marketplace12 = document.createElement("img");
marketplace12.src = "../assets/image/NFTs/NFT15.png";


let marketplaceimages = [marketplace1, marketplace2, marketplace3,marketplace4,marketplace5,marketplace6,marketplace7,marketplace8,marketplace9,marketplace10,marketplace11,marketplace12];
let marketplacenames = ['Magic Mushroom 0325', 'Happy Robot 032', 'Happy Robot 024','CryptoCity','ColorfulDog 0524','Designer Bear','Colorful Dog 0356','Dancing Robot 0312','Cherry Blossom Girl 035','Space Travel','Sunset Dimension','Desert Walk','IceCream Ape 0324','Colorful Dog 0344'];


const marketplaceavatar1 = document.createElement("img");
marketplaceavatar1.src = "../assets/image/avatars/avil/avatar7.png";
const marketplaceavatar2 = document.createElement("img");
marketplaceavatar2.src = "../assets/image/avatars/avil/avatar12.png";
const marketplaceavatar3 = document.createElement("img");
marketplaceavatar3.src = "../assets/image/avatars/avil/avatar12.png";
const marketplaceavatar4 = document.createElement("img");
marketplaceavatar4.src = "../assets/image/avatars/avil/avatar6.png";
const marketplaceavatar5 = document.createElement("img");
marketplaceavatar5.src = "../assets/image/avatars/avil/avatar15.png";
const marketplaceavatar6 = document.createElement("img");
marketplaceavatar6.src = "../assets/image/avatars/avil/avatar8.png";
const marketplaceavatar7 = document.createElement("img");
marketplaceavatar7.src = "../assets/image/avatars/avil/avatar16.png";
const marketplaceavatar8 = document.createElement("img");
marketplaceavatar8.src = "../assets/image/avatars/avil/avatar10.png";
const marketplaceavatar9 = document.createElement("img");
marketplaceavatar9.src = "../assets/image/avatars/avil/avatar14.png";
const marketplaceavatar10 = document.createElement("img");
marketplaceavatar10.src = "../assets/image/avatars/avil/avatar20.png";
const marketplaceavatar11 = document.createElement("img");
marketplaceavatar11.src = "../assets/image/avatars/avil/avatar18.png";
const marketplaceavatar12 = document.createElement("img");
marketplaceavatar12.src = "../assets/image/avatars/avil/avatar13.png";

let marketplaceavatars=[marketplaceavatar1,marketplaceavatar2,marketplaceavatar3,marketplaceavatar4,marketplaceavatar5,marketplaceavatar6,marketplaceavatar7,marketplaceavatar8,marketplaceavatar9,marketplaceavatar10,marketplaceavatar11,marketplaceavatar12]
let marketplaceavatarnames = ['Shroomie','BeKind2Robots','BeKind2Robots','Mr Fox','Keepitreal','Robotica','MoonDancer','NebulaKid','Animakid','Catch 22','Ice Ape Club','PuppyPower'];

const marketplacecards = document.querySelector(".marketplacecards")
for (i = 0; i < marketplaceimages.length; i++) {
    const newmarketplacecard = document.createElement("div");
    newmarketplacecard.className = "marketplacecard";
    newmarketplacecard.innerHTML = `
    <img src=${marketplaceimages[i].src}>
        <div class="marketplacecarddown">
          <div class="marketplaceavatar">
              <p>${marketplacenames[i]}</p>
            <div>
                <img src=${marketplaceavatars[i].src} alt="">
              <p>${marketplaceavatarnames[i]}</p>
            </div>
          </div>

        <div class="marketplacecarddowndown">
        <div class="marketplacecarddowndownLeft">
          <p>Price</p>
          <p>1.63 ETH</p>
        </div>
        <div class="marketplacecarddowndownRight">
          <p>Highest Bid</p>
          <p>0.33 wETH</P>
        </div>
      </div>
    </div>
    `;
    marketplacecards.append(newmarketplacecard);
}
