"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/user-store'; // Ruta del store Zustand

const useAuthRedirect = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated); // Obtenemos el estado de autenticación
    const router = useRouter();

    useEffect(() => {

        console.log("isAuthenticated desde authredirect", isAuthenticated)
        if (isAuthenticated) {
            console.log("Authenticated")
            router.push('/login'); // Si no está autenticado, redirige al login
        }
    }, [isAuthenticated, router]);
};

export default useAuthRedirect;