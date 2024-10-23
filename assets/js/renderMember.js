class Member {
    constructor(memberDetail) {
        this.name = memberDetail.name;
        this.qoutes = memberDetail.qoutes;
        this.star = memberDetail.star;
        this.image = memberDetail.image;
    }
}

const members = [
    {
        name: "Vindev",
        qoutes: "Keren abis...",
        star: 4,
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    }, 
    {
        name: "Sunjaya",
        qoutes: "Kerja Bagus",
        star: 5,
        image: "https://plus.unsplash.com/premium_photo-1669065123832-5c43e8f80f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    }, 
    {
        name: "Klovaska",
        qoutes: "Lumayan Baik",
        star: 3,
        image: "https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    }
].map(memberDetail => {return new Member(memberDetail)} );



const memberContainer = document.querySelector('section');
const starButton = document.querySelectorAll('.star-button');
let html = ``;

members.forEach((member) => {
    
    html += `
    <div class="product-card">
    <img src=${member.image} alt="Product Image" class="product-image">
    <div class="product-info">
    <h2 class="product-name">"${member.qoutes}"</h2>
    <p class="product-price">-${member.name}</p>
    <div class="product-rating">
    ${member.star} <span class="star">★</span>
    </div>
    </div>
        </div>`;

        memberContainer.innerHTML = html;
})

starButton.forEach((starButton) => {
    starButton.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
    })
})