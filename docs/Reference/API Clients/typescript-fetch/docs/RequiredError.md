# Class: RequiredError

**`Export`**

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](../wiki/RequiredError#constructor)

### Properties

- [field](../wiki/RequiredError#field)
- [message](../wiki/RequiredError#message)
- [name](../wiki/RequiredError#name)
- [stack](../wiki/RequiredError#stack)
- [prepareStackTrace](../wiki/RequiredError#preparestacktrace)
- [stackTraceLimit](../wiki/RequiredError#stacktracelimit)

### Methods

- [captureStackTrace](../wiki/RequiredError#capturestacktrace)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:76](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L76)

## Properties

### field

• **field**: `string`

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:76](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L76)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:75](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L75)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4
