const section = document.getElementById('covers');

        
        function startAnimation() {
            const ul = document.querySelector(' .covers-list');
            ul.style.animationPlayState = 'running';
        }

        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    startAnimation();
                }
            });
        });

observer.observe(section);
        


