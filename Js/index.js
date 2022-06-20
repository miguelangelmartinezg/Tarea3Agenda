var ListaContacto = [];

function CargarDatos() {

    document.getElementById("formAdd").style.display = 'none';
    document.getElementById("divListar").style.display = 'inline';
    const miTabla = document.querySelector('#ListContacto tbody');
    var divCuerpo = document.getElementById('cuerpo');
    fetch("http://www.raydelto.org/agenda.php").then(function (misDatos) {
        return misDatos.json();

    }).then(function (misDatos) {
        misDatos.forEach(registros => {
            const row = document.createElement('tr');
            row.innerHTML += `
            <td  style="text-align: left">${registros.nombre}</td>
            <td  style="text-align: left">${registros.apellido}</td>
            <td  style="text-align: left">${registros.telefono}</td>
            `;
            miTabla.appendChild(row)

        });

    });
}

function AddContacto() {
    document.getElementById("formAdd").style.display = 'inline';
    document.getElementById("divListar").style.display = 'none';

}
function Inicio() {
    document.getElementById("formAdd").style.display = 'none';
    document.getElementById("divListar").style.display = 'none';
    Limpiar();
}
function GuardarContacto(cNombre, cApellido, cTelefono) {

    var newContacto = {
        nombre: cNombre,
        apellido: cApellido,
        telefono: cTelefono
    }
    let ContactoArrayJson = JSON.stringify(newContacto);

    fetch("http://www.raydelto.org/agenda.php", {
        method: "POST",
        body: ContactoArrayJson

    });

    document.querySelector('#txtNombre').value = '';
    document.querySelector('#txtApellido').value = '';
    document.querySelector('#txtTelefono').value = '';
    document.getElementById("formAdd").style.display = 'none';
    document.getElementById("divListar").style.display = 'none';
}
function Limpiar() {
    document.querySelector('#txtNombre').value = '';
    document.querySelector('#txtApellido').value = '';
    document.querySelector('#txtTelefono').value = '';
}