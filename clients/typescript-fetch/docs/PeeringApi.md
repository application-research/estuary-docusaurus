# Class: PeeringApi

PeeringApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`PeeringApi`**

## Table of contents

### Constructors

- [constructor](../wiki/PeeringApi#constructor)

### Properties

- [basePath](../wiki/PeeringApi#basepath)
- [configuration](../wiki/PeeringApi#configuration)
- [fetch](../wiki/PeeringApi#fetch)

### Methods

- [adminPeeringPeersDelete](../wiki/PeeringApi#adminpeeringpeersdelete)
- [adminPeeringPeersGet](../wiki/PeeringApi#adminpeeringpeersget)
- [adminPeeringPeersPost](../wiki/PeeringApi#adminpeeringpeerspost)
- [adminPeeringStartPost](../wiki/PeeringApi#adminpeeringstartpost)
- [adminPeeringStatusGet](../wiki/PeeringApi#adminpeeringstatusget)
- [adminPeeringStopPost](../wiki/PeeringApi#adminpeeringstoppost)

## Constructors

### constructor

• **new PeeringApi**(`configuration?`, `basePath?`, `fetch?`)

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

PeeringApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string`[] | Peer ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5665](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5665)

___

### adminPeeringPeersGet

▸ **adminPeeringPeersGet**(`options?`): `Promise`<`Response`\>

This endpoint can be used to list all peers on Peering Service

**`Summary`**

List all Peering peers

**`Throws`**

**`Memberof`**

PeeringApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5676](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5676)

___

### adminPeeringPeersPost

▸ **adminPeeringPeersPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to add a Peer from the Peering Service

**`Summary`**

Add peers on Peering Service

**`Throws`**

**`Memberof`**

PeeringApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5687](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5687)

___

### adminPeeringStartPost

▸ **adminPeeringStartPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to start the Peering Service

**`Summary`**

Start Peering

**`Throws`**

**`Memberof`**

PeeringApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5698](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5698)

___

### adminPeeringStatusGet

▸ **adminPeeringStatusGet**(`options?`): `Promise`<`Response`\>

This endpoint can be used to check the Peering status

**`Summary`**

Check Peering Status

**`Throws`**

**`Memberof`**

PeeringApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5709](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5709)

___

### adminPeeringStopPost

▸ **adminPeeringStopPost**(`options?`): `Promise`<`Response`\>

This endpoint can be used to stop the Peering Service

**`Summary`**

Stop Peering

**`Throws`**

**`Memberof`**

PeeringApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5720](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5720)
