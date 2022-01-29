import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap'
import './Login.css'

class Registrarse extends React.Component {
  state={
    abierto: false,
  }

  abrirLogin=()=>{
    this.setState({abierto: !this.state.abierto})
  }
   render(){ 
     const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
     }
  return (
    <>
     <div className='principal'>
       <div className='secundario'>
        <Button onClick={this.abrirLogin}> RECIBIR PROMOCIONES </Button>

       </div>
      
      </div>
     <Modal isOpen={this.state.abierto} style={modalStyles}>
       <ModalHeader>
        Recibir Promociones
       </ModalHeader>
       <ModalBody>
         <FormGroup>
           <Label for='usuario'>usuario</Label>
           <Input type='text' id='usuario' />
           </FormGroup>
           <FormGroup>
           <Label for='email'>email</Label>
           <Input type='text' id='email' />
         </FormGroup>
         <FormGroup>
           <Label for='telefo'>Telefono</Label>
           <Input type='text' id='numero telefonico' />
         </FormGroup>
       </ModalBody>
       <ModalFooter>
         <Button>Registrarme</Button>
         <Button onClick={this.abrirLogin}>Cerrar</Button>
       </ModalFooter>
     </Modal>


    </>
   
  )
}
}

export default Registrarse