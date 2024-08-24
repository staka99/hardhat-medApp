import { ethers } from "hardhat";

async function main() {
    const ContractFactory = await ethers.getContractFactory("AccessControl"); // Zamenite sa imenom vašeg pametnog ugovora
    console.log("Deploying contract...");

    const contract = await ContractFactory.deploy({
        gasLimit: 3000000, // Podesite gas limit prema potrebama vašeg ugovora
    });

    await contract.waitForDeployment();  // Sačekajte da se ugovor uspešno deploy-uje

    const contractAddress = await contract.getAddress();  // Ispravno dobijanje adrese
    console.log("AccessControl deployed to:", contractAddress);  // Ispišite adresu ugovora

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    