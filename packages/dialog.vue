<template>
    <transition name="ared-dialog_fade" >
        <!-- 对话框遮罩 .self 表示只有触发自身函数才会生效 事件不是从内部函数触发的-->
        <div class="ared-dialog_wrapper" @click.self="close" v-show="visible">
            <div class="ared_dialog" :style="{width,marginTop}" >
                <div class="ared_dialog_header">
                    <slot name="title">
                        <span class="ared_dialog_title">{{title}}</span>
                    </slot>
                    <button class="ared_dialog_headerbtn" @click="close">
                        <i class="ared_dialog_close">×</i>
                    </button>
                </div>
                <div class="ared_dialog_content">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <!-- $slots获取到所有的插槽 -->
                <div class="ared_dialog_footer" v-if="$slots.footer">
                    <slot name="footer">
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name:'AredDialog',
    props: {
        title: {
            type: String,
            default:'提示'
        },
        width: {
            type:String,
            default:'30%'
        },
        marginTop: {
            type: String,
            default:'15vh'
        },
        visible: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        close() {
            this.$emit('update:visible',false);
        }
    }
}

</script>
<style lang='scss' scoped>
.ared-dialog_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background-color:rgba(0,0,0,0.5);
    .ared_dialog {
        position: relative;
        width: 50%;
        margin: 15vh auto 50px;
        background-color: #fff;
        box-shadow:1px 1px 5px #ccc;
        border-radius: 4px;
        overflow: hidden;
        &_header {
            padding: 15px 10px;
            .ared_dialog_title{
                font-size: 20px;
            }
            .ared_dialog_headerbtn {
                position: absolute;
                top: 0px;
                right: 0px;
                background-color: transparent;
                font-size: 20px;
                outline:none;
                border: none;
                cursor: pointer;
                transition: 0.1s;
                &:hover {
                    background-color: #a61b29;
                }
            }
        }
        &_content {
            padding: 0 10px 20px 10px;
            font-size: 12px;
        }
        &_footer {
            padding: 0 10px 20px 10px;
            text-align: right;
            // => 使用深度选择器进行样式穿透
            ::v-deep .ared-button:first-child {
                margin-right: 10px;
            }
        }
    }
}
.ared-dialog_fade-enter-active {
    animation: fade 0.5s;
}
.ared-dialog_fade-leave-active {
    animation: fade 0.5s reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity:1;
        transform: translateY(0px);
    }
}
</style>