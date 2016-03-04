
/* Some custom variables */
var _dev = false;
var _version = "0.1.0";

/* Create module */
var _ngcm = angular.module('ngContextualMenu', [])

/* Create directive */
.directive('ngConsole',
  ['$rootScope',
  function($rootScope) {
    return {
      restrict: 'AE',
      transclude: true,
      template: '<style>.right-click{position: absolute;display: none;float: left;min-width: 200px;max-width: 300px;width: auto;height: auto;padding: 5px 0px;margin: 0px;background: #e3e3e3;box-shadow: 0px 3px 3px rgba(0,0,0,0.5);border: none;transition: all 0s;z-index: 99999;}.right-click.open{display: block;}.right-click ul, .right-click ul li{position: relative;display: block;float: left;width: 100%;height: auto;margin: 0px;padding: 0px;}.right-click ul li{width: 100%;padding: 5px 10px;font-size: 12px;clear: both;list-style: none;}.right-click ul li:hover{color: white;background-color: #2483C5;}</style><div class="right-click"><ul><li>Opcion 1</li><li>Opcion 2</li></ul></div>',
      scope:{
        options: "=options"
      },
      link: function(scope, element, attrs){

        var elem = ".right-click";

        scope.init = function(){
          scope.state = scope.$parent.state;
        };

        /* Calc position for main Contextual menu */
        scope.calcPosition = function(clickX, clickY){

          /* Default position */
          var position = {
            top: 0,
            left: 0,
          };

          /* Element size */
          var size = {
            height: parseInt($(elem).height()) + parseInt($(elem).css("padding-top")) + parseInt($(elem).css("padding-bottom")),
            width: parseInt($(elem).width())
          };

          /* Bottom or top */
          if(clickY + size.height < $(document).height()){
            position.top = clickY;
          }
          else{
            position.top = clickY - size.height;
          }

          /* Left or right */
          if(clickX + size.width < window.innerWidth){
            position.left = clickX;
          }
          else{
            position.left = clickX - size.width;
          }

          return position;
        };

        scope.init();

        /* Event listener, to show Contextual menu */
        window.addEventListener('contextmenu', function(e){

          /* Prevent default menu */
          e.preventDefault();

          /* Calc menu position */
          var pos = scope.calcPosition(e.pageX, e.pageY);

          /* Move menu to its position */
          $(elem).css({
            "top": pos.top,
            "left": pos.left
          });

          /* Show menu */
          $(elem).show();
          return false;
        });

        /* Event listener, to hide Contextual menu on click */
        window.addEventListener('click', function(e){
          $(elem).hide();
        });
      }
    }
  }]);
