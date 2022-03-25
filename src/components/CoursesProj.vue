<template>
  <div class="container-fluid">
    <div class="ms-container d-flex justify-content-center">
        <h1>
            new courses
        </h1>

        <div class="card-wrapper d-flex justify-content-center">
            <div class="card">
                <div class="img-wrapper">
                    <img src="../assets/imgCards/photo-1496307042754-b4aa456c4a2d-370x200.jpeg" alt="">
                    <div class="special">
                        SPECIAL
                    </div>
                </div>
                <div class="content-wrapper">
                    <h6>
                        {{ cards[0].text }}
                    </h6>
                    <p>
                        {{ cards[0].category }}
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
            <div class="card">
                <div class="img-wrapper">
                    <img src="../assets/img/12345-1-370x200.png" alt="">
                    <div class="special">
                        SPECIAL
                    </div>
                </div>
                <div class="content-wrapper">
                    <h6>
                        {{ cards[0].text }}
                    </h6>
                    <p>
                        {{ cards[0].category }}
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
            <div class="card">
                <div class="img-wrapper">
                    <img src="../assets/img/photo-1491897554428-130a60dd4757-370x200.jpeg" alt="">
                    <div class="special">
                        SPECIAL
                    </div>
                </div>
                <div class="content-wrapper">
                    <h6>
                        {{ cards[0].text }}
                    </h6>
                    <p>
                        {{ cards[0].category }}
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
            <div class="card">
                <div class="img-wrapper">
                    <img src="../assets/img/photo-1416339134316-0e91dc9ded92-370x200.jpeg" alt="">
                </div>
                <div class="content-wrapper">
                    <h6>
                        {{ cards[0].text }}
                    </h6>
                    <p>
                        {{ cards[0].category }}
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
            <div class="card">
                <div class="img-wrapper">
                    <img src="../assets/img/cathryn-lavery-67852-unsplash-370x200.jpg" alt="">
                </div>
                <div class="content-wrapper">
                    <h6>
                        {{ cards[0].text }}
                    </h6>
                    <p>
                        {{ cards[0].category }}
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
            <div class="card">
                <div class="img-wrapper">
                    <img src="../assets/img/photo-1475452779376-caebfb988090-370x200.jpeg" alt="">
                </div>
                <div class="content-wrapper">
                    <h6>
                        {{ cards[0].text }}
                    </h6>
                    <p>
                        {{ cards[0].category }}
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

        <div class="button">
            Load More
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
                    img: '../assets/imgCards/photo-1496307042754-b4aa456c4a2d-370x200.jpeg'
                },
                {
                    text: 'Nvidia and UE4 Technologies Practice',
                    category: 'Nvidia',
                    img: '12345-1-370x200.png'
                },
                {
                    text: 'Fashion Photography from professional',
                    category: 'Fashion',
                    img: 'photo-1491897554428-130a60dd4757-370x200.jpeg'
                },
                {
                    text: 'Design Instrument for Communication',
                    category: 'Communication',
                    img: 'photo-1416339134316-0e91dc9ded92-370x200.jpeg'
                },
                {
                    text: 'Make your Concept Right and Beautiful',
                    category: 'Art',
                    img: 'cathryn-lavery-67852-unsplash-370x200.jpg'
                },
                {
                    text: 'Read Bike Manual or How to be a Champion',
                    category: 'Bicycling',
                    img: 'photo-1475452779376-caebfb988090-370x200.jpeg'
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
        font-size: 28px;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 45px;
        text-align: center;
    }

    .card-wrapper {
        flex-wrap: wrap;
        gap: 19px;
        margin-bottom: 41px;

        .card {
            height: 303px;
            width: 251px;
        }

        .card:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
        }

        .img-wrapper {
            width: 249px;
            height: 167px;
            background-position: center;
            background-size: cover;
            border-radius: 3px;

            img {
                width: 249px;
                height: 167px;
                border-radius: 3px;
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
            cursor: pointer;
        }

        p {
            font-size: 12px;
            color: $silver;
            margin-bottom: 15px;
            cursor: pointer;
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
                margin-left: 3px;
            }
        }
    }

    .button {
        text-transform: uppercase;
        color: white;
        font-weight: 600;
        font-size: 8px;
        padding: 12px 17px;
        background-color: $buttercup;
        border-radius: 32px;
        cursor: pointer;
    }

    .special {
        background-color: $buttercup;
        padding: 6px 3px;
        font-size: 8px;
        color: white;
        font-weight: 600;
        display: inline-block;
        border-radius: 3px;
        position: relative;
        left: 202px;
        bottom: 163px;
    }
}
</style>