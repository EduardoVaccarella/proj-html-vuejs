<template>
  <div class="container-fluid">
    <div class="ms-container">
        <div class="text-wrapper">
            <h1>
                Get My Exclusive Investing Book for just $19.50
            </h1>
            <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum quos dolorem tempore voluptate eum?
            </h3>
            <div>
                <img src="../assets/img/amazon.png" alt="">
            </div>
        </div>

        <img class="img-wrapper" src="../assets/img/book.png" alt="">

        <div class="tool-bar">
            <div class="icon" v-for="(icon,i) in icons" :key="i">
                <font-awesome-icon :icon="icon" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmazonSectionProj',
  data() {
      return {
          icons: [
              'fa-solid fa-desktop',
              'fa-solid fa-circle',
              'fa-solid fa-wrench',
              'fa-solid fa-cart-arrow-down',
              'fa-solid fa-mobile'
          ]
      }
  }

}
</script>

<style scoped lang="scss">
@import '../app.scss';

.container-fluid {
    background-color: #2E2F34;
    height: 408px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../assets/img/slider_1-1917x607-1914x606.jpg');

    .ms-container {
        height: 408px;
        padding-top: 84px;
        padding-bottom: 79px;
        padding-right: 57px;
        display: flex;
        justify-content: flex-start;

        .text-wrapper {
            text-align: center;
            width: 50%;
            
            h1 {
                color: $buttercup;
                font-size: 29px;
                font-weight: 600;
                margin-bottom: 28px;
            }

            h3 {
                color: white;
                font-size: 20px;
                font-weight: 400;
                margin-bottom: 30px;
                font-style: italic;
            }
            
            img {
                width: 155px;
            }
        }

        .img-wrapper {
            width: 374px;
            height: 374px;
            transform: translateY(-50px);
        }

        .tool-bar {
            position: relative;
            left: 258px;
            background-color: white;
            width: 42px;
            height: 191px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
        }
    }
}
</style>