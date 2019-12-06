/*  Yayat Flugelhell
*   Auto Collapse and Add Active Class for Multi Level Menu 
*/
$(function () {
    'use strict';
    let current_url = window.location.origin;
    current_url += window.location.pathname;
    window.location.pathname == '/' ? current_url = current_url.slice(0, -1) : 'default';
    $(".sidebar-menu a[href='" + current_url + "'").parent('li').addClass('active') // level 0
        .parent('.treeview-menu').addClass('active').parent('.treeview').addClass('active') // level 1
        .parent('.treeview-menu').addClass('active').parent('.treeview').addClass('active') // level 2
        .parent('.treeview-menu').addClass('active').parent('.treeview').addClass('active') // level 3
        .parent('.treeview-menu').addClass('active').parent('.treeview').addClass('active'); // level 4
});