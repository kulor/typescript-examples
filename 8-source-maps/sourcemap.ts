/// <reference path="jquery.d.ts" />
class Track {
    clickCount: number = 0;
    increaseClickCount () {
        this.clickCount ++;
    }
    getClickCount () : number {
        return this.clickCount;
    }
}

var track = new Track;

var $button: JQuery = $('button');
$('body').on('click', 'button', function(){
    track.increaseClickCount();
    $button.text('clicked:' + track.getClickCount() + ' times');
})