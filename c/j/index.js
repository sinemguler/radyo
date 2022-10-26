$(function() {
    $( "#master" ).slider({
    value: 60,
    orientation: "horizontal",
    range: "min",
    animate: true
    });
    $( "#eq > span" ).each(function() {
    var value = parseInt( $( this ).text(), 10 );
    $( this ).empty().slider({
    value: value,
    range: "min",
    animate: true,
    orientation: "vertical"
    });
    });
});
