document.addEventListener('mousemove', (e) => {
    const mouseEffect = document.querySelector('.mouse-effect');
    mouseEffect.style.left = `${e.clientX - 100}px`; // Ajusta el centrado
    mouseEffect.style.top = `${e.clientY - 100}px`; // Ajusta el centrado
});

// Crear el efecto de enfoque
const mouseEffect = document.createElement('div');
mouseEffect.className = 'mouse-effect';
document.body.appendChild(mouseEffect);

// Crear figuras interactivas
function createShapes() {
    for (let i = 0; i < 8; i++) { // Se reducen las figuras debido a su tamaño más grande
        let shape;
        const shapeType = Math.random() > 0.5 ? 'circle' : 'triangle'; // Seleccionar círculo o triángulo

        if (shapeType === 'circle') {
            shape = document.createElement('div');
            shape.className = 'shape-circle';
            shape.style.width = `${Math.random() * 300 + 150}px`; // Círculos mucho más grandes
            shape.style.height = shape.style.width; // Mantener forma circular
        } else {
            shape = document.createElement('div');
            shape.className = 'shape-triangle';
        }

        shape.style.left = `${Math.random() * window.innerWidth}px`;
        shape.style.top = `${Math.random() * window.innerHeight}px`;
        shape.style.transition = 'all 0.3s';

        // Añadir animación a las figuras
        shape.style.animationDuration = `${Math.random() * 2 + 2}s`;
        shape.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.querySelector('.abstract-shapes').appendChild(shape);
    }
}

createShapes();
