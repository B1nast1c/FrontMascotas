import React from 'react'

export const Register = () => {
    return (
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mr-auto">
                        <h2>Registro</h2>
                        <p class="mb-5">
                            ¡Estás a un click de distancia de hacer felices a tus mascotas,
                            y nada mejor que nuestra tienda especializada en tus amigos animales!,
                            los compañeros de tus aventuras y emociones
                        </p>
                    </div>

                    <div class="col-md-6">
                        <form class="mb-5" method="post" id="contactForm" name="contactForm">
                            <div class="row">

                                <div class="col-md-12 form-group">
                                    <label for="name" class="col-form-label">Nombre</label>
                                    <input type="text" class="form-control" name="name" id="name" />
                                    <label for="apellido-paterno" class="col-form-label">Apellido Paterno</label>
                                    <input type="text" class="form-control" name="apellido-paterno" id="a-paterno" />
                                    <label for="apellido-materno" class="col-form-label">Apellido Materno</label>
                                    <input type="text" class="form-control" name="apellido-materno" id="a-materno" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="f-nac" class="col-form-label">Fecha de Nacimiento</label>
                                    <input type="date" class="form-control" name="f-nac" id="f-nac" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="direccion" class="col-form-label">Dirección</label>
                                    <input type="text" class="form-control" name="direccion" id="direccion" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="email" class="col-form-label">Email</label>
                                    <input type="email" class="form-control" name="email" id="email" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <input type="submit" value="Registrarse" class="btn btn-primary rounded-0 py-2 px-4" id="register" />
                                    <span class="submitting"></span>
                                </div>
                            </div>
                        </form>

                        <div id="form-message-warning mt-4"></div>
                        <div id="form-message-success">
                            Your message was sent, thank you!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
