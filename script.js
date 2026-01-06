// Component Information Database
const componentInfo = {
    cpu: {
        title: "CPU - Central Processing Unit",
        image: "images/CPU-removebg-preview.png",
        description: "The CPU is the brain of the computer. It performs most of the processing inside a computer. It interprets and executes most of the commands from the computer's hardware and software. The CPU is responsible for running the operating system and all applications, performing calculations, and managing data flow between all parts of the computer."
    },
    ram: {
        title: "RAM - Random Access Memory",
        image: "images/RAM-removebg-preview.png",
        description: "RAM is the computer's short-term memory. It temporarily stores data that the CPU needs to access quickly. Unlike storage drives, RAM is volatile, meaning it loses its contents when the computer is turned off. More RAM allows your computer to run more applications simultaneously and improves overall system performance."
    },
    rom: {
        title: "ROM - Read-Only Memory",
        image: "images/ROM-removebg-preview.png",
        description: "ROM is a type of non-volatile memory that stores permanent or semi-permanent data. In computers, ROM typically contains the BIOS (Basic Input/Output System) firmware that initializes hardware during the boot process. Unlike RAM, the data in ROM cannot be easily modified or erased."
    },
    cmos: {
        title: "CMOS - Complementary Metal-Oxide-Semiconductor",
        image: "images/CMOS-removebg-preview.png",
        description: "CMOS is a small amount of memory on the motherboard that stores BIOS settings and system configuration information. It's powered by a small battery when the computer is turned off, allowing it to maintain settings like the system time, boot order, and hardware configuration. The CMOS battery typically lasts for several years."
    },
    storage: {
        title: "Storage Drive",
        image: "images/storage_drive-removebg-preview.png",
        description: "Storage drives provide long-term data storage for the operating system, applications, and user files. Unlike RAM, storage is non-volatile and retains data when the computer is turned off. Modern storage drives include SSDs (Solid State Drives) which are faster and more durable than traditional HDDs (Hard Disk Drives)."
    },
    power: {
        title: "Power Unit",
        image: "images/power_unit-removebg-preview.png",
        description: "The Power Supply Unit (PSU) converts alternating current (AC) power from the wall outlet into direct current (DC) power that computer components can use. It provides power to all motherboard components, drives, and peripherals. The PSU must supply stable, clean power at the correct voltages to ensure reliable system operation."
    }
};

// DOM Elements
const toggleBtn = document.getElementById('toggle-btn');
const motherboardView = document.getElementById('motherboard-view');
const biosView = document.getElementById('bios-view');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');
const components = document.querySelectorAll('.component');

// State Management
let currentView = 'motherboard';
let isModalOpen = false;

// Toggle between Motherboard and BIOS views
function toggleView() {
    if (currentView === 'motherboard') {
        motherboardView.classList.remove('active');
        biosView.classList.add('active');
        toggleBtn.textContent = 'Switch to Motherboard';
        currentView = 'bios';
        
        // Add BIOS-specific keyboard functionality
        document.addEventListener('keydown', handleBIOSKeys);
    } else {
        biosView.classList.remove('active');
        motherboardView.classList.add('active');
        toggleBtn.textContent = 'Switch to BIOS';
        currentView = 'motherboard';
        
        // Remove BIOS-specific keyboard functionality
        document.removeEventListener('keydown', handleBIOSKeys);
    }
}

// Handle BIOS keyboard shortcuts
function handleBIOSKeys(event) {
    if (currentView !== 'bios') return;
    
    switch(event.key.toLowerCase()) {
        case 'escape':
            toggleView();
            break;
        case 'f10':
            event.preventDefault();
            showNotification('Settings saved and exiting BIOS...');
            setTimeout(() => toggleView(), 1500);
            break;
        case 'enter':
            event.preventDefault();
            showNotification('Advanced Settings - Not implemented in demo');
            break;
    }
}

// Show modal with component information
function showModal(componentType) {
    const info = componentInfo[componentType];
    if (!info) return;
    
    modalTitle.textContent = info.title;
    modalImage.src = info.image;
    modalImage.alt = info.title;
    modalDescription.textContent = info.description;
    
    modal.style.display = 'block';
    isModalOpen = true;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    isModalOpen = false;
    document.body.style.overflow = 'auto';
}

// Show notification (for BIOS interactions)
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 255, 0, 0.9);
        color: black;
        padding: 20px 40px;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        z-index: 3000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// Event Listeners
toggleBtn.addEventListener('click', toggleView);

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isModalOpen) {
        closeModal();
    }
});

// Component click handlers
components.forEach(component => {
    component.addEventListener('click', (event) => {
        event.stopPropagation();
        const componentType = component.getAttribute('data-component');
        showModal(componentType);
    });
    
    // Add hover sound effect (visual feedback)
    component.addEventListener('mouseenter', () => {
        component.style.transform = component.style.transform.includes('scale(1.1)') 
            ? component.style.transform 
            : `${component.style.transform} scale(1.05)`;
    });
    
    component.addEventListener('mouseleave', () => {
        const originalTransform = component.style.transform.replace(' scale(1.05)', '');
        component.style.transform = originalTransform;
    });
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Build-A-Board Interactive Computer Anatomy loaded successfully!');
    
    // Add loading animation
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: white;
        font-size: 24px;
        font-weight: bold;
    `;
    loadingScreen.innerHTML = 'Loading Build-A-Board...';
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after a short delay
    setTimeout(() => {
        loadingScreen.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, 500);
    }, 1000);
});

// Add accessibility features
components.forEach(component => {
    component.setAttribute('tabindex', '0');
    component.setAttribute('role', 'button');
    component.setAttribute('aria-label', `Learn about ${component.querySelector('span').textContent}`);
    
    component.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const componentType = component.getAttribute('data-component');
            showModal(componentType);
        }
    });
});

// Add keyboard navigation for toggle button
toggleBtn.setAttribute('tabindex', '0');
toggleBtn.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleView();
    }
});