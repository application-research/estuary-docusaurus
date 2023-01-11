# Class: AdminApi

AdminApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`AdminApi`**

## Table of contents

### Constructors

- [constructor](../wiki/AdminApi#constructor)

### Properties

- [basePath](../wiki/AdminApi#basepath)
- [configuration](../wiki/AdminApi#configuration)
- [fetch](../wiki/AdminApi#fetch)

### Methods

- [adminPeeringPeersDelete](../wiki/AdminApi#adminpeeringpeersdelete)
- [adminPeeringPeersGet](../wiki/AdminApi#adminpeeringpeersget)
- [adminPeeringPeersPost](../wiki/AdminApi#adminpeeringpeerspost)
- [adminPeeringStartPost](../wiki/AdminApi#adminpeeringstartpost)
- [adminPeeringStatusGet](../wiki/AdminApi#adminpeeringstatusget)
- [adminPeeringStopPost](../wiki/AdminApi#adminpeeringstoppost)
- [adminSystemConfigGet](../wiki/AdminApi#adminsystemconfigget)
- [adminUsersGet](../wiki/AdminApi#adminusersget)

## Constructors

### constructor

• **new AdminApi**(`configuration?`, `basePath?`, `fetch?`)

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

### adminPeeringPeersDelete

▸ **adminPeeringPeersDelete**(`body`, `options?`): `Promise`<`Response`\>

This endpoint can be used to remove a Peer from the Peering Service

**`Summary`**

Remove peers on Peering Service

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string`[] | Peer ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:927](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L927)

___

### adminPeeringPeersGet

▸ **adminPeeringPeersGet**(`options?`): `Promise`<`Response`\>

This endpoint can be used to list all peers on Peering Service

**`Summary`**

List all Peering peers

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:938](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L938)

___

### adminPeeringPeersPost

▸ **adminPeeringPeersPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to add a Peer from the Peering Service

**`Summary`**

Add peers on Peering Service

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:949](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L949)

___

### adminPeeringStartPost

▸ **adminPeeringStartPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to start the Peering Service

**`Summary`**

Start Peering

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:960](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L960)

___

### adminPeeringStatusGet

▸ **adminPeeringStatusGet**(`options?`): `Promise`<`Response`\>

This endpoint can be used to check the Peering status

**`Summary`**

Check Peering Status

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:971](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L971)

___

### adminPeeringStopPost

▸ **adminPeeringStopPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to stop the Peering Service

**`Summary`**

Stop Peering

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:982](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L982)

___

### adminSystemConfigGet

▸ **adminSystemConfigGet**(`options?`): `Promise`<`Response`\>

This endpoint is used to get system configs.

**`Summary`**

Get systems(estuary/shuttle) config

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:993](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L993)

___

### adminUsersGet

▸ **adminUsersGet**(`options?`): `Promise`<`Response`\>

This endpoint is used to get all users.

**`Summary`**

Get all users

**`Throws`**

**`Memberof`**

AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1004](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1004)
