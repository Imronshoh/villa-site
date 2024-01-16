let partMovies = movies.slice(90, 120);
let elMovList = document.querySelector(".movies__list");
let elSelCat = document.querySelector(".sell__category");

fnRender(partMovies);
function fnRender(data) {
  elMovList.innerHTML = "";
  data.forEach((item) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = `  
            <li>
                <div class="" style="width: 18rem">
                  <img
                    src="https://i.ytimg.com/vi/${
                      item.ytid
                    }/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDw0tpxVIqNxysFkl1zcZmOB-UtaA"
                    class="card-img-top"
                    alt="./img/Property 1=movie 1.png"
                  />
                  <div class="card-body">
                  <p class="card_year">
                  Year:     ${item.movie_year}
                  </p>
                    <h5 class="card-title">${item.Title}</h5>
                    <p class="card_category">
                     ${item.Categories}
                    </p>
                    <p class="card_rating">
                     ${item.imdb_rating} <i class="bi bi-star-fill"></i>
                    </p>
                    <div class="d-flex justify-content-between align-items-center"><a href="https://www.youtube.com/watch?v=${
                      item.ytid
                    }" target="_blank"><button class="button-29" role="button">Watch Movie</button></a><i style="color:white;" onclick="setFavourite('${
      item.ytid
    }')" class="${
      JSON.parse(window.localStorage.getItem("saveData"))?.includes(item.ytid)
        ? "bi bi-save2-fill"
        : "bi bi-save2"
    }"></i></div>


                  </div>
                </div>
            </li>
            `;
    elMovList.appendChild(newLi);
  });
}

function fnYear(value) {
  if (value == "new") {
    fnRender(partMovies.sort((a, b) => b.movie_year - a.movie_year));
  } else if (value == "old") {
    fnRender(partMovies.sort((a, b) => a.movie_year - b.movie_year));
  }
}
function fnRating(value) {
  if (value == "max") {
    fnRender(partMovies.sort((a, b) => b.imdb_rating - a.imdb_rating));
  } else if (value == "min") {
    fnRender(partMovies.sort((a, b) => a.imdb_rating - b.imdb_rating));
  }
}
let arrCategory = [];
partMovies.forEach((item) => {
  if (!arrCategory.includes(item.Categories)) {
    arrCategory.push(item.Categories);
  }
});

arrCategory.forEach((item) => {
  let newOption = document.createElement("option");
  newOption.textContent = item;
  elSelCat.appendChild(newOption);
});

function fnCategory(value) {
  fnRender(partMovies.filter((item) => item.Categories == value));
}

function fnSearch(event) {
  event.preventDefault();
  let val = event.target.search.value;
  fnRender(
    partMovies.filter((item) =>
      item.Title.toString().toLowerCase().includes(val.toLowerCase())
    )
  );
}
function fnReset(value) {
  if (value == "") fnRender(partMovies);
}
function fnPagenation(count) {
  fnRender(partMovies.slice((count - 1) * 10, count * 10));
}
let elPagenation = document.querySelector(".pagenation");
for (let i = 0; i < partMovies.length / 10; i++) {
  console.log(i);
  let newButton = document.createElement("button");
  newButton.textContent = i + 1;
  newButton.classList = "btn btn-primary ms-3 text-decoration-none";
  newButton.setAttribute("onclick", `fnPagenation(${i + 1})`);
  elPagenation.appendChild(newButton);
}

let saveData = [];
function setFavourite(id) {
  if (window.localStorage.getItem("saveData")) {
    saveData = JSON.parse(window.localStorage.getItem("saveData"));
  }
  if (saveData.includes(id)) {
    window.localStorage.setItem(
      "saveData",
      JSON.stringify(saveData.filter((item) => item != id))
    );
  } else {
    saveData.push(id);
    window.localStorage.setItem("saveData", JSON.stringify(saveData));
  }
  fnRender(partMovies);
}
