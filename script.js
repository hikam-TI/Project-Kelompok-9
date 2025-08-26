document.getElementById("orderButton").onclick = function() {
    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    
    if (name === "" || quantity === "") {
        document.getElementById("orderResult").innerHTML = "Silakan isi semua field!";
    } else {
        var total = quantity * 10000; // Menghitung total harga untuk Tahu Walik Original
        document.getElementById("orderResult").innerHTML = "Terima kasih, " + name + "! Anda telah memesan " + quantity + " Tahu Walik. Total: Rp " + total;
    }
};

document.getElementById("sendFeedback").onclick = function() {
    var feedback = document.getElementById("feedbackMessage").value;
    
    if (feedback === "") {
        document.getElementById("feedbackResult").innerHTML = "Silakan tulis pesan dan kesan Anda!";
    } else {
        document.getElementById("feedbackResult").innerHTML = "Terima kasih atas pesan dan kesan Anda!";
        document.getElementById("feedbackMessage").value = ""; // Clear the textarea
    }
};
document.getElementById("orderButton").onclick = function() {
    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    
    if (name === "" || quantity === "") {
        document.getElementById("orderResult").innerHTML = "Silakan isi semua field!";
    } else {
        var total = quantity * 10000; // Menghitung total harga untuk Tahu Walik Original
        document.getElementById("orderResult").innerHTML = "Terima kasih, " + name + "! Anda telah memesan " + quantity + " Tahu Walik. Total: Rp " + total;
    }
};

document.getElementById("sendFeedback").onclick = function() {
    var feedback = document.getElementById("feedbackMessage").value;
    
    if (feedback === "") {
        document.getElementById("feedbackResult").innerHTML = "Silakan tulis pesan dan kesan Anda!";
    } else {
        document.getElementById("feedbackResult").innerHTML = "Terima kasih atas pesan dan kesan Anda!";
        document.getElementById("feedbackMessage").value = ""; // Clear the textarea
    }
};
