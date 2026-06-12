document.addEventListener('DOMContentLoaded', () => {
    // 1. Referencias de los elementos del DOM
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // 2. Verificar si ya existe una preferencia guardada en el Web Storage (localStorage)
    const currentTheme = localStorage.getItem('theme');

    // Si existe un tema guardado, se lo aplicamos directamente al elemento HTML
    if (currentTheme) {
        htmlElement.setAttribute('data-theme', currentTheme);
        
        // Actualizamos el texto del botón según corresponda
        if (currentTheme === 'dark') {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Oscuro';
        }
    }

    // 3. Escuchador de eventos para el clic del botón
    themeToggleBtn.addEventListener('click', () => {
        // Obtenemos el tema actual inspeccionando el atributo personalizado del HTML
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        
        // Variable para almacenar el nuevo estado
        let newTheme;

        if (isDark) {
            // Si está en oscuro, pasamos a claro
            htmlElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = 'Modo Oscuro';
            newTheme = 'light';
        } else {
            // Si está en claro, pasamos a oscuro
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = 'Modo Claro';
            newTheme = 'dark';
        }

        // 4. PERSISTENCIA OBLIGATORIA: Guardamos la nueva elección en el Web Storage
        localStorage.setItem('theme', newTheme);
    });

    // 5. Validación e interacción del Formulario de Contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue por defecto
            
            // Extraemos los datos simulando una captura técnica
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const organizacion = document.getElementById('organizacion').value;

            // Mostramos un feedback accesible e interactivo en consola o alerta
            alert(`¡Solicitud recibida con éxito!\n\nGestor: ${nombre}\nEntidad: ${organizacion}\nNos comunicaremos al correo: ${email}`);
            
            // Limpiamos el formulario
            contactForm.reset();
        });
    }
});
