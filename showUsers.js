// let show = document.getElementById("list")
        
function showUsers(ul) {
    console.log("clicked")
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((req) => req.json())
        .then((res) => {
            console.log("res", res)

            let listUser = "";

            for(let i = 0; i < res.length; i++) {
                listUser += `<li>${res[i].name}</li>`
            }
            
            console.log("list user: ", listUser);

            ul.innerHTML = listUser
        })
}
