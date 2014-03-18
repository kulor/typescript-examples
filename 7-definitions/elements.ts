/// <reference path="jquery.d.ts" />

$('a').each(function(el:HTMLElement){
    var $el:JQuery = $(el);
    $el.addClass('foo');
});