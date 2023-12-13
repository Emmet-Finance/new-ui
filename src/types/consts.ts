
export const options = {
    retryCount: 100, 
    retryDelay: 3000, 
    timeout: 100_000
};

export const ChainToMessengerAddress = {
    arbitrum:"0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352",
    avalanche:"0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0",
    base:"0x877b8e8c9e2383077809787ed6f279ce01cb4cc8",
    goerli:"0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8",
    linea:"",
    optimism:"0x23a04d5935ed8bc8e3eb78db3541f0abfb001c6e",
    polygon:"0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5",
    scroll:""
}

export const ChainToTransmitterContract = {
    arbitrum:"0x109bc137cb64eab7c0b1dddd1edf341467dc2d35",
    avalanche:"0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79",
    base:"0x9ff9a4da6f2157A9c82CE756f8fD7E0d75be8895",
    goerli:"0x26413e8157cd32011e726065a5462e97dd4d03d9",
    linea:"",
    optimism:"0x9ff9a4da6f2157A9c82CE756f8fD7E0d75be8895",
    polygon:"0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73",
    scroll:""
}


export const ChainToDestinationDomain = {
    arbitrum:3,
    avalanche:1,
    base:6,
    goerli:0,
    optimism:2,
    polygon:7,
    // Not supported:
    linea:-1,
    scroll:-2
}

export const ChainToBridge = {
    arbitrum:"",
    avalanche:"",
    base:"",
    goerli:"0x750B52c82596C7b6489C207b87adcf56Fe4a3ABe",
    linea:"",
    optimism:"",
    polygon:"",
    scroll:""
}