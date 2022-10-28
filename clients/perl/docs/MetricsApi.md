# WWW::SwaggerClient::MetricsApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::MetricsApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_metrics_deals_on_chain_get**](MetricsApi.md#public_metrics_deals_on_chain_get) | **GET** /public/metrics/deals-on-chain | Get deal metrics


# **public_metrics_deals_on_chain_get**
> public_metrics_deals_on_chain_get()

Get deal metrics

This endpoint is used to get deal metrics

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::MetricsApi;
my $api_instance = WWW::SwaggerClient::MetricsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->public_metrics_deals_on_chain_get();
};
if ($@) {
    warn "Exception when calling MetricsApi->public_metrics_deals_on_chain_get: $@\n";
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
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

