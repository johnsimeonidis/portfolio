const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.navbar');
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');


hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

function checkForm(){
  var f = document.forms['theform'].elements;
  var fieldMustBeFilled = true;
  var emptyFields = [];

  for (var i = 0; i < f.length; i++) {
    if (f[i].value.trim == '') {
      fieldMustBeFilled = false;
      emptyFields.push(f[i].name);
      break;
    }
    // if (f[i].name === 'number') {
    //   if (!/^\d+$/.test(f[i].value.trim())) {
    //     alert("Please enter only numbers in the phone number field.");
    //     return; // Exit the function if phone number is not numeric
    //   }
  }
  var submitBtn = document.getElementById('form-btn');
  submitBtn.disabled = !fieldMustBeFilled;

  if (!fieldMustBeFilled) {
    var message = "Please fill out the following field(s):\n";
    for (var j = 0; j < emptyFields.length; j++) {
      message += "- " + emptyFields[j] + "\n";
    }
    alert(message);
  }
}

// function showAlert(message) {
//   var customAlert = document.getElementById('custom-alert');
//   var alertMessage = document.getElementById('custom-alert-message');
//   alertMessage.textContent = message;
//   customAlert.style.display = 'block';
// }

// function hideAlert() {
//   var customAlert = document.getElementById('custom-alert');
//   customAlert.style.display = 'none';
// }

const progressBar = document.querySelectorAll(".progress-bar");
var progressBarContainer = document.querySelector(".show-on-scroll");

let start;
document.onscroll = function() {
    if (isElementInViewport(progressBarContainer)) {
        if (!start) {
            window.requestAnimationFrame(loop);
        }
    } else {
        start = null;
    }
};

const animationTime = 1000;

function loop(timestamp) {
    if (!start) {
        start = timestamp;
    }
    const elapsed = timestamp - start;
    const progress = elapsed /animationTime;
    progressBar.forEach((bar) => {
        const progressComplete = bar.getAttribute("data-complete");
        const width = progress < 1 ?  Math.ceil(progress * 100) : progressComplete;
        if (width <= progressComplete) {
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    });
    if (progress <= 1){
        window.requestAnimationFrame(loop);
    }
}

function isElementInViewport(element){
    var rectangle = element.getBoundingClientRect();
    var height = window.innerHeight || document.documentElement.clientHeight;
    var top = rectangle.top;
    var bottom = rectangle.bottom;

    return(
        (top <=0 && bottom >= 0) ||
        (bottom >= height && top <= height) ||
        (top >= 0 && bottom <= height)
    );
}