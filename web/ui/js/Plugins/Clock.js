/**
 * Created by phoenix on 14/11/7.
 */

angular.module('clockPlugin',[]).
    factory('time',function($timeout){
        var time={};
        (function tick(){
            time.now = new Date().toString();
            $timeout(tick,1000);
        })();
        return time;

    });
