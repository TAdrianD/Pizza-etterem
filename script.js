let adatok = [];

fetch("https://pizza.kando-dev.eu/Pizza", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        adatok.push(data[i]);
        document.getElementById("pizzas").innerHTML += `<div class="menu-item">
        <img src="${data.kepURL}" alt="Pizza 1">
        <h3>${data.name}</h3>
        <p>Egy sajtos pizza friss paradicsommal és bazsalikommal. Az olasz konyha klasszikus ízeivel.</p>
      </div>`;
    }
});

function Reszletek(id) {
    console.log(id);

    fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById("pizzas").innerHTML = `<div class="menu-item">
        <img src="${data.kepURL}" alt="Pizza 1">
        <h3>${data.name}</h3>
        <p>Egy sajtos pizza friss paradicsommal és bazsalikommal. Az olasz konyha klasszikus ízeivel.</p>
      </div>`;
    });
}

fetch("https://pizza.kando-dev.eu/Pizza", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(function (res) {
    return res.json();
})
.then((datas) => {
    console.log(datas);
     for (const data of datas) {
        document.getElementById("pizzas").innerHTML += `<div class="menu-item">
        <img src="${data.kepURL}" alt="Pizza 1">
        <h3>${data.name}</h3>
        <p>Egy sajtos pizza friss paradicsommal és bazsalikommal. Az olasz konyha klasszikus ízeivel.</p>
      </div>`;
     }
    })