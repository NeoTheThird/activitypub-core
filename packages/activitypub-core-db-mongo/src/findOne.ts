import { MongoDbAdapter } from '.';
import { AP } from 'activitypub-core-types';
import {
  convertStringsToUrls,
  getTypedEntity,
} from 'activitypub-core-utilities';

export async function findOne(
  this: MongoDbAdapter,
  collection: string,
  matchingObject: { [key: string]: unknown },
): Promise<AP.Entity | null> {
  const value = await this.db.collection(collection).findOne(matchingObject);

  if (!value) {
    return null;
  }

  delete (value as Partial<typeof value>)._id;

  return convertStringsToUrls(value) as AP.Entity;
}
