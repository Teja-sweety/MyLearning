const mealsEl = document.getElementById("meals");
const favContainer = document.getElementById("fav-meals");
const searchWord = document.getElementById("search-word");
const searchBtn = document.getElementById("search");
const mealPopup = document.getElementById("meal-popup");
const popupClosebtn = document.getElementById("close-popup");
const mealInfoEL = document.getElementById("meal-info");
getRandomMeal();
fetchFavMeals();

async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    addMeal(randomMeal , true);
    //console.log(respData);
}
async function getMealbyId(id) {
    const resp = fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    const respData = await (await resp).json();
    const meal = respData.meals[0];
    return meal;    
}
async function getMealbySearch(word) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + word);
    const respData = await resp.json();
    //console.log(respData);
    const meals = respData.meals;
    //console.log(meals);
    return meals;
}

function addMeal(mealData ,random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = ` 
                <div class="meal-header">
                    ${random ? `<span class="random">ramdom recipe</span>` : ''}
                    
                    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
                </div>
                <div class="meal-body">
                    <h4>${mealData.strMeal}</h4>
                    <button class="fav-btn"><i class="fa fa-heart"></i></button>
                </div>`
    
    const btn = meal.querySelector(".meal-body .fav-btn");
    btn.addEventListener('click' , () => {
                    if(btn.classList.contains('active')){
                        removeMeals(mealData.idMeal);
                        btn.classList.remove('active');
                    }
                    else{
                        addMeals(mealData.idMeal);
                        btn.classList.add('active');
                    }

                   
                    fetchFavMeals();
                })

    meal.addEventListener('click' , ()=>{
        showMealInfo(mealData);
    })            
    mealsEl.appendChild(meal);            

}

function addMeals(mealId){
    const mealIds = getMealsLS();
    localStorage.setItem('mealIds',JSON.stringify([...mealIds,mealId]));
}
function removeMeals(mealId){
    const mealIds = getMealsLS();
    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id!=mealId)));
}
function getMealsLS(){
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals(){
    favContainer.innerHTML = ` `;
    const mealIds = getMealsLS();
    //const meals =[];
    for(i=0;i<mealIds.length;i++){
        const mealId = mealIds[i];
        var meal = await getMealbyId(mealId);
        addFavMeals(meal);
    }
}

function addFavMeals(mealData){
    const favMeal = document.createElement('li');
    favMeal.innerHTML = `<li>
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
            <span>${mealData.strMeal}</span></li>
            <button class="clear"><i class = "fas fa-window-close"></i></button>`

    const btn =favMeal.querySelector('.clear');
    btn.addEventListener('click',()=>{
        removeMeals(mealData.idMeal);
        fetchFavMeals();
    })        

    favContainer.appendChild(favMeal);

}
searchBtn.addEventListener('click',async() => {
    mealsEl.innerHTML=` `;
    const search = searchWord.value;
    console.log(search);
    const meals = await getMealbySearch(search);
    //console.log(meals);
    if(meals){
        meals.forEach((meal) => {
            addMeal(meal)
        })
    }

})
popupClosebtn.addEventListener('click' , () => {
    //alert("do u want to close details");
    mealPopup.classList.add("hidden");
})
function showMealInfo(mealData){
    //to clear it up
    mealInfoEL.innerHTML='';
    //update the mealInfo
    mealEl = document.createElement('div');
    mealEl.innerHTML = `
                <h1>${mealData.strMeal}</h1>
                <img src="${mealData.strMealThumb}" alt="">
                <p>${mealData.strInstructions}</p>
                <ul>
                    <li>${mealData.strIngredient1}/${mealData.strMeasure1}</li>
                    <li>>${mealData.strIngredient2}/${mealData.strMeasure2}</li>
                    <li>>${mealData.strIngredient3}/${mealData.strMeasure3}</li>
                </ul>`
    mealInfoEL.appendChild(mealEl);
    //show the popup
    mealPopup.classList.remove("hidden");


}
