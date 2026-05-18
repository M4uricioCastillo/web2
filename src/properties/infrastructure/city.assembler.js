import {City} from "@/properties/domain/model/city.entity.js";

export class CityAssembler {
    static toDomainEntity(resource) {
        return new City(
            resource.id,
            resource.cityId,
            resource.cityName,
            resource.country,
            resource.population,
            resource.description
        );
    }
}