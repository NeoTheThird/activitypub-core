See CHECKLIST.md

* Full integration with:
    * Mastodon
    * Friendica
* HTTPS Signatures and Linked Data Signatures
* block
* performance issues
* ostatus
* oauth
* as:sensitive
* foaf / schema.org / others
* /.well-known/host-meta
* caching of remote objects
* conversion of dates, urls
* adding/removing context esp for plugins
* Still working out additional types / getTypedEntity

Mastodon secure mode: all cross-server HTTP requests to Mastodon must be signed (in other words, even GET requests to public resources).

Collection-Synchronization HTTP header