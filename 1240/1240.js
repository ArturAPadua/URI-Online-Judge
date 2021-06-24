var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quant = 0;
var total = "", convb = "";
var resultado = 0;

quant = parseInt(lines.shift());

var num_b = [];
var num_a = [];

for (var cont = 0; cont < quant; cont++)
{
    var vet = lines.shift().split(' ');
    num_a[cont] = parseInt(vet[0]);
    num_b[cont] = parseInt(vet[1]);

    if (num_a[cont] > num_b[cont])
    {

        convb = num_b[cont].toString();
        var tamanhob = convb.length;
        resultado = num_a[cont] % Math.pow(10, tamanhob);

        if (resultado == num_b[cont])
        {
            total = "encaixa";
        }
        else
        {
            total = "nao encaixa";
        }
    }

    else if (num_a[cont] == num_b[cont])
    {

        total = "encaixa";

    }
    else
    {

        total = "nao encaixa";
    }

    console.log(total);

}
