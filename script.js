document.querySelectorAll("circle").forEach((circle) => {
  const cx = circle.getAttribute("cx");
  const cy = circle.getAttribute("cy");
  circle.style.transformOrigin = `${cx}px ${cy}px`; // Set transform-origin dynamically
});

const city_name = document.getElementById("city_name");
const popup = document.getElementById("city-info-popup");
const popupCityName = document.getElementById("popup-city-name");
const popupCardName = document.getElementById("popup-card-name");

const popupCardImage = document.getElementById("popup-card-image");
const popupCardYear = document.getElementById("popup-card-year");
const popupCardOperator = document.getElementById("popup-card-operator");
const popupCardType = document.getElementById("popup-card-type");
const popupCardCompatibility = document.getElementById(
  "popup-card-compatibility"
);
const popupCardMobile = document.getElementById("popup-card-mobile");
const popupCardColor = document.getElementById("popup-card-color");

const closePopup = document.querySelector(".close-popup");

document.querySelectorAll("circle").forEach((circle) => {
  circle.addEventListener("mouseenter", (event) => {
    const id = circle.id; // Get the circle's id
    city_name.textContent = id; // Set the city_name text
    city_name.style.display = "block"; // Show the city_name
    city_name.style.left = `${event.pageX}px`; // Position horizontally
    city_name.style.top = `${event.pageY + 10}px`; // Position below the circle
  });

  circle.addEventListener("mousemove", (event) => {
    city_name.style.left = `${event.pageX}px`; // Update horizontal position
    city_name.style.top = `${event.pageY + 10}px`; // Update vertical position
  });

  circle.addEventListener("mouseleave", () => {
    city_name.style.display = "none"; // Hide the city_name
  });

  circle.addEventListener("click", () => {
    const cityName = circle.id; // Get the city name from the circle's ID
    const cardName = circle.getAttribute("data-card-name"); // Get the card name from the data attribute
    const cardImage = circle.getAttribute("data-card-image");
    const cardYear = circle.getAttribute("data-card-year");
    const cardOperator = circle.getAttribute("data-card-operator");
    const cardType = circle.getAttribute("data-card-type");
    const cardCompatibility = circle.getAttribute("data-card-compatibility");
    const cardMobile = circle.getAttribute("data-card-mobile");
    const cardColor = circle.getAttribute("data-card-color");

    // Show the pop-up
    if (popup.style.top === "15vh") {
      popup.style.top = "90vh";
      closePopup.innerHTML = "&times;";
      setTimeout(() => {
        popup.style.top = "15vh"; // Show the pop-up
      }, 300); // Delay before showing the pop-up
    } else {
      popup.style.top = "15vh";
      closePopup.innerHTML = "&times;";
    }

    // Update the pop-up content
    popupCityName.textContent = cityName;
    popupCardName.textContent = cardName;
    popupCardImage.src = cardImage;
    popupCardYear.textContent = cardYear;
    popupCardOperator.textContent = cardOperator;
    popupCardType.textContent = cardType;
    popupCardCompatibility.textContent = cardCompatibility;
    popupCardMobile.textContent = cardMobile;
    popupCardColor.textContent = cardColor;
  });

  closePopup.addEventListener("click", () => {
    popup.style.top = "90vh"; // Hide the pop-up
    popupCityName.textContent = "Click On A City";
    popupCardName.textContent = "";
    closePopup.innerHTML = "";
  });
});

if (window.innerWidth <= 1000) {
  // Check if the device is mobile
  document.querySelectorAll("rect").forEach((rect) => {
    rect.addEventListener("click", () => {
      const cityName = rect.id; // Get the city name from the rect's ID
      const cardName = rect.getAttribute("data-card-name"); // Get the card name from the data attribute
      const cardImage = rect.getAttribute("data-card-image");
      const cardYear = rect.getAttribute("data-card-year");
      const cardOperator = rect.getAttribute("data-card-operator");
      const cardType = rect.getAttribute("data-card-type");
      const cardCompatibility = rect.getAttribute("data-card-compatibility");
      const cardMobile = rect.getAttribute("data-card-mobile");
      const cardColor = rect.getAttribute("data-card-color");

      // Show the pop-up
      if (popup.style.top === "0") {
        popup.style.top = "90vh";
        closePopup.innerHTML = "&times;";
        setTimeout(() => {
          popup.style.top = "0"; // Show the pop-up
        }, 300); // Delay before showing the pop-up
      } else {
        popup.style.top = "0";
        closePopup.innerHTML = "&times;";
      }
      // Update the pop-up content
      popupCityName.textContent = cityName;
      popupCardName.textContent = cardName;
      popupCardImage.src = cardImage;
      popupCardYear.textContent = cardYear;
      popupCardOperator.textContent = cardOperator;
      popupCardType.textContent = cardType;
      popupCardCompatibility.textContent = cardCompatibility;
      popupCardMobile.textContent = cardMobile;
      popupCardColor.textContent = cardColor;
    });

    closePopup.addEventListener("click", () => {
      popup.style.top = "90vh"; // Hide the pop-up
      popupCityName.textContent = "Click On A City";
      popupCardName.textContent = "";
      closePopup.innerHTML = "";
    });
  });
}

const continentNameDisplay = document.getElementById("continent-name");
const citiesNameDisplay = document.getElementById("city-name");

document.querySelectorAll(".continent").forEach((continent) => {
  continent.addEventListener("mouseenter", () => {
    const continentName = continent.id; // Get the continent's name
    const cities = continent.getAttribute("data-cities"); // Get the cities from the data-cities attribute
    continentNameDisplay.innerHTML = `${continentName}`;
    citiesNameDisplay.innerHTML = `${cities}`; // Display the cities
  });
  continent.addEventListener("mouseleave", () => {});
  // Remove the mouseleave event listener to prevent clearing the display
});
