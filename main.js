//In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). 
// Questa funzione accetta un id di una ricetta e deve:
//Recuperare la ricetta da https://dummyjson.com/recipes/{id}
//Estrarre la proprietà userId dalla ricetta
//Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
//Restituire la data di nascita dello chef

async function handleJson(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getChefBirthday(id) {
    const ricetta = await handleJson(`https://dummyjson.com/recipes/${id}`);
    const user = await handleJson(`https://dummyjson.com/users/${ricetta.userId}`)
    return { ...ricetta, user }
}

(async () => {
    const recipe = await getChefBirthday(1)
    console.log('Ricetta e chef :', recipe)
    console.log('Data di naschita dello chef:', recipe.user.birthDate)
})();