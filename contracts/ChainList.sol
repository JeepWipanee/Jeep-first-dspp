//solium-disable linebreak-style
pragma solidity ^0.4.18;

contract ChainList{
    address seller;
    string name;
    string description;
    uint256 price;

    // Sell thing info
    function sellArticle(string _name,string _description,uint256 _price) public{
        seller = msg.sender;
        name = _name;
        description = _description;
        price = _price;
    }

    constructor() public{
        sellArticle("Iphone Xs","มือถือที่แพงมาก","10000000000000000000";
    }

    // get thing info
    function getArticle()  public view returns(address _seller,string _name,string _description,uint256 _price)
    {
        return(seller,name,description,price);
    }
}