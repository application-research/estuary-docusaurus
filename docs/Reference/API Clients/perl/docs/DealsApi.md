# WWW::SwaggerClient::DealsApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::DealsApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deal_estimate_post**](DealsApi.md#deal_estimate_post) | **POST** /deal/estimate | Estimate the cost of a deal
[**deal_info_dealid_get**](DealsApi.md#deal_info_dealid_get) | **GET** /deal/info/{dealid} | Get Deal Info
[**deal_proposal_propcid_get**](DealsApi.md#deal_proposal_propcid_get) | **GET** /deal/proposal/{propcid} | Get Proposal
[**deal_query_miner_get**](DealsApi.md#deal_query_miner_get) | **GET** /deal/query/{miner} | Query Ask
[**deal_status_by_proposal_propcid_get**](DealsApi.md#deal_status_by_proposal_propcid_get) | **GET** /deal/status-by-proposal/{propcid} | Get Deal Status by PropCid
[**deal_status_miner_propcid_get**](DealsApi.md#deal_status_miner_propcid_get) | **GET** /deal/status/{miner}/{propcid} | Deal Status
[**deal_transfer_in_progress_get**](DealsApi.md#deal_transfer_in_progress_get) | **GET** /deal/transfer/in-progress | Transfer In Progress
[**deals_failures_get**](DealsApi.md#deals_failures_get) | **GET** /deals/failures | Get storage failures for user
[**deals_make_miner_post**](DealsApi.md#deals_make_miner_post) | **POST** /deals/make/{miner} | Make Deal
[**deals_status_deal_get**](DealsApi.md#deals_status_deal_get) | **GET** /deals/status/{deal} | Get Deal Status
[**public_deals_failures_get**](DealsApi.md#public_deals_failures_get) | **GET** /public/deals/failures | Get storage failures
[**public_miners_storage_query_miner_get**](DealsApi.md#public_miners_storage_query_miner_get) | **GET** /public/miners/storage/query/{miner} | Query Ask


# **deal_estimate_post**
> deal_estimate_post(body => $body)

Estimate the cost of a deal

This endpoint estimates the cost of a deal

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $body = WWW::SwaggerClient::Object::MainEstimateDealBody->new(); # MainEstimateDealBody | The size of the deal in bytes, the replication factor, and the duration of the deal in blocks

eval { 
    $api_instance->deal_estimate_post(body => $body);
};
if ($@) {
    warn "Exception when calling DealsApi->deal_estimate_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainEstimateDealBody**](MainEstimateDealBody.md)| The size of the deal in bytes, the replication factor, and the duration of the deal in blocks | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deal_info_dealid_get**
> deal_info_dealid_get(dealid => $dealid)

Get Deal Info

This endpoint returns the deal info for a deal

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $dealid = 56; # int | Deal ID

eval { 
    $api_instance->deal_info_dealid_get(dealid => $dealid);
};
if ($@) {
    warn "Exception when calling DealsApi->deal_info_dealid_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealid** | **int**| Deal ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deal_proposal_propcid_get**
> deal_proposal_propcid_get(propcid => $propcid)

Get Proposal

This endpoint returns the proposal for a deal

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $propcid = 'propcid_example'; # string | Proposal CID

eval { 
    $api_instance->deal_proposal_propcid_get(propcid => $propcid);
};
if ($@) {
    warn "Exception when calling DealsApi->deal_proposal_propcid_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **string**| Proposal CID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deal_query_miner_get**
> deal_query_miner_get(miner => $miner)

Query Ask

This endpoint returns the ask for a given CID

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $miner = 'miner_example'; # string | CID

eval { 
    $api_instance->deal_query_miner_get(miner => $miner);
};
if ($@) {
    warn "Exception when calling DealsApi->deal_query_miner_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| CID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deal_status_by_proposal_propcid_get**
> deal_status_by_proposal_propcid_get(propcid => $propcid)

Get Deal Status by PropCid

Get Deal Status by PropCid

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $propcid = 'propcid_example'; # string | PropCid

eval { 
    $api_instance->deal_status_by_proposal_propcid_get(propcid => $propcid);
};
if ($@) {
    warn "Exception when calling DealsApi->deal_status_by_proposal_propcid_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **string**| PropCid | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deal_status_miner_propcid_get**
> deal_status_miner_propcid_get(miner => $miner, propcid => $propcid)

Deal Status

This endpoint returns the status of a deal

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $miner = 'miner_example'; # string | Miner
my $propcid = 'propcid_example'; # string | Proposal CID

eval { 
    $api_instance->deal_status_miner_propcid_get(miner => $miner, propcid => $propcid);
};
if ($@) {
    warn "Exception when calling DealsApi->deal_status_miner_propcid_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Miner | 
 **propcid** | **string**| Proposal CID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deal_transfer_in_progress_get**
> deal_transfer_in_progress_get()

Transfer In Progress

This endpoint returns the in-progress transfers

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->deal_transfer_in_progress_get();
};
if ($@) {
    warn "Exception when calling DealsApi->deal_transfer_in_progress_get: $@\n";
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

# **deals_failures_get**
> deals_failures_get()

Get storage failures for user

This endpoint returns a list of storage failures for user

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->deals_failures_get();
};
if ($@) {
    warn "Exception when calling DealsApi->deals_failures_get: $@\n";
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

# **deals_make_miner_post**
> deals_make_miner_post(miner => $miner, deal_request => $deal_request)

Make Deal

This endpoint makes a deal for a given content and miner

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $miner = 'miner_example'; # string | Miner
my $deal_request = WWW::SwaggerClient::Object::string->new(); # string | Deal Request

eval { 
    $api_instance->deals_make_miner_post(miner => $miner, deal_request => $deal_request);
};
if ($@) {
    warn "Exception when calling DealsApi->deals_make_miner_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Miner | 
 **deal_request** | **string**| Deal Request | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deals_status_deal_get**
> deals_status_deal_get(deal => $deal)

Get Deal Status

This endpoint returns the status of a deal

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $deal = 56; # int | Deal ID

eval { 
    $api_instance->deals_status_deal_get(deal => $deal);
};
if ($@) {
    warn "Exception when calling DealsApi->deals_status_deal_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deal** | **int**| Deal ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_deals_failures_get**
> public_deals_failures_get()

Get storage failures

This endpoint returns a list of storage failures

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->public_deals_failures_get();
};
if ($@) {
    warn "Exception when calling DealsApi->public_deals_failures_get: $@\n";
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

# **public_miners_storage_query_miner_get**
> public_miners_storage_query_miner_get(miner => $miner)

Query Ask

This endpoint returns the ask for a given CID

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DealsApi;
my $api_instance = WWW::SwaggerClient::DealsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $miner = 'miner_example'; # string | CID

eval { 
    $api_instance->public_miners_storage_query_miner_get(miner => $miner);
};
if ($@) {
    warn "Exception when calling DealsApi->public_miners_storage_query_miner_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| CID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

