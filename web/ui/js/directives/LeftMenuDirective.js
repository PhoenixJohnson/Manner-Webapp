TM.directive('leftMenu', [function () {
    return {
    	restrict : 'E',
        transclude : true,
        replace : false,
        template :
        '<div class="frame" >'+
        	'<div class="page">'+
        		'<div class="content-frame">'+
        			'<div class="content container">'+
        				'<div ng-view></div>'+
        				' <div ng-transclude></div>'+
        			'</div>'+
        		'</div>'+
        		'<div class="side-nav ">'+    
        			'<div class="gv-logo">'+
        				'<a href="">'+
        					'<div class="logotype"></div>'+
        					'<div class="bug"></div>'+
        					'<span>Google Ventures</span>'+
        				'</a>'+
        			'</div>'+
        			'<div id ="menuContent">'+
        			// only for test
//        				'<ul><li><a href="" class="" ng-click="testclick(2)"><span>Team</span> <i class="icon team"></i></a></li><li><a href="" class=""><span>Portfolio</span> <i class="icon portfolio"></i></a></li><li><a href="" class=""><span>About</span> <i class="icon about"></i></a> </li><li><a href="" class=" selected"><span>Library</span> <i class="icon library"></i></a> </li></ul>'+
        			'</div>'+
        		'</div>'+
        	'</div>'+
        '</div>',
  		link:function(scope, element, attrs){
  				
  				scope.$on("leftMenuContents",function(event,data){
	  				console.log(data);
	  				//generate left menu element
	  				var lmcs = data.menuContent;
	  				if(typeof lmcs !='null'&& lmcs != undefined && lmcs!=null){
	  					var menuContentDiv = element.find("#menuContent");
	  					var hasUl = false;
	  					var uli;
	  					console.log(lmcs.length);
	  		  			for(var i=0 ; i<lmcs.length; i++ ){
	//  		  				console.log(lmcs[i].text+':::'+lmcs[i].type);
	  		  				if('a'==lmcs[i].type){
	  		  					if(!hasUl){
	  		  						menuContentDiv.append('<ul id="ul'+i+'">');
	  		  						uli = element.find('#ul'+i);
	  		  						hasUl = true;
	  		  					}
	//  		  				 ng-click="'+lmcs[i].clickFn+'"
	  		  					uli.append('<li><a href id="'+lmcs[i].clickFn+'"><span>'+lmcs[i].text+'</span> <i class="'+lmcs[i].iconClass+'"></i></a></li>');
	  		  				}else if('text'==lmcs[i].type){
	  		  					if(hasUl){
	  		  						hasUl = false;
	  		  					}
	  		  					menuContentDiv.append('<h3 class="h3">'+lmcs[i].text+'</h3>');
	  		  				}
	  		  			}
	  		  			/*
	  		  			 * bind class and event
	  		  			 */
	  		  			var SideNav = (function() {
	  		  			  var sideNav = $('.side-nav');
	  		  			  var topNav = $('.top-nav');
	  		  			  var navItems = $("li a", sideNav);
	  		  			  
	  		  			  (function init() {
	  		  				$(function() { setTimeout(collapse, 1200); });
	  		  				 
	  		  			    sideNav.mouseenter(expand).mouseleave(collapse);
	  		  			      
	  		  			    navItems.on('mouseenter', expand);
	  		  			    navItems.click(navItemClicked);
	  		  			    $('.top-nav a').click(navItemClicked);
	  		  			    
	  		  			  })();
	  		  			  function navItemClicked() {
			  				  navItems.removeClass('selected');
			  				  $(this).addClass('selected');
			  				  scope.$emit('fnname', $(this).attr('id'));
	  		  			  };
	  		  			  function collapse() {
	  		  				  $('body').addClass('nav-collapsed');
	  		  			  };
	  		  			  function expand() {
	  		  				  $('body').removeClass('nav-collapsed');
	  		  			  };
	  		  		})();
	  			}
  			});
  		}
    }
}])


.controller('testLMCtrl',['$scope',function($scope){
	
	$scope.$on('fnname', function(event,data) {
		console.log('testLMCtrl', data);
		if('testclick'==data){
			$scope.testclick();
		}else{
			
		}
	});
	
	$scope.testclick = function(){
		alert(1);
	};
}]);
