/*
Asessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_animalname,_animaltype,_lifespan,_animallength) {
    let NFT={
        "animalname":_animalname,
        "animaltype":_animaltype,
        "lifespan":_lifespan,
        "animallength":_animallength,
    }
    NFTs.push(NFT);
    console.log("Minted: "+_animalname);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("ID: \t\t"+(i+1));
        console.log("\nanimalname: \t\t\t"+NFTs[i].animalname);
        console.log("animaltype: \t"+NFTs[i].animaltype);
        console.log("lifespan: \t"+NFTs[i].lifespan);
        console.log("animallength: \t\t\t"+NFTs[i].animallength);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);

}

// call your functions below this line
mintNFT("african elephant","Mammal","60to 70 yrs","6 to 7.5");
mintNFT("cow","Mammal","10 t0 15 yrs","5 to 6");
mintNFT("dog","Mammal"," 5 t0 6"," 2 to 2.5");
listNFTs();
getTotalSupply();