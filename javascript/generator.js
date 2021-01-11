document.querySelector("#btn-generate").addEventListener("click", generateRandomPhrase);

function generateRandomPhrase() {
    let phrase = getRandomPhrase();

    document.querySelector("#phrase").innerText = phrase;
}

function getRandomPhrase() {
    const beginning = ["Бат", "roockie", "desant",];
    const middle = ["Талбай дээр ","тайзан дээр", "blue sky-d",];
    const end = ["Дугуй унаж байсан", "дуулж байсан", "бүжиглэж байсан",];

    let beginningIndex = parseInt(Math.random() * beginning.length);
    let middleIndex = parseInt(Math.random() * middle.length);
    let endIndex = parseInt(Math.random() * end.length);

    let phrase = "";

    phrase += beginning[beginningIndex];
    phrase += " ";

    phrase += middle[middleIndex];
    phrase += " ";

    phrase += end[endIndex];
    phrase += ".";

    return phrase;
}