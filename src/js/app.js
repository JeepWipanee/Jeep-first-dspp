App = {
     web3Provider: null,
     contracts: {},
     account: 0X0,

     init: function() {
          
            // var articleRow = $('#articlesRow');
            // var articleTemplate = $('#articleTemplate');
            
            // articleTemplate.find('.panel-title').text('สินค้าชิ้นที่ 1');
            // articleTemplate.find('.article-description').text('รายละเอียดสินค้าชิ้นที่ 1');
            // articleTemplate.find('.article-price').text('10.24');
            // articleTemplate.find('.article-seller').text('วิภาณี');

            // articleRow.append(articleTemplate.html());

          return App.initWeb3();
     },

     initWeb3: function() {
      App.web3Provider  = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
      App.displayAccountInfo();

          return App.initContract();
     },

     displayAccountInfo: function(){
      web3.eth.getCoinbase(function(err, balance){
            if(err === null){
                  console.log("No error");
                  App.account = balance;
                  console.log(balance);
                  $('#account').text(balance);
            }else{
                  console.log(err);
            }
      })
     },

     initContract: function() {
          /*
           * Replace me...
           */
     },
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
