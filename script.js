// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await response.json();
//   console.log(data);
//   let html = "";
//   for (let i = 0; i < data.length; i++) {
//     html += `
//         <div class="user">
//         <h2 class="username">User name: ${data[i].name}</h2>
//         <p>Phone NO:${data[i].phone}</p>
//         <p>Address: ${data[i].address.city}, ${data[i].address.street}, ${data[i].address.suite}</p>
//         <p>Email: ${data[i].email}</p>
//         <p>Website: ${data[i].website}</p>
//         <div class="company">
//             <h2>Company Name: ${data[i].company.name}</h2>
//             <p>Job: ${data[i].company.bs}</p>
//         </div>
//         </div>
//         `;
//   }
//   document.querySelector(".data-results").innerHTML = html;
// }

document.querySelector(".btn-primary").addEventListener("click", function () {
  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    data.forEach(function (cur, i, arr) {
      let html = `
      <div class="user">
        <h2 class="username">User name: ${cur.name}</h2>
        <p>Phone NO: ${cur.phone}</p>
        <p>Address: ${cur.address.city}, ${cur.address.suite}, ${cur.address.street}</p>
        <p>Email: ${cur.email}</p>
        <p>Website: ${cur.website}</p>
        <div class="company">
          <h2>Company Name: ${cur.company.name}</h2>
          <p>Job: ${cur.company.bs}</p>
        </div>
      </div>
      `;
      console.log(cur);
      document
        .querySelector(".data-results")
        .insertAdjacentHTML("afterbegin", html);
    });
  }
  fetchUsers();
});
