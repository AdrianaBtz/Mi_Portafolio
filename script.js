document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar EmailJS con tu Public Key
    emailjs.init("gD2RHeWDhkTmEqkAq");

    // 2. Cerrar menú hamburguesa automáticamente al hacer clic en un enlace (en móviles)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuToggle) menuToggle.checked = false;
            });
        });
    }

    // 3. Envío e interacción del Formulario de Contacto
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            const originalText = btnSubmit ? btnSubmit.textContent : 'Enviar Mensaje';

            if (btnSubmit) {
                btnSubmit.textContent = 'Enviando...';
                btnSubmit.disabled = true;
            }

            const serviceID = 'service_gn4d5va';
            const templateID = 'template_y4zwosp';

            emailjs.sendForm(serviceID, templateID, contactForm)
                .then(() => {
                    alert('¡Gracias! Tu mensaje ha sido enviado correctamente a Adriana.');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('Error al enviar el correo:', error);
                    alert('Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.');
                })
                .finally(() => {
                    if (btnSubmit) {
                        btnSubmit.textContent = originalText;
                        btnSubmit.disabled = false;
                    }
                });
        });
    }

    // 4. Lógica para botones de desplazamiento del carrusel
    const carousel = document.getElementById('projectsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        const getScrollAmount = () => {
            const card = carousel.querySelector('.card');
            return card ? card.offsetWidth + 24 : 320;
        };

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }
});