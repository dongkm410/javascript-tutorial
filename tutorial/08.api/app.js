/*
const APP_ID = '4bcac3f2';
const APP_KEY = '57ef93ddac795cd98201bd6227425459';

test sample
curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
curl "https://api.edamam.com/search?q=chicken&app_id=4bcac3f2&app_key=57ef93ddac795cd98201bd6227425459&from=0&to=3&calories=591-722&health=alcohol-free"
*/

const form = document.querySelector('form');
const input = form.querySelector('input');
const foodList = document.querySelector('.food_list');

const APP_ID = '4bcac3f2';
const APP_KEY = '57ef93ddac795cd98201bd6227425459';

const foodName = 'chicken';

function paintRecipe(items) {
  let foods = '';
  items.map((item) => {
    foods += `<div class="food">
    <div class="food_img">
      <img src="${item.recipe.image}" alt="" />
    </div>
    <div class="food_info">
      <div class="food_title">
        <h3>${item.recipe.label}</h3>
        <a href="${item.recipe.url}" target="_blank">view recipe</a>
      </div>
      <p>
        ${item.recipe.calories}
      </p>
      </div>
    </div>`;
  });

  foodList.innerHTML = foods;
}

function getRecipe(query) {
  console.log(query);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;

  fetch(url)
    // .then((response) => console.log(response))
    //response로 받은 데이터를 json형식으로 바꿔주는 메서드가 -.json
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then((data) => paintRecipe(data.hits));
}

function init() {
  getRecipe(foodName);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = input.value;
    if (query === '') {
      //   alert('검색어를 입력해주세요');
      return;
    }
    getRecipe(query);
  });
}

init();
