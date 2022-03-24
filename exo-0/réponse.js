/**
 * Les consignes sont ici, ne les effacez pas.
 */
/**
 * Vous allez recevoir N chaînes de textes, et vous devez les afficher sur une seule ligne.
 * ENTREE
 * Ligne 1 : N, le nombre de chaînes de texte qui suivent.
 * Les N lignes suivantes : des chaînes de textes
 */
export function main() { // ne touchez pas à ça
  const N = parseInt(readline()); // parseInt convertit l'argument en Nombre

  let chaîneFinale = '';

  for(let i =0;i<N;i++) { // répéter N fois
    chaîneFinale += readline();
    console.debug(chaîneFinale); // Déboggage pour vérifier si chaîneFinale est cohérente
  }

  console.log(chaîneFinale); //afficher dans console
} // ni ça
