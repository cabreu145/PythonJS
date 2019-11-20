var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["matricula"] = document.getElementById("matricula").value;
    formData["insumo"] = document.getElementById("insumo").value;
    formData["materia"] = document.getElementById("materia").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listainsumos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.matricula;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.insumo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.materia;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a id="editar" onClick="onEdit(this)">Editar</a>
                       <a id="eliminar" onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("insumo").value = "";
    document.getElementById("materia").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("matricula").value = selectedRow.cells[1].innerHTML;
    document.getElementById("insumo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("materia").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.matricula;
    selectedRow.cells[2].innerHTML = formData.insumo;
    selectedRow.cells[3].innerHTML = formData.materia;
}

function onDelete(td) {
    if (confirm('Borrar')) {
        row = td.parentElement.parentElement;
        document.getElementById("listainsumos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreValidationError").classList.contains("hide"))
            document.getElementById("nombreValidationError").classList.add("hide");
    }
    return isValid;
}