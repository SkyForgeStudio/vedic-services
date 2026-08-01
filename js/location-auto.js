function initLocationAutocomplete({ inputId, listId, latId, lngId, debounceDelay = 300 }) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const latInput = latId ? document.getElementById(latId) : null;
  const lngInput = lngId ? document.getElementById(lngId) : null;


  if (!input || !list) return;

  let debounceTimer;

  input.addEventListener("input", function () {
    const query = input.value.trim();

    clearTimeout(debounceTimer);

    if (query.length < 3) {
      list.innerHTML = "";
      list.style.display = "none";
      return;
    }


    debounceTimer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`,
          {
            headers: {
              "Accept-Language": "en",
            },
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const places = await response.json();

        list.innerHTML = "";

        if (places && places.length > 0) {
          list.style.display = "block";

          places.forEach((place) => {
            const li = document.createElement("li");
            li.textContent = place.display_name;

            li.addEventListener("click", () => {
              input.value = place.display_name;

              if (latInput) latInput.value = place.lat;
              if (lngInput) lngInput.value = place.lon;

              list.innerHTML = "";
              list.style.display = "none";
            });

            list.appendChild(li);
          });
        } else {
          list.style.display = "none";
        }
      } catch (error) {
        console.error("Location Fetch Error:", error);
      }
    }, debounceDelay);
  });

  document.addEventListener("click", function (e) {
    if (!input.contains(e.target) && !list.contains(e.target)) {
      list.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLocationAutocomplete({
    inputId: "birthPlace",
    listId: "singleSuggestions",
    latId: "singleLat",
    lngId: "singleLng",
  });

  initLocationAutocomplete({
    inputId: "boyPob",
    listId: "boySuggestions",
    latId: "boyLat",
    lngId: "boyLng",
  });

  initLocationAutocomplete({
    inputId: "girlPob",
    listId: "girlSuggestions",
    latId: "girlLat",
    lngId: "girlLng",
  });
});