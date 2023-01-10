<script>
export default {
  name: 'TaskList',
}
</script>

<template>
  <div>
    <div v-for="(item, index) in 10" :key="index" class="task__block">
      <div class="flex mb-3">
        <div class="task__title">title</div>
        <div class="task__price">
          <v-icon size="19" class="mr-4" color="#B2AEAE"
            >mdi-credit-card-outline</v-icon
          >
          $ price
        </div>
      </div>
      <div class="flex mb-5">
        <div class="dev__type">category</div>
        <div class="deadline">
          <v-icon size="19" color="#F49C17" class="mr-3"
            >mdi-clock-time-four-outline</v-icon
          >
          Deadline <span>time</span>
        </div>
      </div>
      <div class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        reprehenderit fugit provident corporis earum nam nihil at velit, quasi
        explicabo sequi optio, accusamus facilis voluptates beatae minus enim
        consequuntur pariatur, et dicta deleniti voluptatem! Deleniti aperiam
        delectus laboriosam sequi beatae.
      </div>
      <div class="horizontal__line"></div>
      <div class="flex">
        <div class="added">created at</div>
        <div class="bids">
          <v-btn color="#F49C17" dark large class="text-capitalize bid__button">
            Add bid
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task__block {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  margin: 33px 0px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.horizontal__line {
  opacity: 0.1;
  border: 1px solid #000000;
  margin: 30px 0px;
}
.task__title {
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #212428;
}
.task__title span {
  color: #b2aeae;
}
.task__price {
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #212428;
  display: flex;
  align-items: center;
}
.dev__type {
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #f5a623;
  background: rgba(255, 163, 24, 0.1487);
  border-radius: 5px;
  padding: 8px 20px;
}
.deadline {
  font-weight: 400;
  font-size: 14px;
  color: #ffa318;
  display: flex;
  align-items: center;
}
.deadline span {
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
}
.description {
  font-size: 15px;
  line-height: 28px;
  color: #1d293f;
}
.added {
  font-size: 13px;
  line-height: 18px;
  color: #b2aeae;
}
.bids {
  display: flex;
  align-items: center;
}
.bids__number {
  font-size: 13px;
  line-height: 18px;
  color: #b2aeae;
  margin-right: 30px;
}
.bid__button {
  border-radius: 7px;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
