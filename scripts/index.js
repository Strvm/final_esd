var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 55,
});

typewriter
    .typeString('Mieux comprendre le monde grâce aux données <span class="orangeText">géospatiale</span>.')
    .start();


var app2 = document.getElementById('app2');

var typewriter2 = new Typewriter(app2, {
    loop: true,
    delay: 55,
});

typewriter2
    .typeString('data engineer')
    .pauseFor(800)
    .deleteAll()
    .typeString('créateur de donnée')
    .pauseFor(800)
    .deleteAll()
    .typeString('POI master')
    .pauseFor(800)
    .deleteAll()
    .start();


var app3 = document.getElementById('app3');

var typewriter3 = new Typewriter(app3, {
    loop: true,
    delay: 55,
});

typewriter3
    .typeString('tuteur')
    .pauseFor(800)
    .deleteAll()
    .typeString('chef')
    .pauseFor(800)
    .deleteAll()
    .typeString('conseiller')
    .pauseFor(800)
    .deleteAll()
    .start();