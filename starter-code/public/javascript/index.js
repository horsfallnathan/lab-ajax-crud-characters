const charactersAPI = new APIHandler('http://localhost:1229');

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = function(event) {
        const data = charactersAPI
            .getFullList()
            .then(data => {
                let finalHTML = '';
                data.forEach(character => {
                    const { name, occupation, cartoon, weapon, id } = character;
                    finalHTML += `<div class="character-info">
                  <div class="name">Character Name: ${name}</div>
                  <div class="occupation">Character Occupation: ${occupation}</div>
                  <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
                  <div class="weapon">Character Weapon: ${weapon}</div>
                  </div>`;
                });
                document.getElementsByClassName('characters-container')[0].innerHTML = finalHTML;
                // console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    document.getElementById('fetch-one').onclick = function() {
        const id = document.getElementById('character-id').value;
        charactersAPI
            .getOneRegister(id)
            .then(data => {
                const { name, occupation, cartoon, weapon, id } = data;
                const finalHTML = `<div class="character-info">
            <div class="name">Character Name: ${name}</div>
            <div class="occupation">Character Occupation: ${occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <div class="weapon">Character Weapon: ${weapon}</div>
            </div>`;
                document.getElementsByClassName('characters-container')[0].innerHTML = finalHTML;
                // console.log(data);
                document.getElementById('character-id').value = '';
            })
            .catch(err => {
                console.log(err);
            });
    };

    document.getElementById('delete-one').onclick = function() {
        const id = document.getElementById('character-id-delete').value;
        charactersAPI
            .deleteOneRegister(id)
            .then(data => {
                const { name, occupation, cartoon, weapon, id } = data;
                document.getElementsByClassName(
                    'characters-container'
                )[0].innerHTML = `Character ${name} successfully deleted!`;
                // console.log(data);
                document.getElementById('character-id-delete').value = '';
            })
            .catch(err => {
                console.log(err);
            });
    };

    document.getElementById('edit-character-form').onsubmit = function() {};

    document.getElementById('new-character-form').onsubmit = function() {};
});
