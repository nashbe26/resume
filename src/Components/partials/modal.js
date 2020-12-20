import react,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';

const ModalBack = ()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
              <Modal show={show} onHide={handleShow}>
                    <Modal.Header closeButton  onClick={handleClose}>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><img src='' style={{width:100+'%',height:'auto'}}/></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )               
}
export default ModalBack;