// Button Function:
let btn = document.getElementById("shorten");
btn.addEventListener('click', short);

async function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");
    console.log(longURL);

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;

    console.log(data.result.short_link2);
}

// Copy Button Function:
let newURL = document.getElementById("shorturl");
let copyButton = document.getElementById("copyBtn");

copyButton.onclick = () => {
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
    alert("Copied the URL: " + newURL.value);
}

