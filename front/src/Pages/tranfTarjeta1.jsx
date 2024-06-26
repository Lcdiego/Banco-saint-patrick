import { useState } from 'react';
import tarjeta_1 from '../assets/tarjeta1.png'

import '../index.css'
import { FcSignature } from "react-icons/fc";
import axios from 'axios';
import { Link } from 'react-router-dom';

const TransfTarjeta1 = (nombre) => {
    const [tarjeta1Seleccionada, setTarjeta1Seleccionada] = useState(false);
    const [tarjeta2Seleccionada, setTarjeta2Seleccionada] = useState(false);
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    console.log(click);
    const [monto, setmMonto] = useState("");
    const [destinatario, setdestinatario] = useState("");
    const [mensaje, setMensaje] = useState(false);
    const [envioMensaje, setEnvioMensaje] = useState("");
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [pin, setPin] = useState("");




    const EnvioFormulario = async (event) => {

        event.preventDefault()
        try {
            const respuesta = await axios.post('http://localhost:5000/Transferir', { monto: Number(monto), destinatario: Number(destinatario) });
            setLogin(respuesta.data.monto);

            setMensaje(true);
            setEnvioMensaje('sesion iniciada!!!');

            setNumeroTarjeta("");
            setPin("");

        } catch (error) {
            console.log('error al logearse', error)
        }
    }

    const handleTarjeta1Change = () => {
        setTarjeta1Seleccionada(!tarjeta1Seleccionada);
        if (tarjeta2Seleccionada) {
            setTarjeta2Seleccionada(false);
        }
    };

    const handleTarjeta2Change = () => {
        setTarjeta2Seleccionada(!tarjeta2Seleccionada);
        if (tarjeta1Seleccionada) {
            setTarjeta1Seleccionada(false);
        }
    };
    const handleCardClick = () => {
        console.log("Card clicked. Current click state:", click);
        setClick(!click);
    };
    const handleCardClick2 = () => {
        console.log("Card clicked. Current click state:", click2);
        setClick2(!click2);
    };




    return (



        <div className="bg-customBg  w-full min-h-[52vh] flex justify-center items-center ">

            <div className="flex justify-evenly items-center w-full flex-wrap h-[100vh]">
                <div className='w-[100vw] flex justify-center'>
                    <h1 className='font-custom font-normal text-center text-2xl sm:text-4xl'>Confirmar transaccion</h1>
                </div>
                <div>


                    <div className="flex items-center mb-5">
                      
                        <label htmlFor="tarjeta1" className="ml-2 text-black text-xl sm:text-2xl  font-custom font-semibold">
                            Tarjeta 1
                        </label>
                    </div>
                    <div onClick={handleCardClick}>
                            {click ? (
                                <div className={`w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl  ${click ? 'rotated-card' : ''}`}>
                                    <img className="relative object-cover w-full h-[280px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[424px] 2xl:w-[630px] rounded-[1.35rem]" src={tarjeta_1} />
                                    <div className=" w-full  absolute top-1 h-[270px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[383px] flex flex-col justify-around">
                                        <div className="w-full">
                                            <div className=" sm:mt-5 bg-black h-10 sm:h-[2vh]  md:h-[5rem] lg:h-[5rem] xl:h-[5rem]  2xl:h-[3rem] 2xl:h-[5rem]"></div>
                                        </div>
                                        <div className='flex items-end justify-end'>

                                            <div className='bg-green-200 '>

                                                <p className={`text-black ${click2 ? 'rotated-card' : ''}`}>305</p>
                                            </div>

                                            <div className=' '>

                                                <div className="pt-1 bg-white mt-10 flex justify-start w-[365px] ">


                                                    <div className='flex justify-start  '>

                                                        <p className={`font-[200] text-[25px] text-black pr-5  ${click ? 'rotated-card' : ''}`}>
                                                            7000
                                                        </p>

                                                    </div>

                                                    <div className={`w-[154px] flex justify-start ${click ? 'rotated-card' : ''}`}>
                                                        <FcSignature size={36} />
                                                    </div>

                                                </div>


                                            </div>


                                        </div>
                                        <div className="flex justify-end">
                                            <h1 className={`pl-5 ${click ? 'rotated-card' : ''}`}>Firma autorizada</h1>
                                        </div>
                                        <div className="mt-10">
                                            <p className={`text-start pl-5 ${click ? 'rotated-card' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae repellat sed deleniti nihil similique, exercitationem numquam ducimus mollitia quibusdam delectus reprehenderit repellendus! Quisquam ad sapiente vel error exercitationem corrupti.</p>
                                        </div>
                                    </div>
                                </div>


                            ) : (
                                <div>

                                    <div className="w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl ">

                                        <img className="relative object-cover w-full h-[280px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[430px]  2xl:h-[424px] 2xl:w-[630px] rounded-[1.35rem]" src={tarjeta_1} />

                                        <div className="w-full px-8 absolute top-1 h-[270px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[383px] flex flex-col justify-around">

                                            <div className="flex justify-between">
                                                <h1 className="mt-5 text-base sm:text-lg md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-serif font-semibold">Saint Patrick</h1>
                                                <img className="mt-5 w-10 h-15 sm:w-[2rem] sm:h-[4rem] md:w-[6rem] md:h-[8rem] lg:w-24 lg:h-[8rem] xl:w-24 xl:h-[8rem] 2xl:w-24 2xl:h-[8rem]" src='logo.png' />
                                            </div>
                                            <div className="pt-1">
                                                <div className="w-[96px] ">
                                                    <img className="w-10 h-15 sm:w-[2rem] sm:h-[2rem] md:w-[3rem] md:h-[3rem] lg:w-[2.5rem] lg:h-[2.5rem] xl:w-[2.5rem] xl:h-[2.5rem] 2xl:w-12 2xl:h-[3rem]" src='img_chip.jpg' alt="" />
                                                </div>
                                                <div className="flex justify-center">
                                                    <p className="font-[200] tracking-more-wider w-full text-[35px] sm:text-[20px] md:text-[3.9rem] lg:text-[3.7rem] xl:text-[3.8rem] 2xl:text-[3rem]">
                                                        4642 3489 9867 7632
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex justify-end">
                                                <div className="flex justify-around w-[270px]">
                                                    <div className="flex">
                                                        <div className="font-[500] text-md">
                                                            <p className="mr-3 text-black">Valid</p>
                                                            <p className="text-black">from</p>
                                                        </div>
                                                        <p className="font-normal tracking-wider text-2xl">11/15</p>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="font-[500] text-md">
                                                            <p className="mr-3 text-black">Good</p>
                                                            <p className="text-black">thru</p>
                                                        </div>
                                                        <p className="font-normal tracking-wider text-2xl">03/25</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between xl:mb-10 md:mb-10">
                                                <h1 className="text-[20px] sm:text-[28px] md:text-[30px] lg:text[33px] xl:text-[33px] 2xl:text-[35px] font-serif font-semibold">{nombre.login}</h1>
                                                <p className="flex items-end">1425</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>



                            )

                            }
                        </div>

                </div>
                <div className='h-[41vh] mt-[61px] flex  justify-center items-center'>
                    <form onSubmit={EnvioFormulario} className='w-[32vw] h-[86%] flex flex-col justify-around'>

                        <div className="mb-4">
                            <label htmlFor="" className='font-custom font-semibold text-customGrayTranf text-[28px]'>Monto a transferir</label>
                            <input type="numero" onChange={(e) => setNumeroTarjeta(e.target.value)} value={'$- 1400'} id="numero" className="bg-customBg form-input w-full h-[58px] text-[28px] text-customBlack  font-medium  px-4 py-2 border rounded-[1rem] text-gray-700 focus:ring-blue-500" required placeholder="Monto a transferir" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="" className='font-custom font-semibold text-customGrayTranf text-[28px]'>Cuenta destino</label>
                            <input type="numero" onChange={(e) => setPin(e.target.value)} value={'MARIA GONZALEZ'} id="pin" className="bg-customBg form-input w-full h-[58px] text-[28px] text-customBlack  font-medium px-4 py-2 border rounded-[1rem] text-gray-700 focus:ring-blue-500" required placeholder="Cuenta destino" />

                        </div>


                    </form>

                </div>

                <form onSubmit={EnvioFormulario} className='w-[40vw]'>


                    <Link to={'/transfRealizada'}>
                        <button type="submit" className="w-full h-[58px] mb-5 bg-customGray text-customBlack font-custom font-extrabold px-4 py-2 rounded-[1rem] hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Confirmar Transferencia </button>
                    </Link>
                    <button type="submit" className="w-full h-[58px] bg-customGray text-customBlack font-custom font-extrabold px-4 py-2 rounded-[1rem] hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Cancelar</button>

                </form>

            </div>


        </div>

    )
}

export { TransfTarjeta1 }