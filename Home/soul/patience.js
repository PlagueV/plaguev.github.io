document.addEventListener('DOMContentLoaded', function() {
    const soul = document.getElementById('soul');
    const textContainer = document.getElementById('text-container');
    const buttonsContainer = document.getElementById('buttons-container');
    const replayBtn = document.getElementById('replay-btn');
    const continueBtn = document.getElementById('continue-btn');
    
    let timeoutId;
    let hasBeenClicked = false;
    
    // Fade in the soul
    setTimeout(() => {
        soul.style.opacity = '1';
        soul.classList.add('light-blue');
        startFloatingAnimation();
        startInstructionTimeout();
    }, 1000);
    
    // Make soul clickable
    soul.addEventListener('click', handleSoulClick);
    
    function startFloatingAnimation() {
        soul.style.animation = 'float 6s ease-in-out infinite';
    }
    
    function startInstructionTimeout() {
        timeoutId = setTimeout(() => {
            if (!hasBeenClicked) {
                textContainer.style.display = 'block';
                typeText('Tap/click the heart to continue...', () => {});
            }
        }, 6000);
    }
    
    function handleSoulClick() {
        hasBeenClicked = true;
        clearTimeout(timeoutId);
        
        textContainer.style.display = 'none';
        textContainer.innerHTML = '';
        
        // Stop floating and move to center top
        soul.style.animation = 'none';
        soul.style.transition = 'all 1s ease-out';
        soul.style.transform = 'translateY(-150px)';
        soul.classList.add('glowing');
        
        // Show text with proper pacing
        setTimeout(() => {
            typeText('In Undertale, the Light Blue soul represents "Patience".', () => {
                setTimeout(() => {
                    typeText('Your students chose this for you because...', () => {
                        setTimeout(() => {
                            typeText('...throughout your time together,', () => {
                                setTimeout(() => {
                                    typeText('you\'ve shown remarkable Patience.', () => {
                                        buttonsContainer.classList.remove('hidden');
                                    });
                                }, 800);
                            });
                        }, 800);
                    });
                }, 1000);
            });
        }, 500);
    }
    
    function typeText(message, callback) {
        textContainer.innerHTML = '';
        textContainer.style.display = 'block';
        let i = 0;
        const typingSpeed = 30;
        
        const soulNames = {
            'Patience': 'light-blue',
            'Determination': 'red',
            'Integrity': 'blue',
            'Bravery': 'orange',
            'Perseverance': 'purple',
            'Kindness': 'green',
            'Justice': 'yellow',
            'Hope': 'light-blue'
        };

        function typeWriter() {
            if (i < message.length) {
                // Check for soul names
                let soulFound = false;
                for (const soulName in soulNames) {
                    if (message.startsWith(soulName, i)) {
                        const span = document.createElement('span');
                        span.className = `text-glow-${soulNames[soulName]}`;
                        span.textContent = soulName;
                        textContainer.appendChild(span);
                        i += soulName.length;
                        soulFound = true;
                        break;
                    }
                }
                
                if (!soulFound) {
                    const char = message.charAt(i);
                    textContainer.appendChild(document.createTextNode(char));
                    i++;
                    textContainer.scrollTop = textContainer.scrollHeight;
                }
                
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(callback, 1000);
            }
        }
        
        typeWriter();
    }
    
    replayBtn.addEventListener('click', () => {
        // Reset everything
        hasBeenClicked = false;
        soul.style.opacity = '0';
        soul.style.animation = '';
        soul.style.transform = '';
        soul.classList.remove('glowing');
        textContainer.style.display = 'none';
        textContainer.innerHTML = '';
        buttonsContainer.classList.add('hidden');
        
        // Restart animation
        setTimeout(() => {
            soul.style.opacity = '1';
            startFloatingAnimation();
            startInstructionTimeout();
        }, 500);
    });
    
    continueBtn.addEventListener('click', () => {
        textContainer.innerHTML = '';
        buttonsContainer.classList.add('hidden');
        
        typeText('Your students also associate you with these souls:', () => {
            setTimeout(() => {
                const soulsContainer = document.createElement('div');
                soulsContainer.className = 'souls-container';
                textContainer.appendChild(soulsContainer);
                
                const souls = [
                    { color: 'red', name: 'Determination', 
                      desc: 'Your Determination inspires us to never give up' },
                    { color: 'blue', name: 'Integrity', 
                      desc: 'Your Integrity guides us to do what\'s right' },
                    { color: 'orange', name: 'Bravery', 
                      desc: 'Your Bravery gives us courage to face challenges' },
                    { color: 'purple', name: 'Perseverance', 
                      desc: 'Your Perseverance shows us how to keep trying' },
                    { color: 'green', name: 'Kindness', 
                      desc: 'Your Kindness makes learning welcoming' },
                    { color: 'yellow', name: 'Justice', 
                      desc: 'Your Justice ensures everyone is treated fairly' }
                ];
                
                souls.forEach(soulData => {
                    const soulItem = document.createElement('div');
                    soulItem.className = 'soul-item';
                    
                    const heart = document.createElement('div');
                    heart.className = `heart ${soulData.color} glowing`;
                    
                    const soulName = document.createElement('div');
                    soulName.className = 'soul-name';
                    soulName.innerHTML = soulData.name.replace(
                        soulData.name, 
                        `<span class="text-glow-${soulData.color}">${soulData.name}</span>`
                    );
                    
                    const soulDesc = document.createElement('div');
                    soulDesc.className = 'soul-desc';
                    soulDesc.textContent = soulData.desc;
                    
                    soulItem.appendChild(heart);
                    soulItem.appendChild(soulName);
                    soulItem.appendChild(soulDesc);
                    soulsContainer.appendChild(soulItem);
                });
                
                setTimeout(() => {
                    const thankYou = document.createElement('div');
                    thankYou.className = 'thank-you';
                    thankYou.innerHTML = 
                        'Thank you for guiding us through our journey!<br>' + 
                        '- The Senior Dragons';
                    textContainer.appendChild(thankYou);
                }, 1500);
            }, 1000);
        });
    });
});