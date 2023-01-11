# Estuary API Bash client

## Overview
This is a Bash client script for accessing Estuary API service.

The script uses cURL underneath for making all REST calls.

## Usage

```shell
# Make sure the script has executable rights
$ chmod u+x 

# Print the list of operations available on the service
$ ./ -h

# Print the service description
$ ./ --about

# Print detailed information about specific operation
$ ./ <operationId> -h

# Make GET request
./ --host http://<hostname>:<port> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make GET request using arbitrary curl options (must be passed before <operationId>) to an SSL service using username:password
 -k -sS --tlsv1.2 --host https://<hostname> -u <user>:<password> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make POST request
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> -

# Make POST request with simple JSON content, e.g.:
# {
#   "key1": "value1",
#   "key2": "value2",
#   "key3": 23
# }
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> key1==value1 key2=value2 key3:=23 -

# Preview the cURL command without actually executing it
$  --host http://<hostname>:<port> --dry-run <operationid>

```

## Docker image
You can easily create a Docker image containing a preconfigured environment
for using the REST Bash client including working autocompletion and short
welcome message with basic instructions, using the generated Dockerfile:

```shell
docker build -t my-rest-client .
docker run -it my-rest-client
```

By default you will be logged into a Zsh environment which has much more
advanced auto completion, but you can switch to Bash, where basic autocompletion
is also available.

## Shell completion

### Bash
The generated bash-completion script can be either directly loaded to the current Bash session using:

```shell
source .bash-completion
```

Alternatively, the script can be copied to the `/etc/bash-completion.d` (or on OSX with Homebrew to `/usr/local/etc/bash-completion.d`):

```shell
sudo cp .bash-completion /etc/bash-completion.d/
```

#### OS X
On OSX you might need to install bash-completion using Homebrew:
```shell
brew install bash-completion
```
and add the following to the `~/.bashrc`:

```shell
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
```

### Zsh
In Zsh, the generated `_` Zsh completion file must be copied to one of the folders under `$FPATH` variable.


## Documentation for API Endpoints

All URIs are relative to **

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AdminApi* | [**adminPeeringPeersDelete**](docs/AdminApi.md#adminpeeringpeersdelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
*AdminApi* | [**adminPeeringPeersGet**](docs/AdminApi.md#adminpeeringpeersget) | **GET** /admin/peering/peers | List all Peering peers
*AdminApi* | [**adminPeeringPeersPost**](docs/AdminApi.md#adminpeeringpeerspost) | **POST** /admin/peering/peers | Add peers on Peering Service
*AdminApi* | [**adminPeeringStartPost**](docs/AdminApi.md#adminpeeringstartpost) | **POST** /admin/peering/start | Start Peering
*AdminApi* | [**adminPeeringStatusGet**](docs/AdminApi.md#adminpeeringstatusget) | **GET** /admin/peering/status | Check Peering Status
*AdminApi* | [**adminPeeringStopPost**](docs/AdminApi.md#adminpeeringstoppost) | **POST** /admin/peering/stop | Stop Peering
*AdminApi* | [**adminSystemConfigGet**](docs/AdminApi.md#adminsystemconfigget) | **GET** /admin/system/config | Get systems(estuary/shuttle) config
*AdminApi* | [**adminUsersGet**](docs/AdminApi.md#adminusersget) | **GET** /admin/users | Get all users
*AutoretrieveApi* | [**adminAutoretrieveInitPost**](docs/AutoretrieveApi.md#adminautoretrieveinitpost) | **POST** /admin/autoretrieve/init | Register autoretrieve server
*AutoretrieveApi* | [**adminAutoretrieveListGet**](docs/AutoretrieveApi.md#adminautoretrievelistget) | **GET** /admin/autoretrieve/list | List autoretrieve servers
*AutoretrieveApi* | [**autoretrieveHeartbeatPost**](docs/AutoretrieveApi.md#autoretrieveheartbeatpost) | **POST** /autoretrieve/heartbeat | Marks autoretrieve server as up
*CollectionsApi* | [**collectionsColuuidCommitPost**](docs/CollectionsApi.md#collectionscoluuidcommitpost) | **POST** /collections/{coluuid}/commit | Produce a CID of the collection contents
*CollectionsApi* | [**collectionsColuuidContentsDelete**](docs/CollectionsApi.md#collectionscoluuidcontentsdelete) | **DELETE** /collections/{coluuid}/contents | Deletes a content from a collection
*CollectionsApi* | [**collectionsColuuidDelete**](docs/CollectionsApi.md#collectionscoluuiddelete) | **DELETE** /collections/{coluuid} | Deletes a collection
*CollectionsApi* | [**collectionsColuuidGet**](docs/CollectionsApi.md#collectionscoluuidget) | **GET** /collections/{coluuid} | Get contents in a collection
*CollectionsApi* | [**collectionsColuuidPost**](docs/CollectionsApi.md#collectionscoluuidpost) | **POST** /collections/{coluuid} | Add contents to a collection
*CollectionsApi* | [**collectionsFsAddPost**](docs/CollectionsApi.md#collectionsfsaddpost) | **POST** /collections/fs/add | Add a file to a collection
*CollectionsApi* | [**collectionsGet**](docs/CollectionsApi.md#collectionsget) | **GET** /collections/ | List all collections
*CollectionsApi* | [**collectionsPost**](docs/CollectionsApi.md#collectionspost) | **POST** /collections/ | Create a new collection
*ContentApi* | [**contentAddCarPost**](docs/ContentApi.md#contentaddcarpost) | **POST** /content/add-car | Add Car object
*ContentApi* | [**contentAddIpfsPost**](docs/ContentApi.md#contentaddipfspost) | **POST** /content/add-ipfs | Add IPFS object
*ContentApi* | [**contentAddPost**](docs/ContentApi.md#contentaddpost) | **POST** /content/add | Add new content
*ContentApi* | [**contentAggregatedContentGet**](docs/ContentApi.md#contentaggregatedcontentget) | **GET** /content/aggregated/{content} | Get aggregated content stats
*ContentApi* | [**contentAllDealsGet**](docs/ContentApi.md#contentalldealsget) | **GET** /content/all-deals | Get all deals for a user
*ContentApi* | [**contentBwUsageContentGet**](docs/ContentApi.md#contentbwusagecontentget) | **GET** /content/bw-usage/{content} | Get content bandwidth
*ContentApi* | [**contentCreatePost**](docs/ContentApi.md#contentcreatepost) | **POST** /content/create | Add a new content
*ContentApi* | [**contentDealsGet**](docs/ContentApi.md#contentdealsget) | **GET** /content/deals | Content with deals
*ContentApi* | [**contentEnsureReplicationDatacidGet**](docs/ContentApi.md#contentensurereplicationdatacidget) | **GET** /content/ensure-replication/{datacid} | Ensure Replication
*ContentApi* | [**contentFailuresContentGet**](docs/ContentApi.md#contentfailurescontentget) | **GET** /content/failures/{content} | List all failures for a content
*ContentApi* | [**contentIdGet**](docs/ContentApi.md#contentidget) | **GET** /content/{id} | Content
*ContentApi* | [**contentImportdealPost**](docs/ContentApi.md#contentimportdealpost) | **POST** /content/importdeal | Import a deal
*ContentApi* | [**contentListGet**](docs/ContentApi.md#contentlistget) | **GET** /content/list | List all pinned content
*ContentApi* | [**contentReadContGet**](docs/ContentApi.md#contentreadcontget) | **GET** /content/read/{cont} | Read content
*ContentApi* | [**contentStagingZonesGet**](docs/ContentApi.md#contentstagingzonesget) | **GET** /content/staging-zones | Get staging zone for user
*ContentApi* | [**contentStatsGet**](docs/ContentApi.md#contentstatsget) | **GET** /content/stats | Get content statistics
*ContentApi* | [**contentStatusIdGet**](docs/ContentApi.md#contentstatusidget) | **GET** /content/status/{id} | Content Status
*DealsApi* | [**dealEstimatePost**](docs/DealsApi.md#dealestimatepost) | **POST** /deal/estimate | Estimate the cost of a deal
*DealsApi* | [**dealInfoDealidGet**](docs/DealsApi.md#dealinfodealidget) | **GET** /deal/info/{dealid} | Get Deal Info
*DealsApi* | [**dealProposalPropcidGet**](docs/DealsApi.md#dealproposalpropcidget) | **GET** /deal/proposal/{propcid} | Get Proposal
*DealsApi* | [**dealQueryMinerGet**](docs/DealsApi.md#dealqueryminerget) | **GET** /deal/query/{miner} | Query Ask
*DealsApi* | [**dealStatusByProposalPropcidGet**](docs/DealsApi.md#dealstatusbyproposalpropcidget) | **GET** /deal/status-by-proposal/{propcid} | Get Deal Status by PropCid
*DealsApi* | [**dealStatusMinerPropcidGet**](docs/DealsApi.md#dealstatusminerpropcidget) | **GET** /deal/status/{miner}/{propcid} | Deal Status
*DealsApi* | [**dealTransferInProgressGet**](docs/DealsApi.md#dealtransferinprogressget) | **GET** /deal/transfer/in-progress | Transfer In Progress
*DealsApi* | [**dealsFailuresGet**](docs/DealsApi.md#dealsfailuresget) | **GET** /deals/failures | Get storage failures for user
*DealsApi* | [**dealsMakeMinerPost**](docs/DealsApi.md#dealsmakeminerpost) | **POST** /deals/make/{miner} | Make Deal
*DealsApi* | [**dealsStatusDealGet**](docs/DealsApi.md#dealsstatusdealget) | **GET** /deals/status/{deal} | Get Deal Status
*DealsApi* | [**publicDealsFailuresGet**](docs/DealsApi.md#publicdealsfailuresget) | **GET** /public/deals/failures | Get storage failures
*DealsApi* | [**publicMinersStorageQueryMinerGet**](docs/DealsApi.md#publicminersstoragequeryminerget) | **GET** /public/miners/storage/query/{miner} | Query Ask
*DefaultApi* | [**dealTransferStatusPost**](docs/DefaultApi.md#dealtransferstatuspost) | **POST** /deal/transfer/status | 
*MetricsApi* | [**publicMetricsDealsOnChainGet**](docs/MetricsApi.md#publicmetricsdealsonchainget) | **GET** /public/metrics/deals-on-chain | Get deal metrics
*MinerApi* | [**publicMinersDealsMinerGet**](docs/MinerApi.md#publicminersdealsminerget) | **GET** /public/miners/deals/{miner} | Get all miners deals
*MinerApi* | [**publicMinersStatsMinerGet**](docs/MinerApi.md#publicminersstatsminerget) | **GET** /public/miners/stats/{miner} | Get miner stats
*NetApi* | [**netAddrsGet**](docs/NetApi.md#netaddrsget) | **GET** /net/addrs | Net Addrs
*NetApi* | [**publicMinersFailuresMinerGet**](docs/NetApi.md#publicminersfailuresminerget) | **GET** /public/miners/failures/{miner} | Get all miners
*NetApi* | [**publicMinersGet**](docs/NetApi.md#publicminersget) | **GET** /public/miners | Get all miners
*NetApi* | [**publicNetAddrsGet**](docs/NetApi.md#publicnetaddrsget) | **GET** /public/net/addrs | Net Addrs
*NetApi* | [**publicNetPeersGet**](docs/NetApi.md#publicnetpeersget) | **GET** /public/net/peers | Net Peers
*PeeringApi* | [**adminPeeringPeersDelete**](docs/PeeringApi.md#adminpeeringpeersdelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
*PeeringApi* | [**adminPeeringPeersGet**](docs/PeeringApi.md#adminpeeringpeersget) | **GET** /admin/peering/peers | List all Peering peers
*PeeringApi* | [**adminPeeringPeersPost**](docs/PeeringApi.md#adminpeeringpeerspost) | **POST** /admin/peering/peers | Add peers on Peering Service
*PeeringApi* | [**adminPeeringStartPost**](docs/PeeringApi.md#adminpeeringstartpost) | **POST** /admin/peering/start | Start Peering
*PeeringApi* | [**adminPeeringStatusGet**](docs/PeeringApi.md#adminpeeringstatusget) | **GET** /admin/peering/status | Check Peering Status
*PeeringApi* | [**adminPeeringStopPost**](docs/PeeringApi.md#adminpeeringstoppost) | **POST** /admin/peering/stop | Stop Peering
*PeersApi* | [**adminPeeringPeersDelete**](docs/PeersApi.md#adminpeeringpeersdelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
*PeersApi* | [**adminPeeringPeersGet**](docs/PeersApi.md#adminpeeringpeersget) | **GET** /admin/peering/peers | List all Peering peers
*PeersApi* | [**adminPeeringPeersPost**](docs/PeersApi.md#adminpeeringpeerspost) | **POST** /admin/peering/peers | Add peers on Peering Service
*PeersApi* | [**adminPeeringStartPost**](docs/PeersApi.md#adminpeeringstartpost) | **POST** /admin/peering/start | Start Peering
*PeersApi* | [**adminPeeringStatusGet**](docs/PeersApi.md#adminpeeringstatusget) | **GET** /admin/peering/status | Check Peering Status
*PeersApi* | [**adminPeeringStopPost**](docs/PeersApi.md#adminpeeringstoppost) | **POST** /admin/peering/stop | Stop Peering
*PinningApi* | [**pinningPinsGet**](docs/PinningApi.md#pinningpinsget) | **GET** /pinning/pins | List all pin status objects
*PinningApi* | [**pinningPinsPinidDelete**](docs/PinningApi.md#pinningpinspiniddelete) | **DELETE** /pinning/pins/{pinid} | Delete a pinned object
*PinningApi* | [**pinningPinsPinidGet**](docs/PinningApi.md#pinningpinspinidget) | **GET** /pinning/pins/{pinid} | Get a pin status object
*PinningApi* | [**pinningPinsPinidPost**](docs/PinningApi.md#pinningpinspinidpost) | **POST** /pinning/pins/{pinid} | Replace a pinned object
*PinningApi* | [**pinningPinsPost**](docs/PinningApi.md#pinningpinspost) | **POST** /pinning/pins | Add and pin object
*PublicApi* | [**publicByCidCidGet**](docs/PublicApi.md#publicbycidcidget) | **GET** /public/by-cid/{cid} | Get Content by Cid
*PublicApi* | [**publicInfoGet**](docs/PublicApi.md#publicinfoget) | **GET** /public/info | Get public node info
*PublicApi* | [**publicMetricsDealsOnChainGet**](docs/PublicApi.md#publicmetricsdealsonchainget) | **GET** /public/metrics/deals-on-chain | Get deal metrics
*PublicApi* | [**publicMinersDealsMinerGet**](docs/PublicApi.md#publicminersdealsminerget) | **GET** /public/miners/deals/{miner} | Get all miners deals
*PublicApi* | [**publicMinersFailuresMinerGet**](docs/PublicApi.md#publicminersfailuresminerget) | **GET** /public/miners/failures/{miner} | Get all miners
*PublicApi* | [**publicMinersGet**](docs/PublicApi.md#publicminersget) | **GET** /public/miners | Get all miners
*PublicApi* | [**publicMinersStatsMinerGet**](docs/PublicApi.md#publicminersstatsminerget) | **GET** /public/miners/stats/{miner} | Get miner stats
*PublicApi* | [**publicNetAddrsGet**](docs/PublicApi.md#publicnetaddrsget) | **GET** /public/net/addrs | Net Addrs
*PublicApi* | [**publicNetPeersGet**](docs/PublicApi.md#publicnetpeersget) | **GET** /public/net/peers | Net Peers
*PublicApi* | [**publicStatsGet**](docs/PublicApi.md#publicstatsget) | **GET** /public/stats | Public stats
*UserApi* | [**userApiKeysGet**](docs/UserApi.md#userapikeysget) | **GET** /user/api-keys | Get API keys for a user
*UserApi* | [**userApiKeysKeyDelete**](docs/UserApi.md#userapikeyskeydelete) | **DELETE** /user/api-keys/{key} | Revoke a User API Key.
*UserApi* | [**userApiKeysPost**](docs/UserApi.md#userapikeyspost) | **POST** /user/api-keys | Create API keys for a user
*UserApi* | [**userExportGet**](docs/UserApi.md#userexportget) | **GET** /user/export | Export user data
*UserApi* | [**userStatsGet**](docs/UserApi.md#userstatsget) | **GET** /user/stats | Create API keys for a user


## Documentation For Models

 - [Collections.Collection](docs/Collections.Collection.md)
 - [Main.createCollectionBody](docs/Main.createCollectionBody.md)
 - [Main.deleteContentFromCollectionBody](docs/Main.deleteContentFromCollectionBody.md)
 - [Main.estimateDealBody](docs/Main.estimateDealBody.md)
 - [Main.getApiKeysResp](docs/Main.getApiKeysResp.md)
 - [Main.importDealBody](docs/Main.importDealBody.md)
 - [Main.userStatsResponse](docs/Main.userStatsResponse.md)
 - [Util.ContentAddIpfsBody](docs/Util.ContentAddIpfsBody.md)
 - [Util.ContentAddResponse](docs/Util.ContentAddResponse.md)
 - [Util.ContentCreateBody](docs/Util.ContentCreateBody.md)
 - [Util.HttpError](docs/Util.HttpError.md)


## Documentation For Authorization


## bearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

