$(function () {
    $('#fileupload1').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.data, function (index, file) {
                $('#profile-img').attr('src', file.url);
            });
        }
    });
});
