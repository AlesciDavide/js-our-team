const sectionEl = document.querySelector('section#container');

const ourTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: './img/barbara-ramos-graphic-designer.jpg',
    }
]


/* for(let i = 0; i < ourTeam.length; i++){
    let singoloMembro = ourTeam[i];
    for (const key in ourTeam[i]) {
        console.log(singoloMembro[key]);
        let pEl = document.createElement('p');
        pEl.append(singoloMembro[key]);
        sectionEl.appendChild(pEl);
    }
} */

for(let i = 0; i < ourTeam.length; i++){
    let singoloMembro = ourTeam[i];
    for (const key in ourTeam[i]) {
        if(key !== 'foto'){
            let pEl = document.createElement('p');
            pEl.append(singoloMembro[key]);
            sectionEl.appendChild(pEl);
        }else{
            let imgEl = document.createElement('img');
            imgEl.src = singoloMembro[key];
            sectionEl.appendChild(imgEl);
        }
    }
}
