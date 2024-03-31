 // Define the input elements with the document.querySelector method
   
 const form = document.querySelector("#my-contact-form");
 const fname = document.querySelector("#my-contact-form input[name='fname']");
 const email = document.querySelector("#my-contact-form input[name='email']");
    form.addEventListner("submit", function(e){ form.addEventListner("submit", function(e) {
       e.preventDefault();

       if (fname.value.trim() === '') {
       alert("Full name is reqired!");
     }
     if (email.value.trim() === '') {
     alert("E-Mail is required!");
     }

     if (fname.value.trim() !== '' && email.value.trim() !== '') {
       form.submit();
     }
   });
