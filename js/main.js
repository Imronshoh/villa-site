let partMovies = movies.slice(90, 120);
let elMovList = document.querySelector(".movies__list");
let elInp = document.querySelector(".inp");

partMovies.forEach((item) => {
  console.log(item);
  let newLi = document.createElement("li");
  newLi.innerHTML = `  
            <li>
                <div class="" style="width: 18rem">
                  <img
                    src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDw0tpxVIqNxysFkl1zcZmOB-UtaA"
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
                    <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank"><button class="button-29" role="button">Watch Movie</button></a>


                  </div>
                </div>
            </li>
            `;
  elMovList.appendChild(newLi);
});

function fn() {
  elInp.value = "";
}
