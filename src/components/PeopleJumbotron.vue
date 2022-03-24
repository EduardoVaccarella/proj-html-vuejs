<template>
  <div class="container-fluid">
    <div class="ms-container">
        <div class="items-wrapper">
          <div class="item" v-for="(item,i) in items" :key="i">
            <div class="icon">
              <font-awesome-icon :icon="item.icon" />
            </div>
            
            <div>
              <h1>
                {{ item.title }}
              </h1>
              <p>
                {{ item.paragraph }}
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeopleJumbotron',
  data() {
    return {
          items: [
            {
              icon: 'fa-solid fa-users',
              title: '3195',
              paragraph: 'Online Learner'
            },
            {
              icon: 'fa-solid fa-film',
              title: '23',
              paragraph: 'Video Courses'
            },
            {
              icon: 'fa-solid fa-photo-film',
              title: '437',
              paragraph: 'Sliders & Images'
            },
            {
              icon: 'fa-solid fa-thumbs-up',
              title: '1440',
              paragraph: 'Exellent Reviews'
            }
          ]
        }
    }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.container-fluid {
  background-color: #3C413B;

    .ms-container {
      background-image: url('../assets/img/counter-1919x1101.jpg');
      background-position: center 0px;
      background-size: 1464px;
      background-repeat: no-repeat;
      width: 1296px;
      height: 412px;
      display: flex;
      justify-content: center;
      align-items: center;

      .items-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 52px;
        width: 780px;

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;

          h1 {
            color: $buttercup;
            font-size: 21px;
            font-weight: 600;
            margin-bottom: 0;
          }

          p {
            color: white;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 0;
          }

          .icon {
            color: white;
            font-size: 45px;
          }
        }
      }
    }
}
</style>