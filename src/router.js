/**
 * @summary Configuration of the application routing system mapping paths to page components.
 * @description Manejo de la ruta raíz con redirección obligatoria, rutas de negocio de Ukio y captura global de errores 404.
 * @author Mauricio Sebastián Castillo Yataco
 */
import { createRouter, createWebHistory } from 'vue-router';

// Importación de componentes tipo página respetando la arquitectura de capas y el sufijo .component.vue
import Home from "../public/presentation/home.vue";
import ApartmentRenting from "@/properties/presentation/apartment-renting.vue";
import PageNotFound from "../shared/presentation/page-not-found.vue";

const routes = [
    // Redirección de la vista raíz (/) hacia /home indicada en las especificaciones
    {
        path: '/',
        redirect: '/home'
    },
    // Ruta para la vista de ciudades de Ukio
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    // Ruta exacta solicitada para el formulario transaccional de alquiler de departamentos
    {
        path: '/properties/renting/new',
        name: 'apartment-renting',
        component: ApartmentRenting
    },
    // Captura de cualquier ruta de navegación no soportada (Page Not Found)
    {
        path: '/:pathMatch(.*)*',
        name: 'page-not-found',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;