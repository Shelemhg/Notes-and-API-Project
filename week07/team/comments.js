export function loadToDoList() {
    if (localStorage.getItem("Comments") === null){
        var Comments = [];
        localStorage.setItem('Comments', JSON.stringify(Comments));
        console.log("Comments Creado");
    }else{
        var Comments = JSON.parse(localStorage.getItem('Comments'));
        console.log("Comments ya existe");
        console.table(Comments);
    }
    return Comments;
}

export class Comment {
    constructor(hikeName, comment) {
        this.hikeName = hikeName;
        this.comment = comment;
        this.date = Date();
    }
}

export function saveComment(newComment, Comments){

    Comments.push(newComment);
    localStorage.setItem('Comments', JSON.stringify(Comments));
}








function newComment(hikeName, comment) {
    return newComment = {
        "name": hikeName,
        "date": new Date(),
        "content": comment
    }
}

// addNewComment(hikeName, comment) {
//     let newComment = newComment(hikeName, comment);
//     //get list from local storage
//     //add item to the list
//     //set list variable again in local storage
//     //add the comment to localStorage
// }
// filterCommentsByName() {
//     //TODO  - getAllComments() then filter them by name
// }
// getAllComments() {
//     //TODO 1st - pull comments from local storage
// }
// renderCommentList() {
//     //TODO - use getAllComments() - then render them
// }
// addSubmitListener() {
//     //add a listener to a button created 
// }