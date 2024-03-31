// Não pode ter duas variavel com mesmo nome na mesma pasta para resolver esse erro basta crira a seguinte estrutura
namespace casting {
    let age: any = 25;
    (age as number).toFixed(2);
    (age as string).length;
    (age as string[])

    // usa o comando unknown para converte um número em uma string
    let name: string = 35 as unknown as string
    // cuidade com o uso dessa função
}

// convertendo tipos em ts