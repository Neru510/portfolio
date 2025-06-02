let skills = [];
let colors = [
    "#c23d3d", // rouge neutre
    "#d08a3c", // orange neutre
    "#bfae4f", // jaune neutre
    "#5d8a66", // vert neutre
    "#4a6fa5", // bleu neutre
    "#8a6fa1"  // violet neutre
];
let description = [
    "Réaliser un développement d’application",
    "Optimiser des applications",
    "Administrer des systèmes informatiques communicants complexes",
    "Gérer des données de l’information",
    "Conduire un projet",
    "Collaborer au sein d’une équipe informatique"
]

for (let i = 1; i < 7; i++) {
    skills.push(
        {
            id : `${i}`,
            nom : `Compétence ${i}`,
            img : `/img/projects/skills/skill${i}.png`,
            color : `${colors[i-1]}`,
            descr : `${description[i-1]}`
        }
    )
}

export default skills;