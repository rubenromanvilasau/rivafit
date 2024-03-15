import InscriptionForm from '../../components/InscriptionForm';

const InscripcionPage = () => {
    return (
        <div className="container mx-auto px-4 pb-4 md:pb-32">
            <h1 className="text-4xl font-bold uppercas mt-4 text-white">Inscripción</h1>
            <h2 className="text-md font-light text-white">Ya casi eres parte de la familia <span className="text-primary text-md font-bold">Rivanex</span>, ahora solo debes rellenar el formulario, seleccionar un plan y realizar el pago</h2>
            <InscriptionForm/>
        </div>
    )
}

export default InscripcionPage;