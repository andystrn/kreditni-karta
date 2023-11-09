import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useRef } from 'react';

function CreditForm() {
  const creditNum1Ref = useRef('');
  const creditNum2Ref = useRef('');
  const creditNum3Ref = useRef('');
  const creditNum4Ref = useRef('');

  const changeFocus = (currentRef, nextRef) => {
    if (currentRef.current.value.length === 4) {
      nextRef.current.focus();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    creditNum1Ref.current.value = '';
    creditNum2Ref.current.value = '';
    creditNum3Ref.current.value = '';
    creditNum4Ref.current.value = '';
    console.log('formular odeslan')
  }

  return (
    <div className='border rounded shadow'>
      <div className='container-fluid p-4 fs-5 text-white text-uppercase' style={{ backgroundColor: "DodgerBlue" }}>Bezpečná platba kartou</div>
      <Form onSubmit={handleSubmit} className='p-4'>
        <Form.Group controlId="formCardNumber">
          <Row className='align-items-center'>
            <Col sm={4}>
              <Form.Label className="">Číslo vaší karty:</Form.Label>
            </Col>
            <Col sm={2} className="my-1">
              <Form.Control maxLength={4} type="text" ref={creditNum1Ref} onChange={() => changeFocus(creditNum1Ref, creditNum2Ref)} />
            </Col>
            <Col sm={2} className="my-2">
              <Form.Control maxLength={4} type="text" ref={creditNum2Ref} onChange={() => changeFocus(creditNum2Ref, creditNum3Ref)} />
            </Col>
            <Col sm={2} className="my-3">
              <Form.Control maxLength={4} type="text" ref={creditNum3Ref} onChange={() => changeFocus(creditNum3Ref, creditNum4Ref)} />
            </Col>
            <Col sm={2} className="my-4">
              <Form.Control maxLength={4} type="text" ref={creditNum4Ref} />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-4" controlId="cardValidity">
          <Row>
            <Col sm={4}>
              <Form.Label className="">Platnost karty do:</Form.Label>
            </Col>
            <Col sm={3}>
              <Form.Select aria-label="validity-months">
                <option> </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Form.Select>
            </Col>
            <Col sm={3}>
              <Form.Select aria-label="validity-ears">
                <option> </option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formValidCode">
          <Row className='align-items-center'>
            <Col sm={4}>
              <Form.Label className="">Ověřovací kód:</Form.Label>
            </Col>
            <Col sm={3}>
              <Form.Control maxLength={3} type="text" />
            </Col>
          </Row>
        </Form.Group>
        <Row className='d-flex justify-content-center mt-5'>
          <Button variant="primary" type="submit" style={{ maxWidth: '200px' }}>
            Zaplatit 263,00 CZK
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default CreditForm;