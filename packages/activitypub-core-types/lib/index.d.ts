export * as AP from './activitypub';
export declare type Database = {
    expandCollection: Function;
    expandEntity: Function;
    fetchEntityById: Function;
    findAll: Function;
    findEntityById: Function;
    findOne: Function;
    findStringIdByValue: Function;
    findStringValueById: Function;
    getActorByToken: Function;
    getAuthenticatedUserIdByToken: Function;
    getCollectionItems: Function;
    insertItem: Function;
    removeItem: Function;
    insertOrderedItem: Function;
    removeOrderedItem: Function;
    queryById: Function;
    saveEntity: Function;
    saveString: Function;
};
export interface DatabaseService {
    connect(): Promise<Database>;
}
export interface DeliveryService {
    broadcast: Function;
    getPrivateKey: Function;
    getRecipientInboxUrls: Function;
    getRecipientsList: Function;
    signAndSendToForeignActorInbox: Function;
}
