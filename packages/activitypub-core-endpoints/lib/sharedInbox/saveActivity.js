"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveActivity = void 0;
async function saveActivity() {
    const recipientInboxIds = await this.getRecipientInboxIds();
    for (const recipientInboxId of recipientInboxIds) {
        if (!recipientInboxId) {
            continue;
        }
        await this.databaseService.insertOrderedItem(recipientInboxId, this.activity.id);
    }
    await this.databaseService.saveEntity(this.activity);
}
exports.saveActivity = saveActivity;
//# sourceMappingURL=saveActivity.js.map