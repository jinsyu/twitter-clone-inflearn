<template>
  <div class="flex h-screen">
    <!-- side section -->
    <div
      class="w-1/4 pt-5 ml-10 flex flex-col justify-between border-r border-gray-200"
    >
      <div class="flex flex-col items-center lg:items-start">
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-home fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
          </div>
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
          </div>
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="far fa-bell fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
          </div>
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="far fa-envelope fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
          </div>
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="far fa-bookmark fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
          </div>
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="far fa-list-alt fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
          </div>
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="far fa-user fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
          </div>
          <div
            class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full"
          >
            <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">더보기</span>
          </div>
        </div>
        <!-- tweet button -->
        <div class="w-full lg:pr-3 flex justify-center">
          <button
            class="mt-3 bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark"
          >
            <span class="hidden lg:block">트윗</span>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
      </div>
      <!-- profile button -->
      <div class="lg:pr-3 mb-3 relative">
        <button
          class="hidden lg:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center"
        >
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
          <div class="lg:ml-2 hidden lg:block">
            <div class="text-sm font-bold">jinsyu.com</div>
            <div class="text-xs text-gray-500 text-left">@jinsyu</div>
          </div>
          <i
            class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden lg:block"
          ></i>
        </button>
        <div class="lg:hidden flex justify-center">
          <img
            src="http://picsum.photos/100"
            class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex">
        <div class="flex-1 flex flex-col border-r border-gray-100 h-screen">
          <!-- title -->
          <div class="px-4 py-2 border-b border-gray-100">
            <span class="font-bold text-lg">홈</span>
          </div>
          <div class="overflow-y-auto">
            <!-- tweet section -->
            <div class="flex p-4 border-b-8 border-gray-100">
              <img
                src="http://picsum.photos/100"
                class="w-10 h-10 rounded-full"
                alt=""
              />
              <div class="flex-1">
                <textarea
                  placeholder="무슨 일이 일어나고 있나요?"
                  class="ml-3 text-lg font-bold focus:outline-none resize-none w-full"
                ></textarea>
                <div class="text-right">
                  <button
                    class="bg-primary text-white px-4 py-2 rounded-full hover:bg-dark"
                  >
                    트윗
                  </button>
                </div>
              </div>
            </div>
            <!-- tweets -->
            <div
              class="flex flex-col p-4 border-b border-gray-100 hover:bg-gray-100"
              v-for="i in 10"
              :key="i"
            >
              <div class="flex">
                <img
                  src="http://picsum.photos/100"
                  class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
                />
                <div class="flex-1 ml-2 flex flex-col space-y-1">
                  <div>
                    <span>민중의소리</span>
                    <span>@newsvop</span>
                    <span>· 11시간</span>
                  </div>
                  <div>
                    "내가 윤서인을 10~20년 꾸준히 응징하는 것은 사회봉사활동에
                    불과하다"
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <i class="far fa-comment"></i>
                      <span>11</span>
                    </div>
                    <i class="far fa-comment"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-comment"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="w-60">trends</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
