document.addEventListener("DOMContentLoaded", function() {
  
  const westAfricaClimbText = document.querySelector(".west_africa_climb_text");


  westAfricaClimbText.style.opacity = 0;
  westAfricaClimbText.style.transform = "translateX(-500px)";

  
  anime({
    targets: westAfricaClimbText,
    translateX: 0, 
    opacity: 1, 
    duration: 1000, 
    easing: "easeOutQuad", 
    delay: 1,
  });
});

/*
var path6 = document.getElementById("#path6");
var path7 = document.getElementById("#path7");

            path6.addEventListener("animationend", () => {
                path7.classList.add("show");
            });

            path7.addEventListener("animationend", () => {
                path6.classList.add("show");
                path7.classList.remove("show");
            });

            path6.animate({
                strokeDashoffset: 0
            }, {
                duration: 1000,
                fill: "freeze"
            });

            path7.animate({
                strokeDashoffset: 0
            }, {
                duration: 1000,
                delay: 1000,
                fill: "freeze"
            });
*/
// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Select the .location_box element
  const locationBox = document.querySelector(".location_box");

  // Set initial styles for the element (hidden below the viewport)
  locationBox.style.opacity = 0;
  locationBox.style.transform = "translateY(50px)";

  // Create the Anime.js animation
  anime({
    targets: locationBox,
    translateY: 0, // Slide the element from translateY(-50px) to translateY(0)
    opacity: 1, // Fade in the element
    duration: 1000, // Animation duration in milliseconds (1 second)
    easing: "easeOutQuad", // Easing function for the animation
    delay: 500, // Delay the animation by 500 milliseconds (0.5 second)
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Select the .main-text element
  var mainText = document.querySelector(".main_text");

  // Split the text into individual characters using SplitText
  var splitText = new SplitText(mainText, { type: "chars" });

  // Hide the individual characters initially (set initial properties)
  gsap.set(splitText.chars, { y: "100%", opacity: 0 });

  // Create the slide animation
  gsap.to(splitText.chars, {
    y: "0%", // Slide from bottom to top
    opacity: 1,
    duration: 1,
    stagger: 0.05, // Delay each character's animation by 0.05 seconds
    ease: "power2.out", // Easing function (choose the one that suits your animation)
  });
});


// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Select all the divs with the class "my-div"
  const myDivs = document.querySelectorAll(".my-div");

  // Loop through each myDiv and create the animation using GSAP and ScrollTrigger
  myDivs.forEach((myDiv) => {
    const animationType = myDiv.getAttribute("data-animation");

    // Create the animation based on the specified animation type
    switch (animationType) {
      case "fade-slide":
        gsap.to(myDiv, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: myDiv,
            start: "top 80%",
            end: "center center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
        break;
      // Add more cases for other animation types if needed
      // For example, "fade", "slide", "zoom", etc.
    }
  });
});




//Scroll link smooth

$(document).ready(function() {
  $("a.scrollLink").click(function(event) {
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
});


//Images slider for Asubone in pictures

/*
$('#lightSlider').lightSlider({
  gallery: true,
  item: 1,
  loop:true,
  slideMargin: 0,
  thumbItem: 9
});
*/

// End -Asubone in Pictures


//forms countries dropdown

const countryInput1 = document.getElementById('country-origin');
const countrySuggestions1 = document.getElementById('countrySuggestions1');

const countryInput2 = document.getElementById('country-residence');
const countrySuggestions2 = document.getElementById('countrySuggestions2');

document.addEventListener('DOMContentLoaded', function() {
  countryInput1.value = 'France';
  countryInput2.value = 'Ghana';
});

countryInput1.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  if (searchTerm.length >= 2) {
    fetchCountryData(searchTerm, countrySuggestions1);
  } else {
    countrySuggestions1.innerHTML = '';
  }
});

countryInput2.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  if (searchTerm.length >= 2) {
    fetchCountryData(searchTerm, countrySuggestions2);
  } else {
    countrySuggestions2.innerHTML = '';
  }
});

function fetchCountryData(searchTerm, suggestionsContainer) {
  const apiUrl = `https://restcountries.com/v3.1/name/${searchTerm}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const countries = data.map(item => ({
        name: item.name.common,
        flag: item.flags.svg,
      }));

      displayCountrySuggestions(countries, suggestionsContainer);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      suggestionsContainer.innerHTML = 'Error fetching data';
    });
}

function displayCountrySuggestions(countries, suggestionsContainer) {
  const suggestionsHTML = countries.map(country => `
    <div class="suggestion">
      <img src="${country.flag}" alt="${country.name} flag">
      <span>${country.name}</span>
    </div>
  `).join('');

  suggestionsContainer.innerHTML = suggestionsHTML;

  const suggestionDivs = suggestionsContainer.querySelectorAll('.suggestion');
  suggestionDivs.forEach(div => {
    div.addEventListener('click', function() {
      const selectedCountry = div.querySelector('span').textContent;
      suggestionsContainer.previousElementSibling.value = selectedCountry;
      suggestionsContainer.innerHTML = '';
    });
  });
}






  function spyScrolling() {
  const sections = document.querySelectorAll('.hero-bg');

  window.onscroll = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`a[href*=${id}]`).parentNode.classList.add('active');
      }
  };
}

// START ---Gallery scroll

/*
var thumbnails = document.getElementById("thumbnails")
var imgs = thumbnails.getElementsByTagName("img")
var main = document.getElementById("main")
var counter=0;

for(let i=0;i<imgs.length;i++){
  let img=imgs[i]
  
  
  img.addEventListener("click",function(){
  main.src=this.src
})
  
}
*/

$(document).ready(function() {
    /*
  // Get the form data
  var formData = $("#userForm").serialize();

  // Post the form data to PHP
  $.ajax({
      url: "forms.php",
      data: formData,
      type: "POST",
      success: function(data) {
          // The form data was successfully posted to PHP
          alert("Form submitted successfully!");
      },
      error: function(error) {
          // An error occurred
          alert(error);
      }
  });
  */
});

// Froms Validation 

const form = document.getElementById("userForm");

// const idInput = document.createElement("input");
// idInput.type = "number";
// idInput.name = "id";
// idInput.value = (new Date()).getTime();

// // form.appendChild(idInput);

form.addEventListener("submit", function(event) {
    // Validate the first name
    const firstNameInput = document.getElementById("firstName");
    if (firstNameInput.value === "") {
        firstNameInput.setCustomValidity("Please enter your first name.");
        event.preventDefault();
        return;
    } else {
        firstNameInput.setCustomValidity("");
    }

    // Validate the last name
    const lastNameInput = document.getElementById("lastName");
    if (lastNameInput.value === "") {
        lastNameInput.setCustomValidity("Please enter your last name.");
        event.preventDefault();
        return;
    } else {
        lastNameInput.setCustomValidity("");
    }

    // Validate the email address
    const emailInput = document.getElementById("email");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity("Please enter a valid email address.");
        event.preventDefault();
        return;
    } else {
        emailInput.setCustomValidity("");
    }

    // Validate the phone number
    const phoneInput = document.getElementById("phoneNum");
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Please enter a valid phone number.");
        event.preventDefault();
        return;
    } else {
        phoneInput.setCustomValidity("");
    }

    // Validate the country of origin
    const countryOfOriginInput = document.getElementById("country-origin");
    if (countryOfOriginInput.value === "") {
        countryOfOriginInput.setCustomValidity("Please select a country of origin.");
        event.preventDefault();
        return;
    } else {
        countryOfOriginInput.setCustomValidity("");
    }

    // Validate the country of residence
    const countryOfResidenceInput = document.getElementById("country-residence");
    if (countryOfResidenceInput.value === "") {
        countryOfResidenceInput.setCustomValidity("Please select a country of residence.");
        event.preventDefault();
        return;
    } else {
        countryOfResidenceInput.setCustomValidity("");
    }

    // Validate the checkbox inputs
    const checkboxInputs = document.querySelectorAll("input[type=checkbox]");
    for (const checkboxInput of checkboxInputs) {
        if (!checkboxInput.checked) {
            checkboxInput.setCustomValidity("Please select at least one checkbox.");
            event.preventDefault();
            return;
        } else {
            checkboxInput.setCustomValidity("");
        }
    }

    // Validate the radio buttons
    const radioInputs = document.querySelectorAll("input[type=radio]");
    for (const radioInput of radioInputs) {
        if (!radioInput.checked) {
            radioInput.setCustomValidity("Please select one of the radio buttons.");
            event.preventDefault();
            return;
        } else {
            radioInput.setCustomValidity("");
        }
    }

    // The form is valid, so submit it
    event.preventDefault();
    form.submit();
});

// API call for country suggestion

const countryInput = document.getElementById('country-origin');
const countrySuggestions = document.getElementById('countrySuggestions');

countryInput.addEventListener('input', async function() {
    const query = countryInput.value.trim();

    if (query.length === 0) {
        countrySuggestions.innerHTML = '';
        return;
    }

    const url = `https://rest-country-api.p.rapidapi.com/name/${query}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8a2963abafmsha0585a0754be727p1af736jsn3608fb540109',
            'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (Array.isArray(data)) {
            const countries = data.map(country => ({
                name: country.name,
                flag: country.flags[0]
            }));

            displaySuggestions(countries);
        } else {
            countrySuggestions.innerHTML = '';
        }
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
});

function displaySuggestions(countries) {
    const suggestionList = countries
        .map(country => `<div class="country-suggestion"><img src="${country.flag}" alt="${country.name}" class="flag"> ${country.name}</div>`)
        .join('');

    countrySuggestions.innerHTML = suggestionList;

    const suggestionItems = document.querySelectorAll('.country-suggestion');
    suggestionItems.forEach(item => {
        item.addEventListener('click', function() {
            countryInput.value = item.innerText.trim();
            countrySuggestions.innerHTML = '';
        });
    });
}

