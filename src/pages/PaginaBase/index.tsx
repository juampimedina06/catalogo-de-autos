import Cabecera from '../../components/Cabecera/Cabecera'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'
import Pie from '../../components/Pie/Pie'
import CabeceraSuperior from '../../components/CabeceraSuperior/CabeceraSuperior'


function PaginaBase() {
  return (
      <main>
        <CabeceraSuperior />
        <Cabecera />
            <Container>
                <Outlet />
            </Container>
        <Pie />
    </main>
  )
}

export default PaginaBase