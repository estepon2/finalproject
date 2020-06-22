import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Menu from '../menu'


class App extends React.Component{

    onPolizaSelected(poliza){
        this.setState({polizaSelected: poliza})
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col sm="6">
                        <Menu></Menu>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App