<template>
  <div class="container-fluid">
    <div class="ms-container">
        <div class="margin-top-left col-6">
            <h1>
                Start your Human <span>Revolution</span> today
            </h1>
            <p class="pt-2">
                A wonderful serenity has taken possession of my entire soul,
                like theese sweat mornings of spring which i enjoy with my whole heart.
            </p>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumbotronProj',
  data() {
    return {

        }
    }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.container-fluid {
    height: 565px;
    background-image: url('../assets/img/slide-1.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #F4F4F6;
}

.ms-container {
    height: 565px;

    .margin-top-left {
        margin-top: 150px;
        margin-left: calc(388px - 30px);
    }

    h1 {
        font-size: 43px;
        font-weight: 700;
        color: $shark;

        span {
            color: $buttercup;
        }
    }

    p {
        color: $abbey;
        font-weight: 400;
        font-size: 13px;
    }
}

</style>