<template>
  <div class="container-xl p-6 bg-grey-700 mt-16 shadow-lg bg-gray-800 rounded-lg">
    <div class="row flex justify-center">
      <div class="col-3">
        <hr v-if="status" class="line14 ">
        <hr v-else class=" line14w ">
        <p class=" text-white mr-40">1.5km</p>
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">9.4km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-2">
        <p class=" text-white mr-12">9.6km</p>
        <hr v-if="status" class="line12 ">
        <hr v-else class=" line12w ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-2">
        <p class=" text-white mr-12">19.6km</p>
        <hr v-if="status" class="line13 ">
        <hr v-else class="line13w">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">27.4km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">27.6km</p>
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
    </div>
    <div class="row flex justify-center">
      <hr v-if="status" class="line1">
      <hr v-else class="line1w">
    </div>
    <div class="row mt-3 flex justify-center">
      <div class="col-1">
        <p class=" text-white mr-12">1.5km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">2.8km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">7.5km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">9.4km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">9.6km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">14km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15  rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">19.6km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">23km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15  rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">27.4km</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15  rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">27.6km</p>
        <img class="w-20 h-15  rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
    </div>
    <div class="row mt-4 flex justify-center">
      <div class="col-5 flex justify-center">
        <p class=" text-white">58 Server</p>
        <img class="w-20 h-10  rounded-full" src="../assets/server.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-5">
        <p class=" text-white mr-60">45 Server</p>
        <img class="w-20 h-10  rounded-full" src="../assets/server.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">central Server</p>
        <img class="w-20 h-10  rounded-full" src="../assets/server.jpg" alt="" width="150" height="300">
      </div>
    </div>
    <div class="row">
      <hr v-if="status" class="line2 ">
      <hr v-else class="line2w">
    </div>
    <div class="row flex justify">
      <hr v-if="status" class="line5">
      <hr v-else class="line5w">
      <hr v-if="status" class="line3">
      <hr v-else class="line3w">
      <hr v-if="status" class="line4">
      <hr v-else class="line4w">
      <hr v-if="status" class="line6 ">
      <hr v-else class="line6w">
    </div>
    <div class="row mt-6 flex justify-center">
      <div class="col-2">
        <p class=" text-white mr-12">59km</p>
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">45km(4)</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">45km(1)</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">Junction</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">31km(4)</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">31km(3)</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">31km(1)</p>
        <img class="w-20 h-15  rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
    </div>
    <div class="row flex justify">
      <hr v-if="status" class=" line7 ">
      <hr v-else class=" line7w ">
      <hr v-if="status" class=" line8 ">
      <hr v-else class=" line8w">
      <hr v-if="status" class=" line9 ">
      <hr v-else class=" line9w">
      <hr v-if="status" class=" line10 ">
      <hr v-else class=" line10w ">
      <hr v-if="status" class=" line11 ">
      <hr v-else class="line11w ">
    </div>
    <div class="row mt-6 flex justify-center">
      <div class="col-1">
        <p class=" text-white mr-40">45km(2)</p>
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-3">
        <p class=" text-white mr-40">45km(3)</p>
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">31km(5)</p>
        <hr v-if="status" class="line ">
        <hr v-else class=" linew ">
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">31km(2)</p>
        <img class="w-20 h-15 mb-4 rounded-full" src="../assets/24-Port.jpg" alt="" width="150" height="300">
      </div>
      <div class="col-1">
        <p class=" text-white mr-12">31Server</p>
        <img class="w-20 h-10  rounded-full" src="../assets/server.jpg" alt="" width="150" height="300">
      </div>
    </div>
    <div class="row flex justify-center mt-6 shadow-lg bg-gray-900 p-3 rounded-lg">
      <div class="col-4">
        <hr class="line">
        <p class="text-white"> Connectivity Ok</p>
      </div>
      <div class="col-4">
        <hr class="linew">
        <p class="text-white"> Connectivity Break</p>
      </div>
      <div class="col-4">
        <p class="text-white">
          ():-Ramp Number Define
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Network",
  data() {
    return {
      status: true,
    }
  }
}
</script>


<style scoped>
.line {
  position: absolute;
  margin-top: 5px;
  margin-left: 69px;
  width: 25px;
  border: 1px solid green;
  opacity: 1;
}

.linew {
  position: absolute;
  margin-top: 5px;
  margin-left: 69px;
  width: 25px;
  border: 1px solid red;
  opacity: 1;
}

.line1 {
  position: absolute;
  margin-top: 6px;
  transform: rotate(90deg);
  margin-left: 600px;
  width: 65px;
  border: 1px solid green;
  opacity: 1;
}

.line1w {
  position: fixed;
  margin-top: 6px;
  transform: rotate(90deg);
  margin-left: 600px;
  width: 65px;
  border: 1px solid red;
  opacity: 1;
}

.line2 {
  position: absolute;
  transform: rotate(150deg);
  margin-left: 588px;
  width: 380px;
  border: 1px solid green;
  opacity: 1;
  bottom: 360px;
}

.line2w {
  position: absolute;
  transform: rotate(150deg);
  margin-left: 588px;
  width: 380px;
  border: 1px solid red;
  opacity: 1;
  bottom: 360px;
}

.line3 {
  position: absolute;
  transform: rotate(138deg);
  margin-top: 9px;
  margin-left: 900px;
  width: 104px;
  border: 1px solid green;
  opacity: 1;
  top: 342px;
}

.line3w {
  position: absolute;
  transform: rotate(138deg);
  margin-top: 9px;
  margin-left: 900px;
  width: 104px;
  border: 1px solid red;
  opacity: 1;
  top: 342px;
}

.line4 {
  position: absolute;
  margin-top: 12px;
  transform: rotate(125deg);
  margin-left: 500px;
  width: 88px;
  border: 1px solid green;
  opacity: 1;
}

.line4w {
  position: absolute;
  margin-top: 12px;
  transform: rotate(125deg);
  margin-left: 500px;
  width: 88px;
  border: 1px solid red;
  opacity: 1;
}

.line5 {
  position: absolute;
  transform: rotate(60deg);
  margin-left: 320px;
  width: 110px;
  border: 1px solid green;
  opacity: 1;
}

.line5w {
  position: absolute;
  transform: rotate(60deg);
  margin-left: 320px;
  width: 110px;
  border: 1px solid red;
  opacity: 1;
}

.line6 {
  position: absolute;
  transform: rotate(115deg);
  margin-left: 240px;
  width: 105px;
  border: 1px solid green;
  opacity: 1;
}

.line6w {
  position: absolute;
  transform: rotate(115deg);
  margin-left: 240px;
  width: 105px;
  border: 1px solid red;
  opacity: 1;
}

.line7 {
  position: absolute;
  margin-top: 11px;
  transform: rotate(138deg);
  margin-left: 297px;
  width: 110px;
  border: 1px solid green;
  opacity: 1;
}

.line7w {
  position: absolute;
  margin-top: 11px;
  transform: rotate(138deg);
  margin-left: 297px;
  width: 110px;
  border: 1px solid red;
  opacity: 1;
}

.line8 {
  position: absolute;
  margin-top: 11px;
  transform: rotate(90deg);
  margin-left: 642px;
  width: 70px;
  border: 1px solid green;
  opacity: 1;
}

.line8w {
  position: absolute;
  margin-top: 11px;
  transform: rotate(90deg);
  margin-left: 642px;
  width: 70px;
  border: 1px solid red;
  opacity: 1;
}

.line9 {
  position: absolute;
  margin-top: 11px;
  transform: rotate(90deg);
  margin-left: 378px;
  width: 72px;
  border: 1px solid green;
  opacity: 1;
}

.line9w {
  position: absolute;
  margin-top: 11px;
  transform: rotate(90deg);
  margin-left: 378px;
  width: 72px;
  border: 1px solid red;
  opacity: 1;
}

.line10 {
  position: absolute;
  margin-top: 14px;
  transform: rotate(120deg);
  margin-left: 800px;
  width: 87px;
  border: 1px solid green;
  opacity: 1;
}

.line10w {
  position: absolute;
  margin-top: 14px;
  transform: rotate(120deg);
  margin-left: 800px;
  width: 87px;
  border: 1px solid red;
  opacity: 1;
}

.line11 {
  position: absolute;
  margin-top: 50px;
  margin-left: 778px;
  width: 38px;
  border: 1px solid green;
  opacity: 1;
}

.line11w {
  position: absolute;
  margin-top: 50px;
  margin-left: 778px;
  width: 38px;
  border: 1px solid red;
  opacity: 1;
}

.line12 {
  position: absolute;
  margin-top: 5px;
  margin-left: 79px;
  width: 108px;
  border: 1px solid green;
  opacity: 1;
}

.line12w {
  position: fixed;
  margin-top: 5px;
  margin-left: 79px;
  width: 108px;
  border: 1px solid red;
  opacity: 1;
}

.line13 {
  position: absolute;
  margin-top: 5px;
  margin-left: 79px;
  width: 108px;
  border: 1px solid green;
  opacity: 1;
}

.line13w {
  position: fixed;
  margin-top: 5px;
  margin-left: 79px;
  width: 108px;
  border: 1px solid red;
  opacity: 1;
}

.line14 {
  position: absolute;
  margin-top: 6px;
  transform: rotate(90deg);
  margin-left: 20px;
  width: 65px;
  border: 1px solid green;
  opacity: 1;
  top: 152px;
}

.line14w {
  position: fixed;
  margin-top: 6px;
  transform: rotate(90deg);
  margin-left: 20px;
  width: 65px;
  border: 1px solid red;
  opacity: 1;
  top: 152px;
}
</style>