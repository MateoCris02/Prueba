function showEditClientModal(clientId) {
    const modalHtml = `
        <div class="modal fade" id="editClientModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Editar Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="editClientForm">
                            <ul class="nav nav-tabs" id="clientTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="cliente-tab" data-bs-toggle="tab" data-bs-target="#cliente" type="button" role="tab" aria-controls="cliente" aria-selected="true">Cliente</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contacto-tab" data-bs-toggle="tab" data-bs-target="#contacto" type="button" role="tab" aria-controls="contacto" aria-selected="false">Contacto</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="planes-tab" data-bs-toggle="tab" data-bs-target="#planes" type="button" role="tab" aria-controls="planes" aria-selected="false">Planes</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="log-tab" data-bs-toggle="tab" data-bs-target="#log" type="button" role="tab" aria-controls="log" aria-selected="false">Log</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="clientTabsContent">
                                <div class="tab-pane fade show active" id="cliente" role="tabpanel" aria-labelledby="cliente-tab">
                                    <div class="mb-3">
                                        <label for="editFecha" class="form-label">Fecha *</label>
                                        <input type="date" class="form-control" id="editFecha" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editNombreAbonado" class="form-label">Nombre del Abonado *</label>
                                        <input type="text" class="form-control" id="editNombreAbonado" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editApellidoAbonado" class="form-label">Apellido del Abonado *</label>
                                        <input type="text" class="form-control" id="editApellidoAbonado" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editCiDni" class="form-label">CI/DNI *</label>
                                        <input type="text" class="form-control" id="editCiDni" required>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contacto" role="tabpanel" aria-labelledby="contacto-tab">
                                    <div class="mb-3">
                                        <label for="editTelefonoContacto" class="form-label">Teléfono de Contacto *</label>
                                        <input type="tel" class="form-control" id="editTelefonoContacto" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editBarrio" class="form-label">Barrio</label>
                                        <select class="form-select" id="editBarrio" required>
                                            <option value="">Seleccionar</option>
                                            <option value="centro">Centro</option>
                                            <option value="norte">Norte</option>
                                            <option value="sur">Sur</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editDireccion" class="form-label">Dirección</label>
                                        <input type="text" class="form-control" id="editDireccion" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Ubicación</label>
                                        <div id="editMap" style="height: 300px;"></div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <label for="editLatitud" class="form-label">Latitud</label>
                                            <input type="text" class="form-control" id="editLatitud" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="editLongitud" class="form-label">Longitud</label>
                                            <input type="text" class="form-control" id="editLongitud" readonly>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="planes" role="tabpanel" aria-labelledby="planes-tab">
                                    <div class="mb-3">
                                        <label for="editServicios" class="form-label">Servicios *</label>
                                        <select class="form-select" id="editServicios" required>
                                            <option value="">Opciones...</option>
                                            <option value="internet">Internet</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editPlan" class="form-label">Plan *</label>
                                        <select class="form-select" id="editPlan" required>
                                            <option value="">Seleccionar...</option>
                                            <option value="basico">Básico</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editVendedor" class="form-label">Vendedor </label>
                                        <select class="form-select" id="editVendedor" required>
                                            <option value="OFICINA">OFICINA</option>
                                            <option value="vendedor1">Vendedor 1</option>
                                            <option value="vendedor2">Vendedor 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="log" role="tabpanel" aria-labelledby="log-tab">
                                    <div class="mb-3">
                                        <label for="editObservaciones" class="form-label">Observaciones</label>
                                        <textarea class="form-control" id="editObservaciones" rows="3"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="editLog" class="form-label">Historial de cambios</label>
                                        <textarea class="form-control" id="editLog" rows="5" readonly></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" id="updateClientBtn">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    const editClientModal = new bootstrap.Modal(document.getElementById('editClientModal'));
    const updateClientBtn = document.getElementById('updateClientBtn');
    let editMap, editMarker;

    editClientModal.show();

    editClientModal._element.addEventListener('shown.bs.modal', function () {
        initEditMap();
        loadClientData(clientId);
    });

    function initEditMap() {
        editMap = L.map('editMap').setView([-25.5265, -54.6379], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(editMap);
        
        editMarker = L.marker([-25.5265, -54.6379], {draggable: true}).addTo(editMap);
        
        editMarker.on('dragend', updateEditLatLng);
        editMap.on('click', function(e) {
            editMarker.setLatLng(e.latlng);
            updateEditLatLng();
        });

        const input = document.getElementById('editDireccion');
        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                editMarker.setLatLng([lat, lng]);
                editMap.setView([lat, lng], 15);
                updateEditLatLng();
            }
        });
    }

    function updateEditLatLng() {
        const position = editMarker.getLatLng();
        document.getElementById('editLatitud').value = position.lat.toFixed(6);
        document.getElementById('editLongitud').value = position.lng.toFixed(6);
    }

    function loadClientData(clientId) {
        // Simulated data loading
        document.getElementById('editFecha').value = '2023-05-20';
        document.getElementById('editNombreAbonado').value = 'Juan';
        document.getElementById('editApellidoAbonado').value = 'Pérez';
        document.getElementById('editCiDni').value = '12345678';
        document.getElementById('editTelefonoContacto').value = '123456789';
        document.getElementById('editBarrio').value = 'centro';
        document.getElementById('editDireccion').value = 'Calle Principal 123';
        document.getElementById('editLatitud').value = '-25.5265';
        document.getElementById('editLongitud').value = '-54.6379';
        document.getElementById('editServicios').value = 'internet';
        document.getElementById('editPlan').value = 'basico';
        document.getElementById('editVendedor').value = 'OFICINA';
        document.getElementById('editObservaciones').value = 'Cliente frecuente';
        document.getElementById('editLog').value = 'Creado: 2023-05-20\nÚltima modificación: 2023-05-20';

        editMarker.setLatLng([-25.5265, -54.6379]);
        editMap.setView([-25.5265, -54.6379], 15);
    }

    updateClientBtn.addEventListener('click', function() {
        if (document.getElementById('editClientForm').checkValidity()) {
            Swal.fire({
                title: 'Actualizando...',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    Swal.fire(
                        '¡Actualizado!',
                        'Los datos del cliente han sido actualizados exitosamente.',
                        'success'
                    )
                    editClientModal.hide();
                }
            })
        } else {
            Swal.fire(
                'Error',
                'Por favor, complete todos los campos requeridos.',
                'error'
            )
        }
    });
}