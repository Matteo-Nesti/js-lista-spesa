console.log('js ok')

/* traccia Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che
si vedano) gli elementi della lista individualmente con un ciclo while. */

const shopList = ['pane', 'latte', 'uova', 'tonno', 'riso', 'peperoncino'];

let shopListText = '';

for(let i = 0; i < shopList.length; i++){
    shopListText += `<div>${shopList[i]}</div>`
}