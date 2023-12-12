import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width:  480px;
    margin:  0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 50px 0;
`;

const Loader =styled.span`
    text-align: center;
    display: flex;
    justify-content: center;
    color:${(props)=> props.theme.textColor};
    font-size: 38px;

`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`


interface RouteParams {
    coinId:string;
}

interface RouteState{
    name:string;
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;

}

interface PriceData{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
        };
    };
}

function Coin() {
    const [loading, setLoding] = useState(true);
    const {coinId} =useParams<RouteParams>();
    const { state }= useLocation<RouteState>(); 
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo , setPriceInfo] = useState<PriceData>();
    useEffect(() => {
        (async () => {
            const infoData = (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();
            
            const priceData = (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();
            
        setInfo(infoData);
        setPriceInfo(priceData);
        setLoding(false);
        })();
    }, []);
    
    return (
    <Container>
        <Header>
            <Title>{state?.name || "LOADING"}</Title>
        </Header>
            {loading ? (
                <Loader>Loding...</Loader>
            ): (
                null
            )}
    </Container>
    );
}
export default Coin;