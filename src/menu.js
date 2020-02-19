function menu() {
    let types = [
        {Name: "Padana", Ingredients: "Paprika, smoked salami, mozarella, and parmesan", Price: "450 rubles"},
        {Name: "Piccanta", Ingredients: "Tomato, spicy salami, mozarella, and parsley", Price: "450 rubles"},
        {Name: "Margerita", Ingredients: "Tomato sauce, mozarella, oregano, and fresh tomatoes", Price: "400 rubles"},
        {Name: "Carbonara", Ingredients: "Tomato sauce, mozzarella, parmesan, eggs, and bacon", Price: "550 rubles"},
        {Name: "Bufalina", Ingredients: "Tomato sauce, Buffalo mozzarella, basil, and oregano", Price: "600 rubles"},
        {Name: "Braccio di Ferro", Ingredients: "Mozzarella, red onions, ricotta cheese, and parmesan", Price: "500 rubles"}
    ];

    let content = document.querySelector('.content');
    let pizzas = document.createElement('div');
    pizzas.setAttribute("class", "pizzas-flex");
    let heading = document.createElement('h1');
    heading.innerText = "Our pizzas";
    pizzas.appendChild(heading);

    for (let i = 0; i <= 5; i++) {
        let item = document.createElement('div');
        item.setAttribute("class", "item");

        let h2 = document.createElement('h2');
        h2.innerText = types[i].Name;
        item.appendChild(h2);

        let image = document.createElement('img');
        image.setAttribute('src', `img/pizza${i+1}.png`);
        item.appendChild(image);
        
        let p = document.createElement('p');
        p.innerText = `Ingredients: ${types[i].Ingredients}\nPrice: ${types[i].Price}`;
        item.appendChild(p);
       
        pizzas.appendChild(item); 
    }
        
    content.appendChild(pizzas);
}
export { menu }