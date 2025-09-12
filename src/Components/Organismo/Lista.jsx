import ListItems from '../Molecula/ListItems'
import AddComp from '../Molecula/AddComp'
import Titulo from '../Atomo/Titulo'
function Lista (){
    
    return(
        <div className='Contenedor'>
            <Titulo>Lista de Luciano Sigot</Titulo>
            <AddComp></AddComp>
            <ol>
                <li><ListItems></ListItems></li>
            </ol>
        </div>
    )
}
export default Lista;