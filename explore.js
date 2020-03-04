const filterArticles = () =>{
    var searchTerm = document.querySelector("#search").value;
    const articles = document.querySelectorAll("div.item");
    // console.log(articles);
    for (article of articles){
        console.log(article);
        var isMatch = article.innerText.toUpperCase().includes(searchTerm.toUpperCase())
        console.log(isMatch)
        if (isMatch){
            article.style.display='flex';
        }
        else{
            article.style.display='none';
        }
    }
};

// const checkMatch = (text_content,searchTerm) => {
//     const text = text_content; 
//     // if (text.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
//     //     return true;
//     // }
//     // return false;
//     return text.toUpperCase().includes(searchTerm.toUpperCase())
// }

// var search = document.getElementById("#search")

document.querySelector('#search').onkeyup = filterArticles;