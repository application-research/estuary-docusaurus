# Class: UserApi

UserApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`UserApi`**

## Table of contents

### Constructors

- [constructor](../wiki/UserApi#constructor)

### Properties

- [basePath](../wiki/UserApi#basepath)
- [configuration](../wiki/UserApi#configuration)
- [fetch](../wiki/UserApi#fetch)

### Methods

- [userApiKeysGet](../wiki/UserApi#userapikeysget)
- [userApiKeysKeyDelete](../wiki/UserApi#userapikeyskeydelete)
- [userApiKeysPost](../wiki/UserApi#userapikeyspost)
- [userExportGet](../wiki/UserApi#userexportget)
- [userStatsGet](../wiki/UserApi#userstatsget)

## Constructors

### constructor

• **new UserApi**(`configuration?`, `basePath?`, `fetch?`)

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

### userApiKeysGet

▸ **userApiKeysGet**(`options?`): `Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)[]\>

This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.

**`Summary`**

Get API keys for a user

**`Throws`**

**`Memberof`**

UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7737](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7737)

___

### userApiKeysKeyDelete

▸ **userApiKeysKeyDelete**(`key`, `options?`): `Promise`<`Response`\>

This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily use to access all estuary features. This endpoint can be used to revoke the API key thats assigned to the user.

**`Summary`**

Revoke a User API Key.

**`Throws`**

**`Memberof`**

UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Key |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7749](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7749)

___

### userApiKeysPost

▸ **userApiKeysPost**(`expiry?`, `perms?`, `options?`): `Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)\>

This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.

**`Summary`**

Create API keys for a user

**`Throws`**

**`Memberof`**

UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expiry?` | `string` | Expiration - Expiration - Valid time units are ns, us (or µs), ms, s, m, h. for example 300h |
| `perms?` | `string` | Permissions -- currently unused |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7762](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7762)

___

### userExportGet

▸ **userExportGet**(`options?`): `Promise`<`string`\>

This endpoint is used to get API keys for a user.

**`Summary`**

Export user data

**`Throws`**

**`Memberof`**

UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7773](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7773)

___

### userStatsGet

▸ **userStatsGet**(`options?`): `Promise`<[`MainUserStatsResponse`](../wiki/MainUserStatsResponse)\>

This endpoint is used to create API keys for a user.

**`Summary`**

Create API keys for a user

**`Throws`**

**`Memberof`**

UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<[`MainUserStatsResponse`](../wiki/MainUserStatsResponse)\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7784](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7784)
