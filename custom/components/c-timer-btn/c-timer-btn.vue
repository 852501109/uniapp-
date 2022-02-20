<template>
    <button class="sendSmsBtn" :class="disabled?'dissendSmsBtn':''" type="button" v-on:click="run" :disabled="disabled || time > 0">{{ text }}</button>
</template>


<script>
export default{
    props: {
        second: {
            type: Number,
            default: 60
        },
        cellPhone: {
            type: null,
            default: ''
        },
        smsType: {
            type: null,
            default: ''
        }
    },
    data() {
     return {
        time: 0,
        disabled:false
     }
    },
    methods: {
        run: function () {
         this.$emit('run');
        },
        start: function(){
         this.getCode()
        },
        setDisabled: function(val){
         this.disabled = val;
        },
        getCode(){
            this.time = this.second;
            this.timer();
        },
        timer: function () {
            if (this.time > 0) {
                this.time--;
                setTimeout(this.timer, 1000);
            }else{
                this.disabled = false;
            }
        }
        
    },
    computed: {
        text: function () {
            return this.time > 0 ? this.time + 's 后重获取' : '发送验证码';
        }
    }
}
</script>

<style lang="scss" scoped>
    .sendSmsBtn{
        position: absolute;
        top: -15rpx;
        right: 7rpx;
        height: 60rpx;
        line-height: 60rpx;
        border-radius: 6rpx;
		font-size: 13rpx;
        border: 1rpx solid #000000;
        padding: 0 6rpx;
        color: #444;
        display: inline-block;
        width: 198rpx;
        background: #fff;
    }
   
</style>

