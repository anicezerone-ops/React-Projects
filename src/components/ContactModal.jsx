import { Modal, Button } from "react-bootstrap";

export default function ContactModal({ jsonData, closeModal }) {
  return (
    <Modal show={true} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Submitted Data</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <pre
          style={{
            backgroundColor: "#f5f5f5",
            padding: "1rem",
            borderRadius: "0.5rem"
          }}
        >
          {jsonData}
        </pre>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Dismiss
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
