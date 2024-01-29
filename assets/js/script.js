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

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});
sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.home-img',{delay:450,origin:'top'})
sr.reveal('.history',{delay:150,origin:'left'})
sr.reveal('.history',{delay:300,origin:'left'})
sr.reveal('.p-text',{delay:600,origin:'right'})
sr.reveal('.btn1',{delay:800,origin:'bottom'})
sr.reveal('.left-position',{delay:300,origin:'left'})
sr.reveal('.top-position',{delay:300,origin:'top'})
sr.reveal('.right-position',{delay:300,origin:'right'})
sr.reveal('.galleries',{delay:300,origin:'bottom'})
sr.reveal('.galleries',{delay:300,origin:'bottom'})
sr.reveal('.btn2',{delay:900,origin:'right'})