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

