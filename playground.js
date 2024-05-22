/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arr=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyecolor,shirttype,bling) {
 const NFTs={
    "name":name,
    "eyecolor":eyecolor,
    "shirttype":shirttype,
    "bling":bling
 }
 arr.unshift(NFTs);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("Name: "+ element.name);
    console.log("eyeColor: "+ element.eyecolor)
    console.log("bling: " +element.bling)
    console.log("shirtType: "+ element.shirttype)
    console.log("\n")
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFTs Minted: "+ arr.length)
}

// call your functions below this line
mintNFT('Yash','Black','Sweatshirt','Gold chain');
mintNFT('Ronak','Blue','Hoodie','Silver chain');
mintNFT('Naman','Black','Shirt','Diamond ring');
listNFTs();
getTotalSupply();
