# Class: PinningApi

PinningApi - object-oriented interface

**`Export`**

## Hierarchy

- [`BaseAPI`](../wiki/BaseAPI)

  ↳ **`PinningApi`**

## Table of contents

### Constructors

- [constructor](../wiki/PinningApi#constructor)

### Properties

- [basePath](../wiki/PinningApi#basepath)
- [configuration](../wiki/PinningApi#configuration)
- [fetch](../wiki/PinningApi#fetch)

### Methods

- [pinningPinsGet](../wiki/PinningApi#pinningpinsget)
- [pinningPinsPinidDelete](../wiki/PinningApi#pinningpinspiniddelete)
- [pinningPinsPinidGet](../wiki/PinningApi#pinningpinspinidget)
- [pinningPinsPinidPost](../wiki/PinningApi#pinningpinspinidpost)
- [pinningPinsPost](../wiki/PinningApi#pinningpinspost)

## Constructors

### constructor

• **new PinningApi**(`configuration?`, `basePath?`, `fetch?`)

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

### pinningPinsGet

▸ **pinningPinsGet**(`options?`): `Promise`<`Response`\>

This endpoint lists all pin status objects

**`Summary`**

List all pin status objects

**`Throws`**

**`Memberof`**

PinningApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6559](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6559)

___

### pinningPinsPinidDelete

▸ **pinningPinsPinidDelete**(`pinid`, `options?`): `Promise`<`Response`\>

This endpoint deletes a pinned object.

**`Summary`**

Delete a pinned object

**`Throws`**

**`Memberof`**

PinningApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pinid` | `string` | Pin ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6571](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6571)

___

### pinningPinsPinidGet

▸ **pinningPinsPinidGet**(`pinid`, `options?`): `Promise`<`Response`\>

This endpoint returns a pin status object.

**`Summary`**

Get a pin status object

**`Throws`**

**`Memberof`**

PinningApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pinid` | `string` | cid |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6583](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6583)

___

### pinningPinsPinidPost

▸ **pinningPinsPinidPost**(`pinid`, `options?`): `Promise`<`Response`\>

This endpoint replaces a pinned object.

**`Summary`**

Replace a pinned object

**`Throws`**

**`Memberof`**

PinningApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pinid` | `string` | Pin ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6595](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6595)

___

### pinningPinsPost

▸ **pinningPinsPost**(`cid`, `name`, `options?`): `Promise`<`Response`\>

This endpoint adds a pin to the IPFS daemon.

**`Summary`**

Add and pin object

**`Throws`**

**`Memberof`**

PinningApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | `string` | cid |
| `name` | `string` | name |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6608](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6608)
