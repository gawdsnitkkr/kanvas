const Rellax = window.Rellax;

var rellax = new Rellax(".rellax", {
  speed: -2,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
  breakpoints: [576, 768, 1201],
});

const slack = document.querySelector(".slack");
console.log(window.scrollY);

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 2000) {
    slack.style.display = "none";
  } else {
    slack.style.display = "block";
  }
});
//conditional rendering event data

const gawds_button = document.querySelector("#gawds-logo");
const wd_button = document.querySelector(".wd");
const main = document.querySelector(".flex");
const WD = document.querySelector(".flex-1");
const GD = document.querySelector(".flex-2");
const SUB = document.querySelector(".flex-3");
const gd_button = document.querySelector(".gd");
// const SUB_button = document.querySelectorAll(".org-button");
const events_heading = document.querySelector(".evt");

window.scrollTo(0, 0);

// SUB_button.forEach(element => {
//     element.addEventListener('click', () => {
//         const form = document.querySelector('.form')
//         form.reset();
//         main.style.display = 'none';
//         GD.style.display = 'none';
//         WD.style.display = 'none';
//         SUB.style.display = 'block';
//         events_heading.style.display = 'none'

//         if (window.screen.width * window.devicePixelRatio < 800) {
//             window.scrollTo(1500, 1500);
//         } else {
//             window.scrollTo(1700, 1700);
//         }
//     })
// })

wd_button.addEventListener("click", () => {
  main.style.display = "none";
  WD.style.display = "block";
});

gd_button.addEventListener("click", () => {
  main.style.display = "none";
  GD.style.display = "block";
  window.scrollTo(1700, 1700);
});

const back = () => {
  main.style.display = "flex";
  WD.style.display = "none";
  events_heading.style.display = "block";
  GD.style.display = "none";
  SUB.style.display = "none";
};

// var countDownDate = new Date("Apr 22, 2020 23:59:00").getTime();

// var x = setInterval(function() {
//     var now = new Date().getTime();

//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("timer").innerHTML =
//         days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timer").innerHTML = "EXPIRED";
//     }
// }, 1000);

//firebaseconfig

var firebaseConfig = {
  apiKey: "AIzaSyDxZrjUTyrIJqONYJZ71_i6wIr6UKtdD6A",
  authDomain: "kanvas-862ce.firebaseapp.com",
  databaseURL: "https://kanvas-862ce.firebaseio.com",
  projectId: "kanvas-862ce",
  storageBucket: "kanvas-862ce.appspot.com",
  messagingSenderId: "534176018661",
  appId: "1:534176018661:web:5b40267b2a0f00c6dee40c",
  measurementId: "G-J7BS9KG8YC",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

// form submit

const handleSubmit = () => {
  const form = document.querySelector(".form");
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const slack = document.querySelector("#slack").value;
  const college = document.querySelector("#college").value;
  const category = document.querySelector("#category").value;
  const url = document.querySelector("#url").value;
  const message = document.querySelector(".message");

  if (
    !phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
  ) {
    message.innerHTML = "Invalid phone number.";
    return;
  }

  if (name && email && category && phone && college && url) {
    console.log("All");
    db.collection(`${category}`)
      .doc()
      .set({
        name,
        email,
        slack,
        phone,
        college,
        url,
      })
      .then((s) => {
        console.log(s);
        message.innerHTML = "Submitted";
      })
      .catch((e) => {
        console.log(e);
        message.innerHTML = "Submission failed. Please try again.";
      });
  } else {
    message.innerHTML = "Form is not completely filled.";
  }
  form.reset();
};
