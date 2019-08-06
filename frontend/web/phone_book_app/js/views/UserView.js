/**
 * Created by zhevgeniy on 18.08.16.
 */

jQuery.fn.outerHTML = function (s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};

function UserView(user) {
    this.userModel = user;
}
UserView.prototype.getHtml = function () {
    return $('<tr id="user-' + this.userModel.id + '">' +
        '<td>' + this.userModel.id + '</td>' +
        '<td>' + this.userModel.username + '</td>' +
        '<td>' + this.userModel.phone + '</td>' +
        '<td><input class="delete-user btn-sm btn-danger" type="button" value="Удалить"> <input class="update-user btn-sm btn-success" type="button" value="Изменить"></td>' +

        '</tr>').outerHTML();
};

function UserCollectionView() {

    this.rootEl = '#users';

}
UserCollectionView.prototype.setModels = function (models) {
    this.models = models;
};

UserCollectionView.prototype.getHtml = function () {
    var result = '';
    this.models.forEach(function (item) {
        result += (new UserView(item)).getHtml();
    });
    return result;
};
UserCollectionView.prototype.add = function (userView) {
    $(this.rootEl).append(userView.getHtml());
};
UserCollectionView.prototype.set = function (userView) {
    $(this.rootEl).find('#user-' + userView.userModel.id).replaceWith(userView.getHtml());
};
UserCollectionView.prototype.getModel = function (id) {
    var model = null;
    this.models.forEach(function (item) {
        if (item.id == id) {
            model = item;
        }
    });
    return model;
};


var userCollectionView = new UserCollectionView();
