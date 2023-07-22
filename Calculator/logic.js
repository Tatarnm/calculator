


//variables
var a="",b="";
var sign="";

//actual function
function operate()
{
	switch(sign)
	{
		case '+':
			a=String(Number(a)+Number(b))
			if (a.length > 10) {
   				 a = a.substring(0, 10); // Keep only the first 10 characters
 			}
			document.getElementById('numdisplay').innerHTML=a;
			b="";sign="";
			break;
		case '-':
			a=String(Number(a)-Number(b))
			if (a.length > 10) {
   				 a = a.substring(0, 10); 
 			}
			document.getElementById('numdisplay').innerHTML=a;
			b="";sign="";
			break;
		case '*':
			a=String(Number(a)*Number(b))
			if (a.length > 10) {
   				 a = a.substring(0, 10);
 			}
			document.getElementById('numdisplay').innerHTML=a;
			b="";sign="";
			break;
		case '/':
			if(b=='0')
			{
				
				alert("Cannot divide by zero!");
				a="";b="";c="";
				break;
			}
			else
			{
				a=String(Number(a)/Number(b))
				if (a.length > 10) {
   				 a = a.substring(0, 10); 
 			}
				document.getElementById('numdisplay').innerHTML=a;
				b="";sign="";
				break;
			}
	}
}

//triggered when a button is pressed
function perform(m)
{
	
	//checks for =
	if(m=="=")
	{
		if((a!="")&(b!=""))
		{
			operate();
		}
	}
	//checks for signs
	else if((m=="+")||(m=="-")||(m=="*")||(m=="/"))
	{
		if((a!="")&&(b==""))
		{
			sign=m;
			document.getElementById('numdisplay').innerHTML=a+sign;
		}
		else if((a!="")&&(b!=""))
		{
			operate();
			sign=m;
			document.getElementById('numdisplay').innerHTML=a+sign;
		}
	}
	//checks for numbers and decimals
	else
	{
		if(sign=="")
		{
			a=a+m;
			document.getElementById('numdisplay').innerHTML=a;
		}
		else
		{
			b=b+m;
			document.getElementById('numdisplay').innerHTML=a+sign+b;
		}
	}
}

// special buttons
function sperform(m)
{
	switch(m)
	{
		case 'reset':
			location.reload();
			break;
		case 'bs':
			if((a!="")&&(sign!=""))
			{
				if(b=="")
				{
					sign="";
					document.getElementById('numdisplay').innerHTML=a;
				}
				else
				{
					var bx= new Array();
					bx=b.split("");
					bx.pop();
					b=bx.join("");
					document.getElementById('numdisplay').innerHTML=a+sign+b;
				}
			}
			else if((a!="")&&(sign==""))
			{
				var ax=new Array();
				ax=a.split("");
				ax.pop();
				a=ax.join("");
				document.getElementById("numdisplay").innerHTML=a;
			}
			break;
	}
}