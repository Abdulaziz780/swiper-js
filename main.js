let cars = [
    {
        id: 1,
        imgUrl: 'https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg',
        title: 'Nexia-2-legenda',
        description: 'nexia-2-legenda',
        status: 'b/u',
        cost: 'sotilmidi'
    }, {
        id: 2,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8uPPBHH7JcElT20LcVw7NsMVnm2Zn4J1PQ&usqp=CAU',
        title: 'mers-banan',
        description: 'mers-banan',
        status: 'b/u',
        cost: '99999$'
    }, {
        id: 3,
        imgUrl: 'https://files.glotr.uz/company/000/013/254/products/2021/01/12/2021-01-12-23-31-31-989879-b628f08faa6ecd3bfe6ff65dbfcbd89c.jpg?_=ozbol',
        title: 'Nexia-3-legenda',
        description: 'nexia-3-legenda',
        status: 'b/u',
        cost: '13000$'
    }, {
        id: 4,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcq9KJkF9wdcO0HCokNHiY-3mJPSIYtZjjQ&usqp=CAU',
        title: 'BMW-legenda',
        description: 'BMW-legenda',
        status: 'b/u',
        cost: '70000%'
    }, {
        id: 5,
        imgUrl: 'https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg',
        title: 'Nexia-2-legenda',
        description: 'nexia-2-legenda',
        status: 'b/u',
        cost: 'sotilmidi'
    }, {
        id: 6,
        imgUrl: 'https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg',
        title: 'Nexia-2-legenda',
        description: 'nexia-2-legenda',
        status: 'b/u',
        cost: 'sotilmidi'
    }, {
        id: 7,
        imgUrl: 'https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg',
        title: 'Nexia-2-legenda',
        description: 'nexia-2-legenda',
        status: 'b/u',
        cost: 'sotilmidi'
    }, {
        id: 8,
        imgUrl: 'https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg',
        title: 'Nexia-2-legenda',
        description: 'nexia-2-legenda',
        status: 'b/u',
        cost: 'sotilmidi'
    }, {
        id: 9,
        imgUrl: 'https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg',
        title: 'Nexia-2-legenda',
        description: 'nexia-2-legenda',
        status: 'b/u',
        cost: 'sotilmidi'
    },
]

let myswiper = document.querySelector('.mySwiper')

let ReadCard = () => {
    cars.map((v) =>{
        let card = document.createElement('swiper-slide')
        card.innerHTML = `
        <img width = '100px' class = 'card__img' src = '${v.imgUrl}'    
        <p style = 'color: blue;'>${v.title}</p>
        <p style = 'color: blue;'>${v.description}</p>
        <div style = 'display: flex; gap: 20px;'>
        <p style = 'color: blue;'>${v.status}</p>
        <p style = 'color: blue;'>${v.cost}</p>
        </div>
        `

        myswiper.appendChild(card)
    })
}

ReadCard()