$(document).ready(function () {
    $(".toggle-topbar").click(function (event) {
        $('body').scrollTop(0);
    });
});
Sys.Application.add_load(
    function () {
        $('input[type=button]').addClass('round button');
        $('input[type=submit]').addClass('round button');
        $('input.searchInputField').attr('placeholder', 'Zoeken in site...');
        $('#divLogin .divDataEntryButtons input').addClass('round button');
        // add active-parent class to parent-link of active menu-item
        $(".top-bar-section li.active").parents("li").addClass("active-parent");
    });