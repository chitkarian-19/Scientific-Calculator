var str=0,flag=0,op=0;
$(document).ready(function(){
  $("button").click(function()
     {  flag=0;
           $("#inp").val($("#inp").val()+this.value);
           str=$("#inp").val();		   
	});
	$("#ans").click(function(){
		  
		    var patt=/Sin|Cos|Tan|Log/g;
			if(str.search(patt)==-1)
			{    patt=/Pow/g;//for the power function
		         var index=str.search(patt);
				 if(index==-1)
				$("#inp").val(eval($("#inp").val()));
			    else 
			    { //To implement power function
			        var num1=str.slice(0,index);
					var num2=str.slice(index+3,);
					$("#inp").val(Math.pow(num1,num2));
				}
				flag=1;
			}
			else if(str.search(patt)==0)
			{  flag=1;
		        op=str.slice(0,3);
		        //alert(op);
				x=str.slice(3,);
					if(op=="Sin")
			     $("#inp").val(Math.sin(x));
			      else if(op=="Cos")
			      $("#inp").val(Math.cos(x));
			      else if(op=="Tan")
			      $("#inp").val(Math.tan(x));
			     else if(op=="Log")
			     $("#inp").val(Math.log(x));
				
			}

				var op=str.slice(0,3);
				var patt1=/[0-9]/g;
			if(op.search(patt1)!=-1&&flag==0) //If user had inputted the data before the transedental function
			  alert("Please input the number and operators after inputting the transcedental functions and not before");
			if(document.getElementById("inp").value=="NaN")
			  alert("You are not allowed to do complex calculations in Transcedental functions ");
		   });
	 $("#clear").click(function(){
	    $("#inp").val("");
		str="";
	 });
	 $("#back").click(function(){
		  str=$("#inp").val();
		 var npatt=/Sin$|Cos$|Tan$|Log$|Pow$|.$|[0-9]$|NaN$/g;//searches from the back of the string '$' is used
			 if(str.search(npatt)!=-1)
			 { var index=str.search(npatt);
		        $("#inp").val(str.slice(0,index)); 
			 }
	 });
});