const billettRegister = [];

function visBillettRegister() {
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Email</th>" +
        "</tr>";
    for (let p of billettRegister) {
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefonnr + "</td><td>" + p.email + "</td>";
        ut += "</tr>";
    }
    $("#billettRegister").html(ut);
}

function validerEmail(email) {
    // sjekker om email har @
    return email.includes('@');
}

function validerTelefonnr(telefonnr) {
    // sjekker om nummer har bare nummer, og 8 tegn
    return /^\d{8}$/.test(telefonnr);
}

function kjopBilletter() {
    // Fjerner error meldinger før neste kjøp av billett
    $('span.error-message').remove();

    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const email = $("#email").val();

    if (film === '' || antall === '' || fornavn === '' || etternavn === '' || telefonnr === '' || email === '') {
        const errorMelding = '<span class="error-message" style="color: red;">Du må fylle inn felt</span>';
        if (film === '') {
            $('#film').after(errorMelding);
        }
        if (antall === '') {
            $('#antall').after(errorMelding)
        }
        if (fornavn === '') {
            $('#fornavn').after(errorMelding)
        }
        if (etternavn === '') {
            $('#etternavn').after(errorMelding)
        }
        if (telefonnr === '') {
            $('#telefonnr').after(errorMelding)
        } else if (!validerTelefonnr(telefonnr)) {
            $('#telefonnr').after('<span class="error-message" style="color: red;"> Putt inn et korrekt nummer</span>');
        }
        if (email === '') {
            $('#email').after(errorMelding)
        } else if (!validerEmail(email)) {
            $('#email').after('<span class="error-message" style="color: red;">Putt inn korrekt email</span>');
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


