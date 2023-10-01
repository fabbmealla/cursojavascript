const Especialidades = ["Clínico", "Traumatología", "Oftalmología", "Cardiología", "Dermatología"]

function saludar () {
    
    let nombreDeUsuario = prompt ("Bienvenid@ al centro de salud Escalera al Cielo. Para continuar ingrese su nombre de usuario")
    nombreDeUsuario = nombreDeUsuario.trim()

    while (nombreDeUsuario == "") {
        alert("Nombre de usuario no válido. Por favor, inténtelo de nuevo.");
        nombreDeUsuario = prompt("Por favor, ingrese su nombre de usuario nuevamente");
        nombreDeUsuario = nombreDeUsuario.trim();
    }

    alert ("Bienvenid@ " + nombreDeUsuario + ". Para iniciar con la reserva de turno haga click en aceptar.")
}

function elegirEspecialidad () {

    let especialidad = prompt("Elija la especialidad a reservar escribiendo el número correspondiente: 1- Clínico; 2- Traumatología; 3- Oftalmología; 4- Cardiología; 5- Dermatología")
    let especialidadElegida = parseInt(especialidad) - 1;

    if (isNaN(especialidad) || especialidad <= 0 || especialidad > 5) {
    alert("Esa especialidad no existe. Por favor, ingrese el número correcto:");
    elegirEspecialidad();
    } else {
        let confirmacion = confirm (`Usted ha elegido la opción ${especialidad}: ${Especialidades[especialidadElegida]}. ¿Es correcto?`) ;

        if (confirmacion) {
            confirmarEspecialidad(Especialidades[especialidadElegida]);
        } else {
            elegirEspecialidad();
        }
    }
}

function confirmarEspecialidad(especialidad) {
    let diaDeLaSemana;
    switch (especialidad) {
        case "Clínico":
            diaDeLaSemana = "martes";
            break;
        case "Traumatología":
            diaDeLaSemana = "lunes";
            break;
        case "Oftalmología":
            diaDeLaSemana = "jueves";
            break;
        case "Cardiología":
            diaDeLaSemana = "viernes";
            break;
        case "Dermatología":
            diaDeLaSemana = "miércoles";
            break;
        default:
            diaDeLaSemana = "por confirmar";
    }
    alert(`Días de atención para ${especialidad}: ${diaDeLaSemana}. Por favor, elija el horario.`);
}

function elegirHorario () {
    let horario = prompt("Elija el horario a reservar escribiendo el número correspondiente: 1- 10:00 hs; 2- 13:00 hs; 3- 15:00 hs");
    let reloj;

    if (isNaN(horario) || horario <= 0 || horario > 3) {
        alert("Horario no valido. Ingrese el correcto.");
        elegirHorario();
        } else {
            let confirmacion = confirm (`Usted ha elegido el horario ${horario}: ${confirmarHorario(horario)}. ¿Desea aceptar el turno?`) ;
    
            if (confirmacion) {
                alert("Reserva confirmada. Por favor concurrir al turno con 15 minutos de anticipación.");
            } else {
                elegirHorario();
            }
        }
}

function confirmarHorario(horario) {
    switch (parseInt(horario)) {
        case 1:
            return "10:00 hs";
        case 2:
            return "13:00 hs";
        case 3:
            return "15:00 hs";
        default:
            return "turno no disponible";
        }
}

saludar ()
elegirEspecialidad ()
elegirHorario ()










