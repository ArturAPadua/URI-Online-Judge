var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var maior_kills = 0, maior_poder = 0, menos_mortes = 101, num_candidatos = 0, cont = 0, a = 0, b = 0, c = 0, d = 0;
var vitorioso = "";

num_candidatos = parseInt(lines.shift());

if (num_candidatos >= 1 && num_candidatos <= 100)
{
    var vetor_nome = [];
    var vetor_poder = [];
    var vetor_kills = [];
    var vetor_mortes = [];
    var vetor_sort = [];

    for (cont = 0; cont < num_candidatos; cont++)
    {
        var vet = lines.shift().split(' ');
        vetor_nome[cont] = vet[0];
        vetor_poder[cont] = parseInt(vet[1]);
        vetor_kills[cont] = parseInt(vet[2]);
        vetor_mortes[cont] = parseInt(vet[3]);

        if (vetor_poder[cont] >= 1 && vetor_poder[cont] <= 100 && vetor_kills[cont] >= 1 && vetor_kills[cont] <= 100 && vetor_mortes[cont] >= 1 && vetor_mortes[cont] <= 100)
        {
           a = a + 1;
        }
    }

    if (a == num_candidatos)
    {
        for (cont = 0; cont < num_candidatos; cont++)
        {
            if (vetor_poder[cont] > maior_poder)
            {
                maior_poder = vetor_poder[cont];
                maior_kills = vetor_kills[cont];
                menos_mortes = vetor_mortes[cont];
                vitorioso = vetor_nome[cont];
            }
            else if (vetor_poder[cont] == maior_poder)
            {
                if (vetor_kills[cont] > maior_kills)
                {
                    maior_poder = vetor_poder[cont];
                    maior_kills = vetor_kills[cont];
                    menos_mortes = vetor_mortes[cont];
                    vitorioso = vetor_nome[cont];
                }
                else if (vetor_kills[cont] == maior_kills)
                {
                    if (vetor_mortes[cont] < menos_mortes)
                    {
                        maior_poder = vetor_poder[cont];
                        maior_kills = vetor_kills[cont];
                        menos_mortes = vetor_mortes[cont];
                        vitorioso = vetor_nome[cont];
                    }
                    else if (vetor_mortes[cont] == menos_mortes)
                    {
                        maior_poder = vetor_poder[cont];
                        maior_kills = vetor_kills[cont];
                        menos_mortes = vetor_mortes[cont];
                        b++;
                    }
                }
            }

            if (b > 0 && num_candidatos - cont == 1 && vetor_poder[cont] == maior_poder && vetor_kills[cont] == maior_kills && vetor_mortes[cont] == menos_mortes)
            {
                for (d = 0; d < num_candidatos; d++)
                {
                    if (vetor_poder[d] == maior_poder && vetor_kills[d] == maior_kills && vetor_mortes[d] == menos_mortes)
                    {
                        vetor_sort[c] = vetor_nome[d];
                        c++;
                        vetor_sort.sort();
                        vitorioso = vetor_sort[0];
                    }
                }
            }
        }
        console.log(vitorioso);
    }
}