var t = 0, n = 0, i = 0, p = 0, e = 0, q = 0, u = 0, a = 0, c = 0, z = 0, x = 0;

n = Math.floor(Math.random() * 10000) + 2;
console.log(n);
t = Math.floor(Math.random() * 1000) + 2;
console.log(t);

if (t <= n && n >= 2 && n <= 10000 && t >= 2 && t <= 1000)
{
    e = parseInt(Math.ceil(parseFloat(n) / parseFloat(t)));

    var nomes = [];
    var habilidades = [];
    var habilidadesn = [];
    var teste = [];
    var d = [];
    var b = [];
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

    //nomes[0] = "Artur";
    //nomes[1] = "Joao";
    //nomes[2] = "Bernado";
    //nomes[3] = "Ana";
    //nomes[4] = "Caio";
    //nomes[5] = "Pedro";
    //nomes[6] = "Ruth";
    //nomes[7] = "Marcos";
    //nomes[8] = "Luisa";
    //nomes[9] = "Clara";
    //nomes[10] = "Kinnara";
    //nomes[11] = "Zeiva";
    //nomes[12] = "Tuca";
    //nomes[13] = "Lucio";
    //nomes[14] = "Canario";
    //nomes[15] = "Alexandre";
    //nomes[16] = "Pamela";
    //nomes[17] = "Zéca";
    //nomes[18] = "Bola";
    //nomes[19] = "Pato";
    //nomes[20] = "Corno";
    //nomes[21] = "Piru";
    //nomes[22] = "KKKKKK";
    //nomes[23] = "Pernanbuco";
    //nomes[24] = "Zizo";
    //nomes[25] = "Plaus";
    //nomes[26] = "Arara";
    //nomes[27] = "Banana";
    //nomes[28] = "Vitor";
    //nomes[29] = "Vitoria";
    //nomes[30] = "Bilu";
    //nomes[31] = "Orca";
    //nomes[32] = "Henrique";
    //nomes[33] = "Koiote";
    //nomes[34] = "Quirito";
    //nomes[35] = "Pova";

    //habilidades[0] = "10";
    //habilidades[1] = "12";
    //habilidades[2] = "1";
    //habilidades[3] = "56";
    //habilidades[4] = "9";
    //habilidades[5] = "19";

    //habilidadesn[0] = 10;
    //habilidadesn[1] = 12;
    //habilidadesn[2] = 1;
    //habilidadesn[3] = 56;
    //habilidadesn[4] = 9;
    //habilidadesn[5] = 19;


    for (i = 0; i < n; i++)
    {

        // var vet1 = lines.shift().split(' ');
        // nomes[i] = vet1[0];
        //habilidades[i] = vet1[1];
        //habilidadesn[i] = parseInt(vet1[1]);
        z = Math.floor(Math.random() * 25);

        x = Math.floor(Math.random() * 25);

        nomes[i] = Maiusculos[z] + Minusculos[x];

        habilidadesn[i] = Math.random() * 1000000;

        habilidades[i] = habilidadesn[i].toString();
        if (habilidadesn[i] >= 0 && habilidadesn[i] <= 1000000)
        {

            if (habilidades[i].length == 1)
            {

                teste[i] = "000000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "000000" + habilidades[i];
            }
            else if (habilidades[i].length == 2)
            {

                teste[i] = "00000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "00000" + habilidades[i];
            }
            else if (habilidades[i].length == 3)
            {

                teste[i] = "0000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "0000" + habilidades[i];
            }
            else if (habilidades[i].length == 4)
            {

                teste[i] = "000" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "000" + habilidades[i];
            }
            else if (habilidades[i].length == 5)
            {

                teste[i] = "00" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "00" + habilidades[i];
            }
            else if (habilidades[i].length == 6)
            {

                teste[i] = "0" + habilidades[i] + " " + nomes[i];
                habilidades[i] = "0" + habilidades[i];
            }
            else
            {

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
                //console.log(habilidades[p] + " " + nomes[q]);
                if (teste[i] == habilidades[p] + " " + nomes[q])
                {
                    break;
                }
                q++;
            }
            if (teste[i] == habilidades[p] + " " + nomes[q])
            {
                d[i] = nomes[q];
                //console.log("d " + d[i]);
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
            while (u < n)
            {
                //console.log(e);
                //console.log(q);
                //console.log(u);
                //console.log(d[u]);
                b[p] = d[u];
                //console.log(b[p]);
                u = u + t;
                p++;
            }
            if (p != e)
            {
                for (c = p; c < e; c++)
                {
                    b.splice(c, 1);
                }
            }
            b.sort();
            a = 0;
            while (a < b.length)
            {
                console.log(b[a]);
                a++;
            }
            console.log("");
        }
    }
}
