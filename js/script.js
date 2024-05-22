const sectionEl = document.querySelector('section#container');

/* array con oggetti testuali */
const ourTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
]

for(let i = 0; i < ourTeam.length; i++){
    /* creo la card con l'immagine vuota */
    let divCardEl = document.createElement('div');
    divCardEl.classList.add('card');
    sectionEl.appendChild(divCardEl);
    let imgEl = document.createElement('img');
    divCardEl.appendChild(imgEl);
    let singoloMembro = ourTeam[i];
    /* forin per ciclare gli oggetti testuali */
    for (const key in ourTeam[i]) {
        /* condizione per inserire la foto nell'immagine creata precedentemente 
        e creo i tag p per i testi */
        if(key !== 'foto'){
            let pEl = document.createElement('p');
            pEl.append(singoloMembro[key]);
            divCardEl.appendChild(pEl);
        }else{
            let path = `./img/${singoloMembro[key]}`;
            imgEl.src = path;
        }
    }
}