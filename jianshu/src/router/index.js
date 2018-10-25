import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: 'index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          //主页组件
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '主页'}
        },
        {
          //关注组件
          path: '/subscriptions',
          component: resolve => require(['../components/page/Subscriptions.vue'], resolve),
          meta: {title: '关注'}
        },
        {
          //消息组件
          path: '/notifications',
          component: resolve => require(['../components/page/Notifications.vue'], resolve),
          meta: {title: '消息'}
        },
        {
          //所有用户组件
          path: '/users',
          component: resolve => require(['../components/page/Users.vue'], resolve),
          meta: {title: '所有用户'}
        },
        {
          //所有专题组件
          path: '/collections',
          component: resolve => require(['../components/page/Collections.vue'], resolve),
          meta: {title: '所有专题'}
        },
        {
          //专题详情
          path: '/c/:id',
          component: resolve => require(['../components/page/Collection.vue'], resolve),
          meta: {title: '专题详情'}
        },
        {
          // 个人中心组件
          path: '/u/:id',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '个人中心'}
        },
        {
          // 文章详情组件
          path: '/p/:id',
          component: resolve => require(['../components/page/Article.vue'], resolve),
          meta: {title: '文章详情'}
        },
        {
          // 设置组件
          path: '/setting',
          component: resolve => require(['../components/page/Setting.vue'], resolve),
          meta: {title: '设置'}
        }
      ]
    },

    {
      // 写文章
      path: '/write',
      component: resolve => require(['../components/page/Write.vue'], resolve),
      meta: {title: '写文章'}
    },
    {
      // 登录
      path: '/sign_in',
      component: resolve => require(['../components/page/SignIn.vue'], resolve),
      meta: {title: '登录'}
    }
  ]
})
