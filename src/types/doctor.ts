export interface AddDoctorInterface {
    name : string;
    username : string;
    password : string;
    admin : boolean;
    degree : string;
    specialist : string;
    yoe : number;
}

export interface DoctorInterface {
    name : string;
    username : string;
    degree : string;
    specialist : string;
    yoe : number;
}

export interface DoctorsInterface {
    id : number;
    name : string;
    username : string;
}