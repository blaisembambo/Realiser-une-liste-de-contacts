const form = document.querySelector("form");
const submitButton = document.querySelector(".submit-button");
form.addEventListener('submit', function(event){
    let sectionListeDeContactWrapper = document.querySelector(".liste-de-contact-wrapper");
    
    let articleContact = document.createElement('article');
    articleContact.setAttribute("class","contact");
    
    let divCrossSign = document.createElement("div");
    divCrossSign.setAttribute("class","cross-sign");
    articleContact.appendChild(divCrossSign);

    let divContactPicture = document.createElement("div");
    divContactPicture.setAttribute("class","contact-picture");
    let contactImg = document.createElement("img");
    contactImg.setAttribute("class","contact-image");
    let fileInput = document.querySelector("#file-input");
    contactImg.setAttribute("src",fileInput.files[0].name);
    console.log(fileInput.files[0].name);
    divContactPicture.appendChild(contactImg);
    articleContact.appendChild(divContactPicture);

    let divContactInfos = document.createElement("div");
    divContactInfos.setAttribute("class","contact-infos");

    let paragraphNoms = document.createElement("p");
    let prenom = document.querySelector("#prenom").value;
    let nom = document.querySelector("#nom").value;
    paragraphNoms.textContent = prenom + "&nbsp" + nom;
    divContactInfos.appendChild(paragraphNoms);

    let paragraphGroupe = document.createElement("p");
    paragraphGroupe.textContent = document.querySelector("#groupe").value;
    divContactInfos.appendChild(paragraphGroupe);

    let paragraphBio = document.createElement("p");
    paragraphBio.textContent = document.querySelector("#bio").value;
    divContactInfos.appendChild(paragraphBio);

    articleContact.appendChild(divContactInfos);

    sectionListeDeContactWrapper.appendChild(articleContact);



    event.preventDefault();
});
//alert(submitButton )