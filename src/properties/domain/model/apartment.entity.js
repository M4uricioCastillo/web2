export class Apartment {
    constructor(id, apartmentId, cityId,name,numberBedrooms, numberGarage,
                numberParking,Price,squareMeters,description,startDate,endDate,state) {
        this.id = id;
        this.apartmentId = apartmentId;
        this.cityId = cityId;
        this.name = name;
        this.numberBedrooms = numberBedrooms;
        this.numberGarage = numberGarage;
        this.numberParking = numberParking;
        this.Price = Price;
        this.squareMeters = squareMeters;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.state = state;
    }
}