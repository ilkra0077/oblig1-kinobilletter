function kjopBilletter(){
    const billett ={
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        email : $("#email").val(),
    }
    $.post("/lagre", billett, function (){
        hentAlle();
    });

    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#email").val("");
}

function hentAlle(){
    $.get("/hentAlle", function (billetter){
        formaterData(billetter);
    });
}

function formaterData(billetter) {
    let ut = "<table class='table table-striped'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Email</th>" +
        "</tr>";

    for (const enBillett of billetter) {
        ut += "<tr>";
        ut += "<td>" + enBillett.film + "</td><td>" + enBillett.antall + "</td><td>" + enBillett.fornavn + "</td><td>" + enBillett.etternavn + "</td><td>" + enBillett.telefonnr + "</td><td>" + enBillett.email + "</td>";
        ut += "</tr>";
    }
    ut += "</table>"; 
    $("#billettRegister").html(ut);
}

function slettBilletter() {
    $.get("/slettAlle", function(){
        hentAlle();
    });
}



