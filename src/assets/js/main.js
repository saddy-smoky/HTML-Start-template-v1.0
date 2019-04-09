//window.$ = window.jQuery = require("jquery");

import $ from "jquery";
import objectFitPolyfill from "objectFitPolyfill";
import svg4everybody from "svg4everybody/dist/svg4everybody.legacy.js";

//require('imports-loader?window.jQuery=jquery!../../node_modules/jquery-validation/dist/jquery.validate.min.js');

import * as nav from "./modules/module.js";

$(window).on("ready", function() {
    objectFitPolyfill();
    svg4everybody();
    nav.init();
});

$(window).on("load", function() {
    let l = () => {
        console.log("test");
    };

    l();
});

