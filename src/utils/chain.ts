import { 
    SUPPORTED_CHAINS, 
    TChainDataParam, 
    TChainName, 
    TEmmetChain, 
    DomainToChainName, 
    SupportedDomains 
} from "../types";

export function getChainData(chinName: TChainName, param: TChainDataParam):string | number | undefined {
    const chain = findChain(chinName);
    if(chain){
        switch(param){
            case "bridge":
                return chain.bridge;
            case "icon":
                return chain.icon;
            case "url":
                return chain.rpcUrls.default.http[0];
            case "id":
                return chain.id;
            default:
                return undefined;
        }
    }
    return undefined;
}

export function findChain(chinName: TChainName): TEmmetChain | undefined {
    if (!isChainSupported(chinName)) return undefined;
    return SUPPORTED_CHAINS[chinName.toLocaleLowerCase() as TChainName];
}

export function isChainSupported(chinName: TChainName): boolean {
    if (!chinName) return false;
    const chainNames = Object.keys(SUPPORTED_CHAINS);
    if (chainNames.includes(chinName)) return true;
    return false;
}

export function getChainSymbolFromName(chinName: TChainName): string | undefined {
    if(chinName){
        return SUPPORTED_CHAINS[chinName].nativeCurrency.symbol;
    }
    return undefined;
}

export function getDomainToChainName(domain: number): TChainName | undefined {
    if(SupportedDomains.includes(domain)){
        return DomainToChainName[domain];
    }
    return undefined;
}