<template>
  <b-list-group style="width: 250px;margin-top: 20px">
    <b-list-group-item>
      <h4>推荐作者</h4>
    </b-list-group-item>
    <b-list-group-item>
      <b-img rounded="circle" width="35" height="35"
        src="https://upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
      <span>lostdays</span>
      <br>
      <span>写了162.7k字 · 1.2k喜欢</span>
    </b-list-group-item>
    <b-list-group-item>
      <b-img rounded="circle" width="35" height="35"
        src="https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
      <span>格列柯南</span>
      <br>
      <span>写了599.6k字 · 14.7k喜欢</span>
    </b-list-group-item>
    <b-list-group-item>
      <b-img rounded="circle" width="35" height="35"
        src="https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
      <span>王诗翔</span>
      <br>
      <span>写了434.5k字 · 1.7k喜欢</span>
    </b-list-group-item>
    <b-list-group-item>
      <b-img rounded="circle" width="35" height="35"
        src="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
      <span>乔汉童</span>
      <br>
      <span>写了504.8k字 · 1.3k喜欢</span>
    </b-list-group-item>

  </b-list-group>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imageList: [
          {
            // "id": 1,
            // "url": "https://upload-images.jianshu.io/upload_images/13133049-70c61da9d5c72191.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            // "author":"爱画画的小姐姐"
          }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
