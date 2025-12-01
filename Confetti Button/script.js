const button = document.querySelector('.confetti-button');

button.addEventListener('click', () => {
    // Prevent clicking multiple times while loading
    if (button.classList.contains('loading') || button.classList.contains('success')) {
        return;
    }

    // 1. Start the loading state (shrink, show dots)
    button.classList.add('loading');
    
    // Simulate a network request (e.g., 2 seconds)
    setTimeout(() => {
        // 2. End loading state
        button.classList.remove('loading');
        
        // 3. Start success state (show checkmark, change color)
        button.classList.add('success');
        
        // FIRE THE CONFETTI EFFECT 💥
        confetti({
            particleCount: 150, // Number of pieces
            spread: 90,         // How wide the spray is
            origin: { y: 0.6 } // Adjust Y to fire from button height
        });

        // 4. Reset button after another 2.5 seconds
        setTimeout(() => {
            button.classList.remove('success');
        }, 2500); 

    }, 2000); 
});