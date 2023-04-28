/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg-
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg-
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
-Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/





// Creare l’array di oggetti con le informazioni fornite.
const arrTeam = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg",
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg",
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg",
    }
];

console.log(arrTeam);
// const span = document.querySelector('.info');
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// Stampare le stesse informazioni su DOM sottoforma di stringhe

let eleContainer = document.getElementById("contCard");
for (let i = 0; i < arrTeam.length; i++) {
    const eleTeam = arrTeam[i];
    console.log(`${i}: ${eleTeam.firstName} - ${eleTeam.role} - ${eleTeam.photo}`);
    eleContainer.innerHTML += 
    `<div class="card p-2 m-2 col-3">
        <img src="${eleTeam.photo}" class="card-img-top" alt="...">
    <div class="card-body text-center">
        <h5 class="card-title ">${eleTeam.firstName} ${eleTeam.lastName}</h5>
        <h6 class="card-title ">${eleTeam.role}</h6>
    </div>
  </div>  `;

    
};

