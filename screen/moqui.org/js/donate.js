$( document ).ready(function() {

        var radio_amounts = $('.amount-radios');
        var active_amount = $("[name='amount']");

        var oneTime = $('#oneTime');
        var monthly = $('#monthly');


        $(".amount-radios").click(function(){
            console.log('Clicked! radio');
            active_amount.removeAttr("name").removeClass("active-amount");
            $(this).attr("name","amount").addClass("active-amount");
            active_amount = $(this);
        })

        oneTime.click(function(){
          console.log('Clicked! one time');
          $(this).addClass("active-amount");
          monthly.removeClass("active-amount").removeAttr("name");
        })

        monthly.click(function(){
          console.log('Clicked! monthly');
          $(this).addClass("active-amount").attr("name","frequency");
          oneTime.removeClass("active-amount");
        })

        })