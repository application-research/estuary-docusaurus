# Class: PeersApi

PeersApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`PeersApi`**

## Table of contents

### Constructors

- [constructor](../wiki/PeersApi#constructor)

### Properties

- [basePath](../wiki/PeersApi#basepath)
- [configuration](../wiki/PeersApi#configuration)
- [fetch](../wiki/PeersApi#fetch)

### Methods

- [adminPeeringPeersDelete](../wiki/PeersApi#adminpeeringpeersdelete)
- [adminPeeringPeersGet](../wiki/PeersApi#adminpeeringpeersget)
- [adminPeeringPeersPost](../wiki/PeersApi#adminpeeringpeerspost)
- [adminPeeringStartPost](../wiki/PeersApi#adminpeeringstartpost)
- [adminPeeringStatusGet](../wiki/PeersApi#adminpeeringstatusget)
- [adminPeeringStopPost](../wiki/PeersApi#adminpeeringstoppost)

## Constructors

### constructor

• **new PeersApi**(`configuration?`, `basePath?`, `fetch?`)

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

PeersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string`[] | Peer ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6127](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6127)

___

### adminPeeringPeersGet

▸ **adminPeeringPeersGet**(`options?`): `Promise`<`Response`\>

This endpoint can be used to list all peers on Peering Service

**`Summary`**

List all Peering peers

**`Throws`**

**`Memberof`**

PeersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6138](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6138)

___

### adminPeeringPeersPost

▸ **adminPeeringPeersPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to add a Peer from the Peering Service

**`Summary`**

Add peers on Peering Service

**`Throws`**

**`Memberof`**

PeersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6149](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6149)

___

### adminPeeringStartPost

▸ **adminPeeringStartPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to start the Peering Service

**`Summary`**

Start Peering

**`Throws`**

**`Memberof`**

PeersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6160](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6160)

___

### adminPeeringStatusGet

▸ **adminPeeringStatusGet**(`options?`): `Promise`<`Response`\>

This endpoint can be used to check the Peering status

**`Summary`**

Check Peering Status

**`Throws`**

**`Memberof`**

PeersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6171](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6171)

___

### adminPeeringStopPost

▸ **adminPeeringStopPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to stop the Peering Service

**`Summary`**

Stop Peering

**`Throws`**

**`Memberof`**

PeersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6182](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6182)
