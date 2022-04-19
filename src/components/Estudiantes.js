import axios from "axios";
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const url = "https://backend-estudiantes.herokuapp.com/data/"

export default class Estudiantes extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            modal: false,
            id: ''
        }
    }

    componentDidMount() {
        this.peticionGet()
    }

    // componentDidUpdate() {
    //     console.log('se actualizó');
    // }

    peticionGet = () => {
        axios.get(url)
            .then(resp => {
                this.setState({
                    data: resp.data
                })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    peticionDelete = (id) => {
        axios.delete(url + id)
            .then(resp => {
                this.peticionGet()
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Celular</th>
                            <th>Dirección</th>
                            <th>Imagen</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(estudiante => (
                                <tr key={estudiante.id}>
                                    <td>{estudiante.id}</td>
                                    <td>{estudiante.documento}</td>
                                    <td>{estudiante.nombres}</td>
                                    <td>{estudiante.apellidos}</td>
                                    <td>{estudiante.telefono}</td>
                                    <td>{estudiante.celular}</td>
                                    <td>{estudiante.direccion}</td>
                                    <td><img src={estudiante.imagen} width="50px" height="70px" alt={`imagen de ${estudiante.nombres}`} /></td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={() => this.setState({
                                                modal: true,
                                                id: estudiante.id
                                            })}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <Modal isOpen={this.state.modal}>
                    <ModalBody>
                        Está seguro de eliminar el estudiante
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                            onClick={() => {
                                this.peticionDelete(this.state.id)
                                this.setState({
                                    modal: false
                                })
                            }}
                        >Sí</button>
                        <button className="btn btn-secundary"
                            onClick={() => this.setState({
                                modal: false
                            })}
                        >No</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
