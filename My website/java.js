
    const switchBtn = document.getElementById('lightSwitch');
    const tubelight = document.getElementById('tubelight');
    const content = document.querySelector('.mega-selector');

    switchBtn.addEventListener('click', () => {
        
        tubelight.classList.toggle('glow');
        content.classList.toggle('lights-on');
        if (tubelight.classList.contains('glow')) {
            switchBtn.textContent = 'Turn Off ';
        } else {
            switchBtn.textContent = 'Click Me';
        }
    });
        
       

       
