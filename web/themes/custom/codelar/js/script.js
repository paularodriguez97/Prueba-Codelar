
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.glide.carrousel');
    elements.forEach((element, index) => {
        const className = `card-${index + 1}`;
        element.classList.add(className);
    });

    const glide = document.querySelectorAll('.glide.carrousel');
    glide.forEach((e, index) => {
        const className = `card-${index + 1}`;
        const glideElement = `.glide.${className}`;

        let perViewValue = 3;
        let autoplayValue = 1500;
        let autoplayEnabled = false;

        const autoplay_element = e.parentElement.querySelector('.field--name-field-autoplay .field__item');
        if (autoplay_element) {
            if (autoplay_element.textContent == 'Activado') { autoplayEnabled = true;}
        }

        const perView_element = e.parentElement.querySelector('.field--name-field-number-of-cards-to-slider');
        if (perView_element) {
            perViewValue = parseInt(perView_element.textContent.trim(), 10);
        }

        const autoplay_value_element = e.parentElement.querySelector('.field--name-field-tiempo-transicion-slider .field__item');
        if (autoplay_value_element) {
            autoplayValue = autoplay_value_element.getAttribute('content') * 1000;
        }

        const glideConfig = {
            type: 'carousel',
            perView: perViewValue,
            focusAt: 'center',
            hoverpause: true,
            controls: true,
            breakpoints: {
                900: {
                    perView: 2,
                    focusAt: 0,
                },
                480: {
                    perView: 1,
                    focusAt: 'center',
                }
            }
        };

        if (autoplayEnabled) {
            glideConfig.autoplay = autoplayValue;
        }

        const glideCard = new Glide(glideElement, glideConfig);
        glideCard.mount();
    });

    var glide_card = new Glide('.glide-cards', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        autoplay: 1500,
        hoverpause: true,
        controls: true,
        breakpoints: {
            900: {
                perView: 2,
                focusAt: 0,
            },
            480: {
                perView: 1,
                focusAt: 'center',
            }
        }
    })

    glide_card.mount();
  });

