var NetClient = function () {
    return {
        getData: function (serviceUrl, funcName, params, callback) {
            if (!params) {
                params = "";
            } else {
                if (typeof (params) == 'object') {
                    var temp = '';
                    for (var key in params) {
                        var value = params[key];
                        if (!value) {
                            value = '';
                        }
                        temp += '&' + key + '=' + value;
                    }
                    params = temp.substring(1);
                }
            }
            var parm = "serviceUrl=" + serviceUrl + "&funcName=" + funcName + "&params=" + encodeURIComponent(params);
            $.ajax({
                type: "POST",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                url: "/getData/",
                data: parm,
                error: function (xhr, e) {
                    console.log(parm);
                    console.log(e.toString());
                },
                complete: function (xhr) {
                    var data = xhr.responseText;
                    if (callback) {
                        callback(JSON.parse(data));
                    }
                }
            });
        },

    };
};