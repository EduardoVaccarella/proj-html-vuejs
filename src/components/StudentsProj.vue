<template>
  <div class="container-fluid">
    <div class="ms-container">
        <h1>
            What Students Say
        </h1>

        <div class="caurosel">
            <div class="freccia">
                <font-awesome-icon icon="fa-solid fa-arrow-left" />
            </div>

            <div class="img-wrapper">
                <div class="img-laterale">
                    <img src="../assets/img/1-100x100.jpg" alt="">
                </div>
                <div class="img-centrale">
                    <img src="../assets/img/2-100x100.jpg" alt="">
                </div>
                <div class="img-laterale">
                    <img src="../assets/img/4-100x100.jpg" alt="">
                </div>
            </div>

            <div class="freccia">
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </div>
        </div>

        <h3>
            Paints of the Future
        </h3>

        <div class="stelle">
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
        </div>

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim corrupti quos ratione delectus rerum veritatis! Doloremque, quod temporibus veniam ab delectus aperiam debitis blanditiis reprehenderit cupiditate eius quibusdam reiciendis nihil iusto earum voluptatum a quae nulla nam repudiandae fugit esse minus quasi! Asperiores quia quam numquam vero ducimus provident eligendi.
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsProj',
  data() {
    return {

        }
    }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.ms-container {
    padding: 77px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h1 {
        color: $mineShaft;
        font-size: 34px;
        font-weight: 600;
        margin-bottom: 42px;
    }

    .caurosel, .img-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .caurosel {
        width: 417px;
        margin-bottom: 17px;
    }

    .img-wrapper {
        gap: 10px;

        img {
            border-radius: 50px;
            max-width: 100%;
        }

        .img-centrale {
            width: 68px;
        }

        .img-laterale {
            width: 48px;
        }
    }

    h3 {
        color: $mineShaft;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .stelle {
        color: $buttercup;
        font-size: 11px;
        margin-bottom: 29px;
    }

    p {
        font-size: 13px;
        color: $abbey;
        font-weight: 500;
        line-height: 24px;
        width: 508px;
    }
}
</style>