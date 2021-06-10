var maior_kills = 0, maior_poder = 0, menos_mortes = 101, num_candidatos = 0, cont = 0, a = 0, b = 0, c = 0, d = 0, z = 0, x = 0;
var vitorioso = "";

num_candidatos = Math.floor(Math.random() * 100) + 2;
console.log(num_candidatos);

if (num_candidatos >= 1 && num_candidatos <= 100)
{
    var vetor_nome = [];
    var vetor_poder = [];
    var vetor_kills = [];
    var vetor_mortes = [];
    var vetor_sort = [];

    var Maiusculos = [];
    var Minusculos = [];

    Maiusculos[0] = "A";
    Maiusculos[1] = "B";
    Maiusculos[2] = "C";
    Maiusculos[3] = "D";
    Maiusculos[4] = "E";
    Maiusculos[5] = "F";
    Maiusculos[6] = "G";
    Maiusculos[7] = "H";
    Maiusculos[8] = "I";
    Maiusculos[9] = "J";
    Maiusculos[10] = "K";
    Maiusculos[11] = "L";
    Maiusculos[12] = "M";
    Maiusculos[13] = "N";
    Maiusculos[14] = "O";
    Maiusculos[15] = "P";
    Maiusculos[16] = "Q";
    Maiusculos[17] = "R";
    Maiusculos[18] = "S";
    Maiusculos[19] = "T";
    Maiusculos[20] = "U";
    Maiusculos[21] = "V";
    Maiusculos[22] = "W";
    Maiusculos[23] = "X";
    Maiusculos[24] = "Y";
    Maiusculos[25] = "Z";

    Minusculos[0] = "a";
    Minusculos[1] = "b";
    Minusculos[2] = "c";
    Minusculos[3] = "d";
    Minusculos[4] = "e";
    Minusculos[5] = "f";
    Minusculos[6] = "g";
    Minusculos[7] = "h";
    Minusculos[8] = "i";
    Minusculos[9] = "j";
    Minusculos[10] = "k";
    Minusculos[11] = "l";
    Minusculos[12] = "m";
    Minusculos[13] = "n";
    Minusculos[14] = "o";
    Minusculos[15] = "p";
    Minusculos[16] = "q";
    Minusculos[17] = "r";
    Minusculos[18] = "s";
    Minusculos[19] = "t";
    Minusculos[20] = "u";
    Minusculos[21] = "v";
    Minusculos[22] = "w";
    Minusculos[23] = "x";
    Minusculos[24] = "y";
    Minusculos[25] = "z";

    for (cont = 0; cont < num_candidatos; cont++)
    {
        z = Math.floor(Math.random() * 25);

        x = Math.floor(Math.random() * 25);

        vetor_nome[cont] = Maiusculos[z] + Minusculos[x];
        vetor_poder[cont] = Math.floor(Math.random() * 100) + 1;
        vetor_kills[cont] = Math.floor(Math.random() * 100) + 1;
        vetor_mortes[cont] = Math.floor(Math.random() * 100) + 1;

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

        }
        if (b > 0)
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

        console.log(vitorioso);
    }
}