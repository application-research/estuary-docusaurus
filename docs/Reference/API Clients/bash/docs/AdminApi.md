# AdminApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminPeeringPeersDelete**](AdminApi.md#adminPeeringPeersDelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
[**adminPeeringPeersGet**](AdminApi.md#adminPeeringPeersGet) | **GET** /admin/peering/peers | List all Peering peers
[**adminPeeringPeersPost**](AdminApi.md#adminPeeringPeersPost) | **POST** /admin/peering/peers | Add peers on Peering Service
[**adminPeeringStartPost**](AdminApi.md#adminPeeringStartPost) | **POST** /admin/peering/start | Start Peering
[**adminPeeringStatusGet**](AdminApi.md#adminPeeringStatusGet) | **GET** /admin/peering/status | Check Peering Status
[**adminPeeringStopPost**](AdminApi.md#adminPeeringStopPost) | **POST** /admin/peering/stop | Stop Peering
[**adminSystemConfigGet**](AdminApi.md#adminSystemConfigGet) | **GET** /admin/system/config | Get systems(estuary/shuttle) config
[**adminUsersGet**](AdminApi.md#adminUsersGet) | **GET** /admin/users | Get all users


## **adminPeeringPeersDelete**

Remove peers on Peering Service

This endpoint can be used to remove a Peer from the Peering Service

### Example
```bash
 adminPeeringPeersDelete
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **array[string]** | Peer ids |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **adminPeeringPeersGet**

List all Peering peers

This endpoint can be used to list all peers on Peering Service

### Example
```bash
 adminPeeringPeersGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **adminPeeringPeersPost**

Add peers on Peering Service

This endpoint can be used to add a Peer from the Peering Service

### Example
```bash
 adminPeeringPeersPost
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **adminPeeringStartPost**

Start Peering

This endpoint can be used to start the Peering Service

### Example
```bash
 adminPeeringStartPost
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **adminPeeringStatusGet**

Check Peering Status

This endpoint can be used to check the Peering status

### Example
```bash
 adminPeeringStatusGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **adminPeeringStopPost**

Stop Peering

This endpoint can be used to stop the Peering Service

### Example
```bash
 adminPeeringStopPost
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **adminSystemConfigGet**

Get systems(estuary/shuttle) config

This endpoint is used to get system configs.

### Example
```bash
 adminSystemConfigGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **adminUsersGet**

Get all users

This endpoint is used to get all users.

### Example
```bash
 adminUsersGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

