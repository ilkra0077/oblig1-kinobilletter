const billettRegister = [];

function visBillettRegister() {
    // Skriv ut
    let ut = "<table class='table table-striped'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Email</th>" +
        "</tr>";

    for (let p of billettRegister) {
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefonnr + "</td><td>" + p.email + "</td>";
        ut += "</tr>";
    }

    $("#billettRegister").html(ut);
}

function kjopBilletter() {
    // Fjerner error-meldinger før neste kjøp av billett
    $('span.error-message').remove();
    $('span.error-message-email').remove();
    $('span.error-message-tlf').remove();
    $("#error-container").html("");

    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const email = $("#email").val();

    const emailValidering = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const erEmailValid = emailValidering.test(email);

    const telefonnrValidering = /^\+?(\d{2,4}\s?[\s.-]?)?\d{2,12}$/;
    const erTelefonnrValid = telefonnrValidering.test(telefonnr);

    if (film === '' || antall === '' || fornavn === '' || etternavn === '' || telefonnr === '' || !erTelefonnrValid || email === '' || !erEmailValid) {
        const errorMelding = '<span class="error-message" style="color:red;">Ugyldig, fyll inn felt.</span>';
        const errorMeldingEmail = '<span class="error-message-email" style="color:red;">Ugyldig email. </span>';
        const errorMeldingTlf = '<span class="error-message-tlf" style="color:red;">Ugyldig telefonnr. </span>';
        if (film === '') {
            $('#film').after(errorMelding);
        }
        if (antall === '') {
            $('#antall').after(errorMelding);
        }
        if (fornavn === '') {
            $('#fornavn').after(errorMelding);
        }
        if (etternavn === '') {
            $('#etternavn').after(errorMelding);
        }
        if (telefonnr === '' ||!erTelefonnrValid) {
            $('#telefonnr').after(errorMeldingTlf);
        }
        if (email === '' || !erEmailValid) {
            $('#email').after(errorMeldingEmail);
        }
    } else {
        const billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            email: email
        };
        billettRegister.push(billett);

        // Nullstill inputboksene
        $('input').val('');
        visBillettRegister();
    }
}

// Sletter billettene
function slettBilletter() {
    billettRegister.length = 0;
    visBillettRegister();
}