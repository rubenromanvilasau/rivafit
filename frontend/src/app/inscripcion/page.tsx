import InscriptionForm from '../components/InscriptionForm';

const InscripcionPage = () => {
    return (
        <div className="container mx-auto px-4 pb-4 md:pb-32">
            <h1 className="text-4xl font-bold uppercas mt-4">Inscripción</h1>
            <h2 className="text-md font-light">Ya casi eres parte de la familia <span className="text-purple-800 text-md font-bold">Rivafit</span>, ahora solo debes rellenar el formulario, seleccionar un plan y realizar el pago</h2>
            <InscriptionForm/>
        </div>
    )
}

export default InscripcionPage;