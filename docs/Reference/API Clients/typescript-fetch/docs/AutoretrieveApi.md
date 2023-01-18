# Class: AutoretrieveApi

AutoretrieveApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`AutoretrieveApi`**

## Table of contents

### Constructors

- [constructor](../wiki/AutoretrieveApi#constructor)

### Properties

- [basePath](../wiki/AutoretrieveApi#basepath)
- [configuration](../wiki/AutoretrieveApi#configuration)
- [fetch](../wiki/AutoretrieveApi#fetch)

### Methods

- [adminAutoretrieveInitPost](../wiki/AutoretrieveApi#adminautoretrieveinitpost)
- [adminAutoretrieveListGet](../wiki/AutoretrieveApi#adminautoretrievelistget)
- [autoretrieveHeartbeatPost](../wiki/AutoretrieveApi#autoretrieveheartbeatpost)

## Constructors

### constructor

• **new AutoretrieveApi**(`configuration?`, `basePath?`, `fetch?`)

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

### adminAutoretrieveInitPost

▸ **adminAutoretrieveInitPost**(`addresses`, `pubKey`, `options?`): `Promise`<`Response`\>

This endpoint registers a new autoretrieve server

**`Summary`**

Register autoretrieve server

**`Throws`**

**`Memberof`**

AutoretrieveApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addresses` | `string` | Autoretrieve&#39;s comma-separated list of addresses |
| `pubKey` | `string` | Autoretrieve&#39;s public key |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1256](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1256)

___

### adminAutoretrieveListGet

▸ **adminAutoretrieveListGet**(`options?`): `Promise`<`Response`\>

This endpoint lists all registered autoretrieve servers

**`Summary`**

List autoretrieve servers

**`Throws`**

**`Memberof`**

AutoretrieveApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1267](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1267)

___

### autoretrieveHeartbeatPost

▸ **autoretrieveHeartbeatPost**(`token`, `options?`): `Promise`<`Response`\>

This endpoint updates the lastConnection field for autoretrieve

**`Summary`**

Marks autoretrieve server as up

**`Throws`**

**`Memberof`**

AutoretrieveApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Autoretrieve&#39;s auth token |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1279](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1279)
