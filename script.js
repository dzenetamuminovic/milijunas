const pitanja = [
    {
        pitanje: "Koja je svrha HTML atributa class i id?",
        odgovori : ["Identifikacija elementa i grupisanje sličnih elemenata","Podešavanje boje teksta i pozadine","Uvoz eksternih stilova","Kreiranje JavaScript funkcija"],
        tacanOdgovor :"Identifikacija elementa i grupisanje sličnih elemenata",
    },
    {
        pitanje: "Šta je HTML forma i kako se kreira?",
        odgovori:["Blok teksta sa stilom", "Container za unos podataka sa korisničke strane", "Lista linkova prema drugim stranicama", "Grafički element u obliku kruga"],
        tacanOdgovor:"Container za unos podataka sa korisničke strane"
    },
    {
        pitanje:"Kako se dodaju komentari u HTML kodu?",
        odgovori:["// Ovo je komentar", "<!-- Ovo je komentar -->", "# Ovo je komentar", "/* Ovo je komentar */"],
        tacanOdgovor:"<!-- Ovo je komentar -->",
    },
    {
        pitanje: "Koja je svrha HTML elementa <meta charset='UTF-8'>?",
        odgovori:["Postavljanje fonta na stranici", "Definisanje karakter seta za dokument", "Kreiranje skripti za interakciju", "Stilizacija pozadine stranice"],
        tacanOdgovor:"Definisanje karakter seta za dokument",
    },
    {
        pitanje:"Kako se primjenjuje vanjski CSS fajl na HTML dokument?",
        odgovori:["<style src='stil.css'>", "<link rel='stylesheet' type='text/css' href='stil.css'>", "<css include='stil.css'>", "<import stylesheet='stil.css'>"],
        tacanOdgovor:"<link rel='stylesheet' type='text/css' href='stil.css'>",
    },
    {
        pitanje:"Kako se postavlja više stilova odjednom na element u CSS-u?",
        odgovori:["style: red, bold, underline;", "apply: red bold underline;", "set: red; set: bold; set: underline;", "color: red; font-weight: bold; text-decoration: underline;"],
        tacanOdgovor:"color: red; font-weight: bold; text-decoration: underline;",
    },
    {
        pitanje:"Kako se postavlja sijenka (box shadow) oko elementa u CSS-u?",
        odgovori:["shadow: box 2px 2px 5px #888;", "box-shadow: 2px 2px 5px #888;", "shade: 2px 2px 5px #888;", "outline: 2px 2px 5px #888;"],
        tacanOdgovor:"box-shadow: 2px 2px 5px #888;" ,
    },
    {
        pitanje:"Kako se postavlja transparentnost (prozirnost) elementa u CSS-u?",
        odgovori:["opacity: 0.5;", "transparent: true;", "color: rgba(255, 0, 0, 0.5);", "filter: alpha(50);"],
        tacanOdgovor:"opacity: 0.5;",
    },
    {
        pitanje:"Kako se dodaju elementi u kraj pitanjaa (array) u JavaScript-u?",
        odgovori:["array.add(element);", "array.push(element);", "array.insert(element);", "array.append(element);"],
        tacanOdgovor:"array.push(element);" ,
    },
    {
        pitanje:"Kako se pristupa prvom elementu pitanjaa u JavaScript-u?",
        odgovori:["array[1];", "array.first();", "array.front();", "array[0];"],
        tacanOdgovor:"array[0];",
    },
    {
        pitanje:"Kako se ispisuje tekst u konzoli (console) u JavaScript-u?",
        odgovori:["console.log('Tekst');", "print('Tekst');", "write('Tekst');", "display('Tekst');"],
        tacanOdgovor:"console.log('Tekst');",
    },
    {
        pitanje:"Šta radi operator '===' u JavaScript-u?",
        odgovori:["Poredi vrijednost i tip podataka", "Pretvara vrijednost u string", "Poredi vrijednost podataka", "Pretvara vrijednost u broj"],
        tacanOdgovor:"Poredi vrijednost i tip podataka",
    },
    {
        pitanje:"Kako se dodaju događaji (event listeners) na HTML element u JavaScript-u?",
        odgovori:["element.attachEvent('click', funkcija);", "element.addEventListener('click', funkcija);", "element.onEvent('click', funkcija);", "element.listen('click', funkcija);"],
        tacanOdgovor:"element.addEventListener('click', funkcija);" ,  
    },
    {
        pitanje:"Kako se kreira objekat u JavaScript-u?",
        odgovori:["objekt.create();", "new Object();", "{};", "object.make();"],
        tacanOdgovor:"{};",
    },
    {
        pitanje:"Kako se postavlja timeout funkcije u JavaScript-u?",
        odgovori:["setDelay(function, 1000);", "timeout(function, 1000);", "setTimeout(function, 1000);", "delay(function, 1000);"],
        tacanOdgovor:"setTimeout(function, 1000);",
    },
    {
        pitanje:"Koji atribut se koristi za automatsko reprodukovanje audio ili video sadržaja u HTML-u?",
        odgovori:["autoplay", "play", "auto", "start"],
        tacanOdgovor:"autoplay",
    },
    {
        pitanje:"Koji atribut se koristi za definisanje alternativnog teksta za sliku u HTML-u?",
        odgovori:["alt", "title", "description", "text"],
        tacanOdgovor:"alt",
    },
    {
        pitanje : "Koji tag u HTML-u predstavlja najvažniji naslov?",
        odgovori: ["<h6>","<h5>","<h1>","<h2>"],
        tacanOdgovor: "<h1>",
    },
    {
        pitanje : "Kako se postavlja boja teksta u CSS-u?",
        odgovori : ["text-color: #333","color: #333","text-style: #333", "font-color: #333"],
        tacanOdgovor: "color: #333",
    },
    {
        pitanje : "Kako se deklariše varijabla u JavaScript-u?",
        odgovori : ["variable : x","var x", "int x","varijabla = x",],
        tacanOdgovor : "var x"
    },

    {
        pitanje : "Šta označava skraćenica HTML?",
        odgovori :["Hyperlinks and Text Markup Language","Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlanguage and Text Markup Links"],
        tacanOdgovor : "Hyper Text Markup Language",
    },

    {
        pitanje : "Kako se koristi querySelector za odabir elementa po ID-u u JavaScript-u?",
        odgovori :["select('#elementId')","querySelector('#elementId')","getElement('elementId')","findElement('#elementId')"],
        tacanOdgovor : "querySelector('#elementId')",
    },

    {
        pitanje : "Kako se centrira tekst unutar elementa u CSS-u?",
        odgovori :["text-align: center;","vertical-align: middle;", "center-text: true;", "align-text: center;"],
        tacanOdgovor : "text-align: center;",
    },

    {
        pitanje : "Koji HTML element se koristi za kreiranje lista sa rednim brojevima?",
        odgovori :["<ul>","<li>","<ol>","<dl>"],
        tacanOdgovor : "<ol>",
    },

    {
        pitanje : "Kako se pravi funkcija (function) u JavaScript-u?",
        odgovori :["function myFunction() {}","createFunction() {}","new Function() {}","function = {}"],
        tacanOdgovor : "function myFunction() {}",
    },
];

let trenutnoPitanje = 0; /* redni broj trenutnog pitanja */
let svotaNovca = 0;
let ukupnopitanja = 0;

const tagZaPitanje = document.getElementById("pitanje");
const dugmeZaOdgovore = document.querySelectorAll(".odgovor");
const brojac = document.getElementById("brojac");
const h5tag = document.getElementById("naslov");


function randompitanja(pitanja) {
    for (let i = pitanja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pitanja[i], pitanja[j]] = [pitanja[j], pitanja[i]];
        }
}

randompitanja(pitanja);


function postaviPitanje() {
    const TrenutnoIzvucenoPitanje = pitanja[trenutnoPitanje];
    tagZaPitanje.textContent = TrenutnoIzvucenoPitanje.pitanje;

    dugmeZaOdgovore.forEach((odgovor, lala) => {
        odgovor.textContent = TrenutnoIzvucenoPitanje.odgovori[lala];
    });
    
};


function provijeriOdgovor(odgovor) {
    const trenutnoPitanjeObj = pitanja[trenutnoPitanje];
    const tacanOdgovor = trenutnoPitanjeObj.tacanOdgovor;
    
    let dugmeTacnogOdgovora;

    for (let i = 0; i < 4; i++) {
        const dugme = dugmeZaOdgovore[i];
        
        if (dugme.textContent === tacanOdgovor) {
            dugmeTacnogOdgovora = dugme;
            break;
        }
    }

    
    if (odgovor === tacanOdgovor) {
        if (dugmeTacnogOdgovora) {
            onemoguciSvaDugmad();
            dugmeTacnogOdgovora.classList.add("zelena-boja");
            setTimeout(() => {
                dugmeTacnogOdgovora.classList.remove("zelena-boja");
                omoguciSvaDugmad();
            }, 500);
        }
        
        setTimeout(() => {
            svotaNovca += 100;
            ukupnopitanja ++;
            brojac.textContent = svotaNovca + "$";
            trenutnoPitanje++;

            if (trenutnoPitanje < 10) {
                postaviPitanje();
            }
            else {
              zavrsiKviz();
            }
            
        }, 500);

    } else {
        zavrsiKviz();
        dugmeTacnogOdgovora.classList.add("zelena-boja");
    }
}

  
function onemoguciSvaDugmad() {
    dugmeZaOdgovore.forEach((dugme) => {
        dugme.setAttribute("disabled", "true");
    });
}


function omoguciSvaDugmad() {
    dugmeZaOdgovore.forEach((dugme) => {
        dugme.removeAttribute("disabled");
    });
}



function zavrsiKviz() {
    
    h5tag.textContent = `Kviz je završen sa ukupno ${ukupnopitanja} od 10 tačno odgovorenih pitanja! Ukupna suma iznosi: ${svotaNovca}$`;
    h5tag.classList.add("kraj");

    let button = document.createElement("button");
    button.textContent = "Igraj ponovo";
    document.getElementById("restart-button").appendChild(button);
    button.addEventListener("click", () => {
        location.reload(); 
    });

    onemoguciSvaDugmad();
}


dugmeZaOdgovore.forEach(odgovor => {
    odgovor.addEventListener("click", () => {
        provijeriOdgovor(odgovor.textContent);
    });
});

// Pokreni prvo pitanje
postaviPitanje();

