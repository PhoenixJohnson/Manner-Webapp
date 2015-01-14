/**
 * Created by jiangy on 11/11/2014.
 */
TM.controller('SampleController', function($scope, ModalService) {

    ModalService.showModal({
//        templateUrl: "partials/faq.html",
        controller: "ModalController"
    }).then(function (modal) {

        //it's a bootstrap element, use 'modal' to show it
        modal.element.modal();
        modal.close.then(function (result) {
            console.log(result);
        });
    });

});

TM.controller('ModalController', function($scope, close) {

    // when you need to close the modal, call close
    close("Success!");
});

TM.controller('addActionItemController',function($scope){

    $scope.testId="IM19982363";
    $scope.testSharePerson="Phoenix";

    $scope.shareItem = function(itemId,shareWith){
        alert("You are sharing item:"+itemId +" with your team member:"+shareWith+"!");
    };
    $scope.saveItem=function(){
		var owner=null;
		var group=null;
		var entity={"title":"testTitle","content":"testContent","itemType":"Action","owner":null,"createdBy":null,"createdDate":"2012-11-12","lastModifiedBy":null,"lastModifiedDate":"2012-11-12","group":null,"status":"New","percentage":50,"dueDate":"2012-11-12","completionDate":"2012-11-12","priority":"Low","remarks":"testRemarks"};
		Items.save({userId:5,groupId:2},entity,function(e){
			$scope.users=e;
		});
	};
	$scope.updateItem=function(){
		var entity=$scope.users.data.Item[0];
		entity.title=123;
		var userId=entity.owner.id;
		var groupId=entity.group.id;
		entity.owner=null;
		entity.createdBy=null;
		entity.lastModifiedBy=null;
		entity.group=null;
		Items.update({id:entity.id,userId:userId,groupId:groupId},entity,function(e){
			$scope.users=e;
		});
	}
    
})
