//  let url = fetch('https://swapi.dev/api/people')
//     .then(response => response.json())
//     .then(data => console.log(data["results"]));

async function getUsers() {
    let url = 'https://swapi.dev/api/people';
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach((user, index) => {
        // let username = ${user.name};
        // let url2 = 'https://swapi.dev/api/people/'
        // console.log("URL 2", url2);
        let htmlSegment = `<div class="user" style="border-bottom: solid 2px skyblue;">
                <span style="padding-right: 20px; border-right: solid 2px skyblue;">${index}</span>
                <span style="padding-right: 20px; border-right: solid 2px skyblue;">${user.name}</span>
                <span style="padding-right: 20px; border-right: solid 2px skyblue;">${user.height}</span>
                <span style="padding-right: 20px; border-right: solid 2px skyblue;">${user.mass}</span>`;

        user.films.forEach(film => {
            let film_list = [];
            film_list.push(film) 
            let htmlSeg = `<span style="padding-right: 10px; text-decoration:blue underline;">${film_list}</span>`;
            htmlSegment += htmlSeg;
        });

        html += htmlSegment + `</div><br/>`;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();