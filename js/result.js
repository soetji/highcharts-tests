const params = uri.search(true);
if (params.test) {
    $.getScript(`${params.test}/result.js`);
}