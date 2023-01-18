# AdminApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AdminMinersGet**](AdminApi.md#AdminMinersGet) | **Get** /admin/miners/ | Get all miners
[**AdminPeeringPeersDelete**](AdminApi.md#AdminPeeringPeersDelete) | **Delete** /admin/peering/peers | Remove peers on Peering Service
[**AdminPeeringPeersGet**](AdminApi.md#AdminPeeringPeersGet) | **Get** /admin/peering/peers | List all Peering peers
[**AdminPeeringPeersPost**](AdminApi.md#AdminPeeringPeersPost) | **Post** /admin/peering/peers | Add peers on Peering Service
[**AdminPeeringStartPost**](AdminApi.md#AdminPeeringStartPost) | **Post** /admin/peering/start | Start Peering
[**AdminPeeringStatusGet**](AdminApi.md#AdminPeeringStatusGet) | **Get** /admin/peering/status | Check Peering Status
[**AdminPeeringStopPost**](AdminApi.md#AdminPeeringStopPost) | **Post** /admin/peering/stop | Stop Peering
[**AdminSystemConfigGet**](AdminApi.md#AdminSystemConfigGet) | **Get** /admin/system/config | Get systems(estuary/shuttle) config
[**AdminUsersGet**](AdminApi.md#AdminUsersGet) | **Get** /admin/users | Get all users

## **AdminMinersGet** {#AdminMinersGet}
> ApiMinerResp AdminMinersGet(ctx, )
Get all miners

This endpoint returns all miners. Note: value may be cached

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**ApiMinerResp**](api.minerResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminPeeringPeersDelete** {#AdminPeeringPeersDelete}
> string AdminPeeringPeersDelete(ctx, body)
Remove peers on Peering Service

This endpoint can be used to remove a Peer from the Peering Service

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**[]string**](string.md)| Peer ids | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminPeeringPeersGet** {#AdminPeeringPeersGet}
> string AdminPeeringPeersGet(ctx, )
List all Peering peers

This endpoint can be used to list all peers on Peering Service

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminPeeringPeersPost** {#AdminPeeringPeersPost}
> string AdminPeeringPeersPost(ctx, body)
Add peers on Peering Service

This endpoint can be used to add a Peer from the Peering Service

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**[]PeeringPeeringPeer**](peering.PeeringPeer.md)| Peering Peer array | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminPeeringStartPost** {#AdminPeeringStartPost}
> string AdminPeeringStartPost(ctx, )
Start Peering

This endpoint can be used to start the Peering Service

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminPeeringStatusGet** {#AdminPeeringStatusGet}
> string AdminPeeringStatusGet(ctx, )
Check Peering Status

This endpoint can be used to check the Peering status

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminPeeringStopPost** {#AdminPeeringStopPost}
> string AdminPeeringStopPost(ctx, )
Stop Peering

This endpoint can be used to stop the Peering Service

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminSystemConfigGet** {#AdminSystemConfigGet}
> string AdminSystemConfigGet(ctx, )
Get systems(estuary/shuttle) config

This endpoint is used to get system configs.

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminUsersGet** {#AdminUsersGet}
> string AdminUsersGet(ctx, )
Get all users

This endpoint is used to get all users.

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

