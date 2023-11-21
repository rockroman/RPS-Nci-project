function generateSong() {
  const songContainer = document.querySelector("#song-lyrics");
  for (let numOfBottles = 99; numOfBottles > 0; numOfBottles--) {
    let myP = document.createElement("p");
    const songContent =
      document.createTextNode(`${numOfBottles} bottles of beer on the wall, ${numOfBottles}  bottles of beer
Take one down and pass it around, ${
        numOfBottles - 1
      }  bottles of beer on the wall`);

    myP.appendChild(songContent);
    songContainer.append(myP);
    myP.classList.add("text-white");
  }
}

const songBtn = document.querySelector("#song");
console.log(songBtn);
songBtn.addEventListener("click", generateSong);
