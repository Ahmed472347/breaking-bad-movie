const api = "https://www.breakingbadapi.com/api/characters"
async function get(){
    try{
        const response = await fetch(api);
    const data = await response.json();
    getData(data);

    }catch(e){
        console.log(e.message)

    }
}

function getData(data){
    const header = document.querySelector('#header');
    const content = document.querySelector('#content');
    header.innerHTML += `<select class ="form-control" onchange ="dropDown(this.value)">
    <option>please slect</option>
    ${data.map(character => `<option>${character.name}</option>`)}
    </select>`;


   

}

async function dropDown(name){
    if(name !== "please slect"){
        const response = await fetch(`${api}?name=${name}`)
    const data = await response.json();
   content.innerHTML =`<h2>${data[0].name} (${data[0].nickname})</h2>
   <h4>${data[0].category}</h4>
   <img src ="${data[0].img}" width ="300">
   `
    }


}

get();
