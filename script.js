document.getElementById("btn").addEventListener("click", () => {

    
  let user = document.getElementById("userInput").value;

  let mealAPI = fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`
  );

  mealAPI.then((getData)=>{
    return getData.json();
  }).then((sendData)=>{
    console.log(sendData)
  })
});