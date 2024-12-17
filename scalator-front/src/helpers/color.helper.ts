export function stringToHexColor(str: string) {
  // Inicializa o hash
  let hash = 0;

  // Gera um hash a partir da string
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Converte para um número inteiro de 32 bits
  }

  // Converte o hash em um código de cor hexadecimal
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff; // Pega 8 bits do hash
    value = 128  + (value % 128); // Mapeia o valor para a faixa entre 128 e 255
    color += ("00" + value.toString(16)).slice(-2); // Garante dois dígitos hexadecimais
  }

  return color;
}
