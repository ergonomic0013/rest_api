/**
 * Created by zhevgeniy on 18.08.16.
 */
$(function () {
    userRepository.get(function (data) {
        userCollectionView.setModels(data);
        $('#users').append(userCollectionView.getHtml());
    });


    var $userContainer = $('#users');
    $($userContainer).on('click', '.delete-user', function () {
        var idString = $(this).parents('tr').attr('id');
        var userId = idString.substr(idString.indexOf('user-') + 5);
        userRepository.delete(userId, function () {
            $(self.rootEl).find('#' + idString).remove();
        });
    });

    $($userContainer).on('click', '.update-user', function () {
        $userContainer.find('tr').removeClass('active');
        $(this).parents('tr').addClass('active');
        var idString = $(this).parents('tr').attr('id');
        var userId = idString.substr(idString.indexOf('user-') + 5);

        console.log(userCollectionView.getModel(userId));
        var user = userCollectionView.getModel(userId);


        var $updateForm = $('#update-user-form');
        $updateForm.show();
        $updateForm.find('[name=username]').val(user.username);
        $updateForm.find('[name=phone]').val(user.phone);
        $updateForm.find('[name=id]').val(user.id);


    });

    $('#create-user-form').on('submit', function (e) {
        e.preventDefault();
        var form = new Form($(this));
        var formData = form.getFormData();
        var user = User.createFromForm(formData);
        userRepository.create(user, function (data) {
            if (data.id) {
                form.clear();
                var user = User.create(data);
                var userView = new UserView(user);
                userCollectionView.add(userView);
            } else {
                form.clearErrors();
                form.setErrors(data);
            }
        });
    });
    $('#update-user-form').on('submit', function (e) {
        e.preventDefault();
        var form = new Form($(this));
        var formData = form.getFormData();
        var user = User.createFromForm(formData);
        userRepository.update(user, function (data) {
            if (data.id) {
                form.clear();
                var user = User.create(data);
                var userView = new UserView(user);
                userCollectionView.set(userView);
                form.hide();
            } else {
                form.clearErrors();
                form.setErrors(data);
            }
        });
    });

    $('#find-user-form').on('submit', function (e) {
        e.preventDefault();

        var form = new Form($(this));
        var formData = form.getFormData();
        var user = User.createFromForm(formData);

        userRepository.search(user.username, function (data) {

            if (data.id) {
                form.clear();
                userCollectionView.setModels([data]);
                $('#users').empty();
                $('#users').append(userCollectionView.getHtml());
            } else {
                form.clearErrors();
                form.setErrors(data);
            }


        });


    });

});

