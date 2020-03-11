const categorySet = new Set();
const colorSet = new Set();
const seasonSet = new Set();

const myClothing = [
    {
        id: 0, 
        name: 'adidas-blue-sweatshirt', 
        img: 'https://i.pinimg.com/236x/ae/0b/e5/ae0be55fa01017efe38af5c5fd0ec86d.jpg',  
        category: 'sweaters', 
        color: 'blue',
        season: ['fall','winter']
    },
    {
        id: 1,
        name: 'adidas-white-sneakers',
        img: 'https://i.pinimg.com/236x/bb/4b/1b/bb4b1bb36b1e53d6207c6433b637fede.jpg',
        category:'shoes',
        color:'white',
        season: ['fall','winter','spring', 'summer']
    },
    {
        id:2,
        name: 'topman-green-cardigan',
        img: 'https://i.pinimg.com/236x/0c/ff/30/0cff307bd0b41c299b070c9ac778933e.jpg',
        category: 'tops',
        color:'green',
        season: ['fall']
    },
    {
        id:3,
        name:'nike-black-joggers',
        img:'https://i.pinimg.com/236x/c3/43/68/c34368a0d2c7a0774f21e178b317d6e6.jpg',
        category:'pants',
        color:'black',
        season: ['fall','winter']
    },
    {
        id:4,
        name:'ripped-jeans',
        img:'https://i.pinimg.com/236x/74/97/34/749734fd8db10c66d3d7598062081b39.jpg',
        category:'pants',
        color:'blue',
        season: ['fall','spring']
    },
    {
        id:5,
        name:'mustard-beanie',
        img:'https://i.pinimg.com/236x/da/73/2d/da732d097980ccac4d116e6312b905d3.jpg',
        category:'accessories',
        color:'yellow',
        season: ['fall','winter']
    },
    {
        id:6,
        name:'navy-hoodie',
        img:'https://i.pinimg.com/236x/d8/4d/a0/d84da03c957674f177806fb946ee9b8a.jpg',
        category:'hoodies',
        color:'blue',
        season: ['fall','winter']
    },
    {
        id:7,
        name:'patagonia-black-parka',
        img:'https://i.pinimg.com/236x/98/92/80/98928084fa03893291011860415dfa11.jpg',
        category:'outerwear',
        color:'black',
        season:['winter']
    }
]

const categoryCheckboxes = document.querySelectorAll(".category");
const colorCheckboxes = document.querySelectorAll(".color");
const seasonCheckboxes = document.querySelectorAll(".season");
const displayArea = document.getElementById("grid");


/*const initialLoading = () =>{
    for (i=0;i<myClothing.length;i++){
        let div = document.createElement("div");
        div.classList.add("item");
        let img = document.createElement('img');
        img.src=myClothing[i].img;
        div.appendChild(img);
        displayArea.appendChild(div);
    }
}*/

const selectCategories = () => {
    console.log(categoryCheckboxes);
    for (const checkbox of categoryCheckboxes){
        console.log("Checked status: " + checkbox.checked)
        //const type = checkbox.name;
        const value = checkbox.value;
        //let criteria = type + "=" + value;
        if (checkbox.checked===true){
            categorySet.add(value);
        }
        else {
            if (categorySet.has(value)){
                categorySet.delete(value);
            };
        };
    }
    console.log(categorySet);
};

const selectColors = () => {
    console.log(colorCheckboxes);
    for (const checkbox of colorCheckboxes){
        console.log("Checked status: " + checkbox.checked)
        //const type = checkbox.name;
        const value = checkbox.value;
        //let criteria = type + "=" + value;
        if (checkbox.checked===true){
            colorSet.add(value);
        }
        else {
            if (colorSet.has(value)){
                colorSet.delete(value);
            };
        };
    }
    console.log(colorSet);
}

const selectSeasons = () => {
    console.log(seasonCheckboxes);
    for (const checkbox of seasonCheckboxes){
        console.log("Checked status: " + checkbox.checked)
        //const type = checkbox.name;
        const value = checkbox.value;
        //let criteria = type + "=" + value;
        if (checkbox.checked===true){
            seasonSet.add(value);
        }
        else {
            if (seasonSet.has(value)){
                seasonSet.delete(value);
            };
        };
    }
    console.log(seasonSet);
}

const setIntersection = (a,b) => {
    let intersection = new Set(
        [...a].filter(x => b.has(x)));
    if (intersection.size > 0){
        return true;
    }
    return false;
};

const applyFilter = () =>{
    const filteredList = myClothing.filter((item)=>{
        if (categorySet.size>0 && colorSet.size===0 && seasonSet.size===0){
            if (categorySet.has(item.category)){
                return true;
            }
        }

        else if (categorySet.size>0 && colorSet.size>0 && seasonSet.size===0){
            if (categorySet.has(item.category) && colorSet.has(item.color)){
                return true;
            }
        }

        else if (categorySet.size>0 && colorSet.size>0 && seasonSet.size>0){
            itemSeasonSet = new Set(item.season);
            if (categorySet.has(item.category) && colorSet.has(item.color) && setIntersection(seasonSet,itemSeasonSet)===true){
                return true;
            }
        }

        else if (categorySet.size===0 && colorSet.size>0 && seasonSet.size===0){
            if (colorSet.has(item.color)){
                return true;
            }
        }

        else if (categorySet.size===0 && colorSet.size===0 && seasonSet.size>0){
            itemSeasonSet = new Set(item.season);
            if (setIntersection(seasonSet, itemSeasonSet)===true){
                return true;
            }
        }

        else if (categorySet.size>0 && colorSet.size===0 && seasonSet.size>0){
            itemSeasonSet = new Set(item.season);
            if (categorySet.has(item.category) && setIntersection(seasonSet, itemSeasonSet)===true){
                return true;
            }
        }

        else if (categorySet.size===0 && colorSet.size>0 && seasonSet.size>0){
            itemSeasonSet = new Set(item.season);
            if (colorSet.has(item.color) && setIntersection(seasonSet, itemSeasonSet)===true){
                return true;
            }
        }

        
    })
   displayArea.innerHTML="";
    for (i=0; i<filteredList.length; i++){
        let div = document.createElement("div");
        div.classList.add("item");
        let img = document.createElement('img');
        img.src=filteredList[i].img;
        div.appendChild(img);
        displayArea.appendChild(div);

    }
    // clearing out criteria after hitting Apply
    for (const checkbox of categoryCheckboxes){
        checkbox.checked=false;
    };
    for (const checkbox of colorCheckboxes){
        checkbox.checked=false;
    };
    for (const checkbox of seasonCheckboxes){
        checkbox.checked=false;
    };
    categorySet.clear();
    colorSet.clear();
    seasonSet.clear();

    document.getElementById("filter-bar").style.width = "0";
    console.log(filteredList);
};

const resetFilter = () =>{
    for (const checkbox of categoryCheckboxes){
        checkbox.checked=false;
    };
    for (const checkbox of colorCheckboxes){
        checkbox.checked=false;
    };
    for (const checkbox of seasonCheckboxes){
        checkbox.checked=false;
    };
    categorySet.clear();
    colorSet.clear();
    seasonSet.clear();
    const template = `
    <div class="add-panel">
        <a href="https://www.google.com">
        <i class="fas fa-plus"></i>
        </a>
    </div>`
    displayArea.innerHTML=template;
    initialLoading();
    document.getElementById("filter-bar").style.width = "0"
    console.log(categorySet);
};

const openNav =()=> {
    document.getElementById("filter-bar").style.width = "200px";
  }

const closeNav=()=>{
    document.getElementById("filter-bar").style.width = "0";
  }


