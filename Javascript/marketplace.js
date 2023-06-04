

let cardss = [
  {
    id: "0",
    marketplaceimage: "../assets/image/NFTs/NFT10.png",
    marketplacename: 'Magic Mushroom 0325',
    marketplaceavatars: "../assets/image/avatars/avil/avatar7.png",
    marketplaceavatarnames: 'Shroomie',
    fav: "no"
  },
  {
    id: "1",
    marketplaceimage: "../assets/image/NFTs/NFT11.png",
    marketplacename: "Happy Robot 032",
    marketplaceavatars: "../assets/image/avatars/avil/avatar12.png",
    marketplaceavatarnames: "BeKind2Robots",
    fav: "no"
  },
  {
    id: "2",
    marketplaceimage: "../assets/image/NFTs/NFT12.png",
    marketplacename: "Happy Robot 024",
    marketplaceavatars: "../assets/image/avatars/avil/avatar12.png",
    marketplaceavatarnames: "BeKind2Robots",
    fav: "no"
  },
  {
    id: "3",
    marketplaceimage: "../assets/image/NFTs/NFT13.png",
    marketplacename: "Designer Bear",
    marketplaceavatars: "../assets/image/avatars/avil/avatar6.png",
    marketplaceavatarnames: "Mr Fox",
    fav: "no"
  },
  {
    id: "4",
    marketplaceimage: "../assets/image/NFTs/NFT5.png",
    marketplacename: "Colorful Dog 0356",
    marketplaceavatars: "../assets/image/avatars/avil/avatar15.png",
    marketplaceavatarnames: "Keepitreal",
    fav: "no"
  },
  {
    id: "5",
    marketplaceimage: "../assets/image/NFTs/NFT8.png",
    marketplacename: "Dancing Robot 0312",
    marketplaceavatars: "../assets/image/avatars/avil/avatar8.png",
    marketplaceavatarnames: "Robotica",
    fav: "no"
  },
  {
    id: "6",
    marketplaceimage: "../assets/image/NFTs/NFT7.png",
    marketplacename: "Cherry Blossom Girl 035",
    marketplaceavatars: "../assets/image/avatars/avil/avatar16.png",
    marketplaceavatarnames: "MoonDancer",
    fav: "no"
  },
  {
    id: "7",
    marketplaceimage: "../assets/image/NFTs/NFT17.png",
    marketplacename: "Space Travel",
    marketplaceavatars: "../assets/image/avatars/avil/avatar10.png",
    marketplaceavatarnames: "NebulaKid",
    fav: "no"
  },
  {
    id: "8",
    marketplaceimage: "../assets/image/NFTs/NFT14.png",
    marketplacename: "Sunset Dimension",
    marketplaceavatars: "../assets/image/avatars/avil/avatar14.png",
    marketplaceavatarnames: "Animakid",
    fav: "no"
  },
  {
    id: "9",
    marketplaceimage: "../assets/image/NFTs/NFT15.png",
    marketplacename: "Desert Walk",
    marketplaceavatars: "../assets/image/avatars/avil/avatar20.png",
    marketplaceavatarnames: "Catch 22",
    fav: "no"
  },
  {
    id: "10",
    marketplaceimage: "../assets/image/NFTs/NFT16.png",
    marketplacename: "IceCream Ape 0324",
    marketplaceavatars: "../assets/image/avatars/avil/avatar18.png",
    marketplaceavatarnames: "Ice Ape Club",
    fav: "no"
  },
  {
    id: "11",
    marketplaceimage: "../assets/image/NFTs/NFT15.png",
    marketplacename: "Colorful Dog 0344",
    marketplaceavatars: "../assets/image/avatars/avil/avatar13.png",
    marketplaceavatarnames: "PuppyPower",
    fav: "no"
  }
]



const marketplacecards = document.querySelector(".marketplacecards")
for (i = 0; i < cardss.length; i++) {
  const newmarketplacecard = document.createElement("div");
  newmarketplacecard.className = "marketplacecard";
  newmarketplacecard.innerHTML = `
    <div>
    <img src=${cardss[i].marketplaceimage}>
    <img class="like1"src="../assets/icons/like1.svg">
    <img class="like2 hide " src="../assets/icons/like2.svg">
    </div>
        <div class="marketplacecarddown">
          <div class="marketplaceavatar">
              <p class="searchname1">${cardss[i].marketplacename}</p>
            <div>
                <img src=${cardss[i].marketplaceavatars} alt="">
              <p class="searchname2">${cardss[i].marketplaceavatarnames}</p>
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




const like1 = document.querySelectorAll(".like1");
const like2 = document.querySelectorAll(".like2");
let number = 0;
let numberfavv = document.querySelector(".numberfav");
numberfavv.textContent = number;





const allcardschoose = document.querySelector(".allcardschoose");
const favcardschoose = document.querySelector(".favcardschoose");
const marketplacecardscount = document.querySelectorAll(".marketplacecard")





favcardschoose.addEventListener("click", () => {
  for (i = 0; i < cardss.length; i++) {
    if (localStorage.getItem(`fav${cardss[i].id}`, `${cardss[i].fav}`) == "no") {
      marketplacecardscount[i].style.display = "none";
    }
  }
})

allcardschoose.addEventListener("click", () => {
  for (i = 0; i < cardss.length; i++) {
    marketplacecardscount[i].style.display = "inline-block";
  }
})



document.querySelector(".marketplacefirstdown").addEventListener("keyup", (e) => {
  // const searchcards1=Array.from(Array.from(document.getElementsByClassName("marketplacecard")).filter((e)=>e.style.display!="none"))
  const searchcards1 = Array.from(document.getElementsByClassName("marketplacecard"));
  const value = e.target.value;


  searchcards1.forEach((kart) => {
    const tittle = kart.querySelector(".searchname1").textContent.trim().toLocaleLowerCase();
    const text = kart.querySelector('.searchname2').textContent.trim().toLowerCase();
    if (tittle.includes(value.toLocaleLowerCase()) || text.includes(value.toLocaleLowerCase())) {
      kart.style.display = "inline-block";
    } else {
      kart.style.display = "none";
    }

  });

})


for (let i = 0; i < like1.length; i++) {
  like1[i].addEventListener("click", (e) => {

    e.target.classList.toggle("hide");
    like2[i].classList.toggle("hide");
    cardss[i].fav = "yes";

    SetLocal[i]

    number++;
    numberfavv.textContent = number;

  })

  like2[i].addEventListener("click", (e) => {

    e.target.classList.toggle("hide");
    like1[i].classList.toggle("hide");
    cardss[i].fav = "no";
    SetLocal(i);
    number--;
    numberfavv.textContent = number;

  })}




function getBasketfromLocalStorage() {
  const BasketItems = JSON.parse(localStorage.getItem("basket")) || [];

  }
    
    



const SetLocal = (id) => {
  const basket1 = localStorage.getItem("basket");
  if (basket1 == null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }


  var JsonBasket = localStorage.getItem("basket");
  const basket = JSON.parse(JsonBasket);
  basket.push(cardss[id]);
  JsonBasket = JSON.stringify(basket);
  localStorage.setItem("basket", JsonBasket);
};