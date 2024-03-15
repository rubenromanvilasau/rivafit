import React from 'react'
import { FaClipboard } from 'react-icons/fa';
import { showSuccessToast } from '../utils';
import { LatLng } from '@/types';

type Props = {
    onClickAddress: (latLng: LatLng) => void;
    gymName: string;
    location: string;
    address: string;
    phone: string;
    coordinates: LatLng
};

const Address = ({ onClickAddress, gymName, location, address, phone, coordinates }: Props) => {

    const copyAddress = async( address: string ) => {
        try{
            await navigator.clipboard.writeText( address );
            showSuccessToast('Dirección copiada en el portapapeles 💪🏽📍');
        }catch( err ) {
            console.log('[UBICACIONES PAGE] ERROR ', err);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="text-2xl font-bold text-white">{ gymName } <span className="text-3xl font-bold text-primary">{ location }</span></h2>
                <div className="flex items-center gap-2">
                    <p className="underline underline-offset-2 cursor-pointer text-white" onClick={ () => onClickAddress( coordinates )}>{ address }</p>
                    <button 
                        className="bg-transparent border-none"
                        onClick={() => copyAddress( address )}
                    >
                        <FaClipboard 
                            title="Copiar" 
                            className="text-primary text-sm cursor-pointer hover:scale-110"
                        />
                    </button>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white">Horarios</h2>
                <p className='text-white'>Lunes a Viernes: 6:00 - 22:00</p>
                <p className='text-white'>Sabados: 8:00 - 20:00</p>
                <p className='text-white'>Domingos: 8:00 - 14:00</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white">Contacto</h2>
                <p className='text-white'>{ phone }</p>
            </div>
        </div>
    )
}

export default Address;