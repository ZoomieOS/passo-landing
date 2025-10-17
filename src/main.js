import './style.css';

function initCarousels() {
    document.querySelectorAll('[data-carousel]').forEach((wrap) => {
        const track = wrap.querySelector('[data-carousel-track]');
        const slides = Array.from(track.children);
        const dotsWrap = wrap.querySelector('[data-carousel-dots]');
        const prevBtn = wrap.querySelector('[data-carousel-prev]');
        const nextBtn = wrap.querySelector('[data-carousel-next]');
        let index = 0;

        dotsWrap.innerHTML = slides
            .map((_, i) => `<button type="button" aria-label="Go to slide ${i+1}" data-dot="${i}" class="carousel-dot ${i===0?'bg-white':'bg-white/40'}"></button>`)
            .join('');

        function update() {
            const width = wrap.clientWidth;
            track.style.transform = `translateX(-${index * width}px)`;
            dotsWrap.querySelectorAll('button').forEach((b, i) => {
                b.classList.toggle('bg-white', i === index);
                b.classList.toggle('bg-white/40', i !== index);
            });
        }

        prevBtn?.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; update(); });
        nextBtn?.addEventListener('click', () => { index = (index + 1) % slides.length; update(); });

        dotsWrap.addEventListener('click', (e) => {
            const btn = e.target.closest('button[data-dot]');
            if (!btn) return;
            index = parseInt(btn.dataset.dot, 10);
            update();
        });

        const ro = new ResizeObserver(update);
        ro.observe(wrap);

        update();
    });
}

window.addEventListener('DOMContentLoaded', initCarousels);

(function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('menuClose');
    const backdrop = document.getElementById('menuBackdrop');

    const open = () => {
        menu.setAttribute('aria-hidden', 'false');
        burger.setAttribute('aria-expanded', 'true');
        menu.classList.remove('translate-x-full');
        backdrop.classList.remove('pointer-events-none');
        backdrop.classList.add('opacity-100');
        document.body.classList.add('overflow-hidden');
    };

    const close = () => {
        menu.setAttribute('aria-hidden', 'true');
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.add('translate-x-full');
        backdrop.classList.add('pointer-events-none');
        backdrop.classList.remove('opacity-100');
        document.body.classList.remove('overflow-hidden');
    };

    burger?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    backdrop?.addEventListener('click', close);
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();