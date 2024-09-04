const contact = {
        contacts: [
            {
                name: "John Smith",
                ocupation: "Owner",
                contactNumber:"555-555-5554",
                email:"notaemail@email.com"
            },
            {
                name: "Juan Perez",
                ocupation: "Chef",
                contactNumber:"555-555-5555",
                email:"notaemail@email.com"
            },
            {
                name: "Josefa",
                ocupation: "Manager",
                contactNumber:"555-555-5556",
                email:"notaemail@email.com"
            },
]}

export function Contact(){

    const itemsHTML = contact.contacts.map(item => `
        <div class="item-div">
            <h3 class="item-title">${item.name}</h3>
            <p class="item-description">${item.ocupation}</p>
            <p class="item-description">${item.contactNumber}</p>
            <p class="item-description">${item.email}</p>
        </div>
    `).join('');

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class","test");
    newDiv.innerHTML = `
    <div class="central-div">
        <div class="central-title central">
            <h1 class="main-title">Contact</h1>
        </div>
        ${itemsHTML}
    </div>
`;

    return newDiv;
}