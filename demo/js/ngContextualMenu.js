
/* Some custom variables */
var _dev = false;
var _version = "0.1.0";
var bgColor = "white";
var hoverColor = "#2483C5";
var spacerColor = "#e3e3e3";

/* Create module */
var _ngcm = angular.module('ngContextualMenu', [])

/* Create directive */
.directive('ngContextualMenu',
  ['$rootScope',
  function($rootScope) {
    return {
      restrict: 'AE',
      transclude: true,
      template: '<style>.right-click{position: absolute;display: none;float: left;min-width: 200px;max-width: 300px;width: auto;height: auto;padding: 5px 0px;margin: 0px;box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.3);border: none;transition: all 0s;z-index: 99999;}.right-click.open{display: block;}.right-click *{box-sizing: border-box;cursor: default;transition: all 0s;}.right-click ul, .right-click ul li{position: relative;display: block;float: left;width: 100%;height: auto;margin: 0px;padding: 0px;}.right-click ul li{width: 100%;font-size: 12px;clear: both;list-style: none;}.right-click ul li:hover{color: white;}.right-click ul li *{position: relative; display: block;width: 100%;padding: 5px 10px;}.right-click ul li:hover *{color: inherit;}.right-click ul li.spacer{border-bottom: 1px solid black;}.right-click ul li.spacer, .right-click ul li.spacer:hover{background: none; height: 0px; padding:0px; margin:5px 0px;}</style><style id="bgColor">.right-click{background: '+ bgColor +';}</style><style id="hoverColor">.right-click ul li:hover{background-color: '+ hoverColor +';}</style><style id="spacerColor">.right-click ul li.spacer{border-bottom: 1px solid '+ spacerColor +';}</style><div class="right-click"><ul><li ng-repeat="option in options.customActions" ng-class="{\'spacer\': option.spacer}"><span ng-click="option.action()" ng-if="!option.spacer">{{ option.label }}</span></li></ul></div>',
      scope:{
        options: "=options"
      },
      link: function(scope, element, attrs){

        var elem = ".right-click";

        scope.init = function(){
          scope.state = scope.$parent.state;
        };

        /* Updates the theme to a custom theme */
        scope.updateTheme = function(){

          /* If there is a custom theme */
          if(scope.options && scope.options.customTheme){

            /* Background color */
            if(scope.options.customTheme.bgColor){
              document.getElementById("bgColor").innerHTML = '.right-click{background-color:'+ scope.options.customTheme.bgColor +';}';
            }

            /* Hover color */
            if(scope.options.customTheme.hoverColor){
              document.getElementById("hoverColor").innerHTML = '.right-click ul li:hover{background-color:'+ scope.options.customTheme.hoverColor +';}';
            }

            /* Spacer color */
            if(scope.options.customTheme.spacerColor){
              document.getElementById("spacerColor").innerHTML = '.right-click ul li.spacer{border-color:'+ scope.options.customTheme.spacerColor +';}';
            }
            bgColor = scope.options.customTheme.bgColor;
            hoverColor = scope.options.customTheme.hoverColor;
            spacerColor = scope.options.customTheme.spacerColor;
          }
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

        /* Watch changes on scope.options */
        scope.$watch('options', function(newValue){
          scope.updateTheme();
        });
      }
    }
  }]);
