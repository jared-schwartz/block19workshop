const freelancers = [
    {name: "Alice", occupation: "Writer", price: 30},
    {name:"Bob", occupation: "Teacher", price: 50},
    {name: "Carol", occupation: "Programmer", price: 70},
];

const posNames = [
    "Aron", "Noah", "Sam"
];

const posOccupations = [
    "Welder", "Carpenter", "Truck Driver"
];

function renderFreelancers (){
    const freelancerList = document.getElementById("freelancer-list");
    freelancerList.innerHTML = '';
    const freelancersElements = freelancers.map((frName) => {
        console.log (frName);
        const freelancerElement = document.createElement("tr");
        freelancerElement.innerHTML = `<tr> <td>${frName.name}</td> <td> ${frName.occupation}</td> <td>$ ${frName.price}</td> </tr>`;
        return freelancerElement;
    });
    freelancerList.replaceChildren(...freelancersElements);
}
const addfreelancerIntervalId =setInterval(()=> {
    const name = posNames[Math.floor(Math.random()*posNames.length)];
    const occupation = posOccupations[Math.floor(Math.random()*posOccupations.length)];
    const price = Math.floor(Math.random()*60);
    freelancers.push({name, occupation, price});
    renderFreelancers();
    if (freelancers.length === 15){
        clearInterval(addfreelancerIntervalId);
    };
},1000);

renderFreelancers();
