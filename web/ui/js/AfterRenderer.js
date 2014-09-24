$( document ).ready(function() {

    $("li[target='_List']").mouseenter(function($this){
        $this.flip({
            direction:'tb',
            onBefore: function(){
                console.log('before starting the animation');
            },
            onAnimation: function(){
                console.log('in the middle of the animation');
            },
            onEnd: function(){
                console.log('when the animation has already ended');
            }
        })
    });

    $("li[target='_List']").mouseleave(function($this){
        $this.revertFlip();
    });
    
    $("#sidetoggle").click(function(){
    	 alert("Hello World on");  
    });
    
    //TODO need transfer jQuery to AngulaJS directive
    
});
