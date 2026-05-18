import http from "../../../shared/infrastructure/base-api.js";

export class PropertiesApi {
    static getCities() {
        return http.get('/cities');
    }

    static getApartments() {
        return http.get('/apartments');
    }

    static updateApartment(id, apartment) {
        return http.patch(`/apartments/${id}`   , apartment);
    }
}