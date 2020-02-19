function pageLoader() {
    const content = document.querySelector('.content');

    const container = document.createElement('nav');
    container.setAttribute("class", "container");

    const tabs = ['Menu', 'About', 'Contacts'];

    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.innerText = `${tab}`;
        button.setAttribute("class", `${tab.toLowerCase()} tab`);
        container.appendChild(button);
    });

    content.appendChild(container);
}
export {pageLoader}

