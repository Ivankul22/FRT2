document.addEventListener('DOMContentLoaded', function () {
    const languageLinks = document.querySelectorAll('.lang');
    const translatableElements = document.querySelectorAll('[data-en]');

    languageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    function switchLanguage(lang) {
        translatableElements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                element.textContent = translation;
            }
        });
    }
});
