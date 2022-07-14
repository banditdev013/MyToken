const hre = require("hardhat");
async function main() {
    const PepbleToken = await hre.ethers.getContractFactory("PepbleToken");
    console.log('Deploying PepbleToken...');
    const token = await PepbleToken.deploy('10000000000000000000000');

    await token.deployed();
    console.log("PepbleToken deployed to:", token.address);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

