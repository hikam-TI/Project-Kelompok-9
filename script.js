// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Order buttons
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        
        const message = `Halo, saya mau pesan ${productName} (Rp ${price}). Bagaimana cara pemesanannya?`;
        const whatsappUrl = `https://wa.me/6282230425429?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    });
});
