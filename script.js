const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const user = document.getElementById("user-input");
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;


    if (!user.value) {
        alert("Please provide a phone number")
    } else if (regex.test(user.value)) {
        result.innerText = `Valid US number: ${user.value}`
    } else {

        result.innerText = `Invalid US number: ${user.value}`
    }

});
clearBtn.addEventListener("click", () => {
    result.innerText = ""
})