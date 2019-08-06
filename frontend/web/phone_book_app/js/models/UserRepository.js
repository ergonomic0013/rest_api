/**
 * Created by zhevgeniy on 18.08.16.
 */
function User(id, username, phone) {
    this.id = id;
    this.username = username;
    this.phone = phone;
}


User.createFromForm = function (formData) {
    var user = new User();
    var data = {};
    formData.forEach(function (item) {
        data[item.name] = item.value;
    });
    user.username = data.username;
    user.phone = data.phone;
    user.id = data.id;
    return user;
};

User.create = function (data) {
    var user = new User();
    user.id = data.id;
    user.username = data.username;
    user.phone = data.phone;
    return user;
};

function UserRepository(api) {
    this.api = api;
    this.api.rootPath = this.api.rootPath + 'users';

}

UserRepository.prototype.get = function (callback) {
    this.api.get(callback)
};

UserRepository.prototype.delete = function (id, callback) {
    this.api.delete(id, callback)
};

UserRepository.prototype.create = function (user, callback) {
    this.api.create({username: user.username, phone: user.phone}, callback)
};

UserRepository.prototype.update = function (user, callback) {
    this.api.update({username: user.username, phone: user.phone, id: user.id}, callback)
};

UserRepository.prototype.search = function (username, callback) {

    this.api.search(username, callback)
};

var userRepository = new UserRepository(api);


