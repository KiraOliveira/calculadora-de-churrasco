var buttonRun = $("#action-button");

$("#button-run").click(function(){
	var visivel  = $('#steps').is(':visible');
	if (visivel) {
		$('#steps').hide();
		$('#step-1').hide();
		$('#step-2').hide();
		$('#step-2-1').hide();
		$('#step-3').hide();		
		$("#button-run").text("Calcular");
		$(".box").prop('checked', false);
		$(".box-step3").prop('checked', false);		
		$("#input-male").val(0);
		$("#input-female").val(0);
		$("#input-children").val(0);
		$(".mostrar-carnes").text(null);
		comprar = 0; 
		checkMeat = 0;

	} 
	else {
		$('#steps').show();
		$('#step-2-1').hide();
		$('#step-1').show();
		$('#step-2').hide();
		$('#step-3').hide();	
		$("#button-run").text("Fechar");
	}

});

$("#button-cal1").click(function(){
	var visivel  = $('#step-1').is(':visible');
	if (visivel) {
		$("#step-1").hide();
		$("#step-2").show();
		$("#step-2-1").hide();
		$("#step-3").hide();		
	}
});

$("#button-cal3").click(function(){
	var visivel  = $('#step-2').is(':visible');
	if (visivel) {
		$("#step-1").hide();
		$("#step-2").hide();
		$("step-3").hide();
		$("#step-2-1").show();
	}
});

var checkMeat = 0;

$('.box').change(function(){
	if (this.checked) {
		checkMeat += 1;
	} else {
		checkMeat -= 1;

	}
}); 

$("#button-cal3").click(function(){

	var qtyMale = parseInt($('#input-male').val(), 10);
	var qtyFemale = parseInt($('#input-female').val(), 10);
	var qtyChildren = parseInt($('#input-children').val(), 10);

	var qtyTotal =([qtyMale * 350 + qtyFemale * 250 + qtyChildren * 100]/1000) 

	var comprar = (qtyTotal / checkMeat)*1000;

		var visivel  = $('#step-2').is(':visible');
	if (visivel) {
		$("#step-2").hide();
		$("#step-2").hide();
		$("#step-2.1").show();
	}

	$("#qty-carne").text("Quantidade de carne: " + qtyTotal +"kg");

	function calculo() {

		if ($('#check1').is(':checked')) {

			$('.check1-step3').prop('checked', true);

			if (comprar < 1000) {
				$("#mostrar-carnes1").text("Carne Bovina: " + comprar.toFixed(0) + " gramas");
			} else {
				$("#mostrar-carnes1").text("Carne Bovina: " + (comprar.toFixed(0)/1000) + " kg");
			}
		}

		if ($('#check2').is(':checked')) {

			if (comprar < 1000) {
				$("#mostrar-carnes2").text("Carne Suína: " + comprar.toFixed(0) + " gramas");
			} else {
				$("#mostrar-carnes2").text("Carne Suína: " + (comprar.toFixed(0)/1000) + " kg");
			}
		}

		if ($('#check3').is(':checked')) {

			if (comprar < 1000) {
				$("#mostrar-carnes3").text("Asa e Coxa de Frango: " + comprar.toFixed(0) + " gramas");
			} else {
				$("#mostrar-carnes3").text("Asa e Coxa de Frango: " + (comprar.toFixed(0)/1000) + " kg");
			}
		}	

		if ($('#check4').is(':checked')) {

			if (comprar < 1000) {
				$("#mostrar-carnes4").text("Coração: " + comprar.toFixed(0) + " gramas");
			} else {
				$("#mostrar-carnes4").text("Coração: " + (comprar.toFixed(0)/1000) + " kg");
			}
		}	

		if ($('#check5').is(':checked')) {

			if (comprar < 1000) {
				$("#mostrar-carnes5").text("Linguiça: " + comprar.toFixed(0) + " gramas");
			} else {
				$("#mostrar-carnes5").text("Linguiça: " + (comprar.toFixed(0)/1000) + " kg");
			}
		}

		if ($('#check6').is(':checked')) {

			if (comprar < 1000) {
				$("#mostrar-carnes6").text("Pão de Alho: " + comprar.toFixed(0) + " gramas");
			} else {
				$("#mostrar-carnes6").text("Pão de Alho: " + (comprar.toFixed(0)/1000) + " kg");
			}
		}
	}

	if (qtyMale < 2 && qtyFemale < 2 && qtyChildren < 2 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulher e " + qtyChildren + " criança:");
	}

	if (qtyMale > 1 && qtyFemale < 2 && qtyChildren < 2 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulher e " + qtyChildren + " criança:");
	}

	if (qtyMale > 1 && qtyFemale > 1 && qtyChildren < 2 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulheres e " + qtyChildren + " criança:");
	}

	if (qtyMale > 1 && qtyFemale > 1 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulheres e " + qtyChildren + " crianças:");
	}

	if (qtyMale < 2 && qtyFemale > 1 && qtyChildren < 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulheres e " + qtyChildren + " criança:");
	}

	if (qtyMale < 2 && qtyFemale > 1 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulheres e " + qtyChildren + " crianças:");
	}

	if (qtyMale < 2 && qtyFemale < 2 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulher e " + qtyChildren + " crianças:");
	}

	if (qtyMale > 1 && qtyFemale < 2 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulher e " + qtyChildren + " crianças:");
	}

	$("#qty-carne").text("Quantidade de carne: " + qtyTotal +"kg");

	calculo()
});

$("#button-cal2").click(function() {
	
	var visivel  = $('#step-1').is(':visible');
	if (visivel) {
		$("#step-1").hide();
		$("#step-3").show();
	}
});


$("#run-step2").click(function() {

	if ($('#check1').is(':checked')) {
		$('#check1-step3').prop('checked', true);
	}
	
	if ($('#check2').is(':checked')) {
		$('#check2-step3').prop('checked', true);
	}

	if ($('#check3').is(':checked')) {
		$('#check3-step3').prop('checked', true);
	}

	if ($('#check4').is(':checked')) {
		$('#check4-step3').prop('checked', true);
	}

	if ($('#check5').is(':checked')) {
		$('#check5-step3').prop('checked', true);
	}

	if ($('#check6').is(':checked')) {
		$('#check6-step3').prop('checked', true);
	}

	var visivel  = $('#step-2-1').is(':visible');
	if (visivel) {
		$("#step-2-1").hide();
		$("#step-3").show();
	}

	if ($('#check1-step3').is(':checked')) {
			$("#qty-item1").show();
			$("#price-item1").show();
			$(".real1").show();
	} else {
			$("#qty-item1").hide();
			$("#price-item1").hide();
			$(".real1").hide();
	}

	if ($('#check2-step3').is(':checked')) {
			$("#qty-item2").show();
			$("#price-item2").show();
			$(".real2").show();
	} else {
			$("#qty-item2").hide();
			$("#price-item2").hide();
			$(".real2").hide();
	}

	if ($('#check3-step3').is(':checked')) {
			$("#qty-item3").show();
			$("#price-item3").show();
			$(".real3").show();
	} else {
			$("#qty-item3").hide();
			$("#price-item3").hide();
			$(".real3").hide();
	}

	if ($('#check4-step3').is(':checked')) {
			$("#qty-item4").show();
			$("#price-item4").show();
			$(".real4").show();
	} else {
			$("#qty-item4").hide();
			$("#price-item4").hide();
			$(".real4").hide();
	}

	if ($('#check5-step3').is(':checked')) {
			$("#qty-item5").show();
			$("#price-item5").show();
			$(".real5").show();
	} else {
			$("#qty-item5").hide();
			$("#price-item5").hide();
			$(".real5").hide();
	}

	if ($('#check6-step3').is(':checked')) {
			$("#qty-item6").show();
			$("#price-item6").show();
			$(".real6").show();
	} else {
			$("#qty-item6").hide();
			$("#price-item6").hide();
			$(".real6").hide();
	}			
});

// - ANALIZAR SE OS CHECKBOX FOREM :CHECK E :UNCHECK, APARECER E DESAPAREÇE PREÇO E QUANTIDADE DOS ITENS //

$("#check1-step3").click(function() {
		if ($('#check1-step3').is(':checked')) {
				$("#qty-item1").show();
				$("#price-item1").show();
				$(".real1").show();
		} else {
			$("#qty-item1").hide();
			$("#price-item1").hide();
			$(".real1").hide();
		}
});

$("#check2-step3").click(function() {
		if ($('#check2-step3').is(':checked')) {
				$("#qty-item2").show();
				$("#price-item2").show();
				$(".real2").show();
		} else {
			$("#qty-item2").hide();
			$("#price-item2").hide();
			$(".real2").hide();
		}
});

$("#check3-step3").click(function() {
		if ($('#check3-step3').is(':checked')) {
				$("#qty-item3").show();
				$("#price-item3").show();
				$(".real3").show();
		} else {
			$("#qty-item3").hide();
			$("#price-item3").hide();
			$(".real3").hide();
		}
});

$("#check4-step3").click(function() {
		if ($('#check4-step3').is(':checked')) {
				$("#qty-item4").show();
				$("#price-item4").show();
				$(".real4").show();
		} else {
			$("#qty-item4").hide();
			$("#price-item4").hide();
			$(".real2").hide();
		}
});

$("#check5-step3").click(function() {
		if ($('#check5-step3').is(':checked')) {
				$("#qty-item5").show();
				$("#price-item5").show();
				$(".real5").show();
		} else {
			$("#qty-item5").hide();
			$("#price-item5").hide();
			$(".real5").show();
		}
});

$("#check6-step3").click(function() {
		if ($('#check6-step3').is(':checked')) {
				$("#qty-item6").show();
				$("#price-item6").show();
				$(".real6").show();
		} else {
			$("#qty-item6").hide();
			$("#price-item6").hide();
			$(".real6").hide();
		}
});



// Botão de calcular os demais itens, de acordo com a quantidade de pessoas. //

var qtySoda = (qtyChildren * 0.5)
var qtyBeer = (q
var qtyCups = 0;
var qtyIce = 0;
var qtyCharcoal = 0;

var qtyAdult = (qtyFemale + qtyMale);



$("cal-itens-dif").click(function() {



}


});
