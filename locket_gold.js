
const unlockLocketGold = (response) => {
    let body = JSON.parse(response.body);
    
    // Fake VIP status
    body.subscriber = {
        is_active: true,
        entitlement: {
            pro: true
        }
    };
    
    // Chỉnh sửa body và trả về
    response.body = JSON.stringify(body);
    return response;
};

$httpClient.response = unlockLocketGold($httpClient.response);
