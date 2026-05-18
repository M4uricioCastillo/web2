import {Apartment} from "@/properties/domain/model/apartment.entity.js";

export class ApartmentAssembler {
    static toDomainEntity(resource) {
        return new Apartment(
            resource.id,
            resource.apartmentId,
            resource.cityId,
            resource.name,
            resource.numberBedrooms,
            resource.numberGarage,
            resource.numberParking,
            resource.Price,
            resource.squareMeters,
            resource.description,
            resource.startDate,
            resource.endDate,
            resource.state
        );
    }
}