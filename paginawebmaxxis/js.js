// Esperar a que cargue toda la página
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Detectar horario nocturno para resaltar urgencia 24h
    const badge = document.querySelector('.badge');
    const horaActual = new Date().getHours();

    // Si son entre las 10 PM (22) y las 6 AM (6)
    if (horaActual >= 22 || horaActual < 6) {
        badge.textContent = '🌙 GUARDIA NOCTURNA ACTIVA • UNIDAD MÓVIL 24/7';
        badge.style.backgroundColor = 'rgba(14, 165, 233, 0.25)';
        badge.style.color = '#e0f2fe';
        badge.style.borderColor = '#38bdf8';
    }

    // 2. Desplazamiento suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Animación sutil al hacer scroll para las tarjetas de servicios
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});
/* Evita que cualquier elemento cause scroll horizontal en celulares */
html,
body {
    overflow-x: hidden;
    width: 100%;
}

/* Barra de navegación adaptable */
.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    max-width: 100%;
    padding-left: 16px;
    padding-right: max(16px, calc(50% - 540px));
}

/* Tablets y pantallas medianas */
@media (max-width: 900px) {
    .nav-content {
        padding-left: 14px;
        padding-right: 16px;
    }

    .auto-specs-grid,
    .location-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .steps-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
}

/* Teléfonos móviles */
@media (max-width: 768px) {
    .logo-img {
        height: 36px;
        max-width: 150px;
    }

    .btn-nav {
        padding: 8px 12px;
        font-size: 0.82rem;
        white-space: nowrap; /* Evita que el texto del botón se parta en dos líneas */
    }

    .hero {
        padding: 68px 0;
    }

    .hero h1 {
        font-size: 1.95rem;
        line-height: 1.2;
    }

    .hero p {
        font-size: 1rem;
        margin-bottom: 24px;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: stretch;
        padding: 0 8px;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        text-align: center;
        padding: 14px 20px;
        font-size: 1rem;
    }

    .services,
    .auto-specs,
    .reviews,
    .location {
        padding: 56px 0;
    }

    .process-steps {
        padding: 64px 0;
    }

    .services h2,
    .auto-text h2,
    .reviews-header h2,
    .location-info h2 {
        font-size: 1.65rem;
    }

    .process-steps h2 {
        font-size: 1.75rem;
        margin-bottom: 36px;
    }

    .step-circle {
        width: 78px;
        height: 78px;
        font-size: 1.85rem;
    }

    .steps-cta {
        flex-direction: column;
        align-items: stretch;
        padding: 0 8px;
    }

    .btn-steps-secondary,
    .btn-steps-whatsapp {
        width: 100%;
        text-align: center;
    }

    /* Botón flotante cómodo sin tapar contenido en pantallas pequeñas */
    .whatsapp-float {
        bottom: 16px;
        right: 16px;
        padding: 11px 16px;
        font-size: 0.9rem;
    }
}

/* Teléfonos muy compactos (hasta 400px de ancho) */
@media (max-width: 400px) {
    .logo-img {
        height: 30px;
        max-width: 120px;
    }

    .btn-nav {
        padding: 7px 10px;
        font-size: 0.76rem;
    }

    .hero h1 {
        font-size: 1.7rem;
    }
}