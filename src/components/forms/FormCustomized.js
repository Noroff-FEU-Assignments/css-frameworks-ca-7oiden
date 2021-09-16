import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormCustomized() {
  return (
    <Form className="form">
      <Form.Group className="form-group" controlId="formBasicNam">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="form-group" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="form-group" controlId="formBasicWebsite">
        <Form.Label>Website</Form.Label>
        <div className="d-flex">
          <div className="form-control-prefix">
            <span>https://</span>
          </div>
          <Form.Control id="form-control-website" type="text" />
        </div>
      </Form.Group>

      <Form.Group
        className="form-group"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>

      <Form.Group className="form-group" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details to whomever we want"
        />
      </Form.Group>

      <Button className="form-button" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCustomized;
