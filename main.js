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
    let ricetta;
    try {
        ricetta = await handleJson(`https://dummyjson.com/recipes/${id}`);
    } catch (error) {
        throw new Error(`non posso recuperare la ricetta con id ${id}`)
    }
    if (ricetta.message) {
        throw new Error(ricetta.message)
    }

    let user;
    try {
        user = await handleJson(`https://dummyjson.com/users/${ricetta.userId}`)
    } catch (error) {
        throw new Error(`non posso recuperare le informazioni dell'utente con id ${ricetta.userId}`)
    }
    if (user.message) {
        throw new Error(user.message)
    }

    return user.birthDate
}

(async () => {
    try {
        const recipe = await getChefBirthday(4)
        console.log('data di nascita dello chef :', recipe)
    } catch (error) {
        console.error(error)
    } finally {
        console.log('Fine esercizio')
    }
})();