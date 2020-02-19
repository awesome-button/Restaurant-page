import {pageLoader} from './page-loader';
import {about} from './about';
import {contacts} from './contacts';
import {menu} from './menu';

(function initialize() {
    document.addEventListener('DOMContentLoaded', () => {
        pageLoader();
        let content = document.querySelector('.content');
        let buttons = Array.from(content.firstChild.children);
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                console.log('clicked');
                if (Array.from(content.children).length > 1) {
                    content.removeChild(content.childNodes[1]);
                }
                content.classList.add('background');
                changePage(e)});
        });
    });

})();

function changePage(e) {
    switch (e.target.className) {
        case 'about tab':
            about();
            break;
        case 'contacts tab':
            contacts();
            break;
        case 'menu tab':
            menu();
            break;
    }
}

