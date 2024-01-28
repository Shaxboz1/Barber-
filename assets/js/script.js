function showSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}
const links = document.querySelectorAll(".links")
links.forEach((link)=> {
    link.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display = "none"
    })
})