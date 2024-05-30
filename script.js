// GET - adatok lekérése
fetch("https://pizza.kando-dev.eu/Pizza")
.then(function(response) {
    return response.json();
})
.then(function(pizzas) {
    pizzas.map(function(pizza) {
        console.log(pizza);
        document.getElementById("pizzas").innerHTML += `
        <div class="menu-item">
            <img src="${pizza.kepURL}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <button onclick="Reszletek(${pizza.id})">Részletek</button>
            <button onclick="Torles(${pizza.id})">Törlés</button>
        </div>`;
    });
});

// POST - adatfelvitel
document.getElementById("gomb").onclick = function() {
    let pizzaData = JSON.stringify({
        name: document.getElementById("name").value,
        kepURL: document.getElementById("kepURL").value,
        description: document.getElementById("description").value
    });

    fetch("https://pizza.kando-dev.eu/Pizza", {
        method: "POST",
        body: pizzaData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        location.reload();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

// DELETE - adat törlés
function Torles(id) {
    if (confirm("Biztosan törlöd?")) {
        fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function() {
            location.reload();
        });
    }
}

// Részletek - adatok lekérése id alapján
function Reszletek(id) {
    fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(pizza) {
        console.log(pizza);
        document.getElementById("pizzas").innerHTML = `<div class="menu-item">
        <img src="${pizza.kepURL}" alt="${pizza.name}">
        <h3>${pizza.name}</h3>
        <p>${pizza.description}</p>
      </div>`;
    });
}
