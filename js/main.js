document.addEventListener("DOMContentLoaded", () => {
  
  initLocationAutocomplete({
    inputId: "birthPlace",
    listId: "singleSuggestions",
    latId: "singleLat",
    lngId: "singleLng",
  });

  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");

  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
    });
  }
  
  if (emailInput) {
    emailInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\s+/g, "").toLowerCase();
    });
  }

});