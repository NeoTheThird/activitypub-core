"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLike = void 0;
const activitypub_core_utilities_1 = require("activitypub-core-utilities");
async function handleLike(activity, databaseService) {
    if (!activity.id) {
        throw new Error('Bad request 6');
    }
    const activityActorId = (0, activitypub_core_utilities_1.getId)(activity.actor);
    if (!activityActorId) {
        throw new Error('No actor ID.');
    }
    const actor = await databaseService.queryById(activityActorId);
    if (!actor || !('outbox' in actor)) {
        throw new Error('No actor.');
    }
    const activityObjectId = (0, activitypub_core_utilities_1.getId)(activity.object);
    if (!activityObjectId) {
        throw new Error('Bad request 1');
    }
    const object = await databaseService.queryById(activityObjectId);
    if (!object) {
        throw new Error('Bad request 2');
    }
    if (!('id' in object) || !object.id) {
        throw new Error('Bad request 3');
    }
    if (!('likes' in object) || !object.likes) {
        throw new Error('Bad request 4');
    }
    const objectLikesId = (0, activitypub_core_utilities_1.getId)(object.likes);
    if (!objectLikesId) {
        throw new Error('Bad request 5');
    }
    if (!('liked' in actor) || !actor.liked) {
        throw new Error('bad request 9');
    }
    const actorLikedId = (0, activitypub_core_utilities_1.getId)(actor.liked);
    if (!actorLikedId) {
        throw new Error('bad request 10');
    }
    await Promise.all([
        databaseService.insertOrderedItem(objectLikesId, activity.id),
        databaseService.insertOrderedItem(actorLikedId, object.id),
    ]);
}
exports.handleLike = handleLike;
//# sourceMappingURL=like.js.map