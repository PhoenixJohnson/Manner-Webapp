TM.directive('leftMenu', [function () {
    return {
    	restrict : 'E',
        transclude : true,
        replace : false,
        template :
//        '<div class="frame" >'+
//        	'<div class="page">'+
//        		'<div class="content-frame">'+
//        			'<div class="content container">'+
//        				'<div ng-view></div>'+ 
//        				' <div ng-transclude></div>'+
//        			'</div>'+
//        		'</div>'+
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
        		'</div>',
//        	'</div>'+
//        '</div>',
  		link:function(scope, element, attrs){
  				
  				scope.$on("leftMenuContents",function(event,data){
	  				//generate left menu element
	  				var lmcs = data.menuContent;
	  				if(typeof lmcs !='null'&& lmcs != undefined && lmcs!=null){
	  					var menuContentDiv = element.find("#menuContent");
	  					var hasUl = false;
	  					var uli;
	  		  			for(var i=0 ; i<lmcs.length; i++ ){
	  		  				if('a'==lmcs[i].type){
	  		  					if(!hasUl){
	  		  						menuContentDiv.append('<ul id="ul'+i+'">');
	  		  						uli = element.find('#ul'+i);
	  		  						hasUl = true;
	  		  					}
	  		  					uli.append('<li class="withlineheight"><span class="i '+lmcs[i].clickFn +'"> <i class="'+lmcs[i].iconClass+' "></i></span> <a class="withoutlineheight"  id="'+lmcs[i].clickFn+'">'+lmcs[i].text+'</a></li>');
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
	  		  			  var a_i = $('.i');
	  		  			  var withoutlineheight_a =$('.withoutlineheight');
	  		  			  var withlineheight_a =$('.withlineheight');
	  		  			  
	  		  			  (function() {
	  		  				$(function() { setTimeout(collapse, 1000); });
	  		  			    sideNav
	  		  			    .mouseleave(function(){setTimeout(collapse, 3000);});
	  		  			    withlineheight_a.mouseenter(movein);
	  		  			    a_i.click(navItemClicked);
	  		  			    withoutlineheight_a.click(aclick);
	  		  			  })();
	  		  			  function movein(){
	  		  				  withlineheight_a.removeClass('highlight');
	  		  				  $(this).addClass('highlight');
	  		  			  }
	  		  			  function aclick(){
	  		  				  var id = $(this).attr('id');
			  				  navItems.removeClass('selected');
			  				  a_i.removeClass('selected');
	  		  				  $('.'+id).addClass('selected');
	  		  				  $(this).addClass('selected');
	  		  				  expand();
	  		  				  scope.$emit('fnname',id);
	  		  			  }
	  		  			  function navItemClicked() {
			  				  navItems.removeClass('selected');
			  				  a_i.removeClass('selected');
			  				  expand();
			  				  var id = $(this).attr('class').replace('i ','').replace(' ','');
	  		  				  $('#'+id).addClass('selected');
	  		  				  $(this).addClass('selected');
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
		if('testclick'==data){
			$scope.testclick();
		}else{
			
		}
	});
	
	$scope.testclick = function(){
		alert(1);
	};
}]);
