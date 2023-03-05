const submitButton = document.getElementById("submit");
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you")
const ratingButton = document.getElementsByClassName(".btn-rate")
const customerRating = document.getElementById("score")

$(".btn-rate").click(function(){
    var rating=$(this).attr("value");
    customerRating.innerHTML = rating;

    
    submitButton.addEventListener("click", () =>{
        if(rating = 0){
        }else{
            mainContainer.style.display = "none"
            thanksContainer.classList.remove('hidden')
    }})
});




//submitButton.addEventListener("click", () =>{
//    mainContainer.style.display = "none"
//    thanksContainer.classList.remove('hidden')
//})