// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0 <0.7.0;

contract Donation {
    uint256 totalDonatrionQuantity;

    address payable public owner; 

    mapping(address => uint256) public balanceOf;

    event NewDonation(
        address indexed from,
        uint256 timestamp,
        string quantity,
        string partner
    );

    constructor() payable {
        owner = payable(msg.sender);
    }

    struct DonationRecord {
        address giver; // The address of the user who donate the expired cosmetic product
        string partner; // The name of partner who recieve the expired cosmetic product
        string quantity; // Quantity of expired cosmetic product
        uint256 timestamp; // Time
    }

    DonationRecord[] donation;

    function getAllDonation() public view returns (DonationRecord[] memory) {
        return donation;
    }

    function getTotalDonation() public view returns (uint256) {
        return totalDonatrionQuantity;
    }

    function donateProduct(
        string memory _partner,
        string memory _quantity
    ) external payable {

        totalDonatrionQuantity += 1;
        donation.push(DonationRecord(msg.sender, _partner, _quantity, block.timestamp));
        emit NewDonation(msg.sender, block.timestamp, _partner, _quantity);
    }
    
    function transferMoney() external payable {
        require(owner == msg.sender, "You are not owner");
        uint256 _money = address(this).balance;
        (bool success, ) = owner.call{value: _money}("");
        require(success, "Failed to send money");
    } 

}