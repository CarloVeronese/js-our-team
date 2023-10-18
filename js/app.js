const rowDOMElement = document.querySelector('.row')

const teamMembers = [
    {
        name:'Wayne Barnett',
        position:'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name:'Angela Caroll',
        position:'Chief Editor',
        picture:'angela-caroll-chief-editor.jpg',
    },
    {
        name:'Walter Gordon',
        position:'Office Manager',
        picture:'walter-gordon-office-manager.jpg',
    },
    {
        name:'Angela Lopez',
        position:'Social Media Manager',
        picture:'angela-lopez-social-media-manager.jpg',
    },
    {
        name:'Scott Estrada',
        position:'Developer',
        picture:'scott-estrada-developer.jpg',
    },
    {
        name:'Barbara Ramos',
        position:'Graphic Designer',
        picture:'barbara-ramos-graphic-designer.jpg',
    }
]

createMembersTableBonus1()

function printMembers(){
    for(let i = 0; i < teamMembers.length; i++){
        currentMember = teamMembers[i]
        for(let memberInfo in currentMember){
            console.log(memberInfo + ': ' + currentMember[memberInfo])
        }
    }
}

function createMembersTable(){
    for(let i = 0; i < teamMembers.length; i++){
        currentMember = teamMembers[i]
        for(let memberInfo in currentMember){
            const memberNewInfo = currentMember[memberInfo]
            rowDOMElement.innerHTML += `<div class="col-4">${memberNewInfo}</div>`
        }    
    }
}

/* BONUS 1 */

function createMembersTableBonus1(){
    for(let i = 0; i < teamMembers.length; i++){
        currentMember = teamMembers[i]
        for(let memberInfo in currentMember){
            const memberNewInfo = currentMember[memberInfo]
            if(memberInfo === 'picture'){
                rowDOMElement.innerHTML += `<div class="col-4"><img src="./img/${memberNewInfo}" alt=""></div>`
            }
            else {
                rowDOMElement.innerHTML += `<div class="col-4">${memberNewInfo}</div>`
            }
        }    
    }
}