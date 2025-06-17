const photoContainer = document.getElementById("photo-container");

let content = "<div class='column'>";

for(let i=0; i<20; i++){
    if(i!=0 && (i % 5 == 0)){
        content += `</div><div class="column">`
        +getPhotoElement(i+1)
    }else{
        content += getPhotoElement(i+1);
    }
}

content += "</div>";

photoContainer.innerHTML = content;

function getPhotoElement(photo_id){
    return `<a href="#" class="photo">
    <img src="./img/photo_${photo_id}.jpg" alt="Photo ${photo_id}"></a>`
}

