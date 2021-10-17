export interface status { 
    label:string,
    value:number
}

export class SmallContractListModel {
    constructor (
        public id?: number ,
        public procedureNumber?:string,
        public requestingUnit?:string,
        public connectionType?:string,
        public connectionName?:string,
        public connectionAmount?:number,
        public status?: status,
        public user?:string,
    ) {}
}