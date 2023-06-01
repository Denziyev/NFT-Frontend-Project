const artist1 = document.createElement("img");
artist1.src = "../assets/image/NFTs/NFT1.png";
const artist2 = document.createElement("img");
artist2.src = "../assets/image/NFTs/NFT2.png";
const artist3 = document.createElement("img");
artist3.src = "../assets/image/NFTs/NFT3.png";
const artist4 = document.createElement("img");
artist4.src = "../assets/image/NFTs/NFT4.png";
const artist5 = document.createElement("img");
artist5.src = "../assets/image/NFTs/NFT5.png";
const artist6 = document.createElement("img");
artist6.src = "../assets/image/NFTs/NFT6.png";
const artist7 = document.createElement("img");
artist7.src = "../assets/image/NFTs/NFT7.png";
const artist8 = document.createElement("img");
artist8.src = "../assets/image/NFTs/NFT8.png";
const artist9 = document.createElement("img");
artist9.src = "../assets/image/NFTs/NFT9.png";


let artistimages = [artist1, artist2, artist3,artist4,artist5,artist6,artist7,artist8,artist9];
let artistnames = ['Distant Galaxy', 'Life On Edena.', 'AstroFiction','CryptoCity','ColorfulDog 0524','Space Tales','Cherry Blossom Girl 037','Dancing Robots 0987','IceCream Ape'];

const artistavatar1 = document.createElement("img");
artistavatar1.src = "../assets/image/avatars/avil/avatar16.png";


let artistavatarnames = ['Animakid'];
const artistcards = document.querySelector(".artistcards")
for (i = 0; i < artistimages.length; i++) {
    const newartistcard = document.createElement("div");
    newartistcard.className = "artistcard";
    newartistcard.innerHTML = `
    <img src=${artistimages[i].src}>
        <div class="artistcarddown">
          <div class="artistavatar">
              <p>${artistnames[i]}</p>
            <div>
                <img src=${artistavatar1.src} alt="">
              <p>${artistavatarnames[0]}</p>
            </div>
          </div>

        <div class="artistcarddowndown">
        <div class="artistcarddowndownLeft">
          <p>Price</p>
          <p>1.63 ETH</p>
        </div>
        <div class="artistcarddowndownRight">
          <p>Highest Bid</p>
          <p>0.33 wETH</P>
        </div>
      </div>
    </div>
    `;
    artistcards.append(newartistcard);
}
