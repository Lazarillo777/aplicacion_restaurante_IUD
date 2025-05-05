const restaurants = [
    { name: "Restaurante 1", description: "Descripción del restaurante 1", address: "Medellín - Calle Bolivar #18-06",
    image: "https://img.freepik.com/psd-gratis/diseno-plantillas-menus-alimentos-restaurantes-banners-web-o-portadas_84443-10557.jpg?ga=GA1.1.1678814854.1746295685&semt=ais_hybrid&w=740"},

    { name: "Restaurante 2", description: "Descripción del restaurante 2", address: "Medellín - Poblado Cra #13-08",
    image: "https://img.freepik.com/psd-gratis/diseno-plantillas-menus-alimentos-restaurantes-banners-web-o-portadas_84443-10558.jpg?ga=GA1.1.1678814854.1746295685&semt=ais_hybrid&w=740"},

    { name: "Restaurante 3", description: "Descripción del restaurante 3", address: "Medellín - Calle 10 #20-06",
        image: "https://img.freepik.com/psd-gratis/diseno-plantillas-menus-historias-restaurantes_84443-10689.jpg?ga=GA1.1.1678814854.1746295685&semt=ais_hybrid&w=740"},

];

/* const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ""; 

    restaurants
  .filter(restaurant => restaurant.name.toLowerCase().includes(query))
  .forEach(restaurant => {
    const restaurantHTML = `
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">${restaurant.name}</h3>
          <p class="text-gray-600 mb-2">${restaurant.description}</p>
          <p class="text-gray-700"><strong>Dirección:</strong> ${restaurant.address}</p>
        </div>
      </div> 
    `;
  });

  

});*/

function renderRestaurants(filteredRestaurants) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
  
    filteredRestaurants.forEach(restaurant => {
      const restaurantHTML = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">${restaurant.name}</h3>
            <p class="text-gray-600 mb-2">${restaurant.description}</p>
            <p class="text-gray-700"><strong>Dirección:</strong> ${restaurant.address}</p>
          </div>
        </div>
      `;
      resultsDiv.innerHTML += restaurantHTML;
    });
  }
  
  // Lógica de búsqueda
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(query)
    );
    renderRestaurants(filtered);
  });
  
  // Mostrar todos al cargar
  renderRestaurants(restaurants);