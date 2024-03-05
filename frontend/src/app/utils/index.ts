import { ToastContainer, toast } from 'react-toastify';

export const toCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
}

export const showSuccessToast = (message: string) => toast( message );