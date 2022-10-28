# Class: BaseAPI

**`Export`**

## Hierarchy

- **`BaseAPI`**

  ↳ [`AdminApi`](../wiki/AdminApi)

  ↳ [`AutoretrieveApi`](../wiki/AutoretrieveApi)

  ↳ [`CollectionsApi`](../wiki/CollectionsApi)

  ↳ [`ContentApi`](../wiki/ContentApi)

  ↳ [`DealsApi`](../wiki/DealsApi)

  ↳ [`DefaultApi`](../wiki/DefaultApi)

  ↳ [`MetricsApi`](../wiki/MetricsApi)

  ↳ [`MinerApi`](../wiki/MinerApi)

  ↳ [`NetApi`](../wiki/NetApi)

  ↳ [`PeeringApi`](../wiki/PeeringApi)

  ↳ [`PeersApi`](../wiki/PeersApi)

  ↳ [`PinningApi`](../wiki/PinningApi)

  ↳ [`PublicApi`](../wiki/PublicApi)

  ↳ [`UserApi`](../wiki/UserApi)

## Table of contents

### Constructors

- [constructor](../wiki/BaseAPI#constructor)

### Properties

- [basePath](../wiki/BaseAPI#basepath)
- [configuration](../wiki/BaseAPI#configuration)
- [fetch](../wiki/BaseAPI#fetch)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | `Configuration` | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `fetch` | [`FetchAPI`](../wiki/FetchAPI) | `portableFetch` |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:60](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L60)

## Properties

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:60](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L60)

___

### configuration

• `Protected` **configuration**: `Configuration`

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:58](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L58)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../wiki/FetchAPI) = `portableFetch`

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:60](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L60)
