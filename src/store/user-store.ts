import { User } from '@/app/interfaces/usuario';
import { create } from 'zustand'
// import { persist, createJSONStorage } from 'zustand/middleware'

interface BaseState {
    uuidUser: string
    token: string
}
interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}



export const useUsuarioStore = create<BaseState>()(() => ({
    uuidUser: "8b07a113-db33-4314-9e6f-93664ac35741",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwOTdhMGZiLThmNmYtNDgxZC04NDhmLTNiNDYxZGVlOWQyOCIsInJvbCI6eyJpZF9yb2wiOiIyYjI5Zjc3MS1iZGUxLTRhMzItYjFjNi00MDMyMGU2ODhmNmUiLCJub21icmVfcm9sIjoiY2FuZGlkYXRvIn0sImlhdCI6MTczMzM0MjMzNiwiZXhwIjoxNzY0ODk5OTM2fQ._xIlakJNOmNwXdI6DJq6jobiniC1ykpHAUMXogBCdGc"

}))

export const useAuthStore = create<AuthState>()(
    // persist(
    (set) => ({
        isAuthenticated: false,
        user: null,
        login: (user: User) => {
            localStorage.setItem('user', JSON.stringify(user));// Guardar 
            set({ isAuthenticated: true, user }); // Actualiza el estado
            return user
        },
        logout: () => {
            localStorage.removeItem('user'); // Eliminar usuario del Local 
            set({ isAuthenticated: false, user: null }); // Limpia el estado
        },
    }),
    //     {
    //         name: 'auth-storage', // Nombre del key en el almacenamiento
    //         storage: createJSONStorage(() => sessionStorage), // Almacenamiento en sessionStorage
    //     }
    // )
);


// Inicialización desde Local Storage
export const initializeAuthStore = () => {
    const user = localStorage.getItem('user');
    const isAuthenticated = !!user;
    if (user) {
        const parsedUser = JSON.parse(user);
        useAuthStore.setState({ isAuthenticated, user: parsedUser });
    }

    return isAuthenticated;

};

// Llama esta función al inicio de tu aplicación (ej. en App.tsx)
// initializeAuthStore();