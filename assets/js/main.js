const footer = document.querySelector(".footerdiv")
const sumProject = document.querySelector(".sumTitle")
const selectedProject = document.querySelector(".selectedProject")
const projectList = document.querySelector(".projects")

const fetchData = async (url) => {
    return await fetch(url).then(response => response.json())
};

async function addProject() {
    let allProject = await fetchData("http://localhost:1337/api/blogsites")

    allProject.data.forEach(e => {
        projectList.innerHTML += `<div class="project" id="${e.attributes.code}">
        <div class="projectTitle" id="${e.attributes.code}">
            <h3 id="${e.attributes.code}">${e.attributes.title}</h3>
            <div class="subTitle" id="${e.attributes.code}">
                <h5 id="${e.attributes.code}">${e.attributes.subtitle}</h5>
            </div>
        </div>
        <div class="links" id="${e.attributes.code}">
            <div class="github" id="${e.attributes.code}">
                <a id="${e.attributes.code} href="${e.attributes.github}"><img src="assets/image/icons8-github-100.png" alt="" id="${e.attributes.code}"></a>
            </div>
            <div class="publish" id="${e.attributes.code}">
                <a id="${e.attributes.code} href="${e.attributes.livecode}"><img src="assets/image/icons8-publish-100.png" alt="" id="${e.attributes.code}"></a>
            </div>
        </div>
        
        </div>`
        bindClick()
        sumAllProject()
        
    });
}


function sumAllProject() {
    sumProject.innerHTML = `<h3>Total Project: ${projectList.children.length}</h3>`
}

function bindClick() {
    for (const btn of document.querySelectorAll(".project")){
        btn.addEventListener("mouseover",(e) => {
            console.log(e.target);
            if(e.target.id !== ""){
                if(e.target.id === "JavaScript"){
                    selectedProject.innerHTML = `<img src="assets/image/icons8-js-48.png" alt="" "></img>`
                }else {selectedProject.innerHTML = `<img src="assets/image/icons8-python-50.png" alt="" "></img>` }
            }else {selectedProject.innerHTML = `<h3>Selected Project: None</h3>`}

        })
    }

}

addProject()