import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

// export const formatPrice = value => {
//   numeral(value).format('$0,0.00');
// };
// import numeral from 'numeral';
// import 'numeral/locales/pt-br';
export function formatPrice(value) {
  return numeral(value).format('$0,0.00');
}

// export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });
