        // Preloader Logic
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });

        // Initialize AOS Animations
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        // Navbar & Scroll Top Logic
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                scrollTopBtn.style.display = 'flex';
            } else {
                navbar.classList.remove('scrolled');
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // Chatbot Toggle Logic
        function toggleChat() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
        }

        // Professional Console Log
        console.log("%c TAMYEZ %c System Initialized Successfully ", "background: #0B6BA0; color: #fff; padding: 2px 5px; border-radius: 3px 0 0 3px;", "background: #1A1A1A; color: #fff; padding: 2px 5px; border-radius: 0 3px 3px 0;");