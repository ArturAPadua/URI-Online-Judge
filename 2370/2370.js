var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var t = 0, n = 0, i = 0, p = 0, e = 0, q = 0, u = 0, a = 0, c = 0;

var vet = lines.shift().split(' ');
n = parseInt(vet[0]);
t = parseInt(vet[1]);
if(t <= n && n >= 2 && n <= 10000 && t >= 2 && t <= 1000){
    e = parseInt(Math.ceil(parseFloat(n) / parseFloat(t)));

    var nomes = [];
    var habilidades = [];
    var habilidadesn = [];
    var teste = [];
    var d = [];
    var b = [];

    for(i = 0; i < n; i++){
        var vet1 = lines.shift().split(' ');
        nomes[i] = vet1[0];
        habilidades[i] = vet1[1];
        habilidadesn[i] = parseInt(vet1[1]);
        if(habilidadesn[i] >= 0 && habilidadesn[i] <= 1000000){
            if(habilidades[i].length == 1){
                teste[i] = "000000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "000000" + habilidades[i];
            }else if(habilidades[i].length == 2){
                teste[i] = "00000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "00000" + habilidades[i];
            }else if(habilidades[i].length == 3){
                teste[i] = "0000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "0000" + habilidades[i];
            }else if(habilidades[i].length == 4){
                teste[i] = "000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "000" + habilidades[i];
            }else if(habilidades[i].length == 5){
                teste[i] = "00" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "00" + habilidades[i];
            }else if(habilidades[i].length == 6){
                teste[i] = "0" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "0" + habilidades[i];
            }else{
                teste[i] = habilidades[i] + " " + nomes[i];
            }
        }
    }

    if(teste.length == n)
    {
        nomes.sort();
        habilidades.sort();
        teste.sort();
    
        p = -1;
        for (i = 0; i < teste.length; i++)
        {
            p = p + 1;
            q = 0;
            while (teste[i] != habilidades[p] + " " + nomes[q])
            {
                if (teste[i] == habilidades[p] + " " + nomes[q])
                {
                    break;
                }
                q++;
            }
            if (teste[i] == habilidades[p] + " " + nomes[q])
            {
                d[i] = nomes[q];
            }
        }
    }

    q = -1;
    d.reverse();
    for (i = 1; i <= t; i++)
    {
        console.log("Time " + i);
        q = q + 1;
        u = q;
        p = 0;
        while(u < n)
        {
            b[p] = d[u];
            u = u + t;
            p++;
        }
        if(p != e){
            for(c = p; c < e; c++)
            {
                b.splice(c, 1);
            }
        }
        b.sort();
        a = 0;
        while(a < b.length){
            console.log(b[a]);
            a++;
        }
        console.log("");
    }
}
