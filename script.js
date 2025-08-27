// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const menu = document.getElementById('mobile-menu');
            if (menu) {
                menu.classList.add('hidden');
            }
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

// Testimonial Section
const apiUrl = 'http://localhost:3000/testimonials'; // Change with your API URL

// Fetch testimonials from the API
async function fetchTestimonials() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const testimonials = await response.json();
        displayTestimonials(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
    }
}

// Display testimonials
function displayTestimonials(testimonials) {
    const testimonialList = document.getElementById('testimonial-list');
    testimonialList.innerHTML = ''; // Clear list before adding

    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'bg-amber-50 p-6 rounded-lg shadow-md';
        testimonialDiv.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-user text-amber-600"></i>
                </div>
                <div>
                    <h4 class="font-semibold">${testimonial.name}</h4>
                    <p class="text-gray-500 text-sm">Pelanggan Baru</p>
                </div>
            </div>
            <p class="text-gray-600">${testimonial.comment}</p>
            <div class="flex mt-3">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p class="text-gray-500 text-xs mt-2">${testimonial.date}</p>
            ${isOwner ? `<button class="text-red-500 mt-2" onclick="deleteTestimonial(${index})">Hapus</button>` : ''}
        `;
        testimonialList.appendChild(testimonialDiv);
    });
}

// Handle form submission for testimonials
document.getElementById('testimonial-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    const now = new Date();
    const date = now.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const testimonial = { name, comment, rating, date };

    // Send testimonial to API
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testimonial),
        });

        if (!response.ok) throw new Error('Network response was not ok');
        fetchTestimonials(); // Retrieve latest testimonials
        this.reset(); // Reset form
    } catch (error) {
        console.error('Error submitting testimonial:', error);
    }
});

// Function to delete testimonial
async function deleteTestimonial(index) {
    try {
        await fetch(`${apiUrl}/${index}`, {
            method: 'DELETE',
        });
        fetchTestimonials(); // Retrieve latest testimonials
    } catch (error) {
        console.error('Error deleting testimonial:', error);
    }
}

// Fetch testimonials when the page loads
fetchTestimonials();
