function getHero(){
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
        .then((response) => {
            getName(response.data.members)
        }).catch((error) =>{
            console.log(error);
        });
}

function getSquad(){
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
        .then((response) => {
            getSquadDetail(response.data)
        }).catch((error) =>{
            console.log(error);
        });
}

const heroList = document.getElementById("superHero");

function getName(heroes) {
    if(heroList.innerHTML.length===0){
    for(let hero of heroes) {
       const newHero = document.createElement("p");
       newHero.innerText = "Name: " + hero.name + "\n Age: " + 
       hero.age + "\n Secret Identity: " + hero.secretIdentity +
       "\n Hero Powers: " + hero.powers.join(", ");
       heroList.appendChild(newHero);
        }
    }
}

const squadDetails = document.getElementById("squad");
function getSquadDetail(detail){
     if(squadDetails.innerHTML.length===0){
        const newDetail = document.createElement("p");
        newDetail.innerText = "Squad Name: " + detail.squadName +
        "\n Home Town: " + detail.homeTown + "\n Formed: " +
        detail.formed + "\n Secret Base: " + detail.secretBase + 
        "\n Active: " + detail.active + "\n Total Members: " +
        detail.members.length;
        squadDetails.appendChild(newDetail);
    }
}

