import { DatabaseService } from '.';
import { AP } from 'activitypub-core-types/src';
import {
  ACCEPT_HEADER,
  ACTIVITYSTREAMS_CONTENT_TYPE,
  CONTENT_TYPE_HEADER,
} from '../globals';
import { getTypedEntity } from '../utilities/getTypedEntity';
import { convertStringsToUrls } from '../utilities/convertStringsToUrls';
import { compressEntity } from '../utilities/compressEntity';

export async function fetchEntityById(
  this: DatabaseService,
  id: URL,
): Promise<AP.Entity | null> {
  if (typeof this.fetch !== 'function') {
    return null;
  }

  // GET requests (eg. to the inbox) MUST be made with an Accept header of
  // `application/ld+json; profile="https://www.w3.org/ns/activitystreams"`
  const fetchedThing = await this.fetch(id.toString(), {
    headers: {
      [CONTENT_TYPE_HEADER]: ACTIVITYSTREAMS_CONTENT_TYPE,
      [ACCEPT_HEADER]: ACTIVITYSTREAMS_CONTENT_TYPE,
    },
  },
  )
    .then(async (response: { json: () => Promise<{ [key: string]: unknown }> }) => await response.json())
    .catch((error: unknown) => {
      console.log(String(error));
      return null;
    });

  if (
    !(
      typeof fetchedThing === 'object' &&
      fetchedThing &&
      'type' in fetchedThing
    )
  ) {
    return null;
  }

  const convertedEntity = convertStringsToUrls(fetchedThing);

  if (
    !('type' in convertedEntity) ||
    typeof convertedEntity.type !== 'string'
  ) {
    return null;
  }

  const convertedEntityWithType: {
    [key: string]: unknown;
    type: string;
  } = {
    ...convertedEntity,
    type: convertedEntity.type,
  };

  const typedThing = getTypedEntity(convertedEntityWithType);

  if (!typedThing) {
    return null;
  }

  const compressedEntity = compressEntity(typedThing);

  // TODO Turn on smarter caching.
  // await this.saveThing(compressedEntity);

  return convertStringsToUrls(compressedEntity as { [key: string]: unknown });
}
