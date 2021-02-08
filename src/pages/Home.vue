<template>
  <!-- main part -->
  <div class="flex-1 border-r border-gray-100 overflow-y-auto">
    <div class="flex flex-col">
      <!-- page title -->
      <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
      <!-- tweeting section -->
      <div class="flex px-3 py-3 border-b-8 border-gray-100">
        <img
          src="http://picsum.photos/200"
          class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
        />
        <div class="ml-2 flex-1 flex flex-col">
          <textarea
            placeholder="무슨 일이 일어나고 있나요?"
            class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
          ></textarea>
          <div class="text-right">
            <button
              class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full"
            >
              트윗
            </button>
          </div>
        </div>
      </div>
      <!-- tweets -->
      <div
        class="flex px-3 py-3 border-b border-gray-100"
        v-for="tweet in 10"
        :key="tweet"
      >
        <img
          src="http://picsum.photos/200"
          class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
        />
        <div class="ml-3 flex-1 flex flex-col space-y-1">
          <div class="text-sm space-x-1">
            <span class="font-bold">조국</span>
            <span class="text-gray-500 text-xs">@patriamea</span>
            <span>·</span>
            <span class="text-gray-500 text-xs">7분</span>
          </div>
          <!-- tweet body -->
          <div>
            저와 제 딸은 한일병원 인턴 지원 사실을 정청래 의원이나 부인께 알린
            적이 없습니다. [MT] 정청래 "조민 '멘탈'에 경의..아내는 약사, 의사
            안뽑아" |
          </div>
          <!-- tweet actions -->
          <div class="flex justify-between">
            <div class="text-gray-500 hover:text-primary">
              <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
              <span class="ml-1 text-sm">1</span>
            </div>
            <div class="text-gray-500 hover:text-green-500">
              <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
              <span class="ml-1 text-sm">1</span>
            </div>
            <div class="text-gray-500 hover:text-red-500">
              <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
              <span class="ml-1 text-sm">1</span>
            </div>
            <div class="text-gray-500 hover:text-primary">
              <i
                class="far fa-share-square hover:bg-blue-50 rounded-full p-2"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- trend part -->
  <Trends />
</template>

<script>
export default {}
</script>

<style></style>
