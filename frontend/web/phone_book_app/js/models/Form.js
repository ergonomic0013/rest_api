/**
 * Created by zhevgeniy on 18.08.16.
 */
function Form($form) {
    this.$form = $form;
}


Form.prototype.getFormData = function () {
    return this.$form.serializeArray();
};

Form.prototype.clear = function () {
    this.$form.find('input').val('');
    this.$form.find('.errors').empty();
    this.$form.find('.form-group').removeClass('has-error');
};

Form.prototype.clearErrors = function () {
    this.$form.find('.errors').empty();
};

Form.prototype.hide = function () {
    this.$form.hide();
};
Form.prototype.setErrors = function (data) {
    for (var errorName in data) {
        this.$form.find('[name=' + errorName + ']').parents('.form-group').addClass('has-error');
        this.$form.find('.errors').append($('<div class="alert alert-danger"><div').html(data[errorName][0]));
    }
};