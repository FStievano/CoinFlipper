function girarMoeda() {
    const moeda = document.getElementById("moeda");

    function playSound() {
        var som = new Audio('coin_sound.mp3');
        som.play();
    }

    moeda.style.transform = "none";
    moeda.style.transform = "rotateY(0deg)";

    setTimeout(() => {
        moeda.style.transition = "transform 2s";
        moeda.style.transform = "rotateY(1080deg)";
        playSound();
    }, 500);

    const resultado = Math.floor(Math.random() * 2);

    setTimeout(() => {
            moeda.src = resultado === 0 ? "cara.png" : "coroa.png"}, 500);
};
