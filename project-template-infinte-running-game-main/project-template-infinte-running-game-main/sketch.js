var gamesEduuu, gamesEduuu_image;
var edinaldoPereira, edinaldoPereira_image;
var lula, lulaImg;
var bolsonaro, bolsonaroImg;
var estrada, estradaImg;

function preload() {
    estradaImg = loadImage("estradaImagem.jpn");
    bolsonaroImg = loadImage("Bolsonaro-removebg-preview.png");
    lulaImg = loadImage("Lula-removebg-preview.png");
    edinaldoPereira_image = loadImage("edinaldoPereira-removebg-preview.png");
    gamesEduuu_image = loadImage("gamesEduuu-removebg-preview.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    estrada = createSprite(width/2, height/4);
    estrada.addImage("Estrada", estradaImg);
}

function draw() {
    background("skyblue");

    drawSprites();
}