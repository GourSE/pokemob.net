window.onload = function() {
   mysteryOfTheDay(); 
};

function mysteryOfTheDay() {
    const d = new Date();
    dayOfTheDay = d.getDay();
    
    switch (dayOfTheDay) {
        case 0:
            glor();
            break;

        case 1:
            joy();
            break;

        case 2:
            sorr();
            break;

        case 3:
            glor();
            break;

        case 4:
            lumi();
            break;

        case 5:
            sorr();
            break;

        case 6:
            joy();
            break;
    
        default:
            break;
    }
}

function joy() {
    document.getElementById("mysTit").innerHTML = "Mysteria Gaudiosa";
    document.getElementById("pageSubtitle").innerHTML = "Mysteria Gaudiosa";
    document.getElementById("fM").innerHTML = "Primum mysterium gaudiosum: Annuntiatio";
    document.getElementById("sM").innerHTML = "Secundum Mysterium Gaudiosum: Visitatio";
    document.getElementById("tM").innerHTML = "Tertium Mysterium Gaudiosum: Nativitas";
    document.getElementById("forM").innerHTML = "Quartum Mysterium Gaudiosum: Presentatio";
    document.getElementById("fifM").innerHTML = "Quintum Mysterium Gaudiosum: Inventionem Domini nostri Iesu Christi in templo";
}
function lumi() {
    document.getElementById("mysTit").innerHTML = "Mysteria Luminosa";
    document.getElementById("pageSubtitle").innerHTML = "Mysteria Luminosa";
    document.getElementById("fM").innerHTML = "Primum mysterium luminosum: Baptismus Iesu";
    document.getElementById("sM").innerHTML = "Secundum mysterium luminosum: Miraculum ad nuptias in Cana";
    document.getElementById("tM").innerHTML = "Tertium mysterium luminosum: Et Proclamatio Regni Dei";
    document.getElementById("forM").innerHTML = "Quartum mysterium luminusom: Transfiguratum";
    document.getElementById("fifM").innerHTML = "Quintum mysterium luminosum: Ultima cena ";
}
function sorr() {
    document.getElementById("mysTit").innerHTML = "Mysteria Dolorosa";
    document.getElementById("pageSubtitle").innerHTML = "Mysteria Dolorosa";
    document.getElementById("fM").innerHTML = "Primum mysterium dolorosum: Cruciatus in Horto";
    document.getElementById("sM").innerHTML = "Secundum mysterium dolorosum: Flagellationem Domini nostri Iesu Christi";
    document.getElementById("tM").innerHTML = "Tertium mysterium dolorosum: Coronatio cum Spinis";
    document.getElementById("forM").innerHTML = "Quartum mysterium dolorosum: Baiulationem Crucis";
    document.getElementById("fifM").innerHTML = "Quintum mysterium dolorosum: Crucifixio";
}
function glor() {
    document.getElementById("mysTit").innerHTML = "Mysteria Gloriosa";
    document.getElementById("pageSubtitle").innerHTML = "Mysteria Gloriosa";
    document.getElementById("fM").innerHTML = "Primum mysterium gloriosum: Resurrectio";
    document.getElementById("sM").innerHTML = "Secundum mysterium gloriosum: Ascensio";
    document.getElementById("tM").innerHTML = "Tertium mysterium gloriosum: Descensus Spiritus Sancti";
    document.getElementById("forM").innerHTML = "Quartum mysterium gloriosum: Assumptionem Beatae Mariae Vírginis in caelum";
    document.getElementById("fifM").innerHTML = "Quintum mysterium gloriosum: Coronationem Beatae Mariae Virginis in caelum";
}
