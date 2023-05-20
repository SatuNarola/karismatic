const handleResponse = (response) => {
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
    } else {
        return response.text();
    }
};

export default {
    handleResponse,
};
