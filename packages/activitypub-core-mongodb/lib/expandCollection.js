"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandCollection = void 0;
const activitypub_core_types_1 = require("activitypub-core-types");
const activitypub_core_utilities_1 = require("activitypub-core-utilities");
async function expandCollection(collection) {
    const id = (0, activitypub_core_utilities_1.getId)(collection);
    if (!id) {
        return null;
    }
    const foundThing = await this.queryById(id);
    if (!foundThing) {
        return null;
    }
    if (foundThing.type !== activitypub_core_types_1.AP.CollectionTypes.COLLECTION &&
        foundThing.type !== activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION) {
        return null;
    }
    const items = await this.getCollectionItems(foundThing);
    if (!items) {
        return foundThing;
    }
    if (foundThing.type === activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION) {
        return {
            ...foundThing,
            orderedItems: items,
        };
    }
    if (foundThing.type === activitypub_core_types_1.AP.CollectionTypes.COLLECTION) {
        return {
            ...foundThing,
            items,
        };
    }
    return null;
}
exports.expandCollection = expandCollection;
//# sourceMappingURL=expandCollection.js.map