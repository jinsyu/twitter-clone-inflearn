<template>
  <div class="hidden lg:block lg:w-2/5 px-4 py-2">
    <!--tweet search  input -->
    <div class="relative mb-5">
      <input
        placeholder="트위터 검색"
        type="text"
        class="pl-10 rounded-full w-full p-2 bg-gray-100 text-sm focus:ring-1 focus:ring-primary focus:bg-white focus:outline-none"
      />
      <i class="fas fa-search absolute left-0 mt-2 ml-3 text-sm text-light"></i>
    </div>
    <!-- trend for me -->
    <div class="w-full rounded-xl bg-gray-50 flex flex-col">
      <div
        class="flex items-center justify-between px-3 py-1 border-b border-gray-100"
      >
        <span class="text-lg font-bold">나를 위한 트렌드</span>
        <i
          class="text-center fas fa-cog text-lg text-primary hover:bg-blue-50 p-2 rounded-full w-10 h-10"
        ></i>
      </div>
      <div
        class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer"
        v-for="trend in 3"
        :key="trend"
      >
        <div class="flex">
          <div class="flex-1 flex flex-col">
            <div class="text-gray-500">대한민국에서 트렌드 중</div>
            <div class="font-bold text-lg">러블리즈</div>
            <div class="text-gray-500">3,564 트윗</div>
          </div>
          <i class="fas fa-ellipsis-h text-gray-500"></i>
        </div>
      </div>
      <div class="px-4 py-2 hover:bg-gray-100">
        <span class="text-primary text-lg rounded-xl">더 보기</span>
      </div>
    </div>

    <!-- follow recommends -->
    <div class="mt-5 w-full rounded-xl bg-gray-50 flex flex-col">
      <div class="px-3 py-3 border-b border-gray-100">
        <span class="text-lg font-bold">팔로우 추천</span>
      </div>
      <div
        class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer"
        v-for="trend in 3"
        :key="trend"
      >
        <div class="flex items-center">
          <div>
            <img
              src="http://picsum.photos/200"
              class="w-12 h-12 rounded-full mr-2"
            />
          </div>
          <div class="flex-1 flex flex-col">
            <div class="font-bold text-lg">문재인</div>
            <div class="text-gray-500">@president_of_korea</div>
          </div>
          <div>
            <button
              class="border-2 border-primary hover:bg-blue-100 px-4 py-1 rounded-full text-primary"
            >
              팔로우
            </button>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 hover:bg-gray-100">
        <span class="text-primary text-lg rounded-xl">더 보기</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
