/**
 * Created by zhevgeniy on 18.08.16.
 */
function Api(rootPath) {
    this.rootPath = rootPath;
}
Api.prototype.get = function (callback) {
    $.ajax({
        url: this.rootPath,
        type: 'get',
        dataType: 'json',
        success: callback
    });
};

Api.prototype.delete = function (id, callback) {
    $.ajax({
        url: this.rootPath + '/' + id,
        type: 'delete',
        dataType: 'json',
        success: callback
    });
};

Api.prototype.create = function (data, callback) {
    $.ajax({
        url: this.rootPath,
        type: 'post',
        data: data,
        dataType: 'json',
        success: callback
    });
};
Api.prototype.update = function (data, callback) {
    $.ajax({
        url: this.rootPath + '/' + data.id,
        type: 'put',
        data: data,
        dataType: 'json',
        success: callback
    });
};

Api.prototype.search = function (username, callback) {

    $.ajax({
        url: this.rootPath + '/search' + (username ? '/' + username : ''),
        type: 'get',
        dataType: 'json',
        success: callback
    });
};


var api = new Api('/api/web/v1/');

