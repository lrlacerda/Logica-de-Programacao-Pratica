//Exercício 5
//Crie um programa que peça ao usuário para digitar um texto e conte quantas vezes cada
//letra do alfabeto aparece no texto.


Dictionary<char, int> letraContagem = new Dictionary<char, int>();

Console.WriteLine("Digite um texto:");
string texto = Console.ReadLine();

texto = texto.ToLower();

foreach (char c in texto)
{
    if (char.IsLetter(c))
    {
        if (letraContagem.ContainsKey(c))
        {
            letraContagem[c]++;
        }
        else
        {
            letraContagem[c] = 1;
        }
    }
}

Console.WriteLine("\nContagem das letras:");
foreach (var item in letraContagem)
{
    Console.WriteLine($"{item.Key}: {item.Value}");
}

