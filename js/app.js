const rowDOMElement = document.querySelector('.row')

// BONUS 2
const teamMembersDOMelement = document.getElementById('team-members')

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

// ESERCITAZIONE
// createMembersTable()

// BONUS 1
// createMembersTableBonus1()

// BONUS 2
createMembersTableBonus2()

function printMembers(){
    for(let i = 0; i < teamMembers.length; i++){
        const currentMember = teamMembers[i]
        for(let memberInfo in currentMember){
            console.log(memberInfo + ': ' + currentMember[memberInfo])
        }
    }
}

function createMembersTable(){
    for(let i = 0; i < teamMembers.length; i++){
        const currentMember = teamMembers[i]
        for(let memberInfo in currentMember){
            const memberNewInfo = currentMember[memberInfo]
            rowDOMElement.innerHTML += `<div class="col-4">${memberNewInfo}</div>`
        }    
    }
}

// BONUS 1

function createMembersTableBonus1(){
    for(let i = 0; i < teamMembers.length; i++){
        const currentMember = teamMembers[i]
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

// BONUS 2

function createMembersTableBonus2(){
    for(let i = 0; i < teamMembers.length; i++){
        const currentMember = teamMembers[i]
        const currentMemberImg = currentMember.picture
        const currentMemberName = currentMember.name
        const currentMemberPosition = currentMember.position
        const memberCard = `
        <div class="col-4 d-flex justify-content-center">
            <div class="card">
                <img src="./img/${currentMemberImg}" alt="">
                <div class="card-body text-center">
                    <h5 class="card-title">${currentMemberName}</h5>
                    <p class="card-text">${currentMemberPosition}</p>
                </div>
            </div>
        </div>`
        teamMembersDOMelement.innerHTML += memberCard
    }
}