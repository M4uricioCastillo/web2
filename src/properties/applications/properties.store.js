import { defineStore } from 'pinia';
import {PropertiesApi} from "@/properties/infrastructure/properties-api.js";
import {CityAssembler} from "@/properties/infrastructure/city.assembler.js";
import {ApartmentAssembler} from "@/properties/infrastructure/apartment.assembler.js";

export const usePropertiesStore = defineStore('properties', {
    state: () => ({
        cities: [],
        apartments: []
    }),

    actions: {
        async fetchCities() {
            try {
                const response = await PropertiesApi.getCities();
                this.cities = response.data.map(resource => CityAssembler.toDomainEntity(resource));
            } catch (error) {
                console.error("Error al obtener las ciudades:", error);
            }
        },

        async fetchApartments() {
            try {
                const response = await PropertiesApi.getApartments();
                this.apartments = response.data.map(resource => ApartmentAssembler.toDomainEntity(resource));
            } catch (error) {
                console.error("Error al obtener los apartamentos:", error);
            }
        },

        async rentApartment(apartmentId, rentData) {
            try {
                await PropertiesApi.updateApartment(apartmentId, rentData);
                await this.fetchApartments();
                return true;
            } catch (error) {
                console.error("Error al registrar el alquiler:", error);
                return false;
            }
        }
    }
});