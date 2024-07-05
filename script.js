

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces del navbar
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Función para realizar el desplazamiento suave
    function smoothScroll(target, offset) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    // Agrega un evento de clic a cada enlace del navbar
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');

            // Ajusta los desplazamientos según el enlace
            if (target === '#sobre-mi') {
                smoothScroll(target, 150); // Desplazamiento extra para 'Sobre Mi'
            } else {
                smoothScroll(target, 80); // Desplazamiento general para los demás enlaces
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".rollercoaster-title");
    const text = title.textContent;
    title.innerHTML = text.split("").map((char, i) => `<span style="--i: ${i}">${char}</span>`).join("");
});

document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".texto_m");
    const text = title.textContent;
    title.innerHTML = text.split("").map((char, i) => `<span style="--i: ${i}">${char}</span>`).join("");
});
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".texto_m2");
    const text = title.textContent;
    title.innerHTML = text.split("").map((char, i) => `<span style="--i: ${i}">${char}</span>`).join("");
});
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".texto_m3");
    const text = title.textContent;
    title.innerHTML = text.split("").map((char, i) => `<span style="--i: ${i}">${char}</span>`).join("");
});
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".texto_m4");
    const text = title.textContent;
    title.innerHTML = text.split("").map((char, i) => `<span style="--i: ${i}">${char}</span>`).join("");
});
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".texto_m5");
    const text = title.textContent;
    title.innerHTML = text.split("").map((char, i) => `<span style="--i: ${i}">${char}</span>`).join("");
});
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".texto_m6");
    const text = title.textContent;
    title.innerHTML = text.split("").map((char, i) => `<span style="--i: ${i}">${char}</span>`).join("");
});


document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu li");
    const coso = document.querySelector(".coso");
    const header = document.querySelector(".header");
    const elementsToAnimate = document.querySelectorAll(".hidden");

    

    // Remover blur despues de 0.5 segundos
    setTimeout(() => {
        document.body.classList.remove("blurred");
        document.getElementById('backgroundCanvas').style.filter = 'none';
    }, 500);

    // Añade interactividad al menú
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.getAttribute('data-content');
            coso.innerHTML = `<p>${content}</p>`;
            coso.style.maxHeight = coso.scrollHeight + 'px';
            coso.style.padding = '15px';
            coso.style.opacity = 1;
        });
    });
    
    
    // Show elements with fade-in effect
    setTimeout(() => {
        elementsToAnimate.forEach(element => {
            element.classList.remove("hidden");
            element.classList.add("visible");
        });
    }, 500);
    
    

    function adjustCosoSize(cosoElement) {
        cosoElement.style.width = 'auto';
        cosoElement.style.height = 'auto';
        cosoElement.style.width = `${cosoElement.scrollWidth}px`;
        cosoElement.style.height = `${cosoElement.scrollHeight}px`;
    }

    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    class Shape {
        constructor(x, y, dx, dy, size, color, rotationSpeed, type) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.baseColor = color;
            this.rotation = 0;
            this.rotationSpeed = rotationSpeed;
            this.type = type;
            this.colorShift = Math.random() * Math.PI * 2; // Desplazamiento aleatorio inicial
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            // Dibujar la figura
            ctx.fillStyle = this.color;
            ctx.strokeStyle = 'black';
            ctx.lineWidth = this.type === 'x' ? 8 : 3; // Grosor de línea más grueso para "x"

            if (this.type === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            } else if (this.type === 'square') {
                ctx.beginPath();
                ctx.rect(-this.size, -this.size, this.size * 2, this.size * 2);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            } else if (this.type === 'x') {
                ctx.beginPath();
                ctx.moveTo(-this.size, -this.size);
                ctx.lineTo(this.size, this.size);
                ctx.moveTo(this.size, -this.size);
                ctx.lineTo(-this.size, this.size);
                ctx.closePath();
                ctx.stroke();
            }
            ctx.restore();
        }

        update() {
            this.x += this.dx;
            this.y += this.dy;
            this.rotation += this.rotationSpeed;

            if (this.x + this.size > width || this.x - this.size < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.size > height || this.y - this.size < 0) {
                this.dy = -this.dy;
            }

            for (let i = 0; i < shapes.length; i++) {
                if (this !== shapes[i] && this.isColliding(shapes[i])) {
                    this.dx = -this.dx;
                    this.dy = -this.dy;
                    shapes[i].dx = -shapes[i].dx;
                    shapes[i].dy = -shapes[i].dy;
                }
            }

            this.updateColor();
            this.draw();
        }

        isColliding(other) {
            const dx = this.x - other.x;
            const dy = this.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < this.size + other.size;
        }

        updateColor() {
            this.colorShift += 0.02;
            const r = Math.sin(this.colorShift) * 127 + 128;
            const g = Math.sin(this.colorShift + 2 * Math.PI / 3) * 127 + 128;
            const b = Math.sin(this.colorShift + 4 * Math.PI / 3) * 127 + 128;
            this.color = `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
        }
    }

    const shapes = [];

    for (let i = 0; i < 15; i++) {
        const size = Math.random() * 15 + 20;
        const x = Math.random() * (width - size * 2) + size;
        const y = Math.random() * (height - size * 2) + size;
        const dx = (Math.random() - 0.5) * 3;
        const dy = (Math.random() - 0.5) * 3;
        const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        const rotationSpeed = (Math.random() - 0.5) * 0.05;
        const type = ['circle', 'square', 'x'][Math.floor(Math.random() * 3)];
        shapes.push(new Shape(x, y, dx, dy, size, color, rotationSpeed, type));
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (const shape of shapes) {
            shape.update();
        }
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Intersection Observer for header animation when it appears in the viewport
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the header is visible
    };

    function headerAnimation(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.style.animation = "slideIn 1s forwards, bounceIn 1s forwards";
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(headerAnimation, observerOptions);
    observer.observe(header);
});
