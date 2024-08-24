import { ethers } from "hardhat";

async function main() {
    const ContractFactory = await ethers.getContractFactory("AccessControl"); 
    console.log("Deploying contract...");

    const contract = await ContractFactory.deploy();

    await contract.waitForDeployment();  

    const contractAddress = await contract.getAddress();  
    console.log("AccessControl deployed to:", contractAddress);  

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    