const form = document.querySelector("form");
let modifying = false;
let elementToModify = "";
document.querySelector("#contact-image").addEventListener("change",function(event){
    let imgPreview = document.querySelector(".img-preview");
        const [file] = this.files;
        if (file) {
          imgPreview.src = URL.createObjectURL(file);
          //imgPreview.style.display = "block";
          imgPreview.setAttribute("style","display : block");
        }
      
});

form.addEventListener('submit', function(event){
    event.preventDefault();
    let sectionListeDeContactWrapper = document.querySelector(".liste-de-contact-wrapper");
/* créer tous les élements html pour contenir les infos du contact */
    let articleContact = document.createElement('article');
    articleContact.setAttribute("class","contact");

    let divCrossSign = document.createElement("div");
    divCrossSign.setAttribute("class","cross-sign");
    divCrossSign.addEventListener("click",function(event){
        event.stopPropagation();
        
                event.target.parentElement.remove();
    });
    articleContact.appendChild(divCrossSign);

    let divContactPicture = document.createElement("div");
    divContactPicture.setAttribute("class","contact-picture");
    let contactImg = document.createElement("img");
    contactImg.setAttribute("class","contact-image");
    let fileInput = document.querySelector("#contact-image");
    contactImg.setAttribute("src",fileInput.files[0].name);
    divContactPicture.appendChild(contactImg);
    articleContact.appendChild(divContactPicture);

    let divContactInfos = document.createElement("div");
    divContactInfos.setAttribute("class","contact-infos");

    let paragraphNoms = document.createElement("p");
    let prenom = document.querySelector("#prenom").value;
    let nom = document.querySelector("#nom").value;
    paragraphNoms.textContent = prenom + " " + nom;
    paragraphNoms.setAttribute("class","noms");
    divContactInfos.appendChild(paragraphNoms);

    let paragraphGroupe = document.createElement("p");
    paragraphGroupe.textContent = document.querySelector("#groupe").value;
    paragraphGroupe.setAttribute("class","groupe");
    divContactInfos.appendChild(paragraphGroupe);

    let paragraphBio = document.createElement("p");
    paragraphBio.textContent = document.querySelector("#bio").value;
    paragraphBio.setAttribute("class","bio");
    divContactInfos.appendChild(paragraphBio);

    articleContact.appendChild(divContactInfos);
/*************************** prendre les informations du contact après le click
 * et les coller aux inputs ************/
    let formTextInputs = form.elements;
    articleContact.addEventListener("click",function(event){
        let elementsToGetInfosFrom = this.querySelectorAll("p, img");
        
        for(let i = 0; i < formTextInputs.length; i++){
            for(let j = 0; j < elementsToGetInfosFrom.length; j++){
               
                if(formTextInputs[i].getAttribute("id") == "prenom" || formTextInputs[i].getAttribute("id") == "nom"){
                    
                    if(elementsToGetInfosFrom[j].getAttribute("class") == "noms"){
                    let noms = elementsToGetInfosFrom[j].innerHTML.split(" ");
                    formTextInputs[i].getAttribute("id") == "prenom" ?  formTextInputs[i].value = noms[0] : formTextInputs[i].value = noms[1] ;
                    }
                } 
                if(formTextInputs[i].getAttribute("id") == elementsToGetInfosFrom[j].getAttribute("class")){
                    formTextInputs[i].value = elementsToGetInfosFrom[j].innerHTML;
                    
                }
                if(formTextInputs[i].getAttribute("class") == "submit-button"){
                    formTextInputs[i].value = "Modifier";
                }
                

            }
        }
        modifying = true;
        elementToModify = this;

    });
    /****************************************************************** */

    /**************************** vérifier si un contact existe *****************/
if(modifying){
    
        document.querySelector(".submit-button").value = "Créer";
        
   
    sectionListeDeContactWrapper.replaceChild(articleContact,elementToModify);
    modifying = false;
}else{
    sectionListeDeContactWrapper.appendChild(articleContact);
}

/************************* ************************************/
this.reset();
   
});



