<template>
    <div id="main" style="width: 100%; height: 400px;"></div>
</template>
  
<script>
import * as echarts from 'echarts';

export default {
    data() {
        return {
            myChart: null,
            option: null
        };
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            // Initialize echarts instance
            this.myChart = echarts.init(document.getElementById('main'), 'dark');

            // Your ECharts option
            this.option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: 'Large Area Chart'
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.getDateArray()
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 10
                    },
                    {
                        start: 0,
                        end: 10
                    }
                ],
                series: [
                    {
                        name: 'Fake Data',
                        type: 'line',
                        symbol: 'none',
                        sampling: 'lttb',
                        itemStyle: {
                            color: 'rgb(255, 70, 131)'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }
                            ])
                        },
                        data: this.generateFakeData()
                    }
                ]
            };

            // Set ECharts option
            this.myChart.setOption(this.option);
        },
        getDateArray() {
            let base = +new Date(1968, 9, 3);
            let oneDay = 24 * 3600 * 1000;
            let date = [];
            for (let i = 0; i < 20000; i++) {
                var now = new Date(base += oneDay);
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            }
            return date;
        },
        generateFakeData() {
            let base = +new Date(1968, 9, 3);
            let oneDay = 24 * 3600 * 1000;
            let data = [Math.random() * 300];
            for (let i = 1; i < 20000; i++) {
                var now = new Date((base += oneDay));
                data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            }
            return data;
        }
    },
    beforeDestroy() {
        // Dispose the chart instance when the component is destroyed
        if (this.myChart) {
            this.myChart.dispose();
        }
    }
};
</script>
  
<style scoped>
#main {
    border-radius: 10px;
}
</style>
  