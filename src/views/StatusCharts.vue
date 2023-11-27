<template>
    <div class="row mt-10 flex justify-center">
        <div class="col-10">
            <Chart1 />
        </div>
    </div>
</template>

<script>
import Chart1 from '../components/charts/Chart1.vue';
export default {
    name: 'Status Charts',
    components: {
        Chart1
    }
}
</script>