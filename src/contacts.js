function contacts() {
    let content = document.querySelector('.content');
    let box = document.createElement('div');
    box.setAttribute("class", "box-contacts");

    let heading = document.createElement('h1');
    heading.innerText = "Contact us";

    let text = document.createElement('p');
    text.setAttribute("class", "text-field");
    text.innerText = 
    `Our address: Lenina 26, Tomsk
    Phone number: 8 (923) 465 32 22`;

    let image = document.createElement('img');
    image.setAttribute('src', 'img/pizzeria.jpg');

    box.appendChild(heading);
    box.appendChild(text);
    box.appendChild(image);
    content.appendChild(box);
}

export { contacts }