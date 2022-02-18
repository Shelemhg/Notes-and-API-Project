import Hikes from "./hikes.js";
import { Comment } from "./comments.js";
import {saveComment} from "./comments.js";
import {loadToDoList} from "./comments.js";

//on load grab the array and insert it into the page
const myHikes = new Hikes("hikes");

var Comments = [];

window.addEventListener("load", () => {
    myHikes.showHikeList();
    Comments = loadToDoList();
} );

myHikes.hikeList;
let commentList

function displayComments(){
    for(comment in Comments){

    }
}

function saveData(){
    var hikeName = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    const newComment = new Comment(hikeName, comment);    
    saveComment(newComment, Comments);

    return false;
}



document.getElementById("submit-btn").addEventListener("click", saveData);