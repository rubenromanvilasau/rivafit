
import { MdOutlineShowChart } from "react-icons/md";
import StatisticCard from '../../../components/StatisticCard';
import { toCurrency } from "@/utils";

const AdminPage = () => {
    return (
        <div className="p-8">
            <h1 className="text-white text-4xl">Dashboard</h1>

            <div className="flex items-center justify-between mt-8 gap-4">
                <StatisticCard
                    title="Total miembros"
                    value={100}
                    increasedValue={10}
                />    
                <StatisticCard
                    title="Miembros activos"
                    value={85}
                    increasedValue={10}
                />
                <StatisticCard
                    title="Miembros inactivos"
                    value={15}
                    increasedValue={10}
                />
                <StatisticCard
                    title="Total ingresos mensuales"
                    value={toCurrency(1758000)}
                    increasedValue={toCurrency(586500)}
                />   
            </div>

            <div>
                <h2 className="text-white text-2xl mt-8 font-medium">Últimos miembros registrados</h2>
                <table className="table-auto border-collapse rounded-lg border border-primary mt-2">
                    <thead>
                        <tr>
                            <th className="text-slate-300 p-4">Nombre</th>
                            <th className="text-slate-300 p-4">Rut</th>
                            <th className="text-slate-300 p-4">Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-white p-4">Patricio</td>
                            <td className="text-white p-4">12 345 678 - 9</td>
                            <td className="text-white p-4 font-bold">{toCurrency(44990)}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>

        </div>
    )
}

export default AdminPage;