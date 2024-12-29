export interface AddPatientProps {
    name : string;
    phoneNo : string;
    age : number;
    weight : string;
    bloodGroup : string;
    married : boolean;
    insurance : boolean;
    note : string;
}

export interface PatientProps {
    name : string;
    phoneNo : string;
    age : number;
    bloodGroup : string;
    weight : string;
    married : boolean;
    insurance : boolean;
    note : string;
}

export interface PatientsInterface {
    id : number;
    name : string;
    phone_no : string; 
}
