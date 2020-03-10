<template>
    <div class="rHeader">
        <div class="rHeader_left">
            <img :src="user.avatar" alt />
            <div class="rHeader_text">
               <div class="text_item">
                   <p><span>姓名:</span>{{user.name}}</p>
                   <p><span>邮箱:</span>{{user.email}}</p>
                   <p><span>电话:</span>{{user.tel}}</p>
                   <p><span>毕业院校:</span>{{user.school}}</p>
                   <p><span>毕业专业:</span>{{user.major}}</p>
               </div>
                <div class="text_item">
                   <p>{{user.center}} <i>/</i></p>
                   <p><span>顾问老师:</span>{{user.counselor}} <i>/</i></p>
                   <p><span>申请老师:</span>{{user.apply}} <i>/</i></p>
                   <p><span>文书老师:</span>{{user.writ}} <i>/</i></p>
                   <p><span>顾问老师电话:</span>{{user.counselor_tel}}</p>
               </div>
            </div>
        </div>
        <div class="rHeader_right"><i></i>退出</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
                avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2205650502,1425754204&fm=26&gp=0.jpg',
                // avatar: '/images/refactor/adavar.png',
                name: '小明',
                email: '1111111@qq.com',
                tel: '18381001111',
                school: '清华大学',
                major: '计算机科学与技术',
                center: '西安分中心',
                counselor: '张老师',
                apply: '李老师',
                writ: '杨老师',
                counselor_tel: '18381007777'
            }
        }
    }
}
</script>