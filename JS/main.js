let form1 = document.querySelector("#form1");

form1.addEventListener("submit", function (e) {
    e.preventDefault();
    let number = +e.target.elements.number.value;
    console.log(number);
    numberCheck(number);




    let progressB = document.getElementById("progressB");

    console.log(progressB);



    progressB.style.width = number + "%";

    // progerssB.textContent = number + "%";

    progressColor(number);

})



let progressColor = function (number) {

    let progressB = document.getElementById("progressB");

    if (number >= 0 && number <= 39) {

        progressB.className = "progress-bar bg-danger";
    } else if (number <= 69) {

        progressB.className = "progress-bar bg-info";
    } else if (number <= 100) {

        progressB.className = "progress-bar bg-success";
    }



}


let numberCheck = function (number) {

    if (number < 0 || number > 100) {

        swal("skaicius negeras");

    }




}
