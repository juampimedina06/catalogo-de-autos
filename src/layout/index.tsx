import Cabecera from '../components/Cabecera/Cabecera'
import Container from '../components/Container'
import { Outlet } from 'react-router-dom'
import Pie from '../components/Pie/Pie'
import BotonWasap from '../components/BotonWasap/BotonWasap'


function PaginaBase() {
  return (
      <main>
        <BotonWasap />
        <Cabecera />
            <Container>
                <Outlet />
            </Container>
        <Pie />
    </main>
  )
}

export default PaginaBase