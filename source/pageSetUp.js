fetch("source/head.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("head").innerHTML += data;
    });

