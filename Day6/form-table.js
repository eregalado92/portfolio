document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");
    const tableBody= document.getElementById("table-body");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        const age = document.getElementById("age").value.trim()
        const role = document.getElementById("role").value;

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>${role}</td>
        `;

        tableBody.appendChild(row);

        form.reset();
    });
});