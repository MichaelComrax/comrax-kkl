export interface provider {
    name: string,
    id: number;
};

export class WinningContractListModel {
    constructor(
        public id?: number,
        public provider?: provider,
        public contact?: string,
        public opinion?: string,
        public sanction?: string,
        public providerDocuments?: string,
        public price?: number,
        public comment?: string,
        public quality?: number
    ) { }
}