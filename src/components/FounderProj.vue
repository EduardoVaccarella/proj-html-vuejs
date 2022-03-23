<template>
  <div class="container-fluid">
      <div class="ms-container">
          <div class="d-flex justify-content-start flex-column">
            <h1>
                Hey there, my name is John Doe. I'm the founder of Brain Academy.
            </h1>

            <img src="../assets/img/sign.jpg" alt="">
          </div>
          

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores nihil sint a, est repudiandae sed, repellendus eos unde maiores omnis, fugit dolores. Aliquam natus in culpa eius minus, minima fuga, iusto iure hic fugit unde, nobis commodi! Enim unde fugit nemo porro sed. Harum placeat aut nesciunt, exercitationem natus cupiditate esse consequatur necessitatibus nemo. Autem consequuntur vitae suscipit dignissimos ad dolore voluptate alias quo soluta accusantium expedita numquam quidem nam culpa, sunt, eos ea.
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FounderProj'
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.ms-container {
    padding: 0px 57px;
    height: 403px;
    padding-top: 135px;
    display: flex;
    justify-content: space-between;

    img {
        width: 125px;
        margin-left: 96px;
        margin-top: 30px; 
    }

    h1 {
        width: 300px;
        font-size: 23px;
        font-weight: bold;
    }

    p {
        width: 429px;
        font-size: 13px;
        color: $abbey;
    }
}
</style>