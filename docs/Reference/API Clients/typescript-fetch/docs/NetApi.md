# Class: NetApi

NetApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`NetApi`**

## Table of contents

### Constructors

- [constructor](../wiki/NetApi#constructor)

### Properties

- [basePath](../wiki/NetApi#basepath)
- [configuration](../wiki/NetApi#configuration)
- [fetch](../wiki/NetApi#fetch)

### Methods

- [netAddrsGet](../wiki/NetApi#netaddrsget)
- [publicMinersFailuresMinerGet](../wiki/NetApi#publicminersfailuresminerget)
- [publicMinersGet](../wiki/NetApi#publicminersget)
- [publicNetAddrsGet](../wiki/NetApi#publicnetaddrsget)
- [publicNetPeersGet](../wiki/NetApi#publicnetpeersget)

## Constructors

### constructor

• **new NetApi**(`configuration?`, `basePath?`, `fetch?`)

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

### netAddrsGet

▸ **netAddrsGet**(`options?`): `Promise`<`string`[]\>

This endpoint is used to get net addrs

**`Summary`**

Net Addrs

**`Throws`**

**`Memberof`**

NetApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5213](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5213)

___

### publicMinersFailuresMinerGet

▸ **publicMinersFailuresMinerGet**(`miner`, `options?`): `Promise`<`Response`\>

This endpoint returns all miners

**`Summary`**

Get all miners

**`Throws`**

**`Memberof`**

NetApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Filter by miner |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5225](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5225)

___

### publicMinersGet

▸ **publicMinersGet**(`options?`): `Promise`<`Response`\>

This endpoint returns all miners

**`Summary`**

Get all miners

**`Throws`**

**`Memberof`**

NetApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5236](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5236)

___

### publicNetAddrsGet

▸ **publicNetAddrsGet**(`options?`): `Promise`<`string`[]\>

This endpoint is used to get net addrs

**`Summary`**

Net Addrs

**`Throws`**

**`Memberof`**

NetApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5247](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5247)

___

### publicNetPeersGet

▸ **publicNetPeersGet**(`options?`): `Promise`<`string`[]\>

This endpoint is used to get net peers

**`Summary`**

Net Peers

**`Throws`**

**`Memberof`**

NetApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5258](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5258)
