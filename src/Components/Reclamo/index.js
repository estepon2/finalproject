import React from 'react'
import ReactDom from 'react-dom'
import { Container, Col, Row, Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap';

class Reclamo extends React.Component{
    render(){
        return(
            <Container>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Numero de Reclamo" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Descripcion" />
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        )
    }
}

export default Reclamo