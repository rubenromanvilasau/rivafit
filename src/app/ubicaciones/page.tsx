'use client'
import { useEffect, useState } from "react"
import Address from "@/components/Address";
import { LatLng } from "@/types";
import { gyms } from "@/lib/constants";

const UbicacionesPage = () => {

    const [mapCenter, setMapCenter] = useState<LatLng>({ lat: -33.024258, lng: -71.549009 });


    const changeMapCenter = ( latLng: LatLng ) => {
        setMapCenter( latLng );
    }
    
    useEffect(() => {
    },[]);

    return (
        <div className="container mx-auto pb-32 px-4">
            <h1 className="mt-4 text-4xl font-bold uppercase text-white">Encuentranos en</h1>
            <div className="flex flex-wrap mt-4">
                <div className="w-full min-h-[500px] md:w-1/2 md:px-4 min-w-[300px]">
                    <iframe src={`https://maps.google.com/maps?q=${mapCenter?.lat}, ${mapCenter?.lng}&z=15&output=embed`}  allowFullScreen={false} loading="lazy" style={{border:0, width: '100%', height: '100%'}}  ></iframe>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4 mt-4 md:mt-0">
                    { gyms.map( gym => (
                        <>
                            <Address
                                key={gym.id}
                                gymName={gym.name}
                                address={gym.address}
                                location={gym.location}
                                phone={gym.phone}
                                coordinates={gym.coordinates}
                                onClickAddress={changeMapCenter}
                            />
                            <hr className="border-primary"/>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UbicacionesPage;