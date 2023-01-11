# Class: PublicApi

PublicApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`PublicApi`**

## Table of contents

### Constructors

- [constructor](../wiki/PublicApi#constructor)

### Properties

- [basePath](../wiki/PublicApi#basepath)
- [configuration](../wiki/PublicApi#configuration)
- [fetch](../wiki/PublicApi#fetch)

### Methods

- [publicByCidCidGet](../wiki/PublicApi#publicbycidcidget)
- [publicInfoGet](../wiki/PublicApi#publicinfoget)
- [publicMetricsDealsOnChainGet](../wiki/PublicApi#publicmetricsdealsonchainget)
- [publicMinersDealsMinerGet](../wiki/PublicApi#publicminersdealsminerget)
- [publicMinersFailuresMinerGet](../wiki/PublicApi#publicminersfailuresminerget)
- [publicMinersGet](../wiki/PublicApi#publicminersget)
- [publicMinersStatsMinerGet](../wiki/PublicApi#publicminersstatsminerget)
- [publicNetAddrsGet](../wiki/PublicApi#publicnetaddrsget)
- [publicNetPeersGet](../wiki/PublicApi#publicnetpeersget)
- [publicStatsGet](../wiki/PublicApi#publicstatsget)

## Constructors

### constructor

• **new PublicApi**(`configuration?`, `basePath?`, `fetch?`)

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

### publicByCidCidGet

▸ **publicByCidCidGet**(`cid`, `options?`): `Promise`<`Response`\>

This endpoint returns the content associated with a CID

**`Summary`**

Get Content by Cid

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | `string` | Cid |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7275](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7275)

___

### publicInfoGet

▸ **publicInfoGet**(`options?`): `Promise`<`Response`\>

This endpoint returns information about the node

**`Summary`**

Get public node info

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7286](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7286)

___

### publicMetricsDealsOnChainGet

▸ **publicMetricsDealsOnChainGet**(`options?`): `Promise`<`Response`\>

This endpoint is used to get deal metrics

**`Summary`**

Get deal metrics

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7297](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7297)

___

### publicMinersDealsMinerGet

▸ **publicMinersDealsMinerGet**(`miner`, `ignoreFailed?`, `options?`): `Promise`<`Response`\>

This endpoint returns all miners deals

**`Summary`**

Get all miners deals

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Filter by miner |
| `ignoreFailed?` | `string` | Ignore Failed |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7310](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7310)

___

### publicMinersFailuresMinerGet

▸ **publicMinersFailuresMinerGet**(`miner`, `options?`): `Promise`<`Response`\>

This endpoint returns all miners

**`Summary`**

Get all miners

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Filter by miner |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7322](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7322)

___

### publicMinersGet

▸ **publicMinersGet**(`options?`): `Promise`<`Response`\>

This endpoint returns all miners

**`Summary`**

Get all miners

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7333](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7333)

___

### publicMinersStatsMinerGet

▸ **publicMinersStatsMinerGet**(`miner`, `options?`): `Promise`<`Response`\>

This endpoint returns miner stats

**`Summary`**

Get miner stats

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Filter by miner |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7345](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7345)

___

### publicNetAddrsGet

▸ **publicNetAddrsGet**(`options?`): `Promise`<`string`[]\>

This endpoint is used to get net addrs

**`Summary`**

Net Addrs

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7356](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7356)

___

### publicNetPeersGet

▸ **publicNetPeersGet**(`options?`): `Promise`<`string`[]\>

This endpoint is used to get net peers

**`Summary`**

Net Peers

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7367](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7367)

___

### publicStatsGet

▸ **publicStatsGet**(`options?`): `Promise`<`Response`\>

This endpoint is used to get public stats.

**`Summary`**

Public stats

**`Throws`**

**`Memberof`**

PublicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7378](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7378)
