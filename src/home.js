export function Home() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class","test");
    newDiv.innerHTML = `
    <div class="central-div">
        <div class="central-title central">
            <h1 class="main-title">Restaurant Page</h1>
        </div>
        <div class="central-description central">
            <p class="standart-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis facere, illo possimus officia culpa ex deleniti ducimus provident libero sunt consequatur hic, similique, commodi iusto natus in sequi fuga ea.</p>
            <p class="person">Borg</p>
        </div>
        <div class="central-horario central">
            <h2>Hours</h2>
            <ul>
                <li><p class="standart-text">Sunday: 8am - 8pm</p></li>
                <li><p class="standart-text">Monday: 6am - 6pm</p></li>
                <li><p class="standart-text">Tuesday: 6am - 6pm</p></li>
                <li><p class="standart-text">Wednesday: 6am - 6pm</p></li>
                <li><p class="standart-text">Thursday: 6am - 10pm</p></li>
                <li><p class="standart-text">Friday: 6am - 10pm</p></li>
                <li><p class="standart-text">Saturday: 8am - 10pm</p></li>
            </ul>
        </div>
        <div class="central-location central">
            <h2>Location</h2>
            <p class="standart-text">123 Forest Drive, Forestville, Maine</p>
        </div>
    </div>
`;

    return newDiv;
}