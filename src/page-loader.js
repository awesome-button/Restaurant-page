function pageLoader() {
const content = document.getElementById('content');

const container = document.createElement('nav');
container.setAttribute("class", "nav-flex");

// const image = document.createElement('img');
// image.setAttribute("src", "img/head.jpg");
// image.setAttribute("class", "image");

const menu = document.createElement('div');
menu.setAttribute("class", "menu tab");
const menuLink = document.createElement('a');
menuLink.setAttribute("href", "#");
menuLink.innerHTML = "Menu";
menu.appendChild(menuLink);



const about = document.createElement('div');
about.setAttribute("class", "about tab");
const aboutLink = document.createElement('a');
aboutLink.setAttribute("href", "#");
aboutLink.innerHTML = "About";
about.appendChild(aboutLink);

const contacts = document.createElement('div');
contacts.setAttribute("class", "contacts tab");
const contactsLink = document.createElement('a');
contactsLink.setAttribute("href", "#");
contactsLink.innerHTML = "Contacts";
contacts.appendChild(contactsLink);

// content.appendChild(image);
container.appendChild(menu);
container.appendChild(about);
container.appendChild(contacts);
content.appendChild(container);

}

export {pageLoader}

