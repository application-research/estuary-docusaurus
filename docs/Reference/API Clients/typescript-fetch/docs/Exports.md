# Documentation

## Table of contents

### Classes

- [AdminApi](../wiki/AdminApi)
- [AutoretrieveApi](../wiki/AutoretrieveApi)
- [BaseAPI](../wiki/BaseAPI)
- [CollectionsApi](../wiki/CollectionsApi)
- [ContentApi](../wiki/ContentApi)
- [DealsApi](../wiki/DealsApi)
- [DefaultApi](../wiki/DefaultApi)
- [MetricsApi](../wiki/MetricsApi)
- [MinerApi](../wiki/MinerApi)
- [NetApi](../wiki/NetApi)
- [PeeringApi](../wiki/PeeringApi)
- [PeersApi](../wiki/PeersApi)
- [PinningApi](../wiki/PinningApi)
- [PublicApi](../wiki/PublicApi)
- [RequiredError](../wiki/RequiredError)
- [UserApi](../wiki/UserApi)

### Interfaces

- [CollectionsCollection](../wiki/CollectionsCollection)
- [FetchAPI](../wiki/FetchAPI)
- [FetchArgs](../wiki/FetchArgs)
- [MainCreateCollectionBody](../wiki/MainCreateCollectionBody)
- [MainDeleteContentFromCollectionBody](../wiki/MainDeleteContentFromCollectionBody)
- [MainEstimateDealBody](../wiki/MainEstimateDealBody)
- [MainGetApiKeysResp](../wiki/MainGetApiKeysResp)
- [MainImportDealBody](../wiki/MainImportDealBody)
- [MainUserStatsResponse](../wiki/MainUserStatsResponse)
- [UtilContentAddIpfsBody](../wiki/UtilContentAddIpfsBody)
- [UtilContentAddResponse](../wiki/UtilContentAddResponse)
- [UtilContentCreateBody](../wiki/UtilContentCreateBody)
- [UtilHttpError](../wiki/UtilHttpError)

### Variables

- [COLLECTION\_FORMATS](../wiki/Exports#collection_formats)

### Functions

- [AdminApiFactory](../wiki/Exports#adminapifactory)
- [AdminApiFetchParamCreator](../wiki/Exports#adminapifetchparamcreator)
- [AdminApiFp](../wiki/Exports#adminapifp)
- [AutoretrieveApiFactory](../wiki/Exports#autoretrieveapifactory)
- [AutoretrieveApiFetchParamCreator](../wiki/Exports#autoretrieveapifetchparamcreator)
- [AutoretrieveApiFp](../wiki/Exports#autoretrieveapifp)
- [CollectionsApiFactory](../wiki/Exports#collectionsapifactory)
- [CollectionsApiFetchParamCreator](../wiki/Exports#collectionsapifetchparamcreator)
- [CollectionsApiFp](../wiki/Exports#collectionsapifp)
- [ContentApiFactory](../wiki/Exports#contentapifactory)
- [ContentApiFetchParamCreator](../wiki/Exports#contentapifetchparamcreator)
- [ContentApiFp](../wiki/Exports#contentapifp)
- [DealsApiFactory](../wiki/Exports#dealsapifactory)
- [DealsApiFetchParamCreator](../wiki/Exports#dealsapifetchparamcreator)
- [DealsApiFp](../wiki/Exports#dealsapifp)
- [DefaultApiFactory](../wiki/Exports#defaultapifactory)
- [DefaultApiFetchParamCreator](../wiki/Exports#defaultapifetchparamcreator)
- [DefaultApiFp](../wiki/Exports#defaultapifp)
- [MetricsApiFactory](../wiki/Exports#metricsapifactory)
- [MetricsApiFetchParamCreator](../wiki/Exports#metricsapifetchparamcreator)
- [MetricsApiFp](../wiki/Exports#metricsapifp)
- [MinerApiFactory](../wiki/Exports#minerapifactory)
- [MinerApiFetchParamCreator](../wiki/Exports#minerapifetchparamcreator)
- [MinerApiFp](../wiki/Exports#minerapifp)
- [NetApiFactory](../wiki/Exports#netapifactory)
- [NetApiFetchParamCreator](../wiki/Exports#netapifetchparamcreator)
- [NetApiFp](../wiki/Exports#netapifp)
- [PeeringApiFactory](../wiki/Exports#peeringapifactory)
- [PeeringApiFetchParamCreator](../wiki/Exports#peeringapifetchparamcreator)
- [PeeringApiFp](../wiki/Exports#peeringapifp)
- [PeersApiFactory](../wiki/Exports#peersapifactory)
- [PeersApiFetchParamCreator](../wiki/Exports#peersapifetchparamcreator)
- [PeersApiFp](../wiki/Exports#peersapifp)
- [PinningApiFactory](../wiki/Exports#pinningapifactory)
- [PinningApiFetchParamCreator](../wiki/Exports#pinningapifetchparamcreator)
- [PinningApiFp](../wiki/Exports#pinningapifp)
- [PublicApiFactory](../wiki/Exports#publicapifactory)
- [PublicApiFetchParamCreator](../wiki/Exports#publicapifetchparamcreator)
- [PublicApiFp](../wiki/Exports#publicapifp)
- [UserApiFactory](../wiki/Exports#userapifactory)
- [UserApiFetchParamCreator](../wiki/Exports#userapifetchparamcreator)
- [UserApiFp](../wiki/Exports#userapifp)

## Variables

### COLLECTION\_FORMATS

• `Const` **COLLECTION\_FORMATS**: `Object`

**`Export`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `csv` | `string` |
| `pipes` | `string` |
| `ssv` | `string` |
| `tsv` | `string` |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:26](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L26)

## Functions

### AdminApiFactory

▸ **AdminApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

AdminApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringPeersGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringPeersPost` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStartPost` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStatusGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStopPost` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminSystemConfigGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminUsersGet` | (`options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:834](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L834)

___

### AdminApiFetchParamCreator

▸ **AdminApiFetchParamCreator**(`configuration?`): `Object`

AdminApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringPeersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringPeersPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStartPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStatusGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStopPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminSystemConfigGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminUsersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:414](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L414)

___

### AdminApiFp

▸ **AdminApiFp**(`configuration?`): `Object`

AdminApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringPeersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringPeersPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStartPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStatusGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStopPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminSystemConfigGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminUsersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:680](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L680)

___

### AutoretrieveApiFactory

▸ **AutoretrieveApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

AutoretrieveApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminAutoretrieveInitPost` | (`addresses`: `string`, `pubKey`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `adminAutoretrieveListGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `autoretrieveHeartbeatPost` | (`token`: `string`, `options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1205](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1205)

___

### AutoretrieveApiFetchParamCreator

▸ **AutoretrieveApiFetchParamCreator**(`configuration?`): `Object`

AutoretrieveApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminAutoretrieveInitPost` | (`addresses`: `string`, `pubKey`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminAutoretrieveListGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `autoretrieveHeartbeatPost` | (`token`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1014](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1014)

___

### AutoretrieveApiFp

▸ **AutoretrieveApiFp**(`configuration?`): `Object`

AutoretrieveApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminAutoretrieveInitPost` | (`addresses`: `string`, `pubKey`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminAutoretrieveListGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `autoretrieveHeartbeatPost` | (`token`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1139](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1139)

___

### CollectionsApiFactory

▸ **CollectionsApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

CollectionsApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `collectionsColuuidCommitPost` | (`coluuid`: `string`, `options?`: `any`) => `Promise`<`string`\> |
| `collectionsColuuidContentsDelete` | (`coluuid`: `string`, `contentid`: `string`, `body`: [`MainDeleteContentFromCollectionBody`](../wiki/MainDeleteContentFromCollectionBody), `options?`: `any`) => `Promise`<`string`\> |
| `collectionsColuuidDelete` | (`coluuid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `collectionsColuuidGet` | (`coluuid`: `string`, `dir?`: `string`, `options?`: `any`) => `Promise`<`string`\> |
| `collectionsColuuidPost` | (`coluuid`: `string`, `contentIDs`: `number`[], `options?`: `any`) => `Promise`<{ `[key: string]`: `string`;  }\> |
| `collectionsFsAddPost` | (`coluuid`: `string`, `content`: `string`, `path`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `collectionsGet` | (`options?`: `any`) => `Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)[]\> |
| `collectionsPost` | (`body`: [`MainCreateCollectionBody`](../wiki/MainCreateCollectionBody), `options?`: `any`) => `Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1807](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1807)

___

### CollectionsApiFetchParamCreator

▸ **CollectionsApiFetchParamCreator**(`configuration?`): `Object`

CollectionsApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `collectionsColuuidCommitPost` | (`coluuid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `collectionsColuuidContentsDelete` | (`coluuid`: `string`, `contentid`: `string`, `body`: [`MainDeleteContentFromCollectionBody`](../wiki/MainDeleteContentFromCollectionBody), `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `collectionsColuuidDelete` | (`coluuid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `collectionsColuuidGet` | (`coluuid`: `string`, `dir?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `collectionsColuuidPost` | (`coluuid`: `string`, `contentIDs`: `number`[], `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `collectionsFsAddPost` | (`coluuid`: `string`, `content`: `string`, `path`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `collectionsGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `collectionsPost` | (`body`: [`MainCreateCollectionBody`](../wiki/MainCreateCollectionBody), `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1289](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1289)

___

### CollectionsApiFp

▸ **CollectionsApiFp**(`configuration?`): `Object`

CollectionsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `collectionsColuuidCommitPost` | (`coluuid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`\> |
| `collectionsColuuidContentsDelete` | (`coluuid`: `string`, `contentid`: `string`, `body`: [`MainDeleteContentFromCollectionBody`](../wiki/MainDeleteContentFromCollectionBody), `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`\> |
| `collectionsColuuidDelete` | (`coluuid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `collectionsColuuidGet` | (`coluuid`: `string`, `dir?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`\> |
| `collectionsColuuidPost` | (`coluuid`: `string`, `contentIDs`: `number`[], `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<{ `[key: string]`: `string`;  }\> |
| `collectionsFsAddPost` | (`coluuid`: `string`, `content`: `string`, `path`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `collectionsGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)[]\> |
| `collectionsPost` | (`body`: [`MainCreateCollectionBody`](../wiki/MainCreateCollectionBody), `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<[`CollectionsCollection`](../wiki/CollectionsCollection)\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:1641](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L1641)

___

### ContentApiFactory

▸ **ContentApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

ContentApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contentAddCarPost` | (`body`: `string`, `ignoreDupes?`: `string`, `filename?`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentAddIpfsPost` | (`body`: [`UtilContentAddIpfsBody`](../wiki/UtilContentAddIpfsBody), `ignoreDupes?`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentAddPost` | (`data`: `any`, `filename?`: `string`, `coluuid?`: `string`, `replication?`: `number`, `ignoreDupes?`: `string`, `lazyProvide?`: `string`, `dir?`: `string`, `options?`: `any`) => `Promise`<[`UtilContentAddResponse`](../wiki/UtilContentAddResponse)\> |
| `contentAggregatedContentGet` | (`content`: `string`, `options?`: `any`) => `Promise`<`string`\> |
| `contentAllDealsGet` | (`begin`: `string`, `duration`: `string`, `all`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentBwUsageContentGet` | (`content`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentCreatePost` | (`req`: [`UtilContentCreateBody`](../wiki/UtilContentCreateBody), `ignoreDupes?`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentDealsGet` | (`limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentEnsureReplicationDatacidGet` | (`datacid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentFailuresContentGet` | (`content`: `string`, `options?`: `any`) => `Promise`<`string`\> |
| `contentIdGet` | (`id`: `number`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentImportdealPost` | (`body`: [`MainImportDealBody`](../wiki/MainImportDealBody), `options?`: `any`) => `Promise`<`Response`\> |
| `contentListGet` | (`options?`: `any`) => `Promise`<`string`[]\> |
| `contentReadContGet` | (`cont`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentStagingZonesGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `contentStatsGet` | (`limit`: `string`, `offset`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `contentStatusIdGet` | (`id`: `number`, `options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3087](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3087)

___

### ContentApiFetchParamCreator

▸ **ContentApiFetchParamCreator**(`configuration?`): `Object`

ContentApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contentAddCarPost` | (`body`: `string`, `ignoreDupes?`: `string`, `filename?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentAddIpfsPost` | (`body`: [`UtilContentAddIpfsBody`](../wiki/UtilContentAddIpfsBody), `ignoreDupes?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentAddPost` | (`data`: `any`, `filename?`: `string`, `coluuid?`: `string`, `replication?`: `number`, `ignoreDupes?`: `string`, `lazyProvide?`: `string`, `dir?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentAggregatedContentGet` | (`content`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentAllDealsGet` | (`begin`: `string`, `duration`: `string`, `all`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentBwUsageContentGet` | (`content`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentCreatePost` | (`req`: [`UtilContentCreateBody`](../wiki/UtilContentCreateBody), `ignoreDupes?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentDealsGet` | (`limit?`: `number`, `offset?`: `number`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentEnsureReplicationDatacidGet` | (`datacid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentFailuresContentGet` | (`content`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentIdGet` | (`id`: `number`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentImportdealPost` | (`body`: [`MainImportDealBody`](../wiki/MainImportDealBody), `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentListGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentReadContGet` | (`cont`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentStagingZonesGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentStatsGet` | (`limit`: `string`, `offset`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `contentStatusIdGet` | (`id`: `number`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:2011](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L2011)

___

### ContentApiFp

▸ **ContentApiFp**(`configuration?`): `Object`

ContentApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contentAddCarPost` | (`body`: `string`, `ignoreDupes?`: `string`, `filename?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentAddIpfsPost` | (`body`: [`UtilContentAddIpfsBody`](../wiki/UtilContentAddIpfsBody), `ignoreDupes?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentAddPost` | (`data`: `any`, `filename?`: `string`, `coluuid?`: `string`, `replication?`: `number`, `ignoreDupes?`: `string`, `lazyProvide?`: `string`, `dir?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<[`UtilContentAddResponse`](../wiki/UtilContentAddResponse)\> |
| `contentAggregatedContentGet` | (`content`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`\> |
| `contentAllDealsGet` | (`begin`: `string`, `duration`: `string`, `all`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentBwUsageContentGet` | (`content`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentCreatePost` | (`req`: [`UtilContentCreateBody`](../wiki/UtilContentCreateBody), `ignoreDupes?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentDealsGet` | (`limit?`: `number`, `offset?`: `number`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentEnsureReplicationDatacidGet` | (`datacid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentFailuresContentGet` | (`content`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`\> |
| `contentIdGet` | (`id`: `number`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentImportdealPost` | (`body`: [`MainImportDealBody`](../wiki/MainImportDealBody), `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentListGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`[]\> |
| `contentReadContGet` | (`cont`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentStagingZonesGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentStatsGet` | (`limit`: `string`, `offset`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `contentStatusIdGet` | (`id`: `number`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:2743](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L2743)

___

### DealsApiFactory

▸ **DealsApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

DealsApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dealEstimatePost` | (`body`: [`MainEstimateDealBody`](../wiki/MainEstimateDealBody), `options?`: `any`) => `Promise`<`Response`\> |
| `dealInfoDealidGet` | (`dealid`: `number`, `options?`: `any`) => `Promise`<`Response`\> |
| `dealProposalPropcidGet` | (`propcid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `dealQueryMinerGet` | (`miner`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `dealStatusByProposalPropcidGet` | (`propcid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `dealStatusMinerPropcidGet` | (`miner`: `string`, `propcid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `dealTransferInProgressGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `dealsFailuresGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `dealsMakeMinerPost` | (`miner`: `string`, `dealRequest`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `dealsStatusDealGet` | (`deal`: `number`, `options?`: `any`) => `Promise`<`Response`\> |
| `publicDealsFailuresGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `publicMinersStorageQueryMinerGet` | (`miner`: `string`, `options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4192](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4192)

___

### DealsApiFetchParamCreator

▸ **DealsApiFetchParamCreator**(`configuration?`): `Object`

DealsApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dealEstimatePost` | (`body`: [`MainEstimateDealBody`](../wiki/MainEstimateDealBody), `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealInfoDealidGet` | (`dealid`: `number`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealProposalPropcidGet` | (`propcid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealQueryMinerGet` | (`miner`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealStatusByProposalPropcidGet` | (`propcid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealStatusMinerPropcidGet` | (`miner`: `string`, `propcid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealTransferInProgressGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealsFailuresGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealsMakeMinerPost` | (`miner`: `string`, `dealRequest`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `dealsStatusDealGet` | (`deal`: `number`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicDealsFailuresGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersStorageQueryMinerGet` | (`miner`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3503](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3503)

___

### DealsApiFp

▸ **DealsApiFp**(`configuration?`): `Object`

DealsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dealEstimatePost` | (`body`: [`MainEstimateDealBody`](../wiki/MainEstimateDealBody), `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealInfoDealidGet` | (`dealid`: `number`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealProposalPropcidGet` | (`propcid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealQueryMinerGet` | (`miner`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealStatusByProposalPropcidGet` | (`propcid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealStatusMinerPropcidGet` | (`miner`: `string`, `propcid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealTransferInProgressGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealsFailuresGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealsMakeMinerPost` | (`miner`: `string`, `dealRequest`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `dealsStatusDealGet` | (`deal`: `number`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicDealsFailuresGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMinersStorageQueryMinerGet` | (`miner`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:3956](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L3956)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

DefaultApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dealTransferStatusPost` | (`options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4537](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4537)

___

### DefaultApiFetchParamCreator

▸ **DefaultApiFetchParamCreator**(`configuration?`): `Object`

DefaultApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dealTransferStatusPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4472](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4472)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dealTransferStatusPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4511](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4511)

___

### MetricsApiFactory

▸ **MetricsApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

MetricsApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicMetricsDealsOnChainGet` | (`options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4640](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4640)

___

### MetricsApiFetchParamCreator

▸ **MetricsApiFetchParamCreator**(`configuration?`): `Object`

MetricsApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicMetricsDealsOnChainGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4573](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4573)

___

### MetricsApiFp

▸ **MetricsApiFp**(`configuration?`): `Object`

MetricsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicMetricsDealsOnChainGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4613](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4613)

___

### MinerApiFactory

▸ **MinerApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

MinerApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicMinersDealsMinerGet` | (`miner`: `string`, `ignoreFailed?`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `publicMinersStatsMinerGet` | (`miner`: `string`, `options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4814](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4814)

___

### MinerApiFetchParamCreator

▸ **MinerApiFetchParamCreator**(`configuration?`): `Object`

MinerApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicMinersDealsMinerGet` | (`miner`: `string`, `ignoreFailed?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersStatsMinerGet` | (`miner`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4678](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4678)

___

### MinerApiFp

▸ **MinerApiFp**(`configuration?`): `Object`

MinerApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicMinersDealsMinerGet` | (`miner`: `string`, `ignoreFailed?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMinersStatsMinerGet` | (`miner`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4766](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4766)

___

### NetApiFactory

▸ **NetApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

NetApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `netAddrsGet` | (`options?`: `any`) => `Promise`<`string`[]\> |
| `publicMinersFailuresMinerGet` | (`miner`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `publicMinersGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `publicNetAddrsGet` | (`options?`: `any`) => `Promise`<`string`[]\> |
| `publicNetPeersGet` | (`options?`: `any`) => `Promise`<`string`[]\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5148](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5148)

___

### NetApiFetchParamCreator

▸ **NetApiFetchParamCreator**(`configuration?`): `Object`

NetApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `netAddrsGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersFailuresMinerGet` | (`miner`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicNetAddrsGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicNetPeersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:4878](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L4878)

___

### NetApiFp

▸ **NetApiFp**(`configuration?`): `Object`

NetApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `netAddrsGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`[]\> |
| `publicMinersFailuresMinerGet` | (`miner`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMinersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicNetAddrsGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`[]\> |
| `publicNetPeersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`[]\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5048](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5048)

___

### PeeringApiFactory

▸ **PeeringApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

PeeringApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringPeersGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringPeersPost` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStartPost` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStatusGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStopPost` | (`options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5590](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5590)

___

### PeeringApiFetchParamCreator

▸ **PeeringApiFetchParamCreator**(`configuration?`): `Object`

PeeringApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringPeersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringPeersPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStartPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStatusGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStopPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5268](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5268)

___

### PeeringApiFp

▸ **PeeringApiFp**(`configuration?`): `Object`

PeeringApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringPeersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringPeersPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStartPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStatusGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStopPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5472](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5472)

___

### PeersApiFactory

▸ **PeersApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

PeersApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringPeersGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringPeersPost` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStartPost` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStatusGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `adminPeeringStopPost` | (`options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6052](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6052)

___

### PeersApiFetchParamCreator

▸ **PeersApiFetchParamCreator**(`configuration?`): `Object`

PeersApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringPeersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringPeersPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStartPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStatusGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `adminPeeringStopPost` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5730](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5730)

___

### PeersApiFp

▸ **PeersApiFp**(`configuration?`): `Object`

PeersApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `adminPeeringPeersDelete` | (`body`: `string`[], `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringPeersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringPeersPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStartPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStatusGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `adminPeeringStopPost` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:5934](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L5934)

___

### PinningApiFactory

▸ **PinningApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

PinningApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pinningPinsGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `pinningPinsPinidDelete` | (`pinid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `pinningPinsPinidGet` | (`pinid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `pinningPinsPinidPost` | (`pinid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `pinningPinsPost` | (`cid`: `string`, `name`: `string`, `options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6490](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6490)

___

### PinningApiFetchParamCreator

▸ **PinningApiFetchParamCreator**(`configuration?`): `Object`

PinningApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pinningPinsGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `pinningPinsPinidDelete` | (`pinid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `pinningPinsPinidGet` | (`pinid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `pinningPinsPinidPost` | (`pinid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `pinningPinsPost` | (`cid`: `string`, `name`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6192](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6192)

___

### PinningApiFp

▸ **PinningApiFp**(`configuration?`): `Object`

PinningApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pinningPinsGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `pinningPinsPinidDelete` | (`pinid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `pinningPinsPinidGet` | (`pinid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `pinningPinsPinidPost` | (`pinid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `pinningPinsPost` | (`cid`: `string`, `name`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6386](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6386)

___

### PublicApiFactory

▸ **PublicApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

PublicApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicByCidCidGet` | (`cid`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `publicInfoGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `publicMetricsDealsOnChainGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `publicMinersDealsMinerGet` | (`miner`: `string`, `ignoreFailed?`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `publicMinersFailuresMinerGet` | (`miner`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `publicMinersGet` | (`options?`: `any`) => `Promise`<`Response`\> |
| `publicMinersStatsMinerGet` | (`miner`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `publicNetAddrsGet` | (`options?`: `any`) => `Promise`<`string`[]\> |
| `publicNetPeersGet` | (`options?`: `any`) => `Promise`<`string`[]\> |
| `publicStatsGet` | (`options?`: `any`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7160](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7160)

___

### PublicApiFetchParamCreator

▸ **PublicApiFetchParamCreator**(`configuration?`): `Object`

PublicApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicByCidCidGet` | (`cid`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicInfoGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMetricsDealsOnChainGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersDealsMinerGet` | (`miner`: `string`, `ignoreFailed?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersFailuresMinerGet` | (`miner`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicMinersStatsMinerGet` | (`miner`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicNetAddrsGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicNetPeersGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `publicStatsGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6618](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6618)

___

### PublicApiFp

▸ **PublicApiFp**(`configuration?`): `Object`

PublicApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicByCidCidGet` | (`cid`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicInfoGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMetricsDealsOnChainGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMinersDealsMinerGet` | (`miner`: `string`, `ignoreFailed?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMinersFailuresMinerGet` | (`miner`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMinersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicMinersStatsMinerGet` | (`miner`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `publicNetAddrsGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`[]\> |
| `publicNetPeersGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`[]\> |
| `publicStatsGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:6966](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L6966)

___

### UserApiFactory

▸ **UserApiFactory**(`configuration?`, `fetch?`, `basePath?`): `Object`

UserApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |
| `fetch?` | [`FetchAPI`](../wiki/FetchAPI) |
| `basePath?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `userApiKeysGet` | (`options?`: `any`) => `Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)[]\> |
| `userApiKeysKeyDelete` | (`key`: `string`, `options?`: `any`) => `Promise`<`Response`\> |
| `userApiKeysPost` | (`expiry?`: `string`, `perms?`: `string`, `options?`: `any`) => `Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)\> |
| `userExportGet` | (`options?`: `any`) => `Promise`<`string`\> |
| `userStatsGet` | (`options?`: `any`) => `Promise`<[`MainUserStatsResponse`](../wiki/MainUserStatsResponse)\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7670](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7670)

___

### UserApiFetchParamCreator

▸ **UserApiFetchParamCreator**(`configuration?`): `Object`

UserApi - fetch parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `userApiKeysGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `userApiKeysKeyDelete` | (`key`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `userApiKeysPost` | (`expiry?`: `string`, `perms?`: `string`, `options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `userExportGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |
| `userStatsGet` | (`options?`: `any`) => [`FetchArgs`](../wiki/FetchArgs) |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7388](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7388)

___

### UserApiFp

▸ **UserApiFp**(`configuration?`): `Object`

UserApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Configuration` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `userApiKeysGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)[]\> |
| `userApiKeysKeyDelete` | (`key`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`Response`\> |
| `userApiKeysPost` | (`expiry?`: `string`, `perms?`: `string`, `options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<[`MainGetApiKeysResp`](../wiki/MainGetApiKeysResp)\> |
| `userExportGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<`string`\> |
| `userStatsGet` | (`options?`: `any`) => (`fetch?`: [`FetchAPI`](../wiki/FetchAPI), `basePath?`: `string`) => `Promise`<[`MainUserStatsResponse`](../wiki/MainUserStatsResponse)\> |

#### Defined in

[dev/estuary/estuary-clients/typescript-fetch/api.ts:7568](https://github.com/application-research/estuary-clients/blob/8a3562b/typescript-fetch/api.ts#L7568)
