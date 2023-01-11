# Class: ContentApi

ContentApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`ContentApi`**

## Table of contents

### Constructors

- [constructor](../wiki/ContentApi#constructor)

### Properties

- [basePath](../wiki/ContentApi#basepath)
- [configuration](../wiki/ContentApi#configuration)
- [fetch](../wiki/ContentApi#fetch)

### Methods

- [contentAddCarPost](../wiki/ContentApi#contentaddcarpost)
- [contentAddIpfsPost](../wiki/ContentApi#contentaddipfspost)
- [contentAddPost](../wiki/ContentApi#contentaddpost)
- [contentAggregatedContentGet](../wiki/ContentApi#contentaggregatedcontentget)
- [contentAllDealsGet](../wiki/ContentApi#contentalldealsget)
- [contentBwUsageContentGet](../wiki/ContentApi#contentbwusagecontentget)
- [contentCreatePost](../wiki/ContentApi#contentcreatepost)
- [contentDealsGet](../wiki/ContentApi#contentdealsget)
- [contentEnsureReplicationDatacidGet](../wiki/ContentApi#contentensurereplicationdatacidget)
- [contentFailuresContentGet](../wiki/ContentApi#contentfailurescontentget)
- [contentIdGet](../wiki/ContentApi#contentidget)
- [contentImportdealPost](../wiki/ContentApi#contentimportdealpost)
- [contentListGet](../wiki/ContentApi#contentlistget)
- [contentReadContGet](../wiki/ContentApi#contentreadcontget)
- [contentStagingZonesGet](../wiki/ContentApi#contentstagingzonesget)
- [contentStatsGet](../wiki/ContentApi#contentstatsget)
- [contentStatusIdGet](../wiki/ContentApi#contentstatusidget)

## Constructors

### constructor

• **new ContentApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | `Configuration` | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `fetch` | [`FetchAPI`](../wiki/FetchAPI) | `portableFetch` |

#### Inherited from

[BaseAPI](../wiki/BaseAPI).[constructor](../wiki/BaseAPI#constructor)

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:60](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L60)

## Properties

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](../wiki/BaseAPI).[basePath](../wiki/BaseAPI#basepath)

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:60](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L60)

___

### configuration

• `Protected` **configuration**: `Configuration`

#### Inherited from

[BaseAPI](../wiki/BaseAPI).[configuration](../wiki/BaseAPI#configuration)

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:58](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L58)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../wiki/FetchAPI) = `portableFetch`

#### Inherited from

[BaseAPI](../wiki/BaseAPI).[fetch](../wiki/BaseAPI#fetch)

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:60](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L60)

## Methods

### contentAddCarPost

▸ **contentAddCarPost**(`body`, `ignoreDupes?`, `filename?`, `options?`): `Promise`<`Response`\>

This endpoint is used to add a car object to the network. The object can be a file or a directory.

**`Summary`**

Add Car object

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | Car |
| `ignoreDupes?` | `string` | Ignore Dupes |
| `filename?` | `string` | Filename |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3291](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3291)

___

### contentAddIpfsPost

▸ **contentAddIpfsPost**(`body`, `ignoreDupes?`, `options?`): `Promise`<`Response`\>

This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.

**`Summary`**

Add IPFS object

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`UtilContentAddIpfsBody`](../wiki/UtilContentAddIpfsBody) | IPFS Body |
| `ignoreDupes?` | `string` | Ignore Dupes |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3304](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3304)

___

### contentAddPost

▸ **contentAddPost**(`data`, `filename?`, `coluuid?`, `replication?`, `ignoreDupes?`, `lazyProvide?`, `dir?`, `options?`): `Promise`<[`UtilContentAddResponse`](../wiki/UtilContentAddResponse)\>

This endpoint is used to upload new content.

**`Summary`**

Add new content

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | File to upload |
| `filename?` | `string` | Filenam to use for upload |
| `coluuid?` | `string` | Collection UUID |
| `replication?` | `number` | Replication value |
| `ignoreDupes?` | `string` | Ignore Dupes true/false |
| `lazyProvide?` | `string` | Lazy Provide true/false |
| `dir?` | `string` | Directory |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<[`UtilContentAddResponse`](../wiki/UtilContentAddResponse)\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3322](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3322)

___

### contentAggregatedContentGet

▸ **contentAggregatedContentGet**(`content`, `options?`): `Promise`<`string`\>

This endpoint returns aggregated content stats

**`Summary`**

Get aggregated content stats

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | Content ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3334](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3334)

___

### contentAllDealsGet

▸ **contentAllDealsGet**(`begin`, `duration`, `all`, `options?`): `Promise`<`Response`\>

This endpoint is used to get all deals for a user

**`Summary`**

Get all deals for a user

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin` | `string` | Begin |
| `duration` | `string` | Duration |
| `all` | `string` | All |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3348](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3348)

___

### contentBwUsageContentGet

▸ **contentBwUsageContentGet**(`content`, `options?`): `Promise`<`Response`\>

This endpoint returns content bandwidth

**`Summary`**

Get content bandwidth

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | Content ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3360](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3360)

___

### contentCreatePost

▸ **contentCreatePost**(`req`, `ignoreDupes?`, `options?`): `Promise`<`Response`\>

This endpoint adds a new content

**`Summary`**

Add a new content

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | [`UtilContentCreateBody`](../wiki/UtilContentCreateBody) | Content |
| `ignoreDupes?` | `string` | Ignore Dupes |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3373](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3373)

___

### contentDealsGet

▸ **contentDealsGet**(`limit?`, `offset?`, `options?`): `Promise`<`Response`\>

This endpoint lists all content with deals

**`Summary`**

Content with deals

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Limit |
| `offset?` | `number` | Offset |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3386](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3386)

___

### contentEnsureReplicationDatacidGet

▸ **contentEnsureReplicationDatacidGet**(`datacid`, `options?`): `Promise`<`Response`\>

This endpoint ensures that the content is replicated to the specified number of providers

**`Summary`**

Ensure Replication

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datacid` | `string` | Data CID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3398](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3398)

___

### contentFailuresContentGet

▸ **contentFailuresContentGet**(`content`, `options?`): `Promise`<`string`\>

This endpoint returns all failures for a content

**`Summary`**

List all failures for a content

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | Content ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3410](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3410)

___

### contentIdGet

▸ **contentIdGet**(`id`, `options?`): `Promise`<`Response`\>

This endpoint returns a content by its ID

**`Summary`**

Content

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Content ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3422](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3422)

___

### contentImportdealPost

▸ **contentImportdealPost**(`body`, `options?`): `Promise`<`Response`\>

This endpoint imports a deal into the shuttle.

**`Summary`**

Import a deal

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MainImportDealBody`](../wiki/MainImportDealBody) | Import a deal |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3434](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3434)

___

### contentListGet

▸ **contentListGet**(`options?`): `Promise`<`string`[]\>

This endpoint lists all content

**`Summary`**

List all pinned content

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3445](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3445)

___

### contentReadContGet

▸ **contentReadContGet**(`cont`, `options?`): `Promise`<`Response`\>

This endpoint reads content from the blockstore

**`Summary`**

Read content

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cont` | `string` | CID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3457](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3457)

___

### contentStagingZonesGet

▸ **contentStagingZonesGet**(`options?`): `Promise`<`Response`\>

This endpoint is used to get staging zone for user.

**`Summary`**

Get staging zone for user

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3468](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3468)

___

### contentStatsGet

▸ **contentStatsGet**(`limit`, `offset`, `options?`): `Promise`<`Response`\>

This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten

**`Summary`**

Get content statistics

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `string` | limit |
| `offset` | `string` | offset |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3481](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3481)

___

### contentStatusIdGet

▸ **contentStatusIdGet**(`id`, `options?`): `Promise`<`Response`\>

This endpoint returns the status of a content

**`Summary`**

Content Status

**`Throws`**

**`Memberof`**

ContentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Content ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3493](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3493)
