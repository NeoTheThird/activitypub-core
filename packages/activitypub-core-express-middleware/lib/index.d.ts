import type { NextFunction } from 'express';
import type { IncomingMessage, ServerResponse } from 'http';
import { AP } from 'activitypub-core-types';
import { DeliveryService } from 'activitypub-core-delivery';
import type { Database, Auth } from 'activitypub-core-types';
export declare const activityPub: ({ renderIndex, renderHome, renderEntity, }: {
    renderIndex: () => Promise<string>;
    renderHome: ({ actor }: {
        actor: AP.Actor;
    }) => Promise<string>;
    renderEntity: ({ entity, actor, }: {
        entity: AP.Entity;
        actor?: AP.Actor;
    }) => Promise<string>;
}, { authenticationService, databaseService, deliveryService, }: {
    authenticationService: Auth;
    databaseService: Database;
    deliveryService: DeliveryService;
}) => (req: IncomingMessage, res: ServerResponse, next: NextFunction) => Promise<void>;
