# WWW::SwaggerClient::DefaultApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::DefaultApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deal_transfer_status_post**](DefaultApi.md#deal_transfer_status_post) | **POST** /deal/transfer/status | 


# **deal_transfer_status_post**
> deal_transfer_status_post()



### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->deal_transfer_status_post();
};
if ($@) {
    warn "Exception when calling DefaultApi->deal_transfer_status_post: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

