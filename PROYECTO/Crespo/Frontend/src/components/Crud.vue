<template>
    <nav class="navbar navbar-expand-lg bg-dark mb-5  ">
        <div class="container-fluid  ">
            <a class="navbar-brand text-white fs-2" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-5">
                    <a class="nav-link" href="#"> <router-link to="/"
                            class="list-style-none text-decoration-none fs-5 mx-2 text-white">Inicio</router-link></a>
                    <a class="nav-link" href="#"><router-link
                            class="list-style-none text-decoration-none fs-5 mx-2 text-white" to="/login"
                            v-if="show">Login</router-link></a>
                    <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
                            to="/crud" v-if="!show">Crud</router-link></a>
                </div>
            </div>
        </div>
    </nav>
  
    <div class="container-fluid">
        <div class="col">
            <div class="row">
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!datospacienteshow">
                    <h2 class="text-center ">Ingresar Datos Paciente</h2>
                    <form action="" class="" @submit.prevent="agregarPaciente()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="datospaciente.nombre">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Tsangre</label>
                                <input type="text" class="form-control" v-model="datospaciente.tsangre">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Identificacion</label>
                                <input type="text" class="form-control" v-model="datospaciente.identificacion">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>
  
                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!datostipoexamenshow">
                    <h2 class="text-center ">Ingresar Datos Tipo Examen</h2>
                    <form action="" class="" @submit.prevent="agregarTipoExamen()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion</label>
                                <input type="text" class="form-control" v-model="datostipoexamen.descripcion">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Indicaciones</label>
                                <input type="text" class="form-control" v-model="datostipoexamen.indicaciones">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>
  
                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!datosresultadoshow">
                    <h2 class="text-center ">Ingresar Datos de Resultado</h2>
                    <form action="" class="" @submit.prevent="agregardatoresultado()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Resultado Examen</label>
                                <input type="text" class="form-control" v-model="datoresultado.resultadoexamen">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Valor pagado</label>
                                <input type="text" class="form-control" v-model="datoresultado.valorpagado">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Observaciones</label>
                                <input type="text" class="form-control" v-model="datoresultado.observaciones">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>
  
                </div>
            </div>
            <div class="row">
                <table class="table table-striped w-75 text-center">
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Tipo Sangre</th>
                        <th>Identificacion</th>
                        <th>Acciones</th>
  
                    </tr>
                    <tr v-for="(item, index) in datopaciente" :key="index">
                        <td>{{ item._id }}</td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.tsangre }}</td>
                        <td>{{ item.identificacion }}</td>
                        <td>
                       
                            <!-- inicio paciente-->
                            <div>
                            <button type="button" class="opacity-25" disabled data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editarpaciente(item._id)">
                              
                       </button>
                       <h1>Actualizar</h1>
                      <form action="" class="" @submit.prevent="editarpaciente(item._id)">
  
                          <input  type="text" placeholder="Nombre" class="form-control"  v-model="datospaciente.nombre">
                          <input type="text"  placeholder="Tsangre" class="form-control" v-model="datospaciente.tsangre">
                          <input type="text"  placeholder="Identificacion"  class="form-control" v-model="datospaciente.identificacion">
                    
           
                          <button class="btn btn-primary w-50 mb-5 mt-5 ">Actulizando</button>
                      </form>
              
                      </div>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                          aria-hidden="true">
                        
                    
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close">
                                    
                                      </button>
                                  </div>
  
                        
                                 
                                  <div class="modal-body">
                                      <form action="" class="" @submit.prevent="editarpaciente(datospaciente)">
                          <div class="mx-1 mt-3">
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">Nombre</label>
                                  <input type="text" class="form-control" v-model="datospaciente.nombre">
  
                                
                              </div>
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">Tsangre</label>
                                  <input type="text" class="form-control" v-model="datospaciente.tsangre">
                              </div>
  
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">Identificacion</label>
                                  <input type="text" class="form-control" v-model="datospaciente.identificacion">
                              </div>
                              <div class="d-flex justify-content-center">
                                  <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                              </div>
  
                          </div>
                      </form>
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary"
                                          data-bs-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary">Save changes</button>
                                  </div>
                              </div>
                          </div>
                      </div>
  
  
  
  
                            <!-- end -->
                            <button class="btn btn-danger bg-danger" @click="eliminardatospaciente(item._id)">Eliminar</button>
                        </td>
                    </tr>
                </table>
                <table class="table table-striped w-75">
                    <tr>
                        <th>id</th>
                        <th>Descripcion</th>
                        <th>Indicaciones</th>
                        <th>Acciones</th>
                    </tr>
                    <tr v-for="(item, index) in datotipoexamen" :key="index">
                        <td>{{ item._id }}</td>
                        <td>{{ item.descripcion }}</td>
                        <td>{{ item.indicaciones }}</td>
                        <td>
                            <!-- inicio tutorado-->
                          
                            <div>
                                <button type="button" class="opacity-25" disabled data-bs-toggle="modal" data-bs-target="#exampleModal1" @click="editartipoexamen(item._id)">
                                                       
                                                     </button>
  
                                                     <h1>Actualizar</h1>
                      <form action="" class="" @submit.prevent="editartipoexamen(item._id)">
  
                          <input  type="text" placeholder="Descripcion" class="form-control"  v-model="datostipoexamen.descripcion">
                          <input type="text"  placeholder="Indicaciones" class="form-control" v-model="datostipoexamen.indicaciones">
                     
           
                          <button class="btn btn-primary w-50 mb-5 mt-5 ">Actulizando</button>
                      </form>
                            </div>
  
  
                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                          aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <form action="" class="" @submit.prevent="editarenbaseclientes(datostipoexamen)">
                          <div class="mx-1 mt-3">
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">Descripcion</label>
                                  <input type="text" class="form-control" v-model="datostipoexamen.descripcion">
                              </div>
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">Indicaciones</label>
                                  <input type="text" class="form-control" v-model="datostipoexamen.indicaciones">
                              </div>
                              <div class="d-flex justify-content-center">
                                  <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                              </div>
                          </div>
                      </form>
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary"
                                          data-bs-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary">Save changes</button>
                                  </div>
                              </div>
                          </div>
                      </div>
  
  
  
  
                            <!-- end next -->
                            <button class="btn btn-danger bg-danger" @click="eliminardatostipoexamen(item._id)">Eliminar</button>
                        </td>
  
                    </tr>
                </table>
                <table class="table table-striped w-75">
                    <tr>
                        <th>id</th>
                        <th>Resultado Examen</th>
                        <th>Valor Pagado</th>
                        <th>Observaciones</th>
                        <th>Acciones</th>
  
                    </tr>
  
                    <tr v-for="(item, index) in datosresultado" :key="index">
                        <td>{{ item._id }}</td>
                        <td>{{ item.resultadoexamen }}</td>
                        <td>{{ item.valorpagado }}</td>
                        <td>{{ item.observaciones }}</td>
                        <td>
                          
                        <!-- inicio resultado-->
  
                        <div>
                            <button type="button"  class="opacity-25" disabled  data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="editarresultado(item._id)">
                          
                                                 </button>
                                                 <h1>Actualizar</h1>
                      <form action="" class="" @submit.prevent="editarresultado(item._id)">
  
                          <input  type="text" placeholder="ResultadoExamen" class="form-control"  v-model="datoresultado.resultadoexamen">
                          <input type="text"  placeholder="ValorPagado" class="form-control" v-model="datoresultado.valorpagado">
                          <input type="text"  placeholder="Observaciones"  class="form-control" v-model="datoresultado.observaciones">
           
                          <button class="btn btn-primary w-50 mb-5 mt-5 ">Actulizando</button>
                      </form>                      
  
                        </div>
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                          aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <form action="" class="" @submit.prevent="editarenbaseclientes(datoresultado)">
                          <div class="mx-1 mt-3">
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">ResultadoExamen</label>
                                  <input type="text" class="form-control" v-model="datoresultado.asignatura">
                              </div>
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">ValorPagado</label>
                                  <input type="text" class="form-control" v-model="datoresultado.valorpagado">
                              </div>
                              <div class="text-center">
                                  <label for="" class="form-label fs-5">Observaciones</label>
                                  <input type="text" class="form-control" v-model="datoresultado.observaciones">
                              </div>
                              <div class="d-flex justify-content-center">
                                  <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                              </div>
                          </div>
                      </form>
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary"
                                          data-bs-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary">Save changes</button>
                                  </div>
                              </div>
                          </div>
                      </div>
  

                            <!-- end next -->
                          
                           <button class="btn btn-danger bg-danger" @click="eliminardatosresultado(item._id)">Eliminar</button></td>
                    </tr>
  
                </table>
  
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
        return {
            datopaciente: [],
            datotipoexamen: [],
            datoresultado: [],
            datospaciente: {
                nombre: '',
                tsangre: '',
                identificacion: ''
            },
            datostipoexamen: {
                descripcion: '',
                indicaciones: ''
            },
            datoresultado: {
                resultadoexamen: '',
                valorpagado: '',
                observaciones: ''
            },
            datospacienteshow: false,
            datostipoexamenshow: true,
            datosresultadoshow: true
        }
    },
  
    created() {
        this.mostrar()
    },
  
    methods: {
  
        mostrar() {
            axios.get('http://localhost:5000/paciente/')
                .then(resp => {
                    this.datopaciente = resp.data.paciente
                    console.log(resp)
                }).catch((error)=>{console.log(error)})
            axios.get('http://localhost:5000/tipoexamen/')
                .then(resp => {
                    this.datotipoexamen = resp.data.tipoexamen
                    console.log(resp)
                })
            axios.get('http://localhost:5000/resultado/')
                .then(resp => {
                    this.datoresultado = resp.data.resultado
                    console.log(resp)
                }).catch(e=> {console.log(e)})
        },
        agregarPaciente() {
            axios.post('http://localhost:5000/paciente/create', this.datospaciente)
                .then(resp => {
                    this.datopaciente.push(resp.data.paciente)
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(f=>{
                    this.datospacienteshow = true;
                    this.datostipoexamenshow = false;
                    
                    this.datospaciente.nombre = "";
                    this.datospaciente.tsangre = "";
                    this.datospaciente.identificacion = ""
                })
  
        },
        agregarTipoExamen() {
  
            axios.post('http://localhost:5000/tipoexamen/create', this.datostipoexamen)
                .then(resp => {
                    this.datotipoexamen.push(resp.data.tipoexamen)
                })
                .catch(e => {
                    console.log(e)
                })
            this.datostipoexamenshow = true;
            this.datosresultadoshow = false;
        },
        agregardatoresultado() {
  
            axios.post('http://localhost:5000/tipoexamen/create', this.datoresultado)
                .then(resp => {
                    this.datoresultado.push(resp.data.resultado)
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(f=>{
                    this.datospacienteshow = false;
                    this.datosresultadoshow = true;
                    
                    this.datoresultado.resultadoexamen = "";
                    this.datoresultado.valorpagado= ""
                    this.datoresultado.observaciones = ""
                })
       
        },
        eliminardatospaciente(_id){
            axios.delete(`http://localhost:5000/paciente/${ _id }`)
            .then(resp =>{
                const index = this.datopaciente.findIndex(item => item._id === resp.data._id);
                this.datopaciente.splice(index, 1)
            })
        },
        eliminardatostipoexamen(_id){
            axios.delete(`http://localhost:5000/tipoexamen/${ _id }`)
            .then(resp =>{
                const index = this.datotipoexamen.findIndex(item => item._id === resp.data._id);
                this.datotipoexamen.splice(index, 1)
            })
        },
        eliminardatosresultados(_id){
            axios.delete(`http://localhost:5000/resultado/${ _id }`)
            .then(resp =>{
                const index = this.datoresultado.findIndex(item => item._id === resp.data._id);
                this.datoresultado.splice(index, 1)
            })
        },
        editarpaciente(_id){
          axios.put(`http://localhost:5000/paciente/${_id}`, this.datospaciente)
           .then(resp => {
            
                   console.log(resp)
              }).catch((error)=>{console.log(error)})
  
          },
         editartipoexamen(_id){
              axios.put(`http://localhost:5000/tipoexamen/${_id}`,  this.datostipoexamen)
              .then(resp => {
            
            console.log(resp)
       }).catch((error)=>{console.log(error)})
  
   },
         editarresultado(_id){
              axios.put(`http://localhost:5000/resultado/${_id}`,  this.datoresultado)
              .then(resp => {
            
            console.log(resp)
       }).catch((error)=>{console.log(error)})
  
   },
    }
  }
  </script>
  
  <style  scoped>
  table { 
  width: 750px; 
  border-collapse: collapse; 
  margin:50px auto;
  }
  
  /* Zebra striping */
  tr:nth-of-type(odd) { 
  background: #eee; 
  }
  
  th { 
  background: #3498db; 
  color: white; 
  font-weight: bold; 
  }
  
  td, th { 
  padding: 10px; 
  border: 1px solid #ccc; 
  text-align: left; 
  font-size: 18px;
  }
  
  /* 
  Max width before this PARTICULAR table gets nasty
  This query will take effect for any screen smaller than 760px
  and also iPads specifically.
  */
  @media 
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {
  
  table { 
      width: 100%; 
  }
  
  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr { 
    display: block; 
  }
  
  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr { 
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tr { border: 1px solid #ccc; }
  
  td { 
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee; 
    position: relative;
    padding-left: 50%; 
  }
  
  td:before { 
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%; 
    padding-right: 10px; 
    white-space: nowrap;
    /* Label the data */
    content: attr(data-column);
  
    color: #000;
    font-weight: bold;
  }
  
  }
  </style>