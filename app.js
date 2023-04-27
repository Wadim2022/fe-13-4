const url = "https://jsonplaceholder.typicode.com/users";

async function fetchAsyncTodos(){
    console.log('Start');
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    const userId1 = 10;
    let text = '';
    for(let i = 0; i < userId1; i++){

        text +=`
       <ul>
       <li>ID:${data[i].id}</li>
       <li>Name:${data[i].name}</li>
       <li>User Name:${data[i].username}</li>
       <li>Email:${data[i].email}</li>
       </ul>
        `
    }
    document.getElementById('ulist').innerHTML = text;
}


fetchAsyncTodos()