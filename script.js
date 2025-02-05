function calculateDiscount() {
    let price = parseFloat(document.getElementById("price").value);
    let discount = parseFloat(document.getElementById("discount").value);
    let currency = document.getElementById("currency").value;
    
    if (isNaN(price) || isNaN(discount)) {
        alert("Enter valid numbers!");
        return;
    }

    if (discount < 0 || discount > 100) {
        alert("Discount must be between 0 and 100!");
        return;
    }

    let discountedPrice = price - (price * (discount / 100));
    let currencySymbol = (currency === "usd") ? "$" : "Rp";
    let formattedPrice = (currency === "usd") ? discountedPrice.toFixed(2) : discountedPrice.toLocaleString("id-ID");

    let resultText = `Original Price: ${currencySymbol}${price.toLocaleString("id-ID")}\nDiscount: ${discount}%\nFinal Price: ${currencySymbol}${formattedPrice}`;

    showDialog(resultText);
}

function showDialog(text) {
    let dialog = document.getElementById("dialog");
    let overlay = document.getElementById("overlay");
    let resultTextElement = document.getElementById("resultText");

    resultTextElement.innerHTML = "";
    dialog.style.display = "block";
    overlay.style.display = "block";

    // Typewriter Effect
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            resultTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }

    setTimeout(typeWriter, 700); // Delay after fade-in
}

// Close Dialog
function closeDialog() {
    document.getElementById("dialog").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
