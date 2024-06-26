import { Link } from "react-router-dom"

function NavbarInterno() {
  return (
    <div className="xs:flex-col md:flex-row flex max-w-full xs:h-48 md:h-[4rem] xl:mt-0 xl:h-12 bg-customGreen border-customYellow border-2 justify-around items-center font-semibold">
  <Link to="/institucional" className="xl:text-2xl xs:text-md  text-customYellow hover:text-white">Institucional</Link>
  <Link to="/ProductosYservicios" className="xl:text-2xl xs:text-md text-customYellow hover:text-white">Productos y servicios</Link>
  <Link to="/CanalesDeAtencion" className="xl:text-2xl xs:text-md text-customYellow hover:text-white">Canales de atención</Link>
  <Link to="/UniteASaintPatrick" className="xl:text-2xl xs:text-md text-customYellow hover:text-white">Unete a Saint Patrick</Link>
</div>

  )
}
export default NavbarInterno