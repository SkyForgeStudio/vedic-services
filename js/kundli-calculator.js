const input = document.querySelector("#birthPlace");
const list = document.querySelector(".suggestions");

input.addEventListener("input", async function () {
  const query = input.value.trim();

  if (query.length < 3) {
    list.innerHTML = "";
    list.style.display = "none";
    return;
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`
    );

    const places = await response.json();

    list.innerHTML = "";
    list.style.display = "block";

    if (places && places.length > 0) {
      places.forEach((place) => {
        const li = document.createElement("li");
        
        li.textContent = place.display_name;

        li.addEventListener("click", () => {
          input.value = place.display_name;
          list.innerHTML = "";
          list.style.display = "none";
        });

        list.appendChild(li);
      });
    } else {
      list.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching location data from public API:", error);
  }
});