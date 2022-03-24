<template>
  <div class="container-fluid">
    <div class="ms-container d-flex justify-content-center">
        <h1>
            new courses
        </h1>

        <div class="card-wrapper d-flex justify-content-center">
            <div class="card" v-for="(card,i) in cards" :key="i">
                <div class="img-wrapper">
                    <img :src="card.img" alt="img">
                </div>
                <div class="content-wrapper">
                    <h6>
                        {{ card.text }}
                    </h6>
                    <p>
                        {{ card.category }}
                    </p>
                    <div class="line">

                    </div>
                    <div class="icon-wrapper">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-signal" />
                            <span>
                                Advanced
                            </span>
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-solid fa-bars" />
                            <span>
                                8 Lectures
                            </span>
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-solid fa-clock" />
                            <span>
                                6 hours
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursesProj',
  data() {
    return {
            cards: [
                {
                    text: 'How to be a DJ? Make Electronic Music',
                    category: 'Electronic',
                    img: '../assets/img/12345-1-370x200.png'
                },
                {
                    text: 'Nvidia and UE4 Technologies Practice',
                    category: 'Nvidia',
                    img: '../assets/img/12345-1-370x200.png'
                },
                {
                    text: 'Fashion Photography from professional',
                    category: 'Fashion',
                    img: '../assets/img/12345-1-370x200.png'
                },
                {
                    text: 'Design Instrument for Communication',
                    category: 'Communication',
                    img: '../assets/img/12345-1-370x200.png'
                },
                {
                    text: 'Make your Concept Right and Beautiful',
                    category: 'Art',
                    img: '../assets/img/12345-1-370x200.png'
                },
                {
                    text: 'Read Bike Manual or How to be a Champion',
                    category: 'Bicycling',
                    img: '../assets/img/12345-1-370x200.png'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.container-fluid {
    background-color: #EDF2F5;
}

.ms-container {
    height: 894px;
    padding-top: 60px;
    padding-bottom: 64px;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 23px;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 45px;
        text-align: center;
    }

    .card-wrapper {
        flex-wrap: wrap;
        gap: 19px;

        .card {
            height: 303px;
            width: 251px;
        }

        .img-wrapper {
            width: 251px;
            height: 167px;
            background-position: center;
            background-size: cover;

            img {
                width: 250px;
                height: 167px;
            }
        }
    }

    .content-wrapper {
        text-align: center;
        padding: 14px;
        padding-top: 21px;
        padding-bottom: 10px;

        h6 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 12px;
        }

        p {
            font-size: 12px;
            color: $silver;
            margin-bottom: 15px;
        }

        .line {
            border-bottom: 1px solid $silver;
            width: 100%;
            margin-bottom: 8px;
        }

        .icon-wrapper {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            color: $buttercup;

            span {
                color: $mineShaft;
                font-size: 8px;
            }
        }
    }
}
</style>