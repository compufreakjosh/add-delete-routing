'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive( 'capitalize', function() {
	  return {
		     restrict: 'E',
		     template: '{{anyelement|uppercase}}'
		   }
  })
  .directive( 'reverse', function() {
	  return {
		     restrict: 'E',
		     template: "{{anyelement.split('').reverse().join('')}}"
		   }
  })
  
  .directive( 'wish', function() {
	  return {
		     restrict: 'E',
		     link:function(scope, element, attrs) {
		       var greet = attrs.greet;
		       var tag = '';
		       if ((greet !== null) && (greet !== undefined) && (greet !== '')) {
		    	   tag = '<embed src="http://apps.afterbtech.com/swf/'+greet+'.swf" width="550" height="400" wmode="transparent" />';
		       }
		       element.append(tag);
		     }
		   }
  })
    .directive( 'fbimage', function() {
	  return {
		     restrict: 'E',
		     link:function(scope, element, attrs) {
		       var fbid = attrs.fbid;
		       var tag = '';
		       if ((fbid !== null) && (fbid !== undefined) && (fbid !== '')) {
		    	   tag = '<img src="http://graph.facebook.com/' + fbid + '/picture?type=large" class="img-responsive"/>'
		       }
		       element.append(tag);
		     }
		   }
  })
  //http://apps.afterbtech.com/swf/thank_you.swf
  .directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {
      // Let's get a reference to the input element, as we'll want to reference it.
      var inputElement = angular.element( element.children()[1] );
      
      // This directive should have a set class so we can style it.
      element.addClass( 'edit-in-place' );
      
      // Initially, we're not editing.
      $scope.editing = false;
      
      // ng-click handler to activate edit-in-place
      $scope.edit = function () {
        $scope.editing = true;
        
        // We control display through a class on the directive itself. See the CSS.
        element.addClass( 'active' );
        
        // And we must focus the element. 
        // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function, 
        // we have to reference the first element in the array.
        inputElement[0].focus();
      };
      
      // When we leave the input, we're done editing.
      inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
})
