# Class: DealsApi

DealsApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`DealsApi`**

## Table of contents

### Constructors

- [constructor](../wiki/DealsApi#constructor)

### Properties

- [basePath](../wiki/DealsApi#basepath)
- [configuration](../wiki/DealsApi#configuration)
- [fetch](../wiki/DealsApi#fetch)

### Methods

- [dealEstimatePost](../wiki/DealsApi#dealestimatepost)
- [dealInfoDealidGet](../wiki/DealsApi#dealinfodealidget)
- [dealProposalPropcidGet](../wiki/DealsApi#dealproposalpropcidget)
- [dealQueryMinerGet](../wiki/DealsApi#dealqueryminerget)
- [dealStatusByProposalPropcidGet](../wiki/DealsApi#dealstatusbyproposalpropcidget)
- [dealStatusMinerPropcidGet](../wiki/DealsApi#dealstatusminerpropcidget)
- [dealTransferInProgressGet](../wiki/DealsApi#dealtransferinprogressget)
- [dealsFailuresGet](../wiki/DealsApi#dealsfailuresget)
- [dealsMakeMinerPost](../wiki/DealsApi#dealsmakeminerpost)
- [dealsStatusDealGet](../wiki/DealsApi#dealsstatusdealget)
- [publicDealsFailuresGet](../wiki/DealsApi#publicdealsfailuresget)
- [publicMinersStorageQueryMinerGet](../wiki/DealsApi#publicminersstoragequeryminerget)

## Constructors

### constructor

• **new DealsApi**(`configuration?`, `basePath?`, `fetch?`)

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

### dealEstimatePost

▸ **dealEstimatePost**(`body`, `options?`): `Promise`<`Response`\>

This endpoint estimates the cost of a deal

**`Summary`**

Estimate the cost of a deal

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MainEstimateDealBody`](../wiki/MainEstimateDealBody) | The size of the deal in bytes, the replication factor, and the duration of the deal in blocks |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4331](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4331)

___

### dealInfoDealidGet

▸ **dealInfoDealidGet**(`dealid`, `options?`): `Promise`<`Response`\>

This endpoint returns the deal info for a deal

**`Summary`**

Get Deal Info

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dealid` | `number` | Deal ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4343](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4343)

___

### dealProposalPropcidGet

▸ **dealProposalPropcidGet**(`propcid`, `options?`): `Promise`<`Response`\>

This endpoint returns the proposal for a deal

**`Summary`**

Get Proposal

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propcid` | `string` | Proposal CID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4355](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4355)

___

### dealQueryMinerGet

▸ **dealQueryMinerGet**(`miner`, `options?`): `Promise`<`Response`\>

This endpoint returns the ask for a given CID

**`Summary`**

Query Ask

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | CID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4367](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4367)

___

### dealStatusByProposalPropcidGet

▸ **dealStatusByProposalPropcidGet**(`propcid`, `options?`): `Promise`<`Response`\>

Get Deal Status by PropCid

**`Summary`**

Get Deal Status by PropCid

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propcid` | `string` | PropCid |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4379](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4379)

___

### dealStatusMinerPropcidGet

▸ **dealStatusMinerPropcidGet**(`miner`, `propcid`, `options?`): `Promise`<`Response`\>

This endpoint returns the status of a deal

**`Summary`**

Deal Status

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Miner |
| `propcid` | `string` | Proposal CID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4392](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4392)

___

### dealTransferInProgressGet

▸ **dealTransferInProgressGet**(`options?`): `Promise`<`Response`\>

This endpoint returns the in-progress transfers

**`Summary`**

Transfer In Progress

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4403](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4403)

___

### dealsFailuresGet

▸ **dealsFailuresGet**(`options?`): `Promise`<`Response`\>

This endpoint returns a list of storage failures for user

**`Summary`**

Get storage failures for user

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4414](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4414)

___

### dealsMakeMinerPost

▸ **dealsMakeMinerPost**(`miner`, `dealRequest`, `options?`): `Promise`<`Response`\>

This endpoint makes a deal for a given content and miner

**`Summary`**

Make Deal

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | Miner |
| `dealRequest` | `string` | Deal Request |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4427](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4427)

___

### dealsStatusDealGet

▸ **dealsStatusDealGet**(`deal`, `options?`): `Promise`<`Response`\>

This endpoint returns the status of a deal

**`Summary`**

Get Deal Status

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deal` | `number` | Deal ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4439](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4439)

___

### publicDealsFailuresGet

▸ **publicDealsFailuresGet**(`options?`): `Promise`<`Response`\>

This endpoint returns a list of storage failures

**`Summary`**

Get storage failures

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4450](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4450)

___

### publicMinersStorageQueryMinerGet

▸ **publicMinersStorageQueryMinerGet**(`miner`, `options?`): `Promise`<`Response`\>

This endpoint returns the ask for a given CID

**`Summary`**

Query Ask

**`Throws`**

**`Memberof`**

DealsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miner` | `string` | CID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4462](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4462)
