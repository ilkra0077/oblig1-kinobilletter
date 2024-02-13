// Array for å lagre billettobjekter
let billettListe = [];

function kjopBillett() {
    // Nullstill tidligere feilmeldinger
    nullstillFeilmeldinger();

    // Hent verdier fra input-feltene
    const valgtFilm = document.getElementById('film').value;
    const antallBilletter = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonnr = document.getElementById('telefonnr').value;
    const epost = document.getElementById('epost').value;

    let feilmelding = '';

    if (!valgtFilm) {
        feilmelding += 'Må velge en film. ';
    }

    if (!antallBilletter) {
        feilmelding += 'Må skrive inn antall billetter. ';
    }

    if (!fornavn) {
        feilmelding += 'Må skrive inn fornavn. ';
    }

    if (!etternavn) {
        feilmelding += 'Må skrive inn etternavn. ';
    }

    if (!telefonnr) {
        feilmelding += 'Må skrive inn telefonnummer. ';
    }

    if (!epost) {
        feilmelding += 'Må skrive inn e-postadresse. ';
    }

    // Vis feilmeldinger hvis det er noen
    if (feilmelding) {
        visFeilmeldinger(feilmelding);
    } else {
        // Opprett billettobjekt
        const billett = {
            film: valgtFilm,
            antall: antallBilletter,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };

        // Legg til billettobjekt i lista
        billettListe.push(billett);

        // Oppdater visningen av alle billetter
        visAlleBilletter();

        // Tøm input-feltene
        nullstillInputFelter();
    }
}

function visFeilmeldinger(melding) {
    // Vis feilmeldinger ved å oppdatere HTML-elementet for feilmeldinger
    const feilmeldingElement = document.getElementById('feilmeldinger');
    feilmeldingElement.textContent = melding;
}

function nullstillFeilmeldinger() {
    // Nullstill tidligere feilmeldinger ved å tømme innholdet
    const feilmeldingElement = document.getElementById('feilmeldinger');
    feilmeldingElement.textContent = '';
}

function nullstillInputFelter() {
    // Tøm input-feltene
    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefonnr').value = '';
    document.getElementById('epost').value = '';
}

function visAlleBilletter() {
    const billettListeElement = document.getElementById('billettListe');
    billettListeElement.innerHTML = '';

    // Loop gjennom billettListe og legg til hvert billettobjekt i listen
    billettListe.forEach(function (billett) {
        const billettElement = document.createElement('li');
        billettElement.textContent = `Film: ${billett.film}, Antall billetter: ${billett.antall}`;
        billettListeElement.appendChild(billettElement);
    });
}


function slettAlleBilletter() {
    // Tøm billettListe
    billettListe = [];

    // Oppdater visningen av alle billetter
    visAlleBilletter();
}

