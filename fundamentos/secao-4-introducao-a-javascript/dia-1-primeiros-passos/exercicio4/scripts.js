let status = "lista";

switch (status) {
    case "aprovada":
        console.log('Parabéns, você foi aprovada(o)');
        break;

    case "reprovada":
        console.log('Você foi reprovada(o)');
        break;

    case "lista":
        console.log('Você está na nossa lista de espera');
        break;

    default:
        console.log('Informação incorreta');
}