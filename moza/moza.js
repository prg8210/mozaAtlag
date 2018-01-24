calc();

function calc()
{
	var sulyok = [];
	sulyok["rgb(51, 170, 0)"] = 0.5;
	sulyok["rgb(49, 102, 255)"] = 0.5;
	sulyok["rgb(34, 30, 31)"] = 1;
	sulyok["rgb(52, 0, 150)"] = 1;
	sulyok["rgb(153, 51, 0)"] = 1.5;
	sulyok["rgb(255, 17, 0)"] = 2;

	var stat = document.getElementById("statistics");

	var tat = stat.rows[1].insertCell(6);
	var tat2 = stat.rows[1].insertCell(7);
	tat.innerHTML = "átlag";
	tat2.innerHTML = "súlyos";

	for(var i = 2, row; row = stat.rows[i]; i++)
	{
		var ossz = Number(0);
		var sossz = Number(0);
		var db = Number(0);
		var sdb = Number(0);

		for(var j = 1, col; col = row.cells[j]; j++)
		{

			for(var k = 0, child; child = col.children[k]; k++)
			{
				var g = child.innerText;
				g = g.replace("1/2", "1.5");
				g = g.replace("2/3", "2.5");
				g = g.replace("3/4", "3.5");
				g = g.replace("4/5", "4.5");

				ossz += Number(g);
				sossz += Number(g) * Number(sulyok[child.style.color]);
				db += Number(1);
				sdb += Number(sulyok[child.style.color]);
			}
		}

		var atl = row.insertCell(6);
		var satl = row.insertCell(7);

		if(db != 0)
		{
			atl.innerHTML = (ossz/db).toFixed(2);
		}
		else
		{
			atl.innerHTML = "-";
		}

		if(sdb != 0)
		{
			satl.innerHTML = (sossz/sdb).toFixed(2);
		}	
		else
		{
			satl.innerHTML = "-";
		}
	}
}