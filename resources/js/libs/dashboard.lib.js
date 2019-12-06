// AdminLTE dashboard demo (This is only for demo purposes)
$(function () {
    /*
     * Author: Abdullah A Almsaeed
     * Date: 4 Jan 2014
     * Description:
     *      This is a demo file used only for the main dashboard (index.html)
     **/
    "use strict";

    // Make the dashboard widgets sortable Using jquery UI
    $(".connectedSortable").sortable({
        containment: $("section.content"),
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".box-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999
    });
    $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css(
        "cursor",
        "move"
    );

    // jQuery UI sortable for the todo list
    $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: true,
        zIndex: 999999
    });

    // bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();

    $(".daterange").daterangepicker(
        {
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [
                    moment()
                        .subtract(1, "month")
                        .startOf("month"),
                    moment()
                        .subtract(1, "month")
                        .endOf("month")
                ]
            },
            startDate: moment().subtract(29, "days"),
            endDate: moment()
        },
        function (start, end) {
            window.alert(
                "You chose: " +
                start.format("MMMM D, YYYY") +
                " - " +
                end.format("MMMM D, YYYY")
            );
        }
    );

    /* jQueryKnob */
    $(".knob").knob();

    // jvectormap data
    var visitorsData = {
        US: 398, // USA
        SA: 400, // Saudi Arabia
        CA: 1000, // Canada
        DE: 500, // Germany
        FR: 760, // France
        CN: 300, // China
        AU: 700, // Australia
        BR: 600, // Brazil
        IN: 800, // India
        GB: 320, // Great Britain
        RU: 3000 // Russia
    };
    // World map by jvectormap
    $("#world-map").vectorMap({
        map: "world_mill_en",
        backgroundColor: "transparent",
        regionStyle: {
            initial: {
                fill: "#e4e4e4",
                "fill-opacity": 1,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 1
            }
        },
        series: {
            regions: [
                {
                    values: visitorsData,
                    scale: ["#92c1dc", "#ebf4f9"],
                    normalizeFunction: "polynomial"
                }
            ]
        },
        onRegionLabelShow: function (e, el, code) {
            if (typeof visitorsData[code] != "undefined")
                el.html(el.html() + ": " + visitorsData[code] + " new visitors");
        }
    });

    // Sparkline charts
    var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
    $("#sparkline-1").sparkline(myvalues, {
        type: "line",
        lineColor: "#92c1dc",
        fillColor: "#ebf4f9",
        height: "50",
        width: "80"
    });
    myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
    $("#sparkline-2").sparkline(myvalues, {
        type: "line",
        lineColor: "#92c1dc",
        fillColor: "#ebf4f9",
        height: "50",
        width: "80"
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
    $("#sparkline-3").sparkline(myvalues, {
        type: "line",
        lineColor: "#92c1dc",
        fillColor: "#ebf4f9",
        height: "50",
        width: "80"
    });

    // The Calender
    $("#calendar").datepicker();

    // SLIMSCROLL FOR CHAT WIDGET
    $("#chat-box").slimScroll({
        height: "250px"
    });

    /* Morris.js Charts */
    // Sales chart
    var area = new Morris.Area({
        element: "revenue-chart",
        resize: true,
        data: [
            { y: "2011 Q1", item1: 2666, item2: 2666 },
            { y: "2011 Q2", item1: 2778, item2: 2294 },
            { y: "2011 Q3", item1: 4912, item2: 1969 },
            { y: "2011 Q4", item1: 3767, item2: 3597 },
            { y: "2012 Q1", item1: 6810, item2: 1914 },
            { y: "2012 Q2", item1: 5670, item2: 4293 },
            { y: "2012 Q3", item1: 4820, item2: 3795 },
            { y: "2012 Q4", item1: 15073, item2: 5967 },
            { y: "2013 Q1", item1: 10687, item2: 4460 },
            { y: "2013 Q2", item1: 8432, item2: 5713 }
        ],
        xkey: "y",
        ykeys: ["item1", "item2"],
        labels: ["Item 1", "Item 2"],
        lineColors: ["#a0d0e0", "#3c8dbc"],
        hideHover: "auto"
    });
    var line = new Morris.Line({
        element: "line-chart",
        resize: true,
        data: [
            { y: "2011 Q1", item1: 2666 },
            { y: "2011 Q2", item1: 2778 },
            { y: "2011 Q3", item1: 4912 },
            { y: "2011 Q4", item1: 3767 },
            { y: "2012 Q1", item1: 6810 },
            { y: "2012 Q2", item1: 5670 },
            { y: "2012 Q3", item1: 4820 },
            { y: "2012 Q4", item1: 15073 },
            { y: "2013 Q1", item1: 10687 },
            { y: "2013 Q2", item1: 8432 }
        ],
        xkey: "y",
        ykeys: ["item1"],
        labels: ["Item 1"],
        lineColors: ["#efefef"],
        lineWidth: 2,
        hideHover: "auto",
        gridTextColor: "#fff",
        gridStrokeWidth: 0.4,
        pointSize: 4,
        pointStrokeColors: ["#efefef"],
        gridLineColor: "#efefef",
        gridTextFamily: "Open Sans",
        gridTextSize: 10
    });

    // Donut Chart
    var donut = new Morris.Donut({
        element: "sales-chart",
        resize: true,
        colors: ["#3c8dbc", "#f56954", "#00a65a"],
        data: [
            { label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 }
        ],
        hideHover: "auto"
    });

    // Fix for charts under tabs
    $(".box ul.nav a").on("shown.bs.tab", function () {
        area.redraw();
        donut.redraw();
        line.redraw();
    });

    /* The todo list plugin */
    $(".todo-list").todoList({
        onCheck: function () {
            window.console.log($(this), "The element has been checked");
        },
        onUnCheck: function () {
            window.console.log($(this), "The element has been unchecked");
        }
    });
});
// AdminLTE for demo purposes
$(function () {
    /**
     * AdminLTE Demo Menu
     * ------------------
     * You should not use this file in production.
     * This file is for demo purposes only.
     */
    "use strict";

    /**
     * Get access to plugins
     */

    $('[data-toggle="control-sidebar"]').controlSidebar();
    $('[data-toggle="push-menu"]').pushMenu();
    var $pushMenu = $('[data-toggle="push-menu"]').data("lte.pushmenu");
    var $controlSidebar = $('[data-toggle="control-sidebar"]').data(
        "lte.controlsidebar"
    );
    var $layout = $("body").data("lte.layout");
    $(window).on("load", function () {
        // Reinitialize variables on load
        $pushMenu = $('[data-toggle="push-menu"]').data("lte.pushmenu");
        $controlSidebar = $('[data-toggle="control-sidebar"]').data(
            "lte.controlsidebar"
        );
        $layout = $("body").data("lte.layout");
    });

    /**
     * List of all the available skins
     *
     * @type Array
     */
    var mySkins = [
        "skin-blue",
        "skin-black",
        "skin-red",
        "skin-yellow",
        "skin-purple",
        "skin-green",
        "skin-blue-light",
        "skin-black-light",
        "skin-red-light",
        "skin-yellow-light",
        "skin-purple-light",
        "skin-green-light"
    ];

    /**
     * Get a prestored setting
     *
     * @param String name Name of of the setting
     * @returns String The value of the setting | null
     */
    function get(name) {
        if (typeof Storage !== "undefined") {
            return localStorage.getItem(name);
        } else {
            window.alert(
                "Please use a modern browser to properly view this template!"
            );
        }
    }

    /**
     * Store a new settings in the browser
     *
     * @param String name Name of the setting
     * @param String val Value of the setting
     * @returns void
     */
    function store(name, val) {
        if (typeof Storage !== "undefined") {
            localStorage.setItem(name, val);
        } else {
            window.alert(
                "Please use a modern browser to properly view this template!"
            );
        }
    }

    /**
     * Toggles layout classes
     *
     * @param String cls the layout class to toggle
     * @returns void
     */
    function changeLayout(cls) {
        $("body").toggleClass(cls);
        $layout.fixSidebar();
        if ($("body").hasClass("fixed") && cls == "fixed") {
            $pushMenu.expandOnHover();
            $layout.activate();
        }
        $controlSidebar.fix();
    }

    /**
     * Replaces the old skin with the new skin
     * @param String cls the new skin class
     * @returns Boolean false to prevent link's default action
     */
    function changeSkin(cls) {
        $.each(mySkins, function (i) {
            $("body").removeClass(mySkins[i]);
        });

        $("body").addClass(cls);
        store("skin", cls);
        return false;
    }

    /**
     * Retrieve default settings and apply them to the template
     *
     * @returns void
     */
    function setup() {
        var tmp = get("skin");
        if (tmp && $.inArray(tmp, mySkins)) changeSkin(tmp);

        // Add the change skin listener
        $("[data-skin]").on("click", function (e) {
            if ($(this).hasClass("knob")) return;
            e.preventDefault();
            changeSkin($(this).data("skin"));
        });

        // Add the layout manager
        $("[data-layout]").on("click", function () {
            changeLayout($(this).data("layout"));
        });

        $("[data-controlsidebar]").on("click", function () {
            changeLayout($(this).data("controlsidebar"));
            var slide = !$controlSidebar.options.slide;

            $controlSidebar.options.slide = slide;
            if (!slide) $(".control-sidebar").removeClass("control-sidebar-open");
        });

        $('[data-sidebarskin="toggle"]').on("click", function () {
            var $sidebar = $(".control-sidebar");
            if ($sidebar.hasClass("control-sidebar-dark")) {
                $sidebar.removeClass("control-sidebar-dark");
                $sidebar.addClass("control-sidebar-light");
            } else {
                $sidebar.removeClass("control-sidebar-light");
                $sidebar.addClass("control-sidebar-dark");
            }
        });

        $('[data-enable="expandOnHover"]').on("click", function () {
            $(this).attr("disabled", true);
            $pushMenu.expandOnHover();
            if (!$("body").hasClass("sidebar-collapse"))
                $('[data-layout="sidebar-collapse"]').click();
        });

        //  Reset options
        if ($("body").hasClass("fixed")) {
            $('[data-layout="fixed"]').attr("checked", "checked");
        }
        if ($("body").hasClass("layout-boxed")) {
            $('[data-layout="layout-boxed"]').attr("checked", "checked");
        }
        if ($("body").hasClass("sidebar-collapse")) {
            $('[data-layout="sidebar-collapse"]').attr("checked", "checked");
        }
    }

    // Create the new tab
    var $tabPane = $("<div />", {
        id: "control-sidebar-theme-demo-options-tab",
        class: "tab-pane active"
    });

    // Create the tab button
    var $tabButton = $("<li />", { class: "active" }).html(
        "<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>" +
        '<i class="fa fa-wrench"></i>' +
        "</a>"
    );

    // Add the tab button to the right sidebar tabs
    $('[href="#control-sidebar-home-tab"]')
        .parent()
        .before($tabButton);

    // Create the menu
    var $demoSettings = $("<div />");

    // Layout options
    $demoSettings.append(
        '<h4 class="control-sidebar-heading">' +
        "Layout Options" +
        "</h4>" +
        // Fixed layout
        '<div class="form-group">' +
        '<label class="control-sidebar-subheading">' +
        '<input type="checkbox"data-layout="fixed"class="pull-right"/> ' +
        "Fixed layout" +
        "</label>" +
        "<p>Activate the fixed layout. You can't use fixed and boxed layouts together</p>" +
        "</div>" +
        // Boxed layout
        '<div class="form-group">' +
        '<label class="control-sidebar-subheading">' +
        '<input type="checkbox"data-layout="layout-boxed" class="pull-right"/> ' +
        "Boxed Layout" +
        "</label>" +
        "<p>Activate the boxed layout</p>" +
        "</div>" +
        // Sidebar Toggle
        '<div class="form-group">' +
        '<label class="control-sidebar-subheading">' +
        '<input type="checkbox"data-layout="sidebar-collapse"class="pull-right"/> ' +
        "Toggle Sidebar" +
        "</label>" +
        "<p>Toggle the left sidebar's state (open or collapse)</p>" +
        "</div>" +
        // Sidebar mini expand on hover toggle
        '<div class="form-group">' +
        '<label class="control-sidebar-subheading">' +
        '<input type="checkbox"data-enable="expandOnHover"class="pull-right"/> ' +
        "Sidebar Expand on Hover" +
        "</label>" +
        "<p>Let the sidebar mini expand on hover</p>" +
        "</div>" +
        // Control Sidebar Toggle
        '<div class="form-group">' +
        '<label class="control-sidebar-subheading">' +
        '<input type="checkbox"data-controlsidebar="control-sidebar-open"class="pull-right"/> ' +
        "Toggle Right Sidebar Slide" +
        "</label>" +
        "<p>Toggle between slide over content and push content effects</p>" +
        "</div>" +
        // Control Sidebar Skin Toggle
        '<div class="form-group">' +
        '<label class="control-sidebar-subheading">' +
        '<input type="checkbox"data-sidebarskin="toggle"class="pull-right"/> ' +
        "Toggle Right Sidebar Skin" +
        "</label>" +
        "<p>Toggle between dark and light skins for the right sidebar</p>" +
        "</div>"
    );
    var $skinsList = $("<ul />", { class: "list-unstyled clearfix" });

    // Dark sidebar skins
    var $skinBlue = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin">Blue</p>'
    );
    $skinsList.append($skinBlue);
    var $skinBlack = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin">Black</p>'
    );
    $skinsList.append($skinBlack);
    var $skinPurple = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin">Purple</p>'
    );
    $skinsList.append($skinPurple);
    var $skinGreen = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin">Green</p>'
    );
    $skinsList.append($skinGreen);
    var $skinRed = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin">Red</p>'
    );
    $skinsList.append($skinRed);
    var $skinYellow = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin">Yellow</p>'
    );
    $skinsList.append($skinYellow);

    // Light sidebar skins
    var $skinBlueLight = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin" style="font-size: 12px">Blue Light</p>'
    );
    $skinsList.append($skinBlueLight);
    var $skinBlackLight = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin" style="font-size: 12px">Black Light</p>'
    );
    $skinsList.append($skinBlackLight);
    var $skinPurpleLight = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin" style="font-size: 12px">Purple Light</p>'
    );
    $skinsList.append($skinPurpleLight);
    var $skinGreenLight = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin" style="font-size: 12px">Green Light</p>'
    );
    $skinsList.append($skinGreenLight);
    var $skinRedLight = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin" style="font-size: 12px">Red Light</p>'
    );
    $skinsList.append($skinRedLight);
    var $skinYellowLight = $("<li />", {
        style: "float:left; width: 33.33333%; padding: 5px;"
    }).append(
        '<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' +
        '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' +
        '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' +
        "</a>" +
        '<p class="text-center no-margin" style="font-size: 12px">Yellow Light</p>'
    );
    $skinsList.append($skinYellowLight);

    $demoSettings.append('<h4 class="control-sidebar-heading">Skins</h4>');
    $demoSettings.append($skinsList);

    $tabPane.append($demoSettings);
    $("#control-sidebar-home-tab").after($tabPane);

    setup();

    $('[data-toggle="tooltip"]').tooltip();
});