function showAddClientModal() {
    const modalHtml = `
        <div class="modal fade" id="addClientModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Crear Nuevo Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="addClientForm">
                            <div class="mb-3">
                                <label for="fecha" class="form-label">Fecha</label>
                                <input type="date" class="form-control" id="fecha" required>
                            </div>
                            <div class="mb-3">
                                <label for="nombreAbonado" class="form-label">Nombre del Abonado</label>
                                <input type="text" class="form-control" id="nombreAbonado" required>
                            </div>
                            <div class="mb-3">
                                <label for="apellidoAbonado" class="form-label">Apellido del Abonado</label>
                                <input type="text" class="form-control" id="apellidoAbonado" required>
                            </div>
                            <div class="mb-3">
                                <label for="telefonoContacto" class="form-label">Teléfono de Contacto</label>
                                <input type="tel" class="form-control" id="telefonoContacto" required>
                            </div>
                            <div class="mb-3">
                                <label for="ciDni" class="form-label">CI/DNI</label>
                                <input type="text" class="form-control" id="ciDni" required>
                            </div>
                            <div class="mb-3">
                                <label for="servicios" class="form-label">Servicios</label>
                                <select class="form-select" id="servicios" required>
                                    <option value="">Opciones...</option>
                                    <option value="internet">Internet</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="plan" class="form-label">Plan</label>
                                <select class="form-select" id="plan" required>
                                    <option value="">Seleccionar...</option>
                                    <option value="basico">Básico</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="vendedor" class="form-label">Vendedor</label>
                                <select class="form-select" id="vendedor" required>
                                    <option value="OFICINA">OFICINA</option>
                                    <option value="vendedor1">Vendedor 1</option>
                                    <option value="vendedor2">Vendedor 2</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="barrio" class="form-label">Barrio</label>
                                <select class="form-select" id="barrio" required>
                                    <option value="">Seleccionar</option>
                                    <option value="centro">Centro</option>
                                    <option value="norte">Norte</option>
                                    <option value="sur">Sur</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="observaciones" class="form-label">Observaciones</label>
                                <textarea class="form-control" id="observaciones" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ubicación</label>
                                <div id="map" style="height: 300px;"></div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="latitud" class="form-label">Latitud</label>
                                    <input type="text" class="form-control" id="latitud" readonly>
                                </div>
                                <div class="col-md-6">
                                    <label for="longitud" class="form-label">Longitud</label>
                                    <input type="text" class="form-control" id="longitud" readonly>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" id="saveClientBtn">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    const addClientModal = new bootstrap.Modal(document.getElementById('addClientModal'));
    const saveClientBtn = document.getElementById('saveClientBtn');
    let map, marker;

    addClientModal.show();

    addClientModal._element.addEventListener('shown.bs.modal', function () {
        initMap();
    });

    function initMap() {
        map = L.map('map').setView([-25.5265, -54.6379], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        
        marker = L.marker([-25.5265, -54.6379], {draggable: true}).addTo(map);
        
        marker.on('dragend', updateLatLng);
        map.on('click', function(e) {
            marker.setLatLng(e.latlng);
            updateLatLng();
        });

        const input = document.getElementById('direccion');
        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                marker.setLatLng([lat, lng]);
                map.setView([lat, lng], 15);
                updateLatLng();
            }
        });
    }

    function updateLatLng() {
        const position = marker.getLatLng();
        document.getElementById('latitud').value = position.lat.toFixed(6);
        document.getElementById('longitud').value = position.lng.toFixed(6);
    }

    saveClientBtn.addEventListener('click', function() {
        if (document.getElementById('addClientForm').checkValidity()) {
            Swal.fire({
                title: 'Guardando...',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    Swal.fire(
                        '¡Guardado!',
                        'El cliente ha sido agregado exitosamente.',
                        'success'
                    )
                    addClientModal.hide();
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