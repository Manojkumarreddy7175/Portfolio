// ===========================
// 3D Avatar Animation (Waving Robot)
// ===========================
function init3DAvatar() {
    const container = document.getElementById('avatar-container');
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Materials
    const mainColor = 0xFF3333; // Accent Color
    const secondaryColor = 0x333333; // Dark Grey
    const glowColor = 0x00FFFF; // Cyan for eyes

    const bodyMaterial = new THREE.MeshStandardMaterial({ 
        color: secondaryColor, 
        roughness: 0.3, 
        metalness: 0.8 
    });
    
    const accentMaterial = new THREE.MeshStandardMaterial({ 
        color: mainColor, 
        roughness: 0.2, 
        metalness: 0.5,
        emissive: mainColor,
        emissiveIntensity: 0.2
    });

    const eyeMaterial = new THREE.MeshBasicMaterial({ color: glowColor });

    // Group for the whole robot
    const robot = new THREE.Group();
    scene.add(robot);

    // --- Body Parts ---

    // Head
    const headGeo = new THREE.BoxGeometry(1.2, 1, 1);
    const head = new THREE.Mesh(headGeo, bodyMaterial);
    head.position.y = 1.8;
    robot.add(head);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMaterial);
    leftEye.position.set(-0.3, 1.85, 0.5);
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMaterial);
    rightEye.position.set(0.3, 1.85, 0.5);
    robot.add(rightEye);

    // Antenna
    const antStemGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.5);
    const antStem = new THREE.Mesh(antStemGeo, accentMaterial);
    antStem.position.set(0, 2.5, 0);
    robot.add(antStem);

    const antBulbGeo = new THREE.SphereGeometry(0.15);
    const antBulb = new THREE.Mesh(antBulbGeo, eyeMaterial);
    antBulb.position.set(0, 2.8, 0);
    robot.add(antBulb);

    // Torso
    const torsoGeo = new THREE.CylinderGeometry(0.8, 0.6, 1.5, 8);
    const torso = new THREE.Mesh(torsoGeo, bodyMaterial);
    torso.position.y = 0.5;
    robot.add(torso);

    // Core (Glowing Chest Piece)
    const coreGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
    const core = new THREE.Mesh(coreGeo, accentMaterial);
    core.rotation.x = Math.PI / 2;
    core.position.set(0, 0.5, 0.55); // Slightly protruding
    robot.add(core);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.2);
    
    // Left Arm (Static)
    const leftArm = new THREE.Mesh(armGeo, bodyMaterial);
    leftArm.position.set(-1, 0.5, 0);
    leftArm.rotation.z = 0.2;
    robot.add(leftArm);

    // Right Arm (Waving) - Needs a pivot point at the shoulder
    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(1, 0.8, 0); // Shoulder position
    robot.add(rightArmPivot);

    const rightArm = new THREE.Mesh(armGeo, bodyMaterial);
    rightArm.position.set(0, -0.6, 0); // Offset so pivot is at top
    rightArmPivot.add(rightArm);

    // Hand (Sphere)
    const handGeo = new THREE.SphereGeometry(0.25);
    const rightHand = new THREE.Mesh(handGeo, accentMaterial);
    rightHand.position.set(0, -1.3, 0);
    rightArmPivot.add(rightHand);

    const leftHand = new THREE.Mesh(handGeo, accentMaterial);
    leftHand.position.set(0, -0.7, 0);
    leftArm.add(leftHand);

    // Base/Hover Effect
    const ringGeo = new THREE.TorusGeometry(1, 0.05, 16, 100);
    const ring = new THREE.Mesh(ringGeo, accentMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1;
    robot.add(ring);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(mainColor, 1, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // Camera Position
    camera.position.z = 5;
    camera.position.y = 1;

    // --- Animation ---
    let time = 0;

    function animate() {
        requestAnimationFrame(animate);
        time += 0.05;

        // Floating Motion
        robot.position.y = Math.sin(time * 0.5) * 0.1;

        // Waving Motion (Right Arm)
        // Rotate around Z axis: Start at roughly PI (up) and wave back and forth
        // Base angle: Math.PI (arm up)
        // Wave: +/- 0.5 radians
        rightArmPivot.rotation.z = Math.PI - 0.5 + Math.sin(time * 3) * 0.5;

        // Subtle Head Bob
        head.rotation.y = Math.sin(time * 0.5) * 0.1;

        // Ring Rotation
        ring.rotation.z -= 0.02;
        ring.scale.setScalar(1 + Math.sin(time * 2) * 0.05);

        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        if (!container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}

// Initialize star when page loads
window.addEventListener('load', () => {
    init3DAvatar(); 
    // createFloatingParticles(); // Removed for minimal theme
    initTypewriter();
    initHackerEffect();
});

// ===========================
// Typewriter Effect
// ===========================
function initTypewriter() {
    const element = document.querySelector('.typewriter-text');
    if (!element) return;

    const text = element.innerText;
    element.innerText = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(type, 20); // Typing speed
        }
    }
    type();
}

// ===========================
// Hacker Text Scramble Effect
// ===========================
function initHackerEffect() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

    document.querySelectorAll('.glitch').forEach(element => {
        element.addEventListener('mouseover', event => {
            let iteration = 0;
            const originalText = element.dataset.text;
            
            if (!originalText) return;

            clearInterval(element.interval);
            
            element.interval = setInterval(() => {
                element.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");
                
                if(iteration >= originalText.length){ 
                    clearInterval(element.interval);
                }
                
                iteration += 1 / 3;
            }, 30);
        });
    });
}

// ===========================
// Floating Particles Effect
// ===========================
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: var(--accent-color);
            border-radius: 50%;
            left: ${startX}%;
            bottom: -10px;
            opacity: 0;
            animation: floatUp ${duration}s ease-in ${delay}s infinite;
            pointer-events: none;
            z-index: 0;
            box-shadow: 0 0 15px var(--accent-dim), 0 0 30px var(--accent-dim);
        `;
        
        hero.appendChild(particle);
    }

    // Add CSS animation for particles
    if (!document.getElementById('particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.innerHTML = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) translateX(0) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.6;
                }
                50% {
                    transform: translateY(-50vh) translateX(${Math.random() * 40 - 20}px) scale(1);
                    opacity: 0.4;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 80 - 40}px) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===========================
// Dark Mode Toggle
// ===========================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update icon
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateOnScroll = document.querySelectorAll('.project-card, .skill-category, .about-content, .contact-content');

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Get the submit button
    const submitBtn = contactForm.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    
    // Change button to loading state
    submitBtn.textContent = 'Opening Email Client...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // Create mailto link with form data
    const mailtoLink = `mailto:manojkumarreddy7175@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    setTimeout(() => {
        window.location.href = mailtoLink;
        
        // Show success message
        showSuccessMessage(`Thank you, ${name}! Opening your email client...`);
        
        // Reset form and button
        setTimeout(() => {
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }, 2000);
    }, 500);
});

// Success message function
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
        color: #0a0e27;
        padding: 1.25rem 2rem;
        border-radius: 10px;
        font-weight: 600;
        font-size: 1rem;
        box-shadow: 0 10px 40px rgba(0, 255, 136, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
        border: 2px solid rgba(0, 255, 136, 0.5);
    `;
    
    document.body.appendChild(successDiv);
    
    // Add animations
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove after animation
    setTimeout(() => {
        successDiv.remove();
        style.remove();
    }, 3000);
}

// ===========================
// Typing Effect for Hero Title - DISABLED
// (Causes HTML tags to display as text)
// ===========================
// Typing effect removed to prevent HTML rendering issues

// ===========================
// Project Cards Hover Effect & Click Handler
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    // Add pointer cursor
    card.style.cursor = 'pointer';
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Make entire card clickable to open GitHub repo
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking the GitHub button directly
        if (e.target.closest('.overlay-btn')) return;
        
        const githubLink = this.querySelector('.overlay-btn');
        if (githubLink) {
            window.open(githubLink.href, '_blank');
        }
    });
});

// ===========================
// Skills Progress Animation
// ===========================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
});

// ===========================
// Scroll to Top Button (Optional Enhancement)
// ===========================
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.setAttribute('id', 'scrollToTop');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #c42b36ff 0%, #220202ff 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(152, 22, 44, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
};

// Initialize scroll to top button
createScrollToTopButton();

// ===========================
// Preloader (Optional)
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Dynamic Year in Footer
// ===========================
const updateFooterYear = () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(/\d{4}/, currentYear);
    }
};

updateFooterYear();

// ===========================
// Particle Background Effect (Optional Enhancement)
// ===========================
const createParticles = () => {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(99, 102, 241, 0.5);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
        `;
        hero.appendChild(particle);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
};

// Optionally enable particles
// createParticles();

console.log('Portfolio website loaded successfully! 🚀');
