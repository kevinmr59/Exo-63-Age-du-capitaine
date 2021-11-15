let i=1;

while (i <= 100) {
    if (i <= 18) {
        document.getElementById('para').innerHTML += "<br><br>" + i +" ans" +" , le capitaine est jeune !";

    } else if ((i > 18) && (i < 50)) {
        document.getElementById('para').innerHTML += "<br><br>" + i +" ans" +" , le capitaine n'est pas très vieux";

    } else{
        document.getElementById('para').innerHTML += "<br><br>" + i +" ans" +" , le capitaine est vieux !";
    }
    i++;
}
