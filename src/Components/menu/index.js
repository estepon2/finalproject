import React from 'react'
import ReactDom from 'react-dom'
import { Container} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Poliza from '../Poliza'
import Reclamo  from '../Reclamo'

class Menu extends React.Component{

    state = {
        polizaVisible : false,
        reclamoVisible : false
    }
    render(){
        return(
            <Container>
                <Button variant="primary" onClick={()=> {this.setState({polizaVisible : true, reclamoVisible : false} )}} size="lg" active>
                    Pólizas
                 </Button>
                <Button variant="primary"  onClick={()=> {this.setState({polizaVisible : false, reclamoVisible : true} )}} size="lg" active>
                    Reclamos 
                 </Button>
                 {this.state.polizaVisible? <Poliza/>: null}
                 {this.state.reclamoVisible? <Reclamo/>: null}
               </Container>
        )
    }
}

export default Menu