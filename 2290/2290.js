var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) { 
    
    var quant = 0, i = 0, n1 = 0, n2 = 0, a = -1, c = 0, d = -1;

    quant = parseInt(lines.shift());
    
    var num = [];

    if (1 <= quant && quant <= Math.pow(10, 5) && quant % 2 === 0)
    {
        var entrada = [];

        var solteiros = [];

        var vet = lines.shift().split(' ');

        for (i = 0; i < quant; i++)
        {
            num[i] = parseInt(vet[i]);

            if (num[i] > -Math.pow(10, 12) && num[i] < Math.pow(10, 12))
            {
                a++;
                entrada[a] = num[i];
            }
        }
        entrada.sort();
    
        var current = 0;
        var cnt = 0;

        var numeros = [];
        var contados = [];

        for (i = 0; i < entrada.length; i++) {
            if (entrada[i] != current) {
                if (cnt > 0) {
                    d++;
                    numeros[d] = current;
                    contados[d] = cnt;
                }
                current = entrada[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
            d++;
            numeros[d] = current;
            contados[d] = cnt;
        }

        for (var e = 0; e < numeros.length; e++)
        {
            if (contados[e] % 2 !== 0)
            {
                solteiros[c] = numeros[e];
                c++;

                if (c == 2)
                {
                    n1 = solteiros[0];
                    n2 = solteiros[1];
                    
                    if (n1 < n2)
                    {
                        console.log(n1 + " " + n2);
                    }
                    else
                    {
                        console.log(n2 + " " + n1);
                    }

                }
            }
        }
    }
    else
    {
        break;
    }
}
