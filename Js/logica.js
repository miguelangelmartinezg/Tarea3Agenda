document.querySelector('#btnGuardar').addEventListener('click', saveContacto);

function saveContacto() {
    var oNombre = document.querySelector('#txtNombre').value,
        oApellido = document.querySelector('#txtApellido').value,
        oTelefono = document.querySelector('#txtTelefono').value;

    GuardarContacto(oNombre, oApellido, oTelefono);
}