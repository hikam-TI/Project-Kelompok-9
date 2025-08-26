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
