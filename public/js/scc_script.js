/**
 * Created by Mehdi on 3/9/2015.
 */
var in_home = 1;
var section = '';

function home_button(){
    if(section=='programs'){
		$("#events .icon").css('visibility', 'visible');
		
		$("#programs .content").removeClass('bezier_transition');
		$("#programs .content").addClass('linear_transition');
        $("#news .icon").removeClass('animated fadeOutUp');
        $("#contacts .icon").removeClass('animated fadeOutUp');
        $("#publishing .icon").removeClass('animated fadeOutUp');
        $("#about .icon").removeClass('animated fadeOutDown');
        $("#residency .icon").removeClass('animated fadeOutDown');
        $("#scc img").removeClass('animated fadeOutLeft');
        $("#events .icon").removeClass('animated fadeOut');

        $("#programs .icon").css("left", "0px");
        $("#news .icon").addClass('animated fadeInDown');
        $("#contacts .icon").addClass('animated fadeInDown');
        $("#publishing .icon").addClass('animated fadeInDown');
        $("#about .icon").addClass('animated fadeInUp');
        $("#residency .icon").addClass('animated fadeInUp');
        $("#scc img").addClass('animated fadeInLeft');
        $("#events .icon").addClass('animated fadeIn');

		$("#programs .content").css('opacity', 0);
		$("#programs .content").css('visibility', 'hidden');
		
		

        $("#"+section+"_label").css('visibility', 'hidden');
        section='';
        in_home=1;
    }
    if(section=="residency") {
		$("#events .icon").css('visibility', 'visible');
		
        $("#residency .icon").css("top", "20px");
        $("#news .icon").removeClass('animated fadeOutUp');
        $("#contacts .icon").removeClass('animated fadeOutUp');
        $("#publishing .icon").removeClass('animated fadeOutUp');
        $("#about .icon").removeClass('animated fadeOutDown');
        $("#programs .icon").removeClass('animated fadeOutRight');
        $("#scc img").removeClass('animated fadeOutLeft');
        $("#events .icon").removeClass('animated fadeOut');

        $("#news .icon").addClass('animated fadeInDown');
        $("#contacts .icon").addClass('animated fadeInDown');
        $("#publishing .icon").addClass('animated fadeInDown');
        $("#about .icon").addClass('animated fadeInUp');
        $("#programs .icon").addClass('animated fadeInRight');
        $("#scc img").addClass('animated fadeInLeft');
        $("#events .icon").addClass('animated fadeIn');

        $("#"+section+"_label").css('visibility', 'hidden');
        section = '';
        in_home=1;
    }

    if(section=="about") {
		$("#events .icon").css('visibility', 'visible');
		
        $("#about .icon").css("top", "120px");
        $("#about .icon").css("left", "-230px");
        $("#about .content").removeClass('bezier_transition');
        $("#about .content").addClass('linear_transition');
        $("#contacts .icon").removeClass('animated fadeOutUp');
        $("#publishing .icon").removeClass('animated fadeOutUp');
        $("#residency .icon").removeClass('animated fadeOutDown');
        $("#programs .icon").removeClass('animated fadeOutRight');
        $("#scc img").removeClass('animated fadeOutLeft');
        $("#events .icon").removeClass('animated fadeOut');
        $("#news .icon").removeClass('animated fadeOutUp');
        $("#news .icon").addClass('animated fadeInDown');
        $("#contacts .icon").addClass('animated fadeInDown');
        $("#publishing .icon").addClass('animated fadeInDown');
        $("#residency .icon").addClass('animated fadeInUp');
        $("#programs .icon").addClass('animated fadeInRight');
        $("#scc img").addClass('animated fadeInLeft');
        $("#events .icon").addClass('animated fadeIn');
        //$("#about .content").addClass('animated fadeOut');
        $("#about .content").css('opacity', 0);
        $("#about .content").css('visibility', 'hidden');


        $("#"+section+"_label").css('visibility', 'hidden');
        section = '';
        in_home=1;
    }

    if(section=="contacts") {
		$("#events .icon").css('visibility', 'visible');
		
        $("#contacts .icon").css("top", "-330px");
        $("#contacts .content").removeClass('bezier_transition');
        $("#contacts .content").addClass('linear_transition');
        $("#publishing .icon").removeClass('animated fadeOutUp');
        $("#residency .icon").removeClass('animated fadeOutDown');
        $("#about .icon").removeClass('animated fadeOutDown');
        $("#programs .icon").removeClass('animated fadeOutRight');
        $("#scc img").removeClass('animated fadeOutLeft');
        $("#events .icon").removeClass('animated fadeOut');
        $("#news .icon").removeClass('animated fadeOutUp');
        $("#news .icon").addClass('animated fadeInDown');
        $("#publishing .icon").addClass('animated fadeInDown');
        $("#residency .icon").addClass('animated fadeInUp');
        $("#programs .icon").addClass('animated fadeInRight');
        $("#scc img").addClass('animated fadeInLeft');
        $("#events .icon").addClass('animated fadeIn');
        $("#about .icon").addClass('animated fadeInUp');
        //$("#about .content").addClass('animated fadeOut');
        $("#contacts .content").css('opacity', 0);
        $("#contacts .content").css('visibility', 'hidden');


        $("#"+section+"_label").css('visibility', 'hidden');
        section = '';
        in_home=1;
    }


}

function transition(id){
//    $( "#programs" ).animate({
//        right: "-115px"
//    },{
//        duration: 500,
//        specialEasing: {
//        width: "linear",
//            height: "easeOutBounce"
//    }},
//        function() {
//// Animation complete.
//    });

    if(id=="programs") {
		$("#programs .content").removeClass('linear_transition');
		$("#programs .content").addClass('bezier_transition');
		$( "#programs .content" ).css('opacity', 0);
        $("#programs .icon").css("left", "170px");
        $("#news .icon").addClass('animated fadeOutUp');
        $("#contacts .icon").addClass('animated fadeOutUp');
        $("#publishing .icon").addClass('animated fadeOutUp');
        $("#about .icon").addClass('animated fadeOutDown');
        $("#residency .icon").addClass('animated fadeOutDown');
        $("#scc img").addClass('animated fadeOutLeft');
        $("#events .icon").addClass('animated fadeOut');
		$("#programs .content").css("visibility", 'visible');
		$( "#programs .content" ).css('opacity', 1);
		setTimeout(function(){$("#events .icon").css('visibility', 'hidden');}, 1000);
        section='programs';
        in_home=0;
    }

    if(id=="residency") {
        $("#residency .icon").css("top", "-60px");
        $("#news .icon").addClass('animated fadeOutUp');
        $("#contacts .icon").addClass('animated fadeOutUp');
        $("#publishing .icon").addClass('animated fadeOutUp');
        $("#about .icon").addClass('animated fadeOutDown');
        $("#programs .icon").addClass('animated fadeOutRight');
        $("#scc img").addClass('animated fadeOutLeft');
        $("#events .icon").addClass('animated fadeOut');
		setTimeout(function(){$("#events .icon").css('visibility', 'hidden');}, 1000);
        section = 'residency';
        in_home=0;
    }

    if(id=="about") {
        $("#about .content").removeClass('linear_transition');
        $("#about .content").addClass('bezier_transition');
        $( "#about .content" ).css('opacity', 0);
        $("#about .icon").css("top", "0px");
        $("#about .icon").css("left", "240px");
        $("#news .icon").addClass('animated fadeOutUp');
        $("#contacts .icon").addClass('animated fadeOutUp');
        $("#publishing .icon").addClass('animated fadeOutUp');
        $("#residency .icon").addClass('animated fadeOutDown');
        $("#programs .icon").addClass('animated fadeOutRight');
        $("#scc img").addClass('animated fadeOutLeft');
        $("#events .icon").addClass('animated fadeOut');
        $("#about .content").css("visibility", 'visible');
        $( "#about .content" ).css('opacity', 1);
		setTimeout(function(){$("#events .icon").css('visibility', 'hidden');}, 1000);
        section = 'about';
        in_home=0;
    }

    if(id=="contacts") {
        $("#contacts .content").removeClass('linear_transition');
        $("#contacts .content").addClass('bezier_transition');
        $("#contacts .icon").css("top", "-120px");
        $("#news .icon").addClass('animated fadeOutUp');
        $("#publishing .icon").addClass('animated fadeOutUp');
        $("#residency .icon").addClass('animated fadeOutDown');
        $("#programs .icon").addClass('animated fadeOutRight');
        $("#scc img").addClass('animated fadeOutLeft');
        $("#events .icon").addClass('animated fadeOut');
        $("#about .icon").addClass('animated fadeOutDown');
        $("#contacts .content").css("visibility", 'visible');
        $("#contacts .content" ).css('opacity', 1);
		setTimeout(function(){$("#events .icon").css('visibility', 'hidden');}, 1000);
        section = 'contacts';
        in_home=0;
    }
}

function label_mouseover(id){
    $("#"+id+"_label").css('visibility', 'visible');
}

function label_mouseout(id){
    if(in_home==1)
        $("#"+id+"_label").css('visibility', 'hidden');
}

function translate2fa(id){
	
	$("#"+id).fadeOut(500, function(){
		$("#"+id).html('نسخه فارسی');
		$("#"+id).fadeIn(500);
		$("#"+id+"_a").html("EN");
		$("#"+id+"_a").attr("onclick", "translate2en('"+ id +"')");
	});
}

function translate2en(id){

	$("#"+id).fadeOut(500, function(){
		$("#"+id).html('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis');
		$("#"+id).fadeIn(500);
		$("#"+id+"_a").html("فا");
		$("#"+id+"_a").attr("onclick", "translate2fa('"+ id +"')");
	});
}

function change_lang(obj){
	var obj = $(obj);
	var ps = obj.parent().next().children().toArray();
	var l_en_tag = $(obj.prev().prev());
	var l_fa_tag = $(obj.prev());
	if(obj.html()=="فا") {
		var p_en_tag = $(ps[0]);
		var p_fa_tag = $(ps[1]);
		p_en_tag.css('opacity', 0);
		p_en_tag.css('visibility', 'hidden');
		p_fa_tag.css('opacity', 1);
		p_fa_tag.css('visibility', 'visible');

		l_en_tag.css('opacity', 0);
		l_en_tag.css('visibility', 'hidden');
		l_fa_tag.css('opacity', 1);
		l_fa_tag.css('visibility', 'visible');
		
		obj.html("EN");
	}else{
		var p_en_tag = $(ps[0]);
		var p_fa_tag = $(ps[1]);
		p_fa_tag.css('opacity', 0);
		p_fa_tag.css('visibility', 'hidden');
		p_en_tag.css('opacity', 1);
		p_en_tag.css('visibility', 'visible');

		l_fa_tag.css('opacity', 0);
		l_fa_tag.css('visibility', 'hidden');
		l_en_tag.css('opacity', 1);
		l_en_tag.css('visibility', 'visible');
		
		obj.html("فا");
	}
	
}


