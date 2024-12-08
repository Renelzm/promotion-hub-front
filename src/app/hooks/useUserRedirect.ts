"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface userData {
    rol?: string;
    id?: string;
}
const useUserRedirect = ({ rol, id }: userData) => {
    const router = useRouter();
    useEffect(() => {

        if (!rol || !id) return;
        if (rol === 'admin') {
            router.push('/estructura') // Si no está autenticado, redirige al login
        }
        if (rol !== 'admin') {
            router.push(`/estructura/misamigos/${id}`) // Si no está autenticado, redirige al login
        }
    }, [rol, id, router]);
};

export default useUserRedirect;