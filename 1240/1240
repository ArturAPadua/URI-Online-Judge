using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 1240
{

	class Program
	{
		public int Length { get; }
		static void Main(string[] args)
		{

			int i, n, tamA, tamB, t, z;
			string a, b;

			n = int.Parse(Console.ReadLine());
			for (i = 0; i  n; i++)
			{
				string[] vet = Console.ReadLine().Split(' ');
				a = vet[0];
				b = vet[1];

				t = 0;
				tamA = a.Length;
				tamB = b.Length;

				if (a.Contains(b) == false){
					Console.WriteLine(nao encaixan);
				} 
				else if (tamB  tamA){
					Console.WriteLine(encaixan);
				}
				else
				{
					for (z = 0; z = 0; z++)
					{
						if (b[--tamB] == a[--tamA])
						{
							t = 1;
							if (b[tamB] == 0){
								break;
							}
						}
						else
						{
							t = 0;
							break;
						}
						if (tamB == 0){
							break;
						} 
					}
					if (t == 0)
					{
						Console.WriteLine(nao encaixan);
					}
					else if (t == 1)
					{
						Console.WriteLine(encaixan);
					}
				}
			}
		}
	}
}
