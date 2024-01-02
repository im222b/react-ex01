import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

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

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 20px;
    margin-bottom: 10px;
    a{
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }
    &:hover {
        a{
            color:${(props)=> props.theme.accentColor}
        }
    }
`;

const Loader =styled.span`
    text-align: center;
    display: flex;
    justify-content: center;
    color:${(props)=> props.theme.textColor};
    font-size: 38px;

`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`


interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const { isLoading, data  } = useQuery<ICoin[]>("allCoins", fetchCoins)
    /* const [coins, setCoins] = useState<CoinInterface[]> ([]);
    const [loding, setLodoing] = useState(true);
    useEffect(() => {
        (async() => {
        const response =  await fetch("https://api.coinpaprika.com/v1/coins");
        const json = await response.json();
        setCoins(json.slice(0,100));
        setLodoing(false);
        })();
    }, []); */
    return (
    <Container>
        <Helmet>
                <title>
                    COIN
                </title>
        </Helmet>
        <Header>
            <Title>COINS</Title>
        </Header>
        {isLoading ? (
            <Loader>Loding...</Loader>
        ): (
        <CoinsList>
            {data?.slice(0,100).map((coin) => (
            <Coin key = {coin.id}>
                <Link to={{
                    pathname: `/${coin.id}`,
                    state: { name : coin.name },
                    
                }}>
                    <Img src=
                    {`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                    {coin.name} &rarr;
                </Link>
            </Coin>
        ))} 
        </CoinsList>
        )}
    </Container>
    );
}
export default Coins;