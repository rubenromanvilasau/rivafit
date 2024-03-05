'use client'
import { useState } from "react"
import { FaClipboard } from "react-icons/fa";
import Address from "../components/Address";

//TODO GLOBALIZE THIS
interface LatLng {
    lat: number,
    lng: number,
};

const gyms = [
    {
        name: "Rivafit",
        address: "Av. Providencia 1234, Providencia, Santiago, Chile",
        location: "Providencia",
        phone: "+56 9 1234 5678",
        coordinates: { lat: -33.430637, lng: -70.609677 },
    },
    {
        name: "Rivafit",
        address: "Av. Las Condes 1234, Las Condes, Santiago, Chile",
        location: "Las Condes",
        phone: "+56 9 1234 5678",
        coordinates: { lat: -33.409455, lng: -70.568890 },
    },
];

const UbicacionesPage = () => {

    const [mapCenter, setMapCenter] = useState<LatLng>({ lat: -33.430637, lng: -70.609677 });


    const changeMapCenter = ( latLng: LatLng ) => {
        setMapCenter( latLng );
    }

    return (
        <div className="container mx-auto pb-32 px-4">
            <h1 className="mt-4 text-4xl font-bold uppercase">Encuentranos en</h1>
            <div className="flex flex-wrap mt-4">
                <div className="w-full min-h-[500px] md:w-1/2 md:px-4 min-w-[300px]">
                    <iframe src={`https://maps.google.com/maps?q=${mapCenter?.lat}, ${mapCenter?.lng}&z=15&output=embed`}  allowFullScreen={false} loading="lazy" style={{border:0, width: '100%', height: '100%'}}  ></iframe>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4 mt-4 md:mt-0">
                    { gyms.map( gym => (
                        <>
                            <Address
                                key={gym.name}
                                gymName={gym.name}
                                address={gym.address}
                                location={gym.location}
                                phone={gym.phone}
                                coordinates={gym.coordinates}
                                onClickAddress={changeMapCenter}
                            />
                            <hr className="border-purple-700"/>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UbicacionesPage;