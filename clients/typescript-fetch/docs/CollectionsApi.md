# Class: CollectionsApi

CollectionsApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`CollectionsApi`**

## Table of contents

### Constructors

- [constructor](../wiki/CollectionsApi#constructor)

### Properties

- [basePath](../wiki/CollectionsApi#basepath)
- [configuration](../wiki/CollectionsApi#configuration)
- [fetch](../wiki/CollectionsApi#fetch)

### Methods

- [collectionsColuuidCommitPost](../wiki/CollectionsApi#collectionscoluuidcommitpost)
- [collectionsColuuidContentsDelete](../wiki/CollectionsApi#collectionscoluuidcontentsdelete)
- [collectionsColuuidDelete](../wiki/CollectionsApi#collectionscoluuiddelete)
- [collectionsColuuidGet](../wiki/CollectionsApi#collectionscoluuidget)
- [collectionsColuuidPost](../wiki/CollectionsApi#collectionscoluuidpost)
- [collectionsFsAddPost](../wiki/CollectionsApi#collectionsfsaddpost)
- [collectionsGet](../wiki/CollectionsApi#collectionsget)
- [collectionsPost](../wiki/CollectionsApi#collectionspost)

## Constructors

### constructor

• **new CollectionsApi**(`configuration?`, `basePath?`, `fetch?`)

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

### collectionsColuuidCommitPost

▸ **collectionsColuuidCommitPost**(`coluuid`, `options?`): `Promise`<`string`\>

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

**`Summary`**

Produce a CID of the collection contents

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coluuid` | `string` | coluuid |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1912](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1912)

___

### collectionsColuuidContentsDelete

▸ **collectionsColuuidContentsDelete**(`coluuid`, `contentid`, `body`, `options?`): `Promise`<`string`\>

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

**`Summary`**

Deletes a content from a collection

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coluuid` | `string` | Collection ID |
| `contentid` | `string` | Content ID |
| `body` | [`MainDeleteContentFromCollectionBody`](../wiki/MainDeleteContentFromCollectionBody) | Variable to use when filtering for files (must be either &#39;path&#39; or &#39;content_id&#39;) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1926](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1926)

___

### collectionsColuuidDelete

▸ **collectionsColuuidDelete**(`coluuid`, `options?`): `Promise`<`Response`\>

This endpoint is used to delete an existing collection.

**`Summary`**

Deletes a collection

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coluuid` | `string` | Collection ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1938](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1938)

___

### collectionsColuuidGet

▸ **collectionsColuuidGet**(`coluuid`, `dir?`, `options?`): `Promise`<`string`\>

This endpoint is used to get contents in a collection. If no colpath query param is passed

**`Summary`**

Get contents in a collection

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coluuid` | `string` | coluuid |
| `dir?` | `string` | Directory |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1951](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1951)

___

### collectionsColuuidPost

▸ **collectionsColuuidPost**(`coluuid`, `contentIDs`, `options?`): `Promise`<{ `[key: string]`: `string`;  }\>

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

**`Summary`**

Add contents to a collection

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coluuid` | `string` | coluuid |
| `contentIDs` | `number`[] | Content IDs to add to collection |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<{ `[key: string]`: `string`;  }\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1964](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1964)

___

### collectionsFsAddPost

▸ **collectionsFsAddPost**(`coluuid`, `content`, `path`, `options?`): `Promise`<`Response`\>

This endpoint adds a file to a collection

**`Summary`**

Add a file to a collection

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coluuid` | `string` | Collection ID |
| `content` | `string` | Content |
| `path` | `string` | Path to file |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1978](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1978)

___

### collectionsGet

▸ **collectionsGet**(`options?`): `Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)[]\>

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

**`Summary`**

List all collections

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1989](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1989)

___

### collectionsPost

▸ **collectionsPost**(`body`, `options?`): `Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)\>

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

**`Summary`**

Create a new collection

**`Throws`**

**`Memberof`**

CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MainCreateCollectionBody`](../wiki/MainCreateCollectionBody) | Collection name and description |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:2001](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L2001)
