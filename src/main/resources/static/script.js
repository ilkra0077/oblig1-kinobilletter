// Array for å lagre billettobjekter
var billettListe = [];

function kjopBillett() {
    // Nullstill tidligere feilmeldinger
    nullstillFeilmeldinger();

    // Hent verdier fra input-feltene
    var valgtFilm = document.getElementById('film').value;
    var antallBilletter = document.getElementById('antall').value;
    var fornavn = document.getElementById('fornavn').value;
    var etternavn = document.getElementById('etternavn').value;
    var telefonnr = document.getElementById('telefonnr').value;
    var epost = document.getElementById('epost').value;

    // Sjekk om alle nødvendige felt er fylt ut
    var feilmelding = '';

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
        var billett = {
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
    var feilmeldingElement = document.getElementById('feilmeldinger');
    feilmeldingElement.textContent = melding;
}

function nullstillFeilmeldinger() {
    // Nullstill tidligere feilmeldinger ved å tømme innholdet
    var feilmeldingElement = document.getElementById('feilmeldinger');
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
    var billettListeElement = document.getElementById('billettListe');
    billettListeElement.innerHTML = '';

    // Loop gjennom billettListe og legg til hvert billettobjekt i listen
    billettListe.forEach(function (billett, index) {
        var billettElement = document.createElement('li');
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
