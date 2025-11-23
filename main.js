 // --- 1. HERO SLIDER LOGIC ---
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const indicators = document.querySelectorAll('.hero-indicator');

        function goToSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            indicators.forEach(i => i.classList.remove('active'));
            
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }

        // Auto Play Hero
        setInterval(() => {
            let next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        }, 5000);


        // --- 2. UNIVERSAL SLIDER SCROLL (for catSlider, slider-1, slider-2, prodSlider2) ---
        function scrollSlider(containerId, direction) {
            const container = document.getElementById(containerId);
            const scrollAmount = 300;
            if (direction === 1) {
                container.scrollLeft += scrollAmount;
            } else {
                container.scrollLeft -= scrollAmount;
            }
        }
        
        // --- 3. COUNTDOWN TIMERS (Handles Multiple) ---
        // Function to start a timer for specific element IDs
        function startTimer(hoursId, minutesId, secondsId, durationInSeconds) {
            let timeLeft = durationInSeconds;
            
            const hEl = document.getElementById(hoursId);
            const mEl = document.getElementById(minutesId);
            const sEl = document.getElementById(secondsId);

            setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    const h = Math.floor(timeLeft / 3600);
                    const m = Math.floor((timeLeft % 3600) / 60);
                    const s = timeLeft % 60;

                    const format = (value) => value < 10 ? '0' + value : value;
                    
                    if(hEl) hEl.innerText = format(h);
                    if(mEl) mEl.innerText = format(m);
                    if(sEl) sEl.innerText = format(s);
                }
            }, 1000);
        }

        // Start Timer 1 (Flash Deals - 2 hours)
        startTimer('hours-1', 'minutes-1', 'seconds-1', 7200);
        // Start Timer 2 (Hot Deals - 5 hours)
        startTimer('hours-2', 'minutes-2', 'seconds-2', 18000);
        // Start Timer 3 (Best Selling - 3 hours)
        startTimer('hours2', 'minutes2', 'seconds2', 10800); 


        // --- 4. PRODUCT IMAGE SWITCHER (Hoodie) ---
        function updateHighlight(imgElement) {
            const mainImg = document.getElementById('mainHighlightImg');
            mainImg.src = imgElement.src.replace("w=100", "w=500");
            
            document.querySelectorAll('.thumb-img').forEach(img => img.classList.remove('active'));
            imgElement.classList.add('active');
        }