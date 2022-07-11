const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Select the UI items
btnDOM = document.querySelector(".btn-container");
menuDOM = document.querySelector(".section-center");

//Button function for create main buttons
const btnCreate = () => {
  let buttons = `
    <button class="btn btn-outline-dark btn-item" id="All">All</button>
    <button class="btn btn-outline-dark btn-item" id="Korea">Korea</button>
    <button class="btn btn-outline-dark btn-item" id="Japan">Japan</button>
    <button class="btn btn-outline-dark btn-item" id="China">China</button>
  `
  btnDOM.innerHTML = buttons;
}
btnCreate();


//foodRecipe function for make html object items
const foodRecipes = (item) => {
  let food = `
    <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
          ${item.desc}
        </div>
      </div>
    </div> 
  `
  return food;
}


//Function for show all foods 
const showAllFoods = () => {

  let allFoods = "" 
  
  menu.map(item => {
    allFoods += foodRecipes(item)
  })
  menuDOM.innerHTML = allFoods;
}
//UI event for All foods
allBTN = document.querySelector("#All")
// Event Listeners
document.addEventListener("DOMContentLoaded", showAllFoods)
allBTN.addEventListener("click", showAllFoods)

//Function for show Korean foods
const showKoreanFoods = () => {
  
  let koreanFoods = ""

  menu.map(item => {
    if(item.category === "Korea"){
      koreanFoods += foodRecipes(item)
    }
  })
  
  menuDOM.innerHTML = koreanFoods;

}
//UI event for Koren foods
koreaBTN = document.querySelector("#Korea")
//Event Listeners
koreaBTN.addEventListener("click", showKoreanFoods);

//Function for show Japan foods
const showJapanFoods = () => {

  let japanFoods = "";

  menu.map(item =>{
    if(item.category === "Japan"){
      japanFoods += foodRecipes(item)
    }
  })

  menuDOM.innerHTML = japanFoods;

}
//UI event for Japan foods
japanBTN = document.querySelector("#Japan")
//Event Listeners
japanBTN.addEventListener("click", showJapanFoods)

//Function for show China foods
const showChinaFoods = () => {

  let chinaFoods = "";

  menu.map(item => {
    if(item.category === "China"){
      chinaFoods += foodRecipes(item)
    }
  })
  
  menuDOM.innerHTML = chinaFoods;

}
//UI event for China foods
chinaBTN = document.querySelector("#China")
//Event Listeners
chinaBTN.addEventListener("click", showChinaFoods)
