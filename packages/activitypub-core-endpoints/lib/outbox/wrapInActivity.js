"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapInActivity = void 0;
const activitypub_core_utilities_1 = require("activitypub-core-utilities");
const activitypub_core_types_1 = require("activitypub-core-types");
async function wrapInActivity() {
    this.activity = (0, activitypub_core_utilities_1.combineAddresses)({
        type: activitypub_core_types_1.AP.ActivityTypes.CREATE,
        actor: this.actor.id,
        object: this.activity,
    });
    const activityId = new URL(`${activitypub_core_utilities_1.LOCAL_DOMAIN}/entity/${(0, activitypub_core_utilities_1.getGuid)()}`);
    this.activity.id = activityId;
    this.activity.url = activityId;
    await this.handleCreate();
}
exports.wrapInActivity = wrapInActivity;
//# sourceMappingURL=wrapInActivity.js.map