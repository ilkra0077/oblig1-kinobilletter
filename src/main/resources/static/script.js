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

function kjopBilletter() {
    // fjerne error meldinger
    $('span.error-message').remove();

    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const email = $("#email").val();

    if (film === '' || antall === '' || fornavn === '' || etternavn === '' || telefonnr === '' || email === '') {
        const errorMelding = '<span class="error-message" style="color: red;"> This field is required.</span>';
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
        }
        if (email === '') {
            $('#email').after(errorMelding)
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

        // nullstill inputboksene
        $('input').val('');
        visBillettRegister();
    }
}

// slett billetter
function slettBilletter() {
    billettRegister.length = 0;
    visBillettRegister();
}

