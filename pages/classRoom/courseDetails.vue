<template>
	<view>
		<c-course-list v-for="(i , n) in objs" v-bind:obj="i"  :key="n"></c-course-list>
	</view>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { Request } from '@/utils';
  import api from '@/config/api';
	export default {
    computed:{
      ...mapGetters(['userInfo', 'token']),
    },
		data() {
			return {
        courseId: '',
				objs: []
			};
		},
    onLoad (obj) {
      this.courseId = obj.id
      this.getDetailList()
    },
    methods: {
      getDetailList () {
        Request(
          api.videoDetail, {
            //请求类型 get||post
            method: 'post',
            //传参
            data: {
              token: this.token,
              courseId: this.courseId
            },
            //是否显示加载
            showLoading: false,
          })
        .then(res => {
          this.objs.push(res.data)
        })
      }
    }
	}
</script>

<style lang="scss">

</style>
