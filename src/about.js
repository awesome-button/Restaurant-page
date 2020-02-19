function about() {
    let content = document.querySelector('.content');

    let box = document.createElement('div');
    box.setAttribute("class","box-about");

    let heading = document.createElement('h1');
    heading.innerText = "A bit about us";

    let text = document.createElement('p');
    text.setAttribute("class", "text-field");
    text.innerText = `Since 1994, Ristorante Da Angelo has been 
    bringing authentic Italian food to Tomsk.
    \b\r
    We offer the menu of tried and true favourites, 
    mainly from the southern regions of Italy, 
    where pizza originated and where pasta is king.
    In true Italian fashion just about everything 
    is freshly made on the premises.
    \b\r
    And if you want to know why the gnocchi, 
    in particular, tastes so exceptional — 
    it’s because Angelo’s and Marco’s mothers, 
    Nicolina and Rita, come in each and every 
    day to make it.
    `;

    let image = document.createElement('img');
    image.setAttribute('src', 'img/team.jpg');

    box.appendChild(heading);
    box.appendChild(text);
    box.appendChild(image);
    content.appendChild(box);
}

export {about}