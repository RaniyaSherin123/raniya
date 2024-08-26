function sendMail()
{
     var params ={ 
        name : document.getElementById("name").value,
         email:document.getElementById("email").value,
          phone:document.getElementById("phone").value, 
          subject:document.getElementById("subject").value,
         } 
     const serviceID ="service_f1n5q3o"; 
     const templateID ="template_2kcjt8i"; 
     emailjs.send(serviceID,templateID,params) 
     .then( 
        res=>{ document.getElementById("name").value = "";
             document.getElementById("email").value = ""; 
             document.getElementById("phone").value = "";
              document.getElementById("subject").value = "";
         console.log(res);
          alert("Your mail was sent successfully") 
        }
     ) 
          .catch((err)=>console.log(err)); 
}