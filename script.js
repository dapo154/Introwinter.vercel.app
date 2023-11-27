/*===========================
GETTING ELEMENTS FROM THE DOM
=============================*/
let billInput = document.querySelector("#bill");
let noOfPeople = document.querySelector("#bill_pp");
let tips = document.getElementsByClassName("grid");
let result = document.querySelector(".result1");
let totalResult = document.querySelector(".result2");
let resetBtn = document.querySelector("#reset");

//calculate the total tip amount
function tipValue(percentage) {
    //THE TOTAL TIP TO BE PAID
    let tip = percentage.value / 100 * billInput.value;

    //THE MONEY EACH PERSON IS EXPECTED TO PAY MINUS TIP
    let bill_PP = billInput.value / noOfPeople.value;

    //THE TIP TO BE PAID PER PERSON
    let tip_PP = tip / noOfPeople.value;

    //THE TOTAL AMOUNT TO BE PAID PER PERSON INCLUDING THE TIP
    let totalAmount = tip_PP + bill_PP;

    //APPPROXIMATE TO TWO DECIMAL PLACE
    result.innerHTML = tip_PP.toFixed(2);

    totalResult.innerHTML = totalAmount.toFixed(2);
}

/*========
VALIDATION
=========*/

//Number of people can't be 0
noOfPeople.addEventListener("input", function () {
    let error = document.querySelector(".error_msg");

    if (parseInt(noOfPeople.value) === 0) {
        noOfPeople.style.border = "2px solid red";
        error.style.display = "block";
    } else {
        error.style.display = "none";
        noOfPeople.style.border = "2px solid var(--Light-grayish-cyan)";
    }
});

//bills input can't be 0
billInput.addEventListener("input", function () {
    let oerror = document.querySelector(".error_msg1");

    if (parseInt(billInput.value) === 0) {
        billInput.style.border = "2px solid red";
        oerror.style.display = "block";
    } else {
        oerror.style.display = "none";
        billInput.style.border = "2px solid var(--Light-grayish-cyan)";
    }
});

//reset button

resetBtn.addEventListener("click", function () {
    //reset result section
    result.textContent = "0.00";
    totalResult.textContent = "0.00";
    //clear input fields
    billInput.value = "";
    noOfPeople.value = "";
})


