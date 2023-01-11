# EstuaryClient.DefaultApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealTransferStatusPost**](DefaultApi.md#dealTransferStatusPost) | **POST** /deal/transfer/status | 


<a name="dealTransferStatusPost"></a>
# **dealTransferStatusPost**
> dealTransferStatusPost()



### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealTransferStatusPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

