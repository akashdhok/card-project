function generate()
{
    let img = document.querySelector("#img").value
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let number = document.querySelector("#number").value
    let designation = document.querySelector("#designation").value
    let a = document.querySelector("#output")
    a.style.display = "flex"
    a.innerHTML = ` <div>
        <img src="${img}" alt="" width="300px" height="200px">
    </div>
    <div>
        <h3>${name}</h3>
        <h3>${email}</h3>
        <h3>${number}</h3>
        <h3>${designation}</h3>
    </div>`
    let b = document.querySelector("#form")
    b.style.display = "none"
print()
}