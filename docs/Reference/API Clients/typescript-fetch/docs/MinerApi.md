# Class: MinerApi

MinerApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`MinerApi`**

## Table of contents

### Constructors

- [constructor](../wiki/MinerApi#constructor)

### Properties

- [basePath](../wiki/MinerApi#basepath)
- [configuration](../wiki/MinerApi#configuration)
- [fetch](../wiki/MinerApi#fetch)

### Methods

- [publicMinersDealsMinerGet](../wiki/MinerApi#publicminersdealsminerget)
- [publicMinersStatsMinerGet](../wiki/MinerApi#publicminersstatsminerget)

## Constructors

### constructor

• **new MinerApi**(`configuration?`, `basePath?`, `fetch?`)

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

### publicMinersDealsMinerGet

▸ **publicMinersDealsMinerGet**(`miner`, `ignoreFailed?`, `options?`): `Promise`<`Response`\>

This endpoint returns all miners deals

**`Summary`**

Get all miners deals

**`Throws`**

**`Memberof`**

MinerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Filter by miner |
| `ignoreFailed?` | `string` | Ignore Failed |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4856](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4856)

___

### publicMinersStatsMinerGet

▸ **publicMinersStatsMinerGet**(`miner`, `options?`): `Promise`<`Response`\>

This endpoint returns miner stats

**`Summary`**

Get miner stats

**`Throws`**

**`Memberof`**

MinerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Filter by miner |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4868](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4868)
