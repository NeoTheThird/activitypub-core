import { CoreObjectTypes } from '../util/const';
import type { BaseEntity } from './Entity';
import type { EntityReference } from '.';
import type { StringReferenceMap } from '../util/values';
import type { ImageReference } from '../Extended/ExtendedObject';
import type { LinkReference } from './Link';
import type { CollectionReference, OrderedCollectionReference } from '../Extended/Collection';
export interface BaseCoreObject extends BaseEntity {
    type: typeof CoreObjectTypes[keyof typeof CoreObjectTypes];
    attachment?: EntityReference | EntityReference[];
    attributedTo?: EntityReference | EntityReference[];
    audience?: EntityReference | EntityReference[];
    bcc?: EntityReference | EntityReference[];
    bto?: EntityReference | EntityReference[];
    cc?: EntityReference | EntityReference[];
    content?: string;
    contentMap?: StringReferenceMap;
    context?: EntityReference | EntityReference[];
    duration?: string;
    endTime?: Date;
    generator?: EntityReference | EntityReference[];
    icon?: ImageReference | ImageReference[] | LinkReference | LinkReference[];
    image?: ImageReference | ImageReference[] | LinkReference | LinkReference[];
    inReplyTo?: EntityReference | EntityReference[];
    location?: EntityReference | EntityReference[];
    mediaType?: string;
    name?: string;
    nameMap?: StringReferenceMap;
    preview?: EntityReference | EntityReference[];
    published?: Date;
    replies?: CollectionReference;
    startTime?: Date;
    summary?: string;
    summaryMap?: StringReferenceMap;
    tag?: EntityReference | EntityReference[];
    to?: EntityReference | EntityReference[];
    updated?: Date;
    url?: LinkReference | LinkReference[];
    likes?: OrderedCollectionReference;
    shares?: OrderedCollectionReference;
    source?: {
        content?: string;
        contentMap?: StringReferenceMap;
    };
}
