interface isCar{
    oruko: string;
    year: number;
    driving: (boolean|number);
    color: string;
    power?:string;

}

interface Auth {
    name? : string;
    email? : string;
    pasword: string;
    newPassword?: string;
}

export {isCar, Auth}