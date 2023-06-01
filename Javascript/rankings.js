const rankingcard1 = document.createElement("img");
rankingcard1.src = "../assets/image/avatars/avil/Avatar1.png";
const rankingcard2 = document.createElement("img");
rankingcard2.src = "../assets/image/avatars/avil/Avatar2.png";
const rankingcard3 = document.createElement("img");
rankingcard3.src = "../assets/image/avatars/avil/Avatar3.png";
const rankingcard4 = document.createElement("img");
rankingcard4.src = "../assets/image/avatars/avil/Avatar4.png";
const rankingcard5 = document.createElement("img");
rankingcard5.src = "../assets/image/avatars/avil/Avatar5.png";
const rankingcard6 = document.createElement("img");
rankingcard6.src = "../assets/image/avatars/avil/Avatar6.png";
const rankingcard7 = document.createElement("img");
rankingcard7.src = "../assets/image/avatars/avil/Avatar7.png";
const rankingcard8 = document.createElement("img");
rankingcard8.src = "../assets/image/avatars/avil/Avatar8.png";
const rankingcard9 = document.createElement("img");
rankingcard9.src = "../assets/image/avatars/avil/Avatar9.png";
const rankingcard10 = document.createElement("img");
rankingcard10.src = "../assets/image/avatars/avil/Avatar10.png";
const rankingcard11 = document.createElement("img");
rankingcard11.src = "../assets/image/avatars/avil/Avatar11.png";
const rankingcard12 = document.createElement("img");
rankingcard12.src = "../assets/image/avatars/avil/Avatar12.png";
const rankingcard13 = document.createElement("img");
rankingcard13.src = "../assets/image/avatars/avil/Avatar13.png";
const rankingcard14 = document.createElement("img");
rankingcard14.src = "../assets/image/avatars/avil/Avatar14.png";
const rankingcard15 = document.createElement("img");
rankingcard15.src = "../assets/image/avatars/avil/Avatar15.png";
const rankingcard16 = document.createElement("img");
rankingcard16.src = "../assets/image/avatars/avil/Avatar16.png";
const rankingcard17 = document.createElement("img");
rankingcard17.src = "../assets/image/avatars/avil/Avatar17.png";
const rankingcard18 = document.createElement("img");
rankingcard18.src = "../assets/image/avatars/avil/Avatar18.png";
const rankingcard19 = document.createElement("img");
rankingcard19.src = "../assets/image/avatars/avil/Avatar19.png";
const rankingcard20 = document.createElement("img");
rankingcard20.src = "../assets/image/avatars/avil/Avatar20.png";

let rankingcardsarr = [rankingcard1, rankingcard2, rankingcard3, rankingcard4, rankingcard5, rankingcard6, rankingcard7, rankingcard8, rankingcard9, rankingcard10, rankingcard11, rankingcard12, rankingcard13, rankingcard14, rankingcard15, rankingcard16, rankingcard17, rankingcard18, rankingcard19, rankingcard20];
let rankingnamesarr = ['Jaydon Ekstrom Bothman', 'Ruben Carder', 'Alfredo Septimus', 'Davis Franci', 'Livia Rosser', 'Kianna Donin', 'Phillip Lipshutz', 'Maria Rosser', 'Kianna Stanton', 'Angel Lubin', 'Allison Torff', 'Davis Workman', 'Lindsey Lipshutz', 'Randy Carder', 'Lydia Culhane', 'Rayna Bator', 'Jocelyn Westervelt', 'Marilyn Torff', 'Skylar Levin', 'Terry Dorwart'];
const rankingcards = document.querySelector(".tablerankingSection");

for (let i = 0; i < rankingcardsarr.length; i++) {
    const newrankingcard = document.createElement("div");
    newrankingcard.className = "rankingcard";
    newrankingcard.innerHTML = `
    <div>
        <div class="rankcardleft">
          <div>
            <p>${i+1}</p>
          </div>
          <div class="rankcardleftright">
            <img src=${rankingcardsarr[i].src} alt="">
            <p>${rankingnamesarr[i]}</p>
          </div>
        </div>
        <div class="rankcardright">
               <p>+1.41%</p>
               <p>602</p>
               <p>12.4 ETH</p>
        </div>
    </div>
    `;
    rankingcards.append(newrankingcard);
}

