// javascript.js
let commentCount = 0;

function addComment() {
    const commentInput = document.getElementById("barra-comentario");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        commentCount++;

        const commentList = document.getElementById("lista-comentarios");
        const newRow = commentList.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = commentCount;
        cell2.textContent = commentText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function() {
            deleteComment(newRow);
        };
        cell3.appendChild(deleteButton);

        commentInput.value = "";
        updateCommentCount();
    }
}

function deleteComment(row) {
    const commentList = document.getElementById("lista-comentarios");
    commentList.deleteRow(row.rowIndex);
    commentCount--;
    updateCommentCount();
}

function updateCommentCount() {
    const commentCountElement = document.getElementById("comment-count");
    commentCountElement.textContent = commentCount;
}
