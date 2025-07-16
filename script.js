// Warte bis die Seite geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Hole die Elemente aus dem HTML
    const greeting = document.getElementById('greeting');
    const button = document.getElementById('changeText');
    
    // Array mit verschiedenen Begrüßungen
    const greetings = [
        'Hello World!',
        'Hallo Welt!',
        'Bonjour le Monde!',
        '¡Hola Mundo!',
        'Ciao Mondo!',
        'Привет мир!',
        'こんにちは世界！'
    ];
    
    let currentIndex = 0;
    
    // Event Listener für den Button
    button.addEventListener('click', function() {
        // Nächste Begrüßung auswählen
        currentIndex = (currentIndex + 1) % greetings.length;
        
        // Text ändern
        greeting.textContent = greetings[currentIndex];
        
        // Visuellen Effekt hinzufügen
        greeting.classList.add('changed');
        
        // Effekt nach kurzer Zeit entfernen
        setTimeout(() => {
            greeting.classList.remove('changed');
        }, 300);
    });
    
    // Begrüßung in der Konsole ausgeben
    console.log('Hello World Website geladen!');
});