export interface ITrainee {
    id: string;
    name : string;
    email: string;
    address: string;
    contactno: string;

}


// export const sampleTraineelist: ITrainee[] =[
//     { id: "1",name : "Shojib", email: "shojib@gmail.com", address: "ghorar dim",contactno: "1234664565"},
//     { id: "2",name : "Mojib", email: "shojib@gmail.com", address: "ghorar dim",contactno: "2561645"},
//     { id: "3",name : "mokbul", email: "shojib@gmail.com", address: "ghorar dim",contactno: "6545465"},
//     { id: "4",name : "latif", email: "shojib@gmail.com", address: "ghorar dim",contactno: "6546546546"}
// ]

export enum PageEnum{
    list, add, edit
}