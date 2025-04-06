const deleteInvalidHeader = (request) => {
    request.headers = request.headers.filter(header => header !== 'Authorization');
    return request;
};

$httpClient.request = deleteInvalidHeader($httpClient.request);
