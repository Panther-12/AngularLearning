// src/app/myclasses.ts

export class Riya {
    name: string = 'Riya Riya';
    studentNumber: string = '991680658';
    login: string = 'Riya';
    email: string = 'riya33@shernet.sheridan.ca';
    campus: string = 'Davis';
    assignmentTitle: string = 'Assignment A1';
}

export class Car {
    make: string;
    model: string;
    bodyType: string; // 'sedan', 'suv', etc.
    color: string;

    constructor(make: string, model: string, bodyType: string, color: string) {
        this.make = make;
        this.model = model;
        this.bodyType = bodyType;
        this.color = color;
    }
}
