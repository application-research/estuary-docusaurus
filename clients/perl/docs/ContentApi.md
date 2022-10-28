# WWW::SwaggerClient::ContentApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::ContentApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**content_add_car_post**](ContentApi.md#content_add_car_post) | **POST** /content/add-car | Add Car object
[**content_add_ipfs_post**](ContentApi.md#content_add_ipfs_post) | **POST** /content/add-ipfs | Add IPFS object
[**content_add_post**](ContentApi.md#content_add_post) | **POST** /content/add | Add new content
[**content_aggregated_content_get**](ContentApi.md#content_aggregated_content_get) | **GET** /content/aggregated/{content} | Get aggregated content stats
[**content_all_deals_get**](ContentApi.md#content_all_deals_get) | **GET** /content/all-deals | Get all deals for a user
[**content_bw_usage_content_get**](ContentApi.md#content_bw_usage_content_get) | **GET** /content/bw-usage/{content} | Get content bandwidth
[**content_create_post**](ContentApi.md#content_create_post) | **POST** /content/create | Add a new content
[**content_deals_get**](ContentApi.md#content_deals_get) | **GET** /content/deals | Content with deals
[**content_ensure_replication_datacid_get**](ContentApi.md#content_ensure_replication_datacid_get) | **GET** /content/ensure-replication/{datacid} | Ensure Replication
[**content_failures_content_get**](ContentApi.md#content_failures_content_get) | **GET** /content/failures/{content} | List all failures for a content
[**content_id_get**](ContentApi.md#content_id_get) | **GET** /content/{id} | Content
[**content_importdeal_post**](ContentApi.md#content_importdeal_post) | **POST** /content/importdeal | Import a deal
[**content_list_get**](ContentApi.md#content_list_get) | **GET** /content/list | List all pinned content
[**content_read_cont_get**](ContentApi.md#content_read_cont_get) | **GET** /content/read/{cont} | Read content
[**content_staging_zones_get**](ContentApi.md#content_staging_zones_get) | **GET** /content/staging-zones | Get staging zone for user
[**content_stats_get**](ContentApi.md#content_stats_get) | **GET** /content/stats | Get content statistics
[**content_status_id_get**](ContentApi.md#content_status_id_get) | **GET** /content/status/{id} | Content Status


# **content_add_car_post**
> content_add_car_post(body => $body, ignore_dupes => $ignore_dupes, filename => $filename)

Add Car object

This endpoint is used to add a car object to the network. The object can be a file or a directory.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $body = WWW::SwaggerClient::Object::string->new(); # string | Car
my $ignore_dupes = 'ignore_dupes_example'; # string | Ignore Dupes
my $filename = 'filename_example'; # string | Filename

eval { 
    $api_instance->content_add_car_post(body => $body, ignore_dupes => $ignore_dupes, filename => $filename);
};
if ($@) {
    warn "Exception when calling ContentApi->content_add_car_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Car | 
 **ignore_dupes** | **string**| Ignore Dupes | [optional] 
 **filename** | **string**| Filename | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_add_ipfs_post**
> content_add_ipfs_post(body => $body, ignore_dupes => $ignore_dupes)

Add IPFS object

This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $body = WWW::SwaggerClient::Object::UtilContentAddIpfsBody->new(); # UtilContentAddIpfsBody | IPFS Body
my $ignore_dupes = 'ignore_dupes_example'; # string | Ignore Dupes

eval { 
    $api_instance->content_add_ipfs_post(body => $body, ignore_dupes => $ignore_dupes);
};
if ($@) {
    warn "Exception when calling ContentApi->content_add_ipfs_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UtilContentAddIpfsBody**](UtilContentAddIpfsBody.md)| IPFS Body | 
 **ignore_dupes** | **string**| Ignore Dupes | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_add_post**
> UtilContentAddResponse content_add_post(data => $data, filename => $filename, coluuid => $coluuid, replication => $replication, ignore_dupes => $ignore_dupes, lazy_provide => $lazy_provide, dir => $dir)

Add new content

This endpoint is used to upload new content.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $data = '/path/to/file.txt'; # File | File to upload
my $filename = 'filename_example'; # string | Filenam to use for upload
my $coluuid = 'coluuid_example'; # string | Collection UUID
my $replication = 56; # int | Replication value
my $ignore_dupes = 'ignore_dupes_example'; # string | Ignore Dupes true/false
my $lazy_provide = 'lazy_provide_example'; # string | Lazy Provide true/false
my $dir = 'dir_example'; # string | Directory

eval { 
    my $result = $api_instance->content_add_post(data => $data, filename => $filename, coluuid => $coluuid, replication => $replication, ignore_dupes => $ignore_dupes, lazy_provide => $lazy_provide, dir => $dir);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ContentApi->content_add_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **File**| File to upload | 
 **filename** | **string**| Filenam to use for upload | [optional] 
 **coluuid** | **string**| Collection UUID | [optional] 
 **replication** | **int**| Replication value | [optional] 
 **ignore_dupes** | **string**| Ignore Dupes true/false | [optional] 
 **lazy_provide** | **string**| Lazy Provide true/false | [optional] 
 **dir** | **string**| Directory | [optional] 

### Return type

[**UtilContentAddResponse**](UtilContentAddResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_aggregated_content_get**
> string content_aggregated_content_get(content => $content)

Get aggregated content stats

This endpoint returns aggregated content stats

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $content = 'content_example'; # string | Content ID

eval { 
    my $result = $api_instance->content_aggregated_content_get(content => $content);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ContentApi->content_aggregated_content_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **string**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_all_deals_get**
> content_all_deals_get(begin => $begin, duration => $duration, all => $all)

Get all deals for a user

This endpoint is used to get all deals for a user

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $begin = 'begin_example'; # string | Begin
my $duration = 'duration_example'; # string | Duration
my $all = 'all_example'; # string | All

eval { 
    $api_instance->content_all_deals_get(begin => $begin, duration => $duration, all => $all);
};
if ($@) {
    warn "Exception when calling ContentApi->content_all_deals_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **begin** | **string**| Begin | 
 **duration** | **string**| Duration | 
 **all** | **string**| All | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_bw_usage_content_get**
> content_bw_usage_content_get(content => $content)

Get content bandwidth

This endpoint returns content bandwidth

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $content = 'content_example'; # string | Content ID

eval { 
    $api_instance->content_bw_usage_content_get(content => $content);
};
if ($@) {
    warn "Exception when calling ContentApi->content_bw_usage_content_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **string**| Content ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_create_post**
> content_create_post(req => $req, ignore_dupes => $ignore_dupes)

Add a new content

This endpoint adds a new content

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $req = WWW::SwaggerClient::Object::UtilContentCreateBody->new(); # UtilContentCreateBody | Content
my $ignore_dupes = 'ignore_dupes_example'; # string | Ignore Dupes

eval { 
    $api_instance->content_create_post(req => $req, ignore_dupes => $ignore_dupes);
};
if ($@) {
    warn "Exception when calling ContentApi->content_create_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **req** | [**UtilContentCreateBody**](UtilContentCreateBody.md)| Content | 
 **ignore_dupes** | **string**| Ignore Dupes | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_deals_get**
> content_deals_get(limit => $limit, offset => $offset)

Content with deals

This endpoint lists all content with deals

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $limit = 56; # int | Limit
my $offset = 56; # int | Offset

eval { 
    $api_instance->content_deals_get(limit => $limit, offset => $offset);
};
if ($@) {
    warn "Exception when calling ContentApi->content_deals_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_ensure_replication_datacid_get**
> content_ensure_replication_datacid_get(datacid => $datacid)

Ensure Replication

This endpoint ensures that the content is replicated to the specified number of providers

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $datacid = 'datacid_example'; # string | Data CID

eval { 
    $api_instance->content_ensure_replication_datacid_get(datacid => $datacid);
};
if ($@) {
    warn "Exception when calling ContentApi->content_ensure_replication_datacid_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datacid** | **string**| Data CID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_failures_content_get**
> string content_failures_content_get(content => $content)

List all failures for a content

This endpoint returns all failures for a content

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $content = 'content_example'; # string | Content ID

eval { 
    my $result = $api_instance->content_failures_content_get(content => $content);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ContentApi->content_failures_content_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **string**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_id_get**
> content_id_get(id => $id)

Content

This endpoint returns a content by its ID

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $id = 56; # int | Content ID

eval { 
    $api_instance->content_id_get(id => $id);
};
if ($@) {
    warn "Exception when calling ContentApi->content_id_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Content ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_importdeal_post**
> content_importdeal_post(body => $body)

Import a deal

This endpoint imports a deal into the shuttle.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $body = WWW::SwaggerClient::Object::MainImportDealBody->new(); # MainImportDealBody | Import a deal

eval { 
    $api_instance->content_importdeal_post(body => $body);
};
if ($@) {
    warn "Exception when calling ContentApi->content_importdeal_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainImportDealBody**](MainImportDealBody.md)| Import a deal | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_list_get**
> ARRAY[string] content_list_get()

List all pinned content

This endpoint lists all content

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->content_list_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ContentApi->content_list_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**ARRAY[string]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_read_cont_get**
> content_read_cont_get(cont => $cont)

Read content

This endpoint reads content from the blockstore

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $cont = 'cont_example'; # string | CID

eval { 
    $api_instance->content_read_cont_get(cont => $cont);
};
if ($@) {
    warn "Exception when calling ContentApi->content_read_cont_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cont** | **string**| CID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_staging_zones_get**
> content_staging_zones_get()

Get staging zone for user

This endpoint is used to get staging zone for user.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->content_staging_zones_get();
};
if ($@) {
    warn "Exception when calling ContentApi->content_staging_zones_get: $@\n";
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

# **content_stats_get**
> content_stats_get(limit => $limit, offset => $offset)

Get content statistics

This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $limit = 'limit_example'; # string | limit
my $offset = 'offset_example'; # string | offset

eval { 
    $api_instance->content_stats_get(limit => $limit, offset => $offset);
};
if ($@) {
    warn "Exception when calling ContentApi->content_stats_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **string**| limit | 
 **offset** | **string**| offset | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_status_id_get**
> content_status_id_get(id => $id)

Content Status

This endpoint returns the status of a content

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::ContentApi;
my $api_instance = WWW::SwaggerClient::ContentApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $id = 56; # int | Content ID

eval { 
    $api_instance->content_status_id_get(id => $id);
};
if ($@) {
    warn "Exception when calling ContentApi->content_status_id_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Content ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

