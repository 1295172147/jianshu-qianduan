<template>
  <b-row>
    <b-col cols="4">
      <b-list-group style="width: 250px">
        <b-list-group-item>
          <b-img src="../../static/img/message.png"/>
          <span>评论</span>
        </b-list-group-item>
        <b-list-group-item>
          <b-img src="../../static/img/news.png"/>
          <span>简信</span>
        </b-list-group-item>
        <b-list-group-item>
          <b-img src="../../static/img/upload.png"/>
          <span>投稿请求</span>
        </b-list-group-item>
        <b-list-group-item>
          <b-img src="../../static/img/like.png"/>
          <span>喜欢和赞</span>
        </b-list-group-item>
        <b-list-group-item>
          <b-img src="../../static/img/concern.png"/>
          <span>关注</span>
        </b-list-group-item>
        <b-list-group-item>
          <b-img src="../../static/img/money.png"/>
          <span>赞赏和付费</span>
        </b-list-group-item>
        <b-list-group-item>
          <b-img src="../../static/img/omit.png"/>
          <span>其他提醒</span>
        </b-list-group-item>

      </b-list-group>
    </b-col>
    <b-col>
      <h4>收到的评论</h4>
      <b-img src="https://cdn2.jianshu.io/assets/web/icon_nocontent-00c423de394b9184d467f2f2a7284b54.png">
      </b-img>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: "Notifications"
  }
</script>

<style scoped>

</style>
