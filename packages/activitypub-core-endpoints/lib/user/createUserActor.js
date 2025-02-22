"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserActor = void 0;
const activitypub_core_utilities_1 = require("activitypub-core-utilities");
const activitypub_core_utilities_2 = require("activitypub-core-utilities");
const activitypub_core_utilities_3 = require("activitypub-core-utilities");
const activitypub_core_types_1 = require("activitypub-core-types");
async function createUserActor(user) {
    const { publicKey, privateKey } = await (0, activitypub_core_utilities_2.generateKeyPair)();
    let id = `${activitypub_core_utilities_3.LOCAL_DOMAIN}/@${user.preferredUsername}`;
    if (this.plugins) {
        for (const plugin of this.plugins) {
            if (plugin.generateActorId) {
                id = plugin.generateActorId(this.adapters)(user.preferredUsername);
            }
        }
    }
    const publishedDate = new Date();
    const userInbox = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/inbox`),
        url: new URL(`${id}/inbox`),
        name: 'Inbox',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    const userOutbox = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/outbox`),
        url: new URL(`${id}/outbox`),
        name: 'Outbox',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    const userFollowers = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/followers`),
        url: new URL(`${id}/followers`),
        name: 'Followers',
        type: activitypub_core_types_1.AP.CollectionTypes.COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        items: [],
        published: publishedDate,
    };
    const userFollowing = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/following`),
        url: new URL(`${id}/following`),
        name: 'Following',
        type: activitypub_core_types_1.AP.CollectionTypes.COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        items: [],
        published: publishedDate,
    };
    const userLiked = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/liked`),
        url: new URL(`${id}/liked`),
        name: 'Liked',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    const userShared = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/shared`),
        url: new URL(`${id}/shared`),
        name: 'Shared',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    const userBlocked = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/blocked`),
        url: new URL(`${id}/blocked`),
        name: 'Blocked',
        type: activitypub_core_types_1.AP.CollectionTypes.COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        items: [],
        published: publishedDate,
    };
    const userLists = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/lists`),
        url: new URL(`${id}/lists`),
        name: 'Lists',
        summary: 'A user\'s set of curated lists of other users, such as "Friends Only".',
        type: activitypub_core_types_1.AP.CollectionTypes.COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        items: [],
        published: publishedDate,
    };
    const userReplies = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/replies`),
        url: new URL(`${id}/replies`),
        name: 'Replies',
        type: activitypub_core_types_1.AP.CollectionTypes.COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        items: [],
        published: publishedDate,
    };
    const userLikes = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/likes`),
        url: new URL(`${id}/likes`),
        name: 'Likes',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    const userShares = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/shares`),
        url: new URL(`${id}/shares`),
        name: 'Shares',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    const userBookmarks = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${id}/bookmarks`),
        url: new URL(`${id}/bookmarks`),
        name: 'Bookmarks',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    if (!Object.values(activitypub_core_types_1.AP.ActorTypes).includes(user.type)) {
        throw new Error('Bad request: Provided type is not an Actor type.');
    }
    let userActor = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(id),
        url: new URL(id),
        type: [user.type],
        name: user.name,
        preferredUsername: user.preferredUsername,
        inbox: userInbox.id,
        outbox: userOutbox.id,
        followers: userFollowers.id,
        following: userFollowing.id,
        liked: userLiked.id,
        replies: userReplies.id,
        likes: userLikes.id,
        shares: userShares.id,
        streams: [
            userShared.id,
            userBlocked.id,
            userLists.id,
            userBookmarks.id
        ],
        endpoints: {
            sharedInbox: new URL(activitypub_core_utilities_3.SHARED_INBOX_ID),
            uploadMedia: new URL(`${id}/uploadMedia`),
        },
        publicKey: {
            id: `${id}#main-key`,
            owner: id,
            publicKeyPem: publicKey,
        },
        published: publishedDate,
    };
    const createActorActivityId = `${activitypub_core_utilities_3.LOCAL_DOMAIN}/entity/${(0, activitypub_core_utilities_1.getGuid)()}`;
    const createActorActivityReplies = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${createActorActivityId}/replies`),
        url: new URL(`${createActorActivityId}/replies`),
        name: 'Replies',
        type: activitypub_core_types_1.AP.CollectionTypes.COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        items: [],
        published: publishedDate,
    };
    const createActorActivityLikes = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${createActorActivityId}/likes`),
        url: new URL(`${createActorActivityId}/likes`),
        name: 'Likes',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    const createActorActivityShares = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(`${createActorActivityId}/shares`),
        url: new URL(`${createActorActivityId}/shares`),
        name: 'Shares',
        type: activitypub_core_types_1.AP.CollectionTypes.ORDERED_COLLECTION,
        totalItems: 0,
        attributedTo: new URL(id),
        orderedItems: [],
        published: publishedDate,
    };
    let createActorActivity = {
        '@context': activitypub_core_utilities_1.ACTIVITYSTREAMS_CONTEXT,
        id: new URL(createActorActivityId),
        url: new URL(createActorActivityId),
        type: activitypub_core_types_1.AP.ActivityTypes.CREATE,
        actor: new URL(activitypub_core_utilities_3.SERVER_ACTOR_ID),
        object: userActor,
        replies: createActorActivityReplies.id,
        likes: createActorActivityLikes.id,
        shares: createActorActivityShares.id,
        published: publishedDate,
    };
    if (this.plugins) {
        for (const plugin of this.plugins) {
            if ('handleCreateUserActor' in plugin) {
                createActorActivity = await plugin.handleCreateUserActor.call({
                    activity: createActorActivity,
                });
                userActor = createActorActivity.object;
            }
        }
    }
    await Promise.all([
        this.adapters.db.saveEntity(createActorActivity),
        this.adapters.db.saveEntity(createActorActivityReplies),
        this.adapters.db.saveEntity(createActorActivityLikes),
        this.adapters.db.saveEntity(createActorActivityShares),
        this.adapters.db.saveEntity(userActor),
        this.adapters.db.saveEntity(userInbox),
        this.adapters.db.saveEntity(userOutbox),
        this.adapters.db.saveEntity(userLiked),
        this.adapters.db.saveEntity(userReplies),
        this.adapters.db.saveEntity(userLikes),
        this.adapters.db.saveEntity(userShares),
        this.adapters.db.saveEntity(userFollowers),
        this.adapters.db.saveEntity(userFollowing),
        this.adapters.db.saveEntity(userShared),
        this.adapters.db.saveEntity(userBlocked),
        this.adapters.db.saveEntity(userLists),
        this.adapters.db.saveEntity(userBookmarks),
        this.adapters.db.saveString('account', user.uid, user.email),
        this.adapters.db.saveString('private-key', user.uid, privateKey),
        this.adapters.db.saveString('username', user.uid, user.preferredUsername),
    ]);
    if (createActorActivity.id && userInbox.id) {
        await Promise.all([
            this.adapters.db.insertOrderedItem(new URL(`${activitypub_core_utilities_3.SERVER_ACTOR_ID}/outbox`), createActorActivity.id),
            this.adapters.db.insertOrderedItem(userInbox.id, createActorActivity.id),
        ]);
    }
}
exports.createUserActor = createUserActor;
//# sourceMappingURL=createUserActor.js.map