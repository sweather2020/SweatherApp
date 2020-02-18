const myClothing = [
    {
        id: 0, 
        name: 'adidas-blue-sweatshirt', 
        img: 'https://i.pinimg.com/236x/ae/0b/e5/ae0be55fa01017efe38af5c5fd0ec86d.jpg',  
        category: 'sweaters', 
        color: 'blue'
    },
    {
        id: 1,
        name: 'adidas-white-sneakers',
        img: 'https://i.pinimg.com/236x/bb/4b/1b/bb4b1bb36b1e53d6207c6433b637fede.jpg',
        category:'shoes',
        color:'white'
    },
    {
        id:2,
        name: 'topman-green-cardigan',
        img: 'https://i.pinimg.com/236x/0c/ff/30/0cff307bd0b41c299b070c9ac778933e.jpg',
        category: 'tops',
        color:'green'
    },
    {
        id:3,
        name:'nike-black-joggers',
        img:'https://i.pinimg.com/236x/c3/43/68/c34368a0d2c7a0774f21e178b317d6e6.jpg',
        category:'pants',
        color:'black'
    },
    {
        id:4,
        name:'ripped-jeans',
        img:'https://i.pinimg.com/236x/74/97/34/749734fd8db10c66d3d7598062081b39.jpg',
        category:'pants',
        color:'blue'
    },
    {
        id:5,
        name:'mustard-beanie',
        img:'https://i.pinimg.com/236x/da/73/2d/da732d097980ccac4d116e6312b905d3.jpg',
        category:'hats',
        color:'yellow'
    },
    {
        id:6,
        name:'navy-hoodie',
        img:'https://i.pinimg.com/236x/d8/4d/a0/d84da03c957674f177806fb946ee9b8a.jpg',
        category:'hoodies',
        color:'blue'
    },
    {
        id:7,
        name:'patagonia-black-parka',
        img:'https://i.pinimg.com/236x/98/92/80/98928084fa03893291011860415dfa11.jpg',
        category:'outerwear',
        color:'black'
    }
]







const filterClothing = () =>{
    const searchTerm = document.querySelector("#search").value;
    const panels = document.querySelectorAll("div.item>img");
    console.log(panels);
    for (panel of panels){
        console.log(panel);
        const isMatch = checkMatch(panel.alt, searchTerm);
        if (isMatch){
            panel.parentNode.style.display='block';
        }
        else{
            panel.parentNode.style.display='none';
        }
    }
};

const checkMatch = (clothingCategory,searchTerm) => {
    const clothingName = clothingCategory; 
    if (clothingName.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
        return true;
    }
    return false;
}


document.querySelector('#search').onkeyup = filterClothing;