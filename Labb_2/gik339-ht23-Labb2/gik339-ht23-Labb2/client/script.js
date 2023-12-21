const url = "http://localhost:3000/users";

fetch(url)
    .then((response) => response.json())
    .then((users) => {
        const ul = document.createElement("ul");
        ul.classList.add("userList");
        const div = document.querySelector(".container");
        div.insertAdjacentElement("beforeend", ul);

        users.forEach(user => {
            const li = document.createElement("li");
            li.style.backgroundColor = user.color;
            const firstName = user.firstName;
            const lastName = user.lastName;
            const userName = user.username;
            const br = `<br/>`;
            const html = `<li>Name: ${firstName} ${lastName} ${br}Username: ${userName}</>`;
            ul.insertAdjacentElement('beforeend',li);
            li.insertAdjacentHTML('beforeend', html);
        })
        
    });
 
