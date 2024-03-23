import { MdOutlineShowChart } from "react-icons/md";

interface Props {
    title: string;
    value: number | string;
    increasedValue: number | string;
}

const StatisticCard = ({title, value, increasedValue}: Props) => {
    return (
        <div className="flex flex-col rounded-lg bg-primary w-fit px-6 py-4">
            <p className="text-black font-bold text-xs uppercase">{title}</p>
            <div className="flex items-end">
                <p className="font-bold text-2xl">{value}</p>
                <MdOutlineShowChart color="black" size={24}/>
                <p className="text-slate-600 text-sm">+{increasedValue} el último mes</p>
            </div>
        </div>
    )
}

export default StatisticCard