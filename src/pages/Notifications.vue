<template>
  <!-- notification -->
  <div class="flex-1 border-r border-gray-100 flex flex-col overflow-y-auto">
    <!-- title -->
    <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
    <!-- notifications -->
    <div
      class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer"
      v-for="notification in 10"
      :key="notification"
    >
      <div class="flex justify-between">
        <img
          src="http://picsum.photos/100"
          class="w-10 h-10 rounded-full hover:opacity-80"
        />
        <i
          class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center"
        ></i>
      </div>
      <div><span class="font-bold"> 전우용</span> 님의 최근 트윗</div>
      <div class="text-gray-500">
        통영에는 1932년에 건설된 동양 최초의 ‘해저터널’이 있습니다. 문화재
        명칭은 ‘통영해저터널’이지만, 원이름은 ‘태합굴(太閤堀)’이었습니다.
        태합굴이라는 이름이 붙은 것은 터널공사가 시작되기 훨씬 전인 1925년의
        일입니다. ‘태합’은 토요토미 히데요시를 말합니다.
      </div>
    </div>
  </div>
  <!-- trends -->
  <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
  components: { Trends },
}
</script>

<style></style>
