document.addEventListener('DOMContentLoaded', function() {
    // GSAP animations
    gsap.from(".introduction h2", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".introduction p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from(".features .feature-card", { duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 1 });

    gsap.from(".timeline .timeline-item", {
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
        },
        y: 50,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".statistics .stat-card", {
        scrollTrigger: {
            trigger: ".statistics",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
        },
        y: 50,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".testimonials .testimonial", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
        },
        y: 50,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".call-to-action h2", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".call-to-action p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from(".call-to-action .btn-primary", { duration: 1, y: 50, opacity: 0, delay: 1 });

    // Countdown timer
    const countdownDate = new Date("Mar 10, 2025 00:00:00").getTime();
    const timer = document.getElementById('timer');

    setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            timer.innerHTML = "EXPIRED";
        }
    }, 1000);
});