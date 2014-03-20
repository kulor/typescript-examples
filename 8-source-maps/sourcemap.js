/// <reference path="jquery.d.ts" />
var Track = (function () {
    function Track() {
        this.clickCount = 0;
    }
    Track.prototype.increaseClickCount = function () {
        this.clickCount++;
    };
    Track.prototype.getClickCount = function () {
        return this.clickCount;
    };
    return Track;
})();

var track = new Track();

var $button = $('button');
$('body').on('click', 'button', function () {
    track.increaseClickCount();
    $button.text('clicked:' + track.getClickCount() + ' times');
});
//# sourceMappingURL=sourcemap.js.map
