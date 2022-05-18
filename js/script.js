url = "https://breakingbadapi.com/api/characters/6";

const detailsContainer = document.querySelector(".details");

async function getDetails () {

    detailsContainer.innerHTML = [];

    try{
        response = await fetch(url);

        result = await response.json();

        console.log(result[0]);

        detailsContainer.innerHTML = `<h1 class="name">${result[0].name}</h1>
                                        <div class="image" style="background-image: url(${result[0].img})"></div>
                                        <div class="status">${result[0].status}</div>`;

    }

    catch(error) {
        console.log("error occured");
        detailsContainer.innerHTML = `<p>An error has ocurred</p>`;
    }
}

getDetails();