<template>
  <div class="container-fluid">
    <div class="ms-container">
        <h1>
            Why my Courses?
        </h1>

        <div class="cards-wrapper">
            <div class="ms-card" v-for="(card,i) in cards" :key="i">
                <div class="icon">
                    <font-awesome-icon :icon="card.icon" />
                </div>

                <div class="text-wrapper">
                    <h3>
                        {{ card.title }}
                    </h3>
                    <p>
                        {{ card.paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards2Proj',
  data() {
    return {
            cards: [
                {
                    icon: 'fa-solid fa-toolbox',
                    title: 'Entrepreneurship',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad culpa quas eveniet deserunt temporibus unde vero tempore aspernatur ducimus reprehenderit?'
                },
                {
                    icon: 'fa-solid fa-rocket',
                    title: 'Entrepreneurship',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad culpa quas eveniet deserunt temporibus unde vero tempore aspernatur ducimus reprehenderit?'
                },
                {
                    icon: 'fa-solid fa-thumbs-up',
                    title: 'Entrepreneurship',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad culpa quas eveniet deserunt temporibus unde vero tempore aspernatur ducimus reprehenderit?'
                },
                {
                    icon: 'fa-solid fa-gear',
                    title: 'Entrepreneurship',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad culpa quas eveniet deserunt temporibus unde vero tempore aspernatur ducimus reprehenderit?'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.ms-container {
    height: 600px;
    padding-top: 64px;
    padding-bottom: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
        text-align: center;
        color: $mineShaft;
        font-size: 34px;
        font-weight: 600;
    }

    .cards-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 800px;
        gap: 20px;
        flex-wrap: wrap;
        margin: 0 auto;

        .ms-card {
            width: 382px;
            height: 183px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            padding: 41px 26px 37px;
            gap: 21px;
            border-left: 4px solid $buttercup;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

            .icon {
                font-size: 33px;
                color: $buttercup;
                display: flex;
                justify-content: flex-start;
            }

            .text-wrapper {
                h3 {
                    color: $mineShaft;
                    font-size: 17px;
                    font-weight: 600;
                }

                p {
                    color: $abbey;
                    font-size: 12px;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>