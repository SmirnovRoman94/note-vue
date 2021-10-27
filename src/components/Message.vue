<template>
    <div class="message">
        <p>{{ message }} </p>
    </div> 
</template>  


<script>
export default{
    props: {
        message: {
            type: String,
            required: true,
            //default: ''
        }
    }
}
</script>     

<style lang="scss" scoped>
    p{
        color: red;
        text-align: center;
        padding: 20px 0px;
    }
</style>