document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cubesContainer = document.getElementById('cubesContainer');
    
    // Create multiple floating cubes
    function createCubes() {
        const cubeCount = window.innerWidth < 768 ? 15 : 30;
        
        for (let i = 0; i < cubeCount; i++) {
            const cube = document.createElement('div');
            cube.className = 'cube';
            cube.style.left = `${Math.random() * 100}vw`;
            cube.style.top = `${Math.random() * 100}vh`;
            cube.style.animationDuration = `${15 + Math.random() * 15}s`;
            cube.style.animationDelay = `${Math.random() * 5}s`;
            
            // Create cube faces
            const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
            faces.forEach(face => {
                const faceElement = document.createElement('div');
                faceElement.className = `face ${face}`;
                cube.appendChild(faceElement);
            });
            
            cubesContainer.appendChild(cube);
        }
    }
    
    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        if (username && password) {
            // Add animation before redirect
            document.querySelector('.login-container').style.animation = 'fadeIn 0.5s ease reverse forwards';
            setTimeout(() => {
                window.open('https://www.instagram.com/devcubetech/', '_blank');
            }, 500);
        } else {
            // Shake animation for empty fields
            const inputs = document.querySelectorAll('.input-box input');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.animation = 'shake 0.5s';
                    setTimeout(() => {
                        input.style.animation = '';
                    }, 500);
                }
            });
            alert('Please fill in both fields before proceeding.');
        }
    });
    
    // Add shake animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        cubesContainer.innerHTML = '';
        createCubes();
    });
    
    // Initialize cubes
    createCubes();
});