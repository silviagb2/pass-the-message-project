// Tu código aquí

const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    let messageSend = document.querySelector('.message-content')
    let field = document.querySelector('#message')
    let emptyMessage = document.querySelector('.alert')
    
    if ( field.value == ""){
        emptyMessage.classList.add("show")
        setTimeout(function() { emptyMessage.classList.remove("show")}, 2000)
        //emptyMessage.classList.remove("show"),(2000)
    }

    else {
        messageSend.textContent = field.value
        field.value=""
    }

    console.log("Hemos hecho clic en el botón de submit!")

})


//Solo pasará cuando el #message esté vacío

//let emptyMessage = document.querySelector('.alert')

//emptyMessage.classList.add("show") 
