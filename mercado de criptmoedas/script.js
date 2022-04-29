const criptoInput = document.querySelector('#cripto');
const metodoInput = document.querySelector('.metodo');
const valor = document.querySelector('.valor');

/* 'change'atualiza com alteração no input*/
criptoInput.addEventListener('change', function(){
   
   const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${criptoInput.value}/${metodoInput.value}/`);

   promiseResposta.then(function(resposta){//moeda escolhida
      const promiseBody = resposta.json();

      promiseBody.then(function(body){
         valor.textContent = Number(body.ticker.high).toFixed(2);
      })
   })

});
metodoInput.addEventListener('change',function(){
   const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${criptoInput.value}/${metodoInput.value}/`);

   promiseResposta.then(function(resposta){//moeda escolhida
      const promiseBody = resposta.json();

      promiseBody.then(function(body){
         console.log(body)
         if(body.ticker.high){
            valor.textContent = Number(body.ticker.high).toFixed(2);
         }
         else if(body.orderbook){
            valor.textContent = Number(body.bids.bids).toFixed(2);
         }
         else if(body.orderbook){
            valor.textContent = Number(body.bids.bids).toFixed(2);
         }

      })
   })
})
