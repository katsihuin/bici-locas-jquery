/*$(document).on("ready", init);

function init()
{
	$('#btnSend').on("click", validateForm);
}*/

function validateForm()
{
	/* validar los campos requeridos */
	if (!validateName() || !validateLastName() || !validateEmail() || !validatePassword() || !validateTipoBici())
	{
		jsShow("commentPrompt");
		producePrompt("Formulario debe estar validado para poder registrarte", "commentPrompt", "red");
		setTimeout(function(){jsHide("commentPrompt");}, 2000);
	}	
	else
	{
		jsShow("commentPrompt");
		producePrompt("Formulario Validado Exitósamente", "commentPrompt", "green");
	}
}


/* Muestra mensaje validación*/
function jsShow(id)
{
	document.getElementById(id).style.display="block";
}

/* Oculta mensaje validación*/
function jsHide(id)
{
	document.getElementById(id).style.display="none";
}

/* Envia Mensaje al usuario*/
function producePrompt(message, promptLocation, color)
{
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}
//Convierte la primera letra de una palabra en Mayuscula
function capitalize() {
    $(this[0]).keyup(function(event) {
        var box = event.target;
        var txt = $(this).val();
        var stringStart = box.selectionStart;
        var stringEnd = box.selectionEnd;
        $(this).val(txt.replace(/^(.)|(\s|\-)(.)/g, function($word) {
            return $word.toUpperCase();
        }));
        box.setSelectionRange(stringStart , stringEnd);
    });

   return this;
}

/* Valida Nombre*/

function validateName()
{
	var inputName = $('#commentName');
	var name =  inputName.val;
	inputName.val = capitalize(name); //Convierte primera letra en mayuscula
	var nameReg = /^[A-Z][a-z]*[a-zA-Z]$/;
	
	if (name.length == 0)
	{
		producePrompt("Tu Nombre es requerido", "commentNamePrompt", "red");
		return false;
	}
	else if (!nameReg.test(name)) 
	{
		producePrompt("Compruebe que su Nombre contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Bienvenido(a) " + name, "commentNamePrompt", "green")
	}	

}

/* Valida Apellido*/
function validateLastName()
{
	var inputLastName = $('#commentLastName');
	var lastName =  inputLastName.val;

	inputLastName.val = capitalize(lastName);

	var lastNameReg = /^[A-Z][a-z]*[a-zA-Z]$/;

	if (lastName.length == 0)
	{
		producePrompt("Tu Apellido es requerido", "commentLastNamePrompt", "red");
		return false;
	}
	else if (!lastNameReg.test(lastName)) 
	{
		producePrompt("Compruebe que su Apellido contenga SOLO caracteres de la A-Z", "commentLastNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Apellido Válido ✔", "commentLastNamePrompt", "green");
		return true;
	}	
}

/* Valida Email*/
function validateEmail()
{
	var email = $('#commentEmail').val;
	var emailReg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
	if (email.length == 0)
	{
		producePrompt("Correo Electrónico es requerido", "commentEmailPrompt", "red");
		return false;
	}
	else if (!emailReg.test(email)) 
	{
		producePrompt("Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com", "commentEmailPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Correo Electrónico Válido ✔", "commentEmailPrompt", "green");
		return true;
	}
}

/* Valida Contraseña*/
function validatePassword()
{
	var password = $('#commentPassword').val;
	var passwordReg = /.{6,}/;

	if (password.length == 0)
	{
		producePrompt("Contraseña es requerida", "commentPasswordPrompt", "red");
		return false;
	}
	else if (!passwordReg.test(password)) 
	{
		producePrompt("Compruebe que la contraseña tenga al menos 6 caracteres", "commentPasswordPrompt", "red");
		return false;
	}
	else if (password == "PASSWORD" || password == "password" || password == "123456" || password == "098754") 
	{
		producePrompt("La contraseña no puede ser igual a 'password' ó '123456' ó '098754'", "commentPasswordPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Contraseña Válida ✔", "commentPasswordPrompt", "green");
		return true;
	}
}

/* Valida Tipo de bici*/
function validateTipoBici()
{
	var tipo = $('#commentTipo').val;
	if (tipo == 0)
	{
		producePrompt("Seleccione un tipo de bici de las opciones presentadas", "commentTipoPrompt", "white");
		return false;
	}
	else 
	{
		producePrompt("Bici seleccionada ✔", "commentTipoPrompt", "green");
		return true;
	}
}

/* Valida formato de nombre de usuario en Twitter*/
function validateTwitter()
{
	var twitter = $('#commentTwitter').val;
	if (twitter.length == 0) 
	{
		jsShow("commentTwitterPrompt");
		producePrompt("Este campo es opcional", "commentTwitterPrompt", "blue");
		setTimeout(function(){jsHide("commentTwitterPrompt");}, 2000);
	}
	else if (!twitter.match(/^(\w){1,15}$/)) 
	{
		jsShow("commentTwitterPrompt");
		producePrompt("Compruebe que el Nombre de Usuario en Twitter no contenga más de 15 caracteres, símbolos, guiones o espacios", "commentTwitterPrompt", "red");
		setTimeout(function(){jsHide("commentTwitterPrompt");}, 2000);
	}
	else 
	{
		producePrompt("Nombre de Usuario en Twitter Válido ✔", "commentTwitterPrompt", "green");
		return true;
	}
}

/* Valida Informacion */
function validateInfo()
{
	var info = $('#commentInfo').val;
	if (info.checked==true) 
	{
		producePrompt("¡Gracias, estaremos en contacto contigo muy pronto!", "commentInfoPrompt", "green");
		return true;
	}
}



// Cargar primero el DOM para ejecutar 

document.addEventListener ('DOMContentLoaded', 
	function showTooltip()
	{

	$("div").each(function (i) { 
		 var input = $(this).children("input").first(); //if(i==0) alert(input);
		 var span = $(this).children("span").first(); 
		 if(span) { //if(i==0) //alert(span);
			 input.focus(function(){ span.css({ "display":"inline" })  });
			 input.blur(function(){ span.css({ "display":"none" }) });
		}
	})
	$("div").each(function (i) { 
		 var select = $(this).children("select").first(); //if(i==0) alert(input);
		 var span = $(this).children("span").first(); 
		 if(span) { //if(i==0) //alert(span);
			 select.focus(function(){ span.css({ "display":"inline" })  });
			 select.blur(function(){ span.css({ "display":"none" }) });
		}
	})

addEventListener('DOMContentLoaded', showTooltip);
});
