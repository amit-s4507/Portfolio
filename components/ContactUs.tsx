import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classnames from 'classnames';
import Alert from './Alerts';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

export const ContactUs = () => {

  const [emailid, setEmailId] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");

  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<{
    color: string;
    icon: string;
    message: string;
  } | null>(null);

  const successAlert = {
    color: 'success',
    icon: 'ni ni-like-2',
    message: ' Your message has been sent successfully!',
  };

  const errorAlert = {
    color: 'danger',
    icon: 'ni ni-bell-55',
    message: ' Oops! Something went wrong. Please try again later.',
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting');

    console.log(form.current);

    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    var templateParams = {
      name: name,
      email: emailid,
      notes: body
    };

    console.log(templateParams);

    if (
      emailJsServiceId &&
      emailJsTemplateId &&
      emailJsPublicKey &&
      templateParams
    ) {

      // console.log("sending...")
      emailjs
        .send(
          emailJsServiceId,
          emailJsTemplateId,
          templateParams,
          emailJsPublicKey
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text);
            setAlert(successAlert);
          },
          (error) => {
            console.log('FAILED...', error);
            setAlert(errorAlert);
          }
        );

      // console.log("sent...")
    }
  };

  return (
    <>
      <section className="section section-lg section-shaped rounded-0" style={{ background: 'linear-gradient(90deg, rgba(70,65,149,1) 22%, rgba(142,83,185,1) 75%, rgba(226,81,200,1) 100%)' }}>
        <form ref={form} onSubmit={sendEmail}>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames('mt-5', {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                          onChange={(e) => { setName(e.target.value); console.log(name)}}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                          onChange={(e) => { setEmailId(e.target.value); console.log(emailid)}}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        onChange={(e) => { setBody(e.target.value); console.log(body)}}
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
