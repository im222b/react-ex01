import { useQuery } from "react-query";
import { fetchCoinHestory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

interface ChartProps {
    coinId : string;
    
}

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}


function  Chart({ coinId } : ChartProps){
    const isDark = useRecoilValue(isDarkAtom)
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHestory(coinId),
    {
        refetchInterval: 1000000,
    }

    );    
    return (
        <div>
        {isLoading ? (
            "Loading chart..."
        ) : (
            <ApexChart
            type="line"
            series={[
                {
                name: "Price",
                data: data?.map((price) => Number(price.close)) as number[],
                },
            ]}
            options={{
                theme: {
                mode: isDark ?"dark" : "light",
                },
                chart: {
                height: 300,
                width: 500,
                toolbar: {
                    show: false,
                },
                
                background: "transparent",
                },

                grid: { show: false },
                stroke: {
                curve: "smooth",
                width: 4,
                },

                yaxis: {
                show: false,
                },

                xaxis: {
                axisBorder: { show:false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime" ,
                categories: data?.map((price) => price.time_close),
                },
                
                fill: { type: "gradient", gradient : {gradientToColors: ["#778beb"] , stops: [0 ,100]}
            },
                colors:["#cf6a87"],
                tooltip: {
                    y :{
                        formatter: (value) => `$${value.toFixed(3)}` ,
                    }
                }
            }}
            />
        )}
        </div>
    );
}

    export default Chart;